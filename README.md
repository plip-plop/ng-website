# ng-website

## JS: Valeurs Truthy/falsy

Comment une valeur (string, number, etc.) peut être interprétée comme un prédicat (= qui renvoie true/false) en JS ?

https://developer.mozilla.org/en-US/docs/Glossary/Truthy
https://developer.mozilla.org/en-US/docs/Glossary/Falsy

## JS: Méthodes de tableaux !

".some()", ".find()", etc.
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array

## Migrer une application vers une version plus récente

Le lien suivant répertorie l'ensemble des modifications apportées entre 2 versions.
https://angular.dev/update-guide

Utilisez les **schematics** : ce sont des scripts de migration, fournis par la team core. Avec une ligne de commande de type "ng update <nom package à updater>@<version>", vous automatisez la migration (le CLI va modifier le code de votre application pour la rendre fonctionnelle avec les features de la nouvelle version vers laquelle vous migrez). WARNING: Lorsque vous utilisez les schematics, appliquez le concept **"trust, but verify"**. Vérifiez les modifications apportées par les schematics avant de merger.

## NgModule VS Standalone components

L'organisation en **NgModule** est ancienne. c'est un "patch" mis en place par la team core d'Angular pour pallier à des pbs liés aux premières versions d'Angular 2+. Ce patch a perduré jusqu'à la V16... Depuis la V16, **NgModule** est délaissé au profit des **Standalone components (composants autonomes)**.

- **NgModule:** Regroupe N composants. NgModule liste également les **dépendances** nécessaires au fonctionnement des composants contenus dans le module.
- **Standalone components:** Ils n'appartiennent pas à un NgModule (la notion de NgModule disparaît). Le composant porte explicitement ses propres dépendances (métadonnées du décorator **@Component**, partie **Imports : []**).
