# Kit d'accompagnement humain et de prévention des RPS

Prototype web autonome pour aider les managers, chefs de projet, acteurs RH et préventeurs à intégrer les facteurs humains dans leurs projets et à prévenir les risques psychosociaux (RPS) au quotidien.

## Fonctionnalités

- Trois check-lists pour intégrer les facteurs humains dans un projet :
  - la check-list pour soi-même ;
  - l'identification des impacts humains du projet ;
  - la préparation du collectif aux impacts du projet.
- Un parcours dédié à la prévention et à l'accompagnement des situations de RPS.
- Des fiches pratiques sur la gestion de projet, les parties prenantes, la charge de travail, la communication, les relais humains et l'ajustement collectif du cap.
- Des questions de réflexion et des zones de notes libres, à la fois sur chaque point d'une check-list et sur la check-list dans son ensemble.
- Un **parcours fléché** (bandeau d'étapes en haut de page) sur les pages « Facteurs humains projet » et « RPS au quotidien », reproduisant le repérage visuel de la maquette du cahier des charges : chaque étape est cliquable et ramène en un clic à n'importe quel point du parcours.
- Une **couleur d'identité par parcours** (teal pour « Facteurs humains projet », marine pour « RPS au quotidien »), appliquée au bandeau d'étapes, aux cartes de choix et à l'en-tête d'un point de check-list, conformément au principe décrit dans `design-system.md` (« la couleur d'accent change selon le parcours actif »). Les fiches ressources restent neutres car elles sont transverses aux deux parcours.
- Une progression par check-list avec un **statut à 3 niveaux** par point (vide / en cours / fait), ainsi qu'une date de dernière révision affichée automatiquement.
- Un **marquage « utile »** (like) sur les ressources disponibles, mémorisé dans le navigateur.
- Un **type de ressource** affiché (fiche recommandation / outil / formation).
- Une sauvegarde automatique dans le navigateur.
- L'export et l'import des notes, des statuts, des dates de révision et des ressources marquées utiles, au format JSON.
- Une interface responsive et des éléments d'accessibilité : lien d'évitement, navigation clavier, focus visible et prise en compte de la réduction des animations.

## Utilisation

Le projet ne nécessite ni serveur applicatif, ni base de données, ni installation de dépendances.

1. Télécharger ou cloner le dépôt.
2. Ouvrir `index.html` dans un navigateur récent.
3. Choisir un parcours depuis la page d'accueil.
4. Saisir ses notes et cocher les points traités.

Pour conserver ou transférer son travail, utiliser **Exporter mes notes**. Le fichier JSON obtenu peut ensuite être réimporté avec **Importer**.

## Lancer en local

L'ouverture directe de `index.html` suffit. Pour utiliser un serveur local, par exemple avec Python :

```bash
python3 -m http.server 8000
```

Puis ouvrir <http://localhost:8000> dans le navigateur.

## Mise en ligne sur GitHub Pages

Le projet étant un site statique, il peut être publié directement avec GitHub Pages :

1. Pousser le contenu du dépôt sur GitHub.
2. Ouvrir **Settings > Pages** dans le dépôt.
3. Sélectionner **Deploy from a branch**.
4. Choisir la branche à publier et le dossier `/ (root)`.
5. Enregistrer, puis attendre la génération de l'URL publique.

## Données et confidentialité

Les notes et les cases cochées sont enregistrées uniquement dans le `localStorage` du navigateur utilisé. Elles ne sont envoyées vers aucun serveur par ce prototype.

L'export JSON contient les notes, l'avancement des check-lists et la date d'export. Il peut contenir des informations sensibles : le conserver et le partager avec précaution.

Effacer les données du site dans les paramètres du navigateur supprime les données locales. Il est recommandé d'exporter régulièrement son travail.

## Structure du projet

```text
.
├── index.html         # Structure de la page et point d'entrée
├── kit-rps.css        # Styles, responsive et accessibilité visuelle
├── kit-rps.js         # Contenus, navigation, rendu et sauvegarde locale
├── img/               # Logo SNCF et illustrations utilisées sur les pages de choix
├── design-system.md   # Référentiel visuel de la maquette (source du cahier des charges)
└── README.md          # Documentation du projet
```

Le contenu éditorial est centralisé dans les objets `RES`, `CL`, `P2` et `FICHES` du fichier `kit-rps.js`. Les styles principaux sont regroupés dans les variables CSS au début de `kit-rps.css`.

## Statut

Ce projet est un **prototype**. Certaines ressources sont indiquées comme non disponibles ou en cours de relecture. Les informations et coordonnées affichées doivent être vérifiées avant un usage opérationnel.

## Points de doute et arbitrages à valider

Cette refonte (HTML/CSS/JS) s'appuie sur le cahier des charges *« 260728 - Expression de besoin - Kit manager appli.pptx »* (diapositives 1 à 6 pour les besoins, diapositives 7 à 26 pour la maquette) ainsi que sur `design-system.md`, qui synthétise les éléments visuels d'une autre maquette (*« 260721 - … Kit manager Prototype V2.pptx »*). Conformément à la consigne reçue, aucun contenu ni cheminement non documenté par ces fichiers n'a été inventé. Les points suivants restent ouverts et doivent être tranchés par l'équipe RPS / la DSI avant une mise en production :

- **Couleurs de `design-system.md` traitées comme des estimations, pas comme des valeurs exactes.** Ce fichier indique lui-même que ses codes couleur (`#17A398`, `#1B3B5C`…) sont des « estimations visuelles », faute de valeurs exploitables dans le PPTX correspondant. Or le thème réel du fichier `260728 - Expression de besoin.pptx` (extrait techniquement de son XML) donne des couleurs exactes déjà utilisées dans `kit-rps.css` (`#003865`, `#0084D4`, `#00B388`…). Pour appliquer le principe de `design-system.md` (« la couleur d'accent change selon le parcours ») sans introduire de teintes non vérifiées, la thématisation par parcours réutilise uniquement les couleurs déjà confirmées : `--c-vert` (#00B388, le teal réel du thème) pour le parcours « Facteurs humains projet », `--c-primaire` (#003865, le marine réel du thème) pour le parcours « RPS au quotidien ». À valider avec l'équipe si des teintes distinctes de succès (`--c-ok`) et d'identité de parcours (teal) sont malgré tout souhaitées, car elles partagent actuellement la même valeur.
- **Composants de `design-system.md` non repris.** Certains composants décrits (cartes « Ce qui est / Ce qui n'est pas », pages de transition avec bandeau vertical plein écran, diagrammes en swimlanes, timelines illustrées) correspondent à des écrans de couverture/transition qui n'ont pas d'équivalent dans l'architecture actuelle du site (accueil, cas d'usage, check-lists, fiches). Ils n'ont pas été ajoutés pour ne pas créer de nouvelles pages non demandées par le cahier des charges fonctionnel.
- **Sauvegarde en ligne et multi-appareils.** Le cahier des charges demande que les notes/statuts soient retrouvés « d'une connexion à l'autre » et que la solution technique soit proposée par la DSI. Ce prototype reste **local au navigateur** (`localStorage`), sans compte utilisateur ni backend : aucune solution de stockage en ligne n'a été inventée, faute d'architecture (authentification, hébergement, base de données) définie.
- **Plusieurs « versions » ouvertes en simultané, ouverture/fermeture/transfert d'une version, travail collaboratif en temps réel.** Ces besoins (diapositive 5) supposent un backend multi-utilisateurs explicitement présenté comme à concevoir par la DSI. Non implémentés ici.
- **« Mécanisme de suivi de l'avancement (date de révision) ».** Interprété a minima, côté navigateur uniquement, par une date de dernière modification par point (affichée « Révisé le JJ/MM/AAAA »). Un véritable historique/audit partagé entre utilisateurs nécessite le backend ci-dessus.
- **« Like » sur les ressources.** Implémenté comme un marquage personnel (mémorisé dans le navigateur de chaque utilisateur), et non comme un compteur de popularité agrégé entre utilisateurs, ce qui nécessiterait également un backend.
- **Type de ressource (Fiche recommandation / Outil / Formation).** La diapositive 5 définit ces trois catégories mais ne précise pas le type de chacune des ressources déjà existantes qui ne sont pas encore disponibles (`dispo:false`). Le type affiché pour ces ressources a été déduit du libellé/de la description (ex. « Power Apps RPS » → Outil, « Formation … » → Formation) : à confirmer par l'équipe RPS.
- **Contenu détaillé de certaines pages.** La maquette PPTX détaille entièrement les 5 points de « La check-list pour moi-même » (titres et questions repris tels quels, diapositives 14 et 17 à 21). Elle ne détaille en revanche pas les écrans « Checklist des impacts humains », « Checklist pour préparer le collectif », « Comment agir pour prévenir les RPS » et « Comment accompagner et traiter les situations difficiles » (seuls les menus/étapes apparaissent). Le contenu déjà coconstruit de ces pages a donc été conservé à l'identique plutôt que réécrit par déduction.
- **Parcours fléché absent de certaines pages.** Le bandeau d'étapes n'apparaît, dans la maquette, que sur les pages du parcours « projet conséquent » (diapositives 12 à 21) et sur le menu et deux pages du parcours « RPS au quotidien » (diapositives 23 à 25). Il n'a donc pas été ajouté sur « J'ai un projet plus modeste » (l'essentiel), « Je veux explorer » (le sommaire), ni sur les fiches pratiques (diapositive 22, qui ne montre pas non plus ce bandeau) : ces pages gardent leur navigation par fil d'Ariane et boutons retour existants.
- **Incohérence relevée dans la maquette elle-même.** Sur les diapositives 12 et 13, l'étape mise en évidence dans le bandeau est décalée d'un cran par rapport à la page réellement affichée (la diapositive 12, page « Cas d'usage », met en évidence « Accueil » ; la diapositive 13 met en évidence « Cas d'usage »). Le prototype reproduit fidèlement cet état documenté plutôt que de le « corriger » par interprétation.
- **Formats enrichis (vidéo, audio, images).** Demandés diapositive 4 pour illustrer les pages. Le dossier `img/` fourni (logo SNCF et illustrations « besoin ») a été intégré à l'en-tête et aux cartes de choix (accueil et « Cas d'usage »). Aucune vidéo ni piste audio n'ayant été fournie pour le contenu réel (ex. questions à se poser), cette partie du besoin n'a pas été simulée avec des exemples inventés.
- **Charte graphique et éléments visuels du fichier PPTX.** Les couleurs du thème du PPTX (`#003865`, `#0084D4`, `#00B388`, `#DC582A`…) correspondent exactement à celles déjà utilisées dans `kit-rps.css` : elles ont été conservées telles quelles. En revanche, certaines couleurs de boutons du fichier (ex. bouton « Retour » en vert foncé `#154734`) et les illustrations décoratives ne font pas partie de cette charte et n'ont pas été reproduites, ces éléments provenant visiblement d'un kit de wireframe générique utilisé pour construire la maquette PowerPoint.
- **Accessibilité mobile du bandeau d'étapes.** La maquette est fournie dans un format fixe 1280 × 720 (desktop). Le comportement du bandeau en dessous de cette largeur (défilement horizontal) est une adaptation nécessaire, non spécifiée par le cahier des charges.
- **Sécurité, RGPD, hébergement, maintenance SI.** La diapositive 6 indique explicitement plusieurs points « à définir » (qui maintient l'outil, où l'héberger, qui peut contribuer à un même kit). Ce prototype front-end seul ne peut pas répondre à ces questions ; elles restent entièrement à traiter par la DSI.

## Licence

Aucune licence open source n'est actuellement déclarée dans ce dépôt. Ajouter une licence adaptée avant une réutilisation ou une diffusion externe.