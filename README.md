# 7xtoy.github.io

## Pour commancer a coder:
Installer node/npm, git, ...
```bash
git clone https://github.com/7xtoy/7xtoy.github.io
cd 7xtoy.github.io
npm install
```

## Pour le lancer en mode developement
```bash
npm run dev
```
ou
```bash
# Permet de lancer la page web en meme temps
npm run dev -- --open
```

## Pour publier le site (faites attention pas de retour en arriere, faut que le site soit fonctionel pour le push)
```bash
npm run predeploy
npm run deploy
```


# Ajouter un icone

Aller sur: `https://icon-sets.iconify.design`
Prendre une icone
Cliquer sur Components
Cliquer sur Svelte
Recuperer le truc `<Icon icon="..." width="24" height="24" />`
Le mettre la ou vous voulez l'icone
ecrire `import Icon from '@iconify/svelte';` dans la section script (que vous pouvez créer)
