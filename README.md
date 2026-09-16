# Site ALLWRAP

Site one-page statique, responsive et sans dépendance. Tous les fichiers publics se trouvent dans `dist/`.

## Modifier le contenu

- Textes et liens : `dist/index.html`
- Couleurs et mise en page : `dist/style.css` (variables tout en haut du fichier)
- Interactions : `dist/script.js`
- Images : `dist/images/`

## Ajouter un avant/après

Dupliquer un bloc `<article class="project">` dans la section `#realisations`, puis remplacer les deux sources d’images et les textes alternatifs. Le script détecte automatiquement tous les blocs `.before-after`.

Pour une comparaison nette, utiliser deux images prises depuis un angle aussi proche que possible. Les images sont automatiquement recadrées dans le même cadre.

## Formulaire

Le formulaire transmet les demandes à `allwrapazur@gmail.com` via FormSubmit.

Lors du tout premier envoi, FormSubmit adresse un message d’activation à cette boîte. Il faut cliquer sur le lien reçu une seule fois pour autoriser les envois suivants. Vérifier le dossier des courriers indésirables si nécessaire.

## Mettre en ligne sur Vercel

Importer le dossier dans un dépôt GitHub, puis l’importer dans Vercel. Choisir `Other` comme framework et `dist` comme dossier de sortie.

## GitHub Pages

Pour GitHub Pages, déplacer le contenu de `dist/` à la racine du dépôt ou configurer une action de publication du dossier `dist`.

## Informations à compléter

- Téléphone
- Ville/adresse si ALLWRAP souhaite les afficher
- Liens Facebook et mentions légales
