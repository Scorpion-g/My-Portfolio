# Portfolio - prototype Vue

Ce dossier contient un prototype minimal Vite + Vue 3 pour migrer progressivement le site statique vers une SPA.

Pour démarrer :

```bash
cd webapp
npm install
npm run dev
```

Ensuite ouvrir http://localhost:5173

Notes :
- Le composant `SiteNav.vue` charge le partial `partials/nav.html` depuis la racine du projet. Tu peux le transformer en vrai composant Vue et gérer le routage avec Vue Router si tu veux.
- Le `package.json` est volontairement minimal.

