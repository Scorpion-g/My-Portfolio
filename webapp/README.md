# Portfolio - prototype Vue

Ce dossier contient un prototype minimal Vite + Vue 3 pour migrer progressivement le site statique vers une SPA.

Pour démarrer :

```bash
cd webapp
npm install
npm run dev
```

Ensuite ouvrir http://localhost:5173

## Déploiement GitHub Pages

Le projet est configuré pour publier automatiquement sur GitHub Pages via GitHub Actions.

1. Pousser sur la branche `master`.
2. Dans GitHub, activer Pages : Settings → Pages → Source = GitHub Actions.
3. L’URL sera : https://scorpion-g.github.io/Portfolio/

Notes :
- Le composant `SiteNav.vue` charge le partial `partials/nav.html` depuis la racine du projet. Tu peux le transformer en vrai composant Vue et gérer le routage avec Vue Router si tu veux.
- Le `package.json` est volontairement minimal.
- Le mode sombre/clair est géré via un switch dans l'app et mémorisé dans `localStorage`.
