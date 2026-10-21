<template>
  <div class="space-y-16 sm:space-y-24">
    <!-- En-tête -->
    <header class="pt-4 sm:pt-8 max-w-4xl">
      <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
        Contact Direct
      </div>
      <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
        Discutons de votre projet
      </h1>
      <p class="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
        Une proposition de stage de 18 semaines, une question sur mes projets ou simplement envie d'échanger autour du dev web ? Vous pouvez me contacter directement ou utiliser le formulaire ci-dessous.
      </p>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      <!-- Coordonnées & Réseaux (5 colonnes) -->
      <div class="lg:col-span-5 space-y-6">
        <div class="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-5 shadow-xs">
          <h2 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 pb-3 border-b border-slate-200/80 dark:border-white/[0.08]">
            <i class="fa-solid fa-address-card text-blue-500 text-sm"></i>
            <span>Coordonnées directes</span>
          </h2>

          <!-- Email avec bouton Copier -->
          <div class="space-y-1.5">
            <span class="text-xs text-slate-500 font-medium">Adresse email</span>
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
                :title="copiedState === 'email' ? 'Copié !' : 'Copier l\'email'"
              >
                <i :class="copiedState === 'email' ? 'fa-solid fa-check text-emerald-500' : 'fa-regular fa-copy'"></i>
                <span class="ml-1 text-[11px]">{{ copiedState === 'email' ? 'Copié !' : 'Copier' }}</span>
              </button>
            </div>
          </div>

          <!-- Téléphone avec bouton Copier -->
          <div class="space-y-1.5">
            <span class="text-xs text-slate-500 font-medium">Téléphone portable</span>
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
                :title="copiedState === 'phone' ? 'Copié !' : 'Copier le numéro'"
              >
                <i :class="copiedState === 'phone' ? 'fa-solid fa-check text-emerald-500' : 'fa-regular fa-copy'"></i>
                <span class="ml-1 text-[11px]">{{ copiedState === 'phone' ? 'Copié !' : 'Copier' }}</span>
              </button>
            </div>
          </div>

          <!-- Réseaux professionnels -->
          <div class="space-y-2 pt-2 border-t border-slate-200/80 dark:border-white/[0.08]">
            <span class="text-xs text-slate-500 font-medium">Profils professionnels</span>
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
            <span>Disponibilité & Modalités</span>
          </h3>

          <div class="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
            <div class="flex items-center justify-between p-2.5 rounded-lg bg-slate-50/90 dark:bg-slate-800/40">
              <span class="text-slate-500">Durée du stage :</span>
              <strong class="text-slate-900 dark:text-white">18 semaines au total</strong>
            </div>
            <div class="p-2.5 rounded-lg bg-slate-50/90 dark:bg-slate-800/40 space-y-1">
              <span class="text-slate-500 block font-medium">Dates officielles :</span>
              <div class="font-mono text-[11px] text-slate-900 dark:text-slate-200 space-y-0.5">
                <div>• Du <strong>15/02/2027</strong> au <strong>07/05/2027</strong></div>
                <div>• Du <strong>28/06/2027</strong> au <strong>15/08/2027</strong></div>
              </div>
            </div>
            <div class="flex items-center justify-between p-2.5 rounded-lg bg-slate-50/90 dark:bg-slate-800/40">
              <span class="text-slate-500">Localisation :</span>
              <strong class="text-slate-900 dark:text-white">Clermont / Aubière / Lyon / Hybride</strong>
            </div>
            <div class="flex items-center justify-between p-2.5 rounded-lg bg-slate-50/90 dark:bg-slate-800/40">
              <span class="text-slate-500">Délai de réponse :</span>
              <strong class="text-emerald-600 dark:text-emerald-400">Moins de 24h</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- Formulaire de contact rapide (7 colonnes) -->
      <div class="lg:col-span-7">
        <div class="p-6 sm:p-10 rounded-3xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-6 shadow-xs">
          <div>
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-1">
              Envoyer un message
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Remplissez ces quelques champs pour m'envoyer un email directement.
            </p>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Votre nom ou entreprise <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Ex: Sophie Martin"
                  class="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200 dark:border-white/[0.08] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800 dark:text-slate-100 placeholder-slate-400 outline-none transition-all"
                />
              </div>

              <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Votre adresse email <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="sophie.martin@entreprise.com"
                  class="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200 dark:border-white/[0.08] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800 dark:text-slate-100 placeholder-slate-400 outline-none transition-all"
                />
              </div>
            </div>

            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                Sujet <span class="text-red-500">*</span>
              </label>
              <input
                v-model="form.subject"
                type="text"
                required
                placeholder="Proposition de stage web (18 semaines), question..."
                class="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200 dark:border-white/[0.08] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800 dark:text-slate-100 placeholder-slate-400 outline-none transition-all"
              />
            </div>

            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                Message <span class="text-red-500">*</span>
              </label>
              <textarea
                v-model="form.message"
                rows="5"
                required
                placeholder="Décrivez votre projet, la mission de stage ou ce dont vous avez besoin..."
                class="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200 dark:border-white/[0.08] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800 dark:text-slate-100 placeholder-slate-400 outline-none transition-all resize-y"
              ></textarea>
            </div>

            <div class="pt-2">
              <button
                type="submit"
                class="btn-primary w-full sm:w-auto"
              >
                <i class="fa-solid fa-paper-plane text-xs"></i>
                <span>Ouvrir mon client mail</span>
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
          <span>FAQ Recruteurs</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Informations pratiques sur le stage
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-sm">
        <div class="p-5 rounded-2xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-2">
          <strong class="text-slate-900 dark:text-white block font-bold text-base">Calendrier & Dates</strong>
          <p class="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
            18 semaines en 2 périodes : du <strong>15/02/27 au 07/05/27</strong> (12 sem.) et du <strong>28/06/27 au 15/08/27</strong> (6 sem.).
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-2">
          <strong class="text-slate-900 dark:text-white block font-bold text-base">Convention & Cadre</strong>
          <p class="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
            Convention de stage standard fournie par l'IUT Clermont Auvergne, avec suivi pédagogique par un tuteur universitaire.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-2">
          <strong class="text-slate-900 dark:text-white block font-bold text-base">Télétravail & Présentiel</strong>
          <p class="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
            Totalement ouvert aux rythmes hybrides ou 100% présentiel sur les zones de Clermont-Ferrand, Aubière ou Lyon.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-2">
          <strong class="text-slate-900 dark:text-white block font-bold text-base">Échanges & Entretiens</strong>
          <p class="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
            Disponible rapidement en visio (Google Meet, Teams, Discord) ou par téléphone pour échanger sur vos missions.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const copiedState = ref(null)

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const copyText = async (text, key) => {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text)
      copiedState.value = key
      setTimeout(() => {
        copiedState.value = null
      }, 2000)
    }
  } catch (err) {
    console.error('Erreur lors de la copie', err)
  }
}

const handleSubmit = () => {
  const subject = encodeURIComponent(`[Portfolio] ${form.value.subject} - ${form.value.name}`)
  const body = encodeURIComponent(
    `Bonjour Mattéo,\n\n${form.value.message}\n\nDe : ${form.value.name} (${form.value.email})`
  )
  window.location.href = `mailto:contact@matteoriviere.fr?subject=${subject}&body=${body}`
}
</script>
