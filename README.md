# Projet sparta-mobile

Boilerplate pour React Native sans Expo

### Démarrer l'application sur son mobile

- Cloner ce repository (git clone https://gitlab.com/ajtg/sparta-mobile)
  Sachant qu'on utilise GitFlow, la branche à récupérer est "develop" :
- Installer flow en global (npm i -g flow-bin@^0.89.0)
- git checkout develop && yarn (attention à développer sur ses propres branches feature/x)
- react-native run-android ou react-native run-ios

### Fonctionnalitées

- Projet créé avec CRNA sans expo
- Utilisation de redux-saga et redux-persist
- Typage fort avec Flow
- Verification du code avec eslint (semistandard/flow/react/react-native) + prettier
- Components de base gérés avec react-native-elements
- Routing avec react-navigation
- Bonne structure et pratiques
- Tests avec Jest
- Intégré à la Pipeline Gitlab
- Débug avec Redux Devtools (http://remotedev.io/local/)

### Commandes

Les commandes suivantes sont disponibles (à éxécuter avec npm run <cmd>) :

- start : Lance le packager
- android: Lance l'application sur un appareil android avec Expo
- ios : Lance l'application sur un appareil ios avec Expo
- eject : Eject l'application d'Expo
- test : lance les tests avec jest
- lint : vérifie le respect de la norme semi-standard
- flow : vérifie le respect des types statiques

### Environnement de développement

Il est conseillé d'utiliser Atom avec au minimum les packages :

- react
- linter-eslint
- prettier-atom
- autocomplete
- atom-ternjs
- atom-react-autocomplete
- autocomplete-Flow
- ide-flowtype

A voir si d'autre packages peuvent être utile.
