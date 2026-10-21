<template>
  <div class="space-y-16 sm:space-y-24">
    <!-- En-tête -->
    <header class="pt-4 sm:pt-8 max-w-4xl">
      <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
        {{ t('contact_page.badge') }}
      </div>
      <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
        {{ t('contact_page.title') }}
      </h1>
      <p class="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
        {{ t('contact_page.subtitle') }}
      </p>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      <!-- Coordonnées & Réseaux (5 colonnes) -->
      <div class="lg:col-span-5 space-y-6">
        <div class="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-5 shadow-xs">
          <h2 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 pb-3 border-b border-slate-200/80 dark:border-white/[0.08]">
            <i class="fa-solid fa-address-card text-blue-500 text-sm"></i>
            <span>{{ t('contact_page.direct_title') }}</span>
          </h2>

          <!-- Email avec bouton Copier -->
          <div class="space-y-1.5">
            <span class="text-xs text-slate-500 font-medium">{{ t('contact_page.email_label') }}</span>
            <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/[0.08]">
              <a
                href="mailto:contact@matteoriviere.fr"
                class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 truncate"
              >
                contact@matteoriviere.fr
              </a>
              <button
                type="button"
                @click="copyText('contact@matteoriviere.fr', 'email')"
                class="shrink-0 ml-2 px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-blue-600 border border-slate-200 dark:border-white/[0.08] transition-all shadow-xs"
                :title="copiedState === 'email' ? t('contact_page.copied') : t('contact_page.copy')"
              >
                <i :class="copiedState === 'email' ? 'fa-solid fa-check text-emerald-500' : 'fa-regular fa-copy'"></i>
                <span class="ml-1 text-[11px]">{{ copiedState === 'email' ? t('contact_page.copied') : t('contact_page.copy') }}</span>
              </button>
            </div>
          </div>

          <!-- Téléphone avec bouton Copier -->
          <div class="space-y-1.5">
            <span class="text-xs text-slate-500 font-medium">{{ t('contact_page.phone_label') }}</span>
            <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/[0.08]">
              <a
                href="tel:0778131690"
                class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                07 78 13 16 90
              </a>
              <button
                type="button"
                @click="copyText('0778131690', 'phone')"
                class="shrink-0 ml-2 px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-blue-600 border border-slate-200 dark:border-white/[0.08] transition-all shadow-xs"
                :title="copiedState === 'phone' ? t('contact_page.copied') : t('contact_page.copy')"
              >
                <i :class="copiedState === 'phone' ? 'fa-solid fa-check text-emerald-500' : 'fa-regular fa-copy'"></i>
                <span class="ml-1 text-[11px]">{{ copiedState === 'phone' ? t('contact_page.copied') : t('contact_page.copy') }}</span>
              </button>
            </div>
          </div>

          <!-- Réseaux professionnels -->
          <div class="space-y-2 pt-2 border-t border-slate-200/80 dark:border-white/[0.08]">
            <span class="text-xs text-slate-500 font-medium">{{ t('contact_page.social_label') }}</span>
            <div class="grid grid-cols-2 gap-2 pt-1">
              <a
                href="https://www.linkedin.com/in/matteo-rivière-8664b8356"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-50/90 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-blue-500/10 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200/80 dark:border-white/[0.08] text-xs font-bold transition-all"
              >
                <i class="fa-brands fa-linkedin text-sm"></i>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/Scorpion-g"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-50/90 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-white/[0.08] text-xs font-bold transition-all"
              >
                <i class="fa-brands fa-github text-sm"></i>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Disponibilité stage -->
        <div class="p-6 rounded-3xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-4 shadow-xs">
          <h3 class="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
            <i class="fa-solid fa-briefcase text-emerald-500"></i>
            <span>{{ t('contact_page.avail_title') }}</span>
          </h3>

          <div class="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
            <div class="flex items-center justify-between p-2.5 rounded-lg bg-slate-50/90 dark:bg-slate-800/40">
              <span class="text-slate-500">{{ t('contact_page.avail_duration_label') }}</span>
              <strong class="text-slate-900 dark:text-white">{{ t('contact_page.avail_duration_val') }}</strong>
            </div>
            <div class="p-2.5 rounded-lg bg-slate-50/90 dark:bg-slate-800/40 space-y-1">
              <span class="text-slate-500 block font-medium">{{ t('contact_page.avail_dates_label') }}</span>
              <div class="font-mono text-[11px] text-slate-900 dark:text-slate-200 space-y-0.5">
                <div>• <strong>{{ t('contact_page.avail_dates_p1') }}</strong></div>
                <div>• <strong>{{ t('contact_page.avail_dates_p2') }}</strong></div>
              </div>
            </div>
            <div class="flex items-center justify-between p-2.5 rounded-lg bg-slate-50/90 dark:bg-slate-800/40">
              <span class="text-slate-500">{{ t('contact_page.avail_location_label') }}</span>
              <strong class="text-slate-900 dark:text-white">{{ t('contact_page.avail_location_val') }}</strong>
            </div>
            <div class="flex items-center justify-between p-2.5 rounded-lg bg-slate-50/90 dark:bg-slate-800/40">
              <span class="text-slate-500">{{ t('contact_page.avail_delay_label') }}</span>
              <strong class="text-emerald-600 dark:text-emerald-400">{{ t('contact_page.avail_delay_val') }}</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- Formulaire de contact rapide (7 colonnes) -->
      <div class="lg:col-span-7">
        <div class="p-6 sm:p-10 rounded-3xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-6 shadow-xs">
          <div>
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-1">
              {{ t('contact_page.form_title') }}
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {{ t('contact_page.form_desc') }}
            </p>
          </div>

          <!-- Notification Succès -->
          <div
            v-if="submitSuccess"
            class="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 space-y-3 animate-fade-in"
          >
            <div class="flex items-start gap-3">
              <i class="fa-solid fa-circle-check text-xl text-emerald-500 mt-0.5 shrink-0"></i>
              <div>
                <h3 class="font-bold text-sm">{{ t('contact_page.success_title') }}</h3>
                <p class="text-xs text-emerald-700/90 dark:text-emerald-400 mt-0.5">
                  {{ t('contact_page.success_desc') }}
                </p>
              </div>
            </div>
            <button
              type="button"
              @click="submitSuccess = false"
              class="text-xs font-semibold underline hover:no-underline text-emerald-600 dark:text-emerald-400"
            >
              {{ t('contact_page.send_another') }}
            </button>
          </div>

          <!-- Notification Erreur / Fallback -->
          <div
            v-if="submitError"
            class="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-800 dark:text-rose-300 text-xs flex items-start gap-3"
          >
            <i class="fa-solid fa-triangle-exclamation text-base text-rose-500 mt-0.5 shrink-0"></i>
            <div class="space-y-1.5 flex-1">
              <p>{{ submitError }}</p>
              <button
                type="button"
                @click="openMailtoFallback"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-600 text-white font-semibold text-xs hover:bg-rose-700 transition-colors"
              >
                <i class="fa-solid fa-envelope text-[11px]"></i>
                <span>{{ t('contact_page.error_fallback') }}</span>
              </button>
            </div>
          </div>

          <form v-if="!submitSuccess" @submit.prevent="handleSubmit" class="space-y-4">
            <!-- Honeypot anti-spam caché -->
            <input type="text" name="_honey" v-model="honeypot" style="display:none" tabindex="-1" autocomplete="off" />

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {{ t('contact_page.name_label') }} <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  :placeholder="t('contact_page.name_placeholder')"
                  class="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200 dark:border-white/[0.08] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800 dark:text-slate-100 placeholder-slate-400 outline-none transition-all"
                />
              </div>

              <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {{ t('contact_page.email_label') }} <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  :placeholder="t('contact_page.email_placeholder')"
                  class="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200 dark:border-white/[0.08] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800 dark:text-slate-100 placeholder-slate-400 outline-none transition-all"
                />
              </div>
            </div>

            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                {{ t('contact_page.subject_label') }} <span class="text-red-500">*</span>
              </label>
              <input
                v-model="form.subject"
                type="text"
                required
                :placeholder="t('contact_page.subject_placeholder')"
                class="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200 dark:border-white/[0.08] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800 dark:text-slate-100 placeholder-slate-400 outline-none transition-all"
              />
            </div>

            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                {{ t('contact_page.message_label') }} <span class="text-red-500">*</span>
              </label>
              <textarea
                v-model="form.message"
                rows="5"
                required
                :placeholder="t('contact_page.message_placeholder')"
                class="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200 dark:border-white/[0.08] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800 dark:text-slate-100 placeholder-slate-400 outline-none transition-all resize-y"
              ></textarea>
            </div>

            <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <i v-if="isSubmitting" class="fa-solid fa-spinner fa-spin text-xs"></i>
                <i v-else class="fa-solid fa-paper-plane text-xs"></i>
                <span>{{ isSubmitting ? t('contact_page.sending_btn') : t('contact_page.send_btn') }}</span>
              </button>

              <button
                type="button"
                @click="openMailtoFallback"
                class="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 underline py-2 text-center"
              >
                {{ t('contact_page.mailto_btn') }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- QUESTIONS FRÉQUENTES / FAQ RECRUTEURS -->
    <section class="border-t border-slate-200/80 dark:border-white/[0.08] pt-12 sm:pt-16 space-y-8">
      <div class="max-w-3xl">
        <div class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
          <span>{{ t('contact_page.faq_badge') }}</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {{ t('contact_page.faq_title') }}
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-sm">
        <div class="p-5 rounded-2xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-2">
          <strong class="text-slate-900 dark:text-white block font-bold text-base">{{ t('contact_page.faq1_title') }}</strong>
          <p class="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
            {{ t('contact_page.faq1_desc') }}
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-2">
          <strong class="text-slate-900 dark:text-white block font-bold text-base">{{ t('contact_page.faq2_title') }}</strong>
          <p class="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
            {{ t('contact_page.faq2_desc') }}
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-2">
          <strong class="text-slate-900 dark:text-white block font-bold text-base">{{ t('contact_page.faq3_title') }}</strong>
          <p class="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
            {{ t('contact_page.faq3_desc') }}
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-2">
          <strong class="text-slate-900 dark:text-white block font-bold text-base">{{ t('contact_page.faq4_title') }}</strong>
          <p class="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
            {{ t('contact_page.faq4_desc') }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t, isEn } = useI18n()

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const honeypot = ref('')
const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')
const copiedState = ref('')

const copyText = async (text, key) => {
  try {
    await navigator.clipboard.writeText(text)
    copiedState.value = key
    setTimeout(() => {
      copiedState.value = ''
    }, 2000)
  } catch (err) {
    console.error('Erreur de copie', err)
  }
}

const openMailtoFallback = () => {
  const subject = encodeURIComponent(form.subject || (isEn.value ? 'Internship inquiry / Web' : 'Prise de contact / Stage'))
  const body = encodeURIComponent(
    `Bonjour Mattéo,\n\n${form.message || ''}\n\nCordialement,\n${form.name || ''}\n${form.email || ''}`
  )
  window.location.href = `mailto:contact@matteoriviere.fr?subject=${subject}&body=${body}`
}

const handleSubmit = async () => {
  if (honeypot.value) {
    // Robot spam détecté silencieusement
    submitSuccess.value = true
    return
  }

  isSubmitting.value = true
  submitError.value = ''

  try {
    const response = await fetch('https://formsubmit.co/ajax/contact@matteoriviere.fr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        _subject: `[Portfolio] ${form.subject}`,
        message: form.message
      })
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }

    const data = await response.json()
    if (data.success === 'true' || data.success === true || response.status === 200) {
      submitSuccess.value = true
      form.name = ''
      form.email = ''
      form.subject = ''
      form.message = ''
    } else {
      throw new Error(data.message || 'Erreur lors de la transmission')
    }
  } catch (err) {
    console.warn('Erreur envoi AJAX FormSubmit:', err)
    submitError.value = isEn.value
      ? 'An error occurred during direct transmission. You can use your email client directly below:'
      : "Une erreur est survenue lors de l'envoi direct. Vous pouvez ouvrir votre logiciel de messagerie ci-dessous :"
  } finally {
    isSubmitting.value = false
  }
}
</script>
