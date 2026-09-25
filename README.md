# Guide d'accompagnement humain et de prévention des RPS

Prototype web autonome (HTML/CSS/JS, aucune dépendance externe) pour aider les managers, chefs de projet, acteurs RH et préventeurs à intégrer les facteurs humains dans leurs projets et à prévenir les risques psychosociaux (RPS) au quotidien.

## Sommaire

- [Fonctionnalités](#fonctionnalités)
- [Utilisation](#utilisation)
- [Lancer en local](#lancer-en-local)
- [Mise en ligne sur GitHub Pages](#mise-en-ligne-sur-github-pages)
- [Données et confidentialité](#données-et-confidentialité)
- [Structure du projet](#structure-du-projet)
- [Architecture applicative](#architecture-applicative)
- [Statut](#statut)
- [Points de doute et arbitrages à valider](#points-de-doute-et-arbitrages-à-valider)
- [Licence](#licence)

## Fonctionnalités

### Deux parcours, une page d'accueil

- Une page d'accueil (« Bienvenue, quel est votre besoin ? ») qui oriente vers l'un des deux parcours, ou vers une exploration libre des trois checklists.
- **Parcours « Intégrer les facteurs humains dans le projet »** (couleur Menthe `#00B388`) : trois checklists (pour soi-même, impacts humains du projet, préparation du collectif), une entrée « projet conséquent » vs « projet plus modeste », et une page « Je veux explorer ».
- **Parcours « Prévenir et accompagner les RPS au quotidien »** (couleur Bleu Marine `#00205B`) : trois sections (Comprendre et s'informer, Agir pour prévenir, Accompagner les situations difficiles) et une page de ressources complémentaires.
- Une **couleur d'identité par parcours**, appliquée au bandeau d'étapes, aux cartes de choix, à l'en-tête d'un point de check-list et au bandeau des cartes de ressources, conformément au principe décrit dans [design-system-v2.md](design-system-v2.md) (« la couleur d'accent change selon le parcours actif »). Les fiches ressources restent neutres car elles sont transverses aux deux parcours.
- Une page **« Sommaire »** (`#/sommaire`) qui liste, en un seul endroit, les trois checklists, les trois sections RPS et toutes les fiches ressources.
- Une page **« À propos »** (`#/a-propos`), accessible depuis un lien discret en en-tête, présentant à quoi sert le kit, à qui il s'adresse et ce qu'il est / n'est pas.

### Checklists et suivi de progression

- Trois checklists pour le parcours projet, chacune avec plusieurs points ; chaque point a sa propre page de détail (questions à se poser, ressources, notes).
- Un **parcours fléché** (bandeau d'étapes cliquable en haut de page) sur les pages du parcours projet et RPS, reproduisant le repérage visuel de la maquette du cahier des charges.
- Un **statut à 3 niveaux** par point (vide / en cours / fait), avec barre de progression par checklist et une **date de dernière révision** affichée automatiquement.
- Un bouton **« Voir toutes les ressources de cette checklist »** (dépliant) sur chaque page de checklist, regroupant en un seul endroit les ressources de tous ses points.
- Une page **« L'essentiel »** qui regroupe les points de toutes les checklists en un coup d'œil, pour les projets modestes.
- Une checklist à cocher (sans sous-page) sur les sections « Comprendre et s'informer » et « Agir pour prévenir » du parcours RPS.

### Ressources

- Un tableau de **ressources** par point de checklist et par section RPS : intitulé, description, durée estimée, et disponibilité (`dispo:true/false`).
- Un **type de ressource** affiché (fiche recommandation / outil / formation).
- Un **compteur « J'aime »** sur chaque ressource disponible, combinant un nombre de départ factice (pas de backend partagé entre utilisateurs) et le marquage personnel de l'utilisateur, mémorisé dans le navigateur.
- Six **fiches ressources** détaillées et illustrées (gestion de projet, parties prenantes, relais humains, charge de travail, communication de projet, outil « ajuster le cap ensemble »), accessibles depuis les tableaux de ressources ou depuis le sommaire.

### Personnalisation et confort de lecture

- Un **mode sombre / clair**, avec bouton de bascule en en-tête, mémorisé dans le navigateur (respecte par défaut la préférence système `prefers-color-scheme`).
- Une interface responsive et des éléments d'accessibilité : lien d'évitement, navigation clavier, focus visible, rôles ARIA sur les barres de progression et le fil d'Ariane, et prise en compte de la réduction des animations.
- Un en-tête allégé (logo, titre, lien « À propos », bouton de mode sombre, mention **PROTOTYPE**).
- Un fil d'Ariane (breadcrumb) rappelant en permanence le chemin parcouru.

### Sauvegarde des données

- Une sauvegarde automatique dans le `localStorage` du navigateur (notes, statuts, dates de révision, ressources marquées utiles, préférence de thème).
- L'export (**« Sauvegarder mes données »**) et l'import (**« Recharger mes données »**) des notes, statuts, dates de révision et ressources marquées utiles, au format JSON, via deux boutons regroupés en pied de page.
- Un bouton **« Nouveau projet »**, en pied de page, qui efface toutes les données locales après confirmation — pour repartir de zéro sur un autre projet.
- Un pied de page avec des liens légaux (mentions légales, politique de confidentialité, gestion des cookies, CGU, accessibilité, plan du site) : ces pages sont pour l'instant des pages « en construction », à compléter avant une mise en production.

## Utilisation

Le projet ne nécessite ni serveur applicatif, ni base de données, ni installation de dépendances.

1. Télécharger ou cloner le dépôt.
2. Ouvrir `index.html` dans un navigateur récent.
3. Choisir un parcours depuis la page d'accueil.
4. Saisir ses notes et cocher les points traités (clic sur la pastille de statut : vide → en cours → fait).

Pour conserver ou transférer son travail, utiliser **Sauvegarder mes données**, en pied de page. Le fichier JSON obtenu peut ensuite être réimporté avec **Recharger mes données**, juste à côté. Le bouton **Nouveau projet** efface les données locales après confirmation.

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

Les notes, statuts, dates de révision, ressources marquées utiles et la préférence de thème sont enregistrés uniquement dans le `localStorage` du navigateur utilisé. Rien n'est envoyé vers un serveur par ce prototype (pas de backend, pas de compte utilisateur).

L'export JSON contient les notes, l'avancement des checklists, les ressources marquées utiles et la date d'export. Il peut contenir des informations sensibles : le conserver et le partager avec précaution.

Effacer les données du site dans les paramètres du navigateur (ou utiliser le bouton **Nouveau projet**) supprime les données locales. Il est recommandé d'exporter régulièrement son travail.

## Structure du projet

```text
.
├── index.html            # Structure de la page (en-tête, fil d'Ariane, zone de rendu, pied de page) et point d'entrée
├── kit-rps.css            # Variables de thème, styles, responsive et accessibilité visuelle
├── kit-rps.js             # Contenus (RES, CL, P2, FICHES), routeur, rendu des vues, état local et interactions
├── img/                   # Logos SNCF (PNG/SVG) et illustrations des cartes de choix
├── design-system-v2.md    # Référentiel visuel unique : maquette produit fusionnée avec la charte officielle Groupe SNCF
└── README.md              # Documentation du projet
```

## Architecture applicative

`kit-rps.js` est une petite application à page unique (SPA) sans framework, routée par le fragment d'URL (`location.hash`) :

- **`ICO`** : pictogrammes SVG inline réutilisables.
- **`RES`** : dictionnaire des ressources (libellé, description, durée, disponibilité, type, nombre de « J'aime » factice), référencées par identifiant depuis les checklists et sections RPS.
- **`CL`** : les trois checklists du parcours projet (`moi`, `impacts`, `collectif`), chacune avec ses points, questions et ressources associées.
- **`P2`** : les sections du parcours RPS au quotidien (`comprendre`, `prevenir`, `difficiles`, `ressources`).
- **`FICHES`** : les six fiches ressources détaillées (contenu HTML généré par fonction), affichées via la route `#/fiche/<id>`.
- **`STATE`** (dans `localStorage`, clé `kit-rps-v1`) : notes, statuts à 3 niveaux, dates de révision et ressources aimées ; persistée à chaque modification.
- **`VUES`** et le routeur (`render()`) : associent chaque route (`#/…`) à un titre, un fil d'Ariane et une fonction de rendu ; les routes dynamiques (`#/cl/<id>`, `#/cl/<id>/<index>`, `#/rps/<id>`, `#/fiche/<id>`) sont résolues par expression régulière.
- Le mode sombre/clair est géré indépendamment de l'état applicatif, dans `localStorage` (clé `kit-rps-theme`).

Le contenu éditorial est donc centralisé dans `kit-rps.js` (objets `RES`, `CL`, `P2`, `FICHES`) ; les styles et les variables de couleur/thème sont regroupés en tête de `kit-rps.css`.

## Statut

Ce projet est un **prototype**. Certaines ressources sont indiquées comme non disponibles (`dispo:false`) ou en cours de relecture. Les pages légales du pied de page (mentions légales, confidentialité, cookies, CGU, accessibilité, plan du site) sont des pages « en construction ». Les informations et coordonnées affichées doivent être vérifiées avant un usage opérationnel.

## Points de doute et arbitrages à valider

Cette refonte (HTML/CSS/JS) s'appuie sur le cahier des charges *« 260728 - Expression de besoin - Kit manager appli.pptx »* (diapositives 1 à 6 pour les besoins, diapositives 7 à 26 pour la maquette) ainsi que sur `design-system-v2.md`, référentiel visuel unique qui fusionne les éléments visuels d'une autre maquette (*« 260721 - … Kit manager Prototype V2.pptx »*) avec la charte graphique officielle du Groupe SNCF. Conformément à la consigne reçue, aucun contenu ni cheminement non documenté par ces fichiers n'a été inventé. Les points suivants restent ouverts et doivent être tranchés par l'équipe RPS / la DSI avant une mise en production :

Le fichier *« 260903 - Démarche Acc Humain & Prév RPS - Slides kit pour maquette.pptx »* (13 diapositives, version prototype du 3 septembre 2026) est désormais la référence de contenu et de périmètre à jour : l'équipe projet y confirme que la maquette HTML ne couvre que les **deux parcours** déjà implémentés (« Intégrer les facteurs humains dans le projet » et « Prévenir et accompagner les RPS au quotidien »), sans en ajouter d'autres. Son contenu textuel (check-lists, fiches « Aborder la charge de travail » et « Relais humains », thème de couleurs et police Arial) correspond déjà, à la relecture, à ce qui était codé à partir de *260728* : ce nouveau fichier n'a donc pas nécessité de réécriture de contenu, seulement les compléments suivants, absents des versions précédentes :

- **Page « À propos ».** Les diapositives 2 et 3 (à quoi sert le kit, pour qui, ce qu'il est / n'est pas) ne correspondaient à aucune page existante. Une page dédiée (`#/a-propos`) a été ajoutée, accessible via un lien discret en en-tête pour ne pas alourdir la navigation principale.

- **Couleurs alignées sur la palette officielle Groupe SNCF, plus des estimations de maquette.** `design-system-v2.md` remplace les couleurs approximatives d'une première extraction de maquette par leurs équivalents officiels exacts (table de correspondance §3.3). `kit-rps.css` a été retouché en conséquence : les variables produit (`--c-primaire`, `--c-accent`, `--c-vert`…) pointent désormais vers la palette officielle (`--sncf-cobalt`, `--sncf-ceruleen`, `--sncf-menthe`…), le parcours « RPS au quotidien » utilise désormais le Bleu Marine officiel `#00205B` (distinct du Cobalt `#003865` conservé comme bleu neutre de l'en-tête/pied de page), et les bordures des cartes de choix reprennent le Bleu Horizon `#A4C8E1` prescrit par la charte. Le succès/validation (`--c-ok`) et l'identité du parcours « projet » (`--c-vert`) restent volontairement la même teinte Menthe, conformément à `design-system-v2.md` §3.4 (« Menthe cumule le rôle d'accent Parcours 1 et de couleur de succès »).
- **Composants de `design-system-v2.md` non repris.** Certains composants décrits (pages de transition avec bandeau vertical plein écran, diagrammes en swimlanes, timelines illustrées) correspondent à des écrans de couverture/transition qui n'ont pas d'équivalent dans l'architecture actuelle du site (accueil, cas d'usage, check-lists, fiches). Ils n'ont pas été ajoutés pour ne pas créer de nouvelles pages non demandées par le cahier des charges fonctionnel.
- **Sauvegarde en ligne et multi-appareils.** Le cahier des charges demande que les notes/statuts soient retrouvés « d'une connexion à l'autre » et que la solution technique soit proposée par la DSI. Ce prototype reste **local au navigateur** (`localStorage`), sans compte utilisateur ni backend : aucune solution de stockage en ligne n'a été inventée, faute d'architecture (authentification, hébergement, base de données) définie.
- **Plusieurs « versions » ouvertes en simultané, ouverture/fermeture/transfert d'une version, travail collaboratif en temps réel.** Ces besoins (diapositive 5) supposent un backend multi-utilisateurs explicitement présenté comme à concevoir par la DSI. Non implémentés ici ; le bouton **« Nouveau projet »** ajouté permet seulement de repartir d'un état vide localement, pas de gérer plusieurs versions en parallèle.
- **« Mécanisme de suivi de l'avancement (date de révision) ».** Interprété a minima, côté navigateur uniquement, par une date de dernière modification par point (affichée « Révisé le JJ/MM/AAAA »). Un véritable historique/audit partagé entre utilisateurs nécessite le backend ci-dessus.
- **« Like » sur les ressources.** Le compteur affiché combine un nombre de départ factice (saisi en dur dans le code, à titre d'exemple) et le marquage personnel de chaque utilisateur (mémorisé dans son navigateur). Il ne s'agit pas d'un compteur de popularité réellement agrégé entre utilisateurs, ce qui nécessiterait un backend partagé non défini à ce stade.
- **Type de ressource (Fiche recommandation / Outil / Formation).** La diapositive 5 définit ces trois catégories mais ne précise pas le type de chacune des ressources déjà existantes qui ne sont pas encore disponibles (`dispo:false`). Le type affiché pour ces ressources a été déduit du libellé/de la description (ex. « Power Apps RPS » → Outil, « Formation … » → Formation) : à confirmer par l'équipe RPS.
- **Contenu détaillé de certaines pages.** La maquette PPTX détaille entièrement les 5 points de « La check-list pour moi-même » (titres et questions repris tels quels, diapositives 14 et 17 à 21). Elle ne détaille en revanche pas les écrans « Checklist des impacts humains », « Checklist pour préparer le collectif », « Comment agir pour prévenir les RPS » et « Comment accompagner et traiter les situations difficiles » (seuls les menus/étapes apparaissent). Le contenu déjà coconstruit de ces pages a donc été conservé à l'identique plutôt que réécrit par déduction.
- **Parcours fléché absent de certaines pages.** Le bandeau d'étapes n'apparaît, dans la maquette, que sur les pages du parcours « projet conséquent » (diapositives 12 à 21) et sur le menu et deux pages du parcours « RPS au quotidien » (diapositives 23 à 25). Il n'a donc pas été ajouté sur « J'ai un projet plus modeste » (l'essentiel), « Je veux explorer » (le sommaire), ni sur les fiches pratiques (diapositive 22, qui ne montre pas non plus ce bandeau) : ces pages gardent leur navigation par fil d'Ariane et boutons retour existants.
- **Incohérence relevée dans la maquette elle-même, corrigée dans le prototype.** Sur la diapositive 12 du PPTX, la page « Cas d'usage » (choix entre « projet conséquent », « projet plus modeste » et « je veux explorer ») met par erreur en évidence l'étape « Accueil » du bandeau au lieu de « Cas d'usage » (contrairement à la diapositive 13, qui met bien en évidence « Cas d'usage » sur la page suivante). Cette incohérence, initialement reproduite à l'identique, a été corrigée : le bandeau met désormais en évidence « Cas d'usage » dès la page `#/projet`, pour que l'étape surlignée corresponde toujours à la page réellement affichée.
- **Deux points de « La check-list pour moi-même » regroupés sur une même page.** Dans le PPTX, les diapositives 17 (« Définir les ressources et compétences ») et 18 (« Identifier les relais humains ») sont deux points distincts de la checklist, mais s'enchaînent directement dans le parcours utilisateur documenté (diapositive 7). Elles sont donc désormais réunies sur une seule page (`#/cl/moi/0` et `#/cl/moi/1` y mènent toutes les deux), l'une au-dessus de l'autre comme dans l'enchaînement de la maquette, chaque point conservant ses propres questions, ressources, notes et statut. Les trois autres points de cette checklist (diapositives 19 à 21) restent chacun sur leur propre page.
- **Bandeau d'étapes simplifié : suppression des étapes « Ressources … ».** Le bandeau comportait, pour chaque checklist, une étape « Checklist … » et une étape « Ressources … » menant toutes deux à la même page (`#/cl/<id>`), la seconde ne servant qu'à distinguer visuellement les pages de détail d'un point. Cette distinction n'apportait pas de destination utile puisque les ressources d'un point restent accessibles depuis son lien « Pour aller plus loin » : les trois étapes « Ressources … » ont donc été retirées du bandeau, qui met désormais en évidence l'étape « Checklist … » correspondante même sur les pages de détail d'un point. En contrepartie, un bouton **« Voir toutes les ressources de cette checklist »** (dépliant) a été ajouté sur chaque page de checklist, regroupant en un seul endroit les ressources de tous ses points.
- **Formats enrichis (vidéo, audio, images).** Demandés diapositive 4 pour illustrer les pages. Le dossier `img/` fourni (logo SNCF et illustrations « besoin ») a été intégré à l'en-tête et aux cartes de choix (accueil et « Cas d'usage »). Aucune vidéo ni piste audio n'ayant été fournie pour le contenu réel (ex. questions à se poser), cette partie du besoin n'a pas été simulée avec des exemples inventés.
- **Charte graphique officielle et éléments visuels du fichier PPTX.** Les couleurs du thème du PPTX (`#003865`, `#0084D4`, `#00B388`, `#DC582A`…) correspondent à des couleurs de la palette officielle Groupe SNCF (respectivement Cobalt, Céruléen, Menthe, Ocre) : elles ont été conservées et rattachées à cette palette dans `kit-rps.css`. Le Forêt officiel `#154734` (cité en couleur de bouton dans la maquette) est repris pour le bandeau foncé des cartes « Ressources à ma disposition » du parcours « Facteurs humains projet » (`design-system-v2.md` §6.7). Les illustrations décoratives de la maquette d'origine restent hors charte et n'ont pas été reproduites.
- **Accessibilité mobile du bandeau d'étapes.** La maquette est fournie dans un format fixe 1280 × 720 (desktop). Le comportement du bandeau en dessous de cette largeur (défilement horizontal) est une adaptation nécessaire, non spécifiée par le cahier des charges.
- **Mode sombre.** Non demandé explicitement par le cahier des charges, mais ajouté comme confort de lecture standard ; à valider auprès de l'équipe RPS/DSI avant mise en production, notamment sur le respect des contrastes de la palette officielle en mode sombre.
- **Sécurité, RGPD, hébergement, maintenance SI.** La diapositive 6 indique explicitement plusieurs points « à définir » (qui maintient l'outil, où l'héberger, qui peut contribuer à un même kit). Ce prototype front-end seul ne peut pas répondre à ces questions ; elles restent entièrement à traiter par la DSI. Les pages légales du pied de page (mentions légales, confidentialité, cookies, CGU, accessibilité, plan du site) sont volontairement laissées « en construction » tant que ces arbitrages ne sont pas faits.

## Licence

Aucune licence open source n'est actuellement déclarée dans ce dépôt. Ajouter une licence adaptée avant une réutilisation ou une diffusion externe.