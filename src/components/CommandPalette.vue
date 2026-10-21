<template>
  <div>
    <!-- Toast de confirmation (ex: email copié) -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-2 opacity-0"
    >
      <div
        v-if="toastMessage"
        class="fixed bottom-6 right-6 z-[110] px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold shadow-xl flex items-center gap-2"
      >
        <i class="fa-solid fa-check text-emerald-400 dark:text-emerald-600"></i>
        <span>{{ toastMessage }}</span>
      </div>
    </transition>

    <!-- Modal Command Palette -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 dark:bg-black/70 backdrop-blur-md"
        @click.self="close"
      >
        <div
          class="w-full max-w-xl rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-white/[0.1] shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in"
          role="dialog"
          aria-modal="true"
          :aria-label="isEn ? 'Quick search and commands' : 'Recherche rapide et commandes'"
        >
          <!-- Barre de saisie -->
          <div class="relative flex items-center px-4 border-b border-slate-200 dark:border-white/[0.08]">
            <i class="fa-solid fa-magnifying-glass text-slate-400 text-sm mr-3"></i>
            <input
              ref="searchInput"
              v-model="query"
              type="text"
              :placeholder="t('palette.placeholder')"
              class="w-full py-4 text-sm bg-transparent text-slate-900 dark:text-white placeholder-slate-400 outline-none"
              @keydown.down.prevent="navigateResults(1)"
              @keydown.up.prevent="navigateResults(-1)"
              @keydown.enter.prevent="selectCurrent"
              @keydown.esc.prevent="close"
            />
            <span class="text-[10px] font-mono font-semibold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-white/[0.08]">
              {{ t('palette.esc') }}
            </span>
          </div>

          <!-- Liste des résultats -->
          <div class="overflow-y-auto p-2 divide-y divide-slate-100 dark:divide-white/[0.04]">
            <div
              v-for="group in filteredGroups"
              :key="group.title"
              class="py-2 first:pt-0 last:pb-0"
            >
              <div class="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {{ group.title }}
              </div>

              <div class="space-y-0.5">
                <button
                  v-for="item in group.items"
                  :key="item.id"
                  type="button"
                  @click="runAction(item)"
                  @mouseenter="selectedIndex = item.flatIndex"
                  class="w-full px-3 py-2.5 rounded-xl text-left text-xs sm:text-sm flex items-center justify-between transition-colors"
                  :class="[
                    selectedIndex === item.flatIndex
                      ? 'bg-blue-600 text-white font-medium shadow-xs'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  ]"
                >
                  <div class="flex items-center gap-3 truncate">
                    <div
                      class="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      :class="[
                        selectedIndex === item.flatIndex
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                      ]"
                    >
                      <i :class="item.icon" class="text-xs"></i>
                    </div>
                    <div class="truncate">
                      <div class="truncate">{{ item.label }}</div>
                      <div
                        v-if="item.subtitle"
                        class="text-[11px] truncate opacity-80"
                        :class="selectedIndex === item.flatIndex ? 'text-white/80' : 'text-slate-400 dark:text-slate-500'"
                      >
                        {{ item.subtitle }}
                      </div>
                    </div>
                  </div>

                  <span
                    v-if="item.badge"
                    class="text-[10px] font-mono font-medium px-2 py-0.5 rounded shrink-0 ml-2"
                    :class="[
                      selectedIndex === item.flatIndex
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    ]"
                  >
                    {{ item.badge }}
                  </span>
                </button>
              </div>
            </div>

            <div
              v-if="flatItems.length === 0"
              class="py-12 text-center text-sm text-slate-500 dark:text-slate-400"
            >
              <i class="fa-solid fa-inbox text-2xl mb-2 opacity-50 block"></i>
              {{ t('palette.no_result') }} « {{ query }} »
            </div>
          </div>

          <!-- Raccourcis en bas -->
          <div class="p-3 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
            <div class="flex items-center gap-3">
              <span><kbd class="font-mono bg-white dark:bg-slate-800 border px-1.5 py-0.5 rounded shadow-xs">↑</kbd> <kbd class="font-mono bg-white dark:bg-slate-800 border px-1.5 py-0.5 rounded shadow-xs">↓</kbd> {{ t('palette.nav_hint') }}</span>
              <span><kbd class="font-mono bg-white dark:bg-slate-800 border px-1.5 py-0.5 rounded shadow-xs">{{ isEn ? 'Enter' : 'Entrée' }}</kbd> {{ t('palette.open_hint') }}</span>
            </div>
            <span class="hidden sm:inline">Portfolio Mattéo Rivière</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from '../composables/useI18n'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'toggle-theme'])

const { t, isEn } = useI18n()
const router = useRouter()
const searchInput = ref(null)
const query = ref('')
const selectedIndex = ref(0)
const toastMessage = ref('')

const isOpen = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const close = () => {
  isOpen.value = false
  query.value = ''
}

const showToast = (msg) => {
  toastMessage.value = msg
  setTimeout(() => {
    toastMessage.value = ''
  }, 2500)
}

const copyToClipboard = async (text, label) => {
  try {
    await navigator.clipboard.writeText(text)
    showToast(`${label} ${t('palette.toast_copied')}`)
  } catch (err) {
    console.error('Erreur de copie', err)
  }
}

// Groupes d'actions dynamiques réactifs à la langue
const rawGroups = computed(() => [
  {
    title: t('palette.group_nav'),
    items: [
      { id: 'home', label: t('nav.home'), subtitle: isEn.value ? 'Presentation & core skills' : 'Présentation & compétences clés', icon: 'fa-solid fa-house', action: () => router.push('/') },
      { id: 'projects', label: t('nav.projects'), subtitle: 'AéroStat, OSPI Tests, Sukaijo, Sparcky...', icon: 'fa-solid fa-laptop-code', action: () => router.push('/projets') },
      { id: 'scolarite', label: t('nav.education'), subtitle: isEn.value ? 'B.S. in Computer Science & High School' : 'BUT Informatique & Bac Général', icon: 'fa-solid fa-graduation-cap', action: () => router.push('/scolarite') },
      { id: 'stage', label: t('nav.internship'), subtitle: isEn.value ? '18 weeks (Feb - Aug 2027)' : '18 semaines (Fév - Août 2027)', icon: 'fa-solid fa-calendar-check', badge: isEn.value ? '18 w.' : '18 sem.', action: () => router.push('/stage') },
      { id: 'activite', label: t('nav.activities'), subtitle: isEn.value ? 'Boxing, Linux & Vim, Feel-Good Music' : 'Boxe anglaise, Linux & Vim, Musique Feel-Good', icon: 'fa-solid fa-bolt', action: () => router.push('/activite') },
      { id: 'contact', label: t('nav.contact'), subtitle: isEn.value ? 'Direct form & contact details' : 'Formulaire direct & coordonnées', icon: 'fa-solid fa-envelope', action: () => router.push('/contact') },
      { id: 'cv', label: t('nav.cv'), subtitle: isEn.value ? 'Interactive Resume & printable PDF' : 'CV Interactif & PDF imprimable', icon: 'fa-regular fa-file-lines', badge: 'PDF', action: () => router.push('/cv') },
      { id: 'lettre', label: isEn.value ? 'Cover Letter' : 'Lettre de Motivation', subtitle: isEn.value ? '1-page letter for 3rd year internship' : 'Format 1 page pour stage de 3e année', icon: 'fa-solid fa-file-pen', badge: 'PDF', action: () => router.push('/lettre') }
    ]
  },
  {
    title: t('palette.group_projects'),
    items: [
      { id: 'p-aerostat', label: 'AéroStat', subtitle: isEn.value ? 'Real-time GPS tracking & AROME weather' : 'Guidage GPS temps réel (2s) & météo AROME', icon: 'fa-solid fa-location-arrow', action: () => router.push('/projets/aerostat') },
      { id: 'p-playwright', label: 'OSPI Cloud Tests E2E', subtitle: isEn.value ? 'Playwright automated tests & GitLab CI' : 'Tests automatisés Playwright & GitLab CI', icon: 'fa-solid fa-vial-circle-check', action: () => router.push('/projets/ospi-cloud-e2e') },
      { id: 'p-sukaijo', label: 'Sukaijo', subtitle: isEn.value ? 'Skyjo desktop card game in C# / .NET MAUI' : 'Jeu Skyjo en C# / .NET MAUI et XAML', icon: 'fa-solid fa-gamepad', action: () => router.push('/projets/sukaijo') },
      { id: 'p-sparcky', label: 'Sparcky', subtitle: isEn.value ? 'Multifunction Discord Bot & Node.js' : 'Bot Discord multifonctions & Node.js', icon: 'fa-brands fa-discord', action: () => router.push('/projets/sparcky') }
    ]
  },
  {
    title: t('palette.group_actions'),
    items: [
      { id: 'theme', label: t('palette.action_theme'), subtitle: t('palette.action_theme_sub'), icon: 'fa-solid fa-circle-half-stroke', action: () => emit('toggle-theme') },
      { id: 'copy-email', label: t('palette.action_email'), subtitle: 'contact@matteoriviere.fr', icon: 'fa-solid fa-copy', action: () => copyToClipboard('contact@matteoriviere.fr', 'Email') },
      { id: 'copy-phone', label: t('palette.action_phone'), subtitle: '07 78 13 16 90', icon: 'fa-solid fa-phone', action: () => copyToClipboard('0778131690', isEn.value ? 'Phone number' : 'Téléphone') },
      { id: 'open-linkedin', label: t('palette.action_linkedin'), subtitle: 'in/matteo-rivière-8664b8356', icon: 'fa-brands fa-linkedin', action: () => window.open('https://www.linkedin.com/in/matteo-rivière-8664b8356', '_blank') },
      { id: 'open-github', label: t('palette.action_github'), subtitle: 'github.com/Scorpion-g', icon: 'fa-brands fa-github', action: () => window.open('https://github.com/Scorpion-g', '_blank') }
    ]
  }
])

// Filtrage
const filteredGroups = computed(() => {
  const q = query.value.trim().toLowerCase()
  let counter = 0

  return rawGroups.value
    .map(group => {
      const filtered = group.items.filter(item => {
        if (!q) return true
        return (
          item.label.toLowerCase().includes(q) ||
          (item.subtitle && item.subtitle.toLowerCase().includes(q))
        )
      })

      const itemsWithIndex = filtered.map(item => ({
        ...item,
        flatIndex: counter++
      }))

      return {
        title: group.title,
        items: itemsWithIndex
      }
    })
    .filter(group => group.items.length > 0)
})

const flatItems = computed(() => {
  return filteredGroups.value.flatMap(g => g.items)
})

watch(query, () => {
  selectedIndex.value = 0
})

watch(isOpen, async (val) => {
  if (val) {
    selectedIndex.value = 0
    await nextTick()
    searchInput.value?.focus()
  }
})

const navigateResults = (direction) => {
  const count = flatItems.value.length
  if (count === 0) return
  selectedIndex.value = (selectedIndex.value + direction + count) % count
}

const selectCurrent = () => {
  const item = flatItems.value[selectedIndex.value]
  if (item) {
    runAction(item)
  }
}

const runAction = (item) => {
  close()
  if (item.action) {
    item.action()
  }
}

// Raccourci clavier global Ctrl+K / Cmd+K
const handleKeydown = (e) => {
  if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
    e.preventDefault()
    isOpen.value = !isOpen.value
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
kbd {
  font-family: inherit;
}
</style>
