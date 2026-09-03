# Design System — Kit RPS Managers (SNCF)
> Extrait de la maquette PowerPoint "Démarche Accompagnement Humain & Prévention des RPS — Kit manager Prototype V2"
> Ce document synthétise tous les éléments visuels et structurels observés dans la maquette, à destination d'une IA de génération de code (vibecoding).

## 1. Contexte du produit

Site web (probablement une SPA ou un site statique multi-pages) destiné aux managers, chefs de projet et acteurs RH/préventeurs du groupe SNCF. Objectif : les aider à intégrer le facteur humain et prévenir les risques psychosociaux (RPS) dans leurs projets, via des checklists interactives et des ressources.

Le site est structuré en deux grands parcours (couleur = identité de section) :

- Partie 1 — teal/vert : "J'ai besoin d'intégrer les facteurs humains en amont et pendant le projet" → destiné aux chefs de projet.
- Partie 2 — bleu marine : "J'ai besoin de prévenir et d'accompagner les situations de RPS pour mon collectif" → destiné aux managers d'équipe.

Chaque parcours a son propre code couleur mais partage exactement les mêmes composants (cards, checklists, tableaux de ressources, breadcrumb).

## 2. Architecture / Sitemap (déduit de la maquette)

```
Accueil (page "Bienvenue, quel est votre besoin ?")
├── Parcours 1 (teal) — "Facteurs humains en amont du projet"
│   ├── Accueil du parcours (3 entrées : projet conséquent / projet modeste / je veux explorer)
│   ├── Cas d'usage (aperçu des 3 checklists)
│   ├── Checklist "pour moi-même" → détails/ressources par item
│   ├── Checklist "impacts humains" → détails/ressources par item
│   ├── Checklist "préparer le collectif" → détails/ressources par item
│   └── Ressources complémentaires (fiches pratiques illustrées)
├── Parcours 2 (bleu marine) — "Prévenir/accompagner les RPS au quotidien"
│   ├── Cas d'usage (Comprendre & s'informer / Agir pour prévenir / Accompagner situations difficiles)
│   ├── Checklists correspondantes (mêmes composants, thème bleu)
│   └── Ressources complémentaires
└── Fiches "ressources" transverses (fin de kit) : fiches infographiques riches
    (parties prenantes, relais humains, charge de travail, communication de projet,
    outil "ajuster le cap ensemble")
```

Chaque page de contenu affiche en permanence, en haut, un breadcrumb de navigation horizontal listant toutes les étapes du parcours en cours (voir §5.1).

## 3. Palette de couleurs

> ⚠️ Les hex ci-dessous sont des estimations visuelles fidèles à l'ambiance (la maquette PPTX ne donne pas de valeurs exactes exploitables). À ajuster/valider avec l'équipe si une charte graphique SNCF officielle existe.

### Couleurs de marque / structurelles
| Usage | Couleur | Hex approx. |
|---|---|---|
| Teal principal (Parcours 1, titres, liens clés, onglet actif) | Vert-turquoise | #17A398 (variantes #1BAF9E, #1CADA0) |
| Bleu marine principal (Parcours 2, bandeaux de ressources, blocs sombres) | Bleu nuit | #1B3B5C (variantes #14395C, #2C5F7C) |
| Bleu accent (onglets actifs parcours 2, liens) | Bleu moyen | #2E6DA4 |
| Vert succès / positif (case "Ce qu'est le kit", coches validées) | Vert franc | #1FAE7E |
| Rouge/orange alerte, négatif ("Ce qu'il n'est pas", encarts d'attention) | Orange brûlé | #D9491F / #DC5B34 |
| Fond clair teal (tint de carte, zone "questions à se poser" parcours 1) | Vert menthe pâle | #DCF0E9 / #E3F3EF |
| Fond clair bleu (tint de carte, zone parcours 2) | Bleu ciel pâle | #EAF2FA |
| Fond clair pêche (tint carte négative) | Pêche pâle | #F7DCC9 |
| Vert foncé (titre page de couverture uniquement) | Vert bouteille | #1B4B3A |
| Doré/moutarde (accent illustration couverture, badges "merci") | Or | #D4A017 |
| Gris neutre (bandeaux d'info, fonds secondaires) | Gris clair | #F2F2F2 |
| Texte courant | Gris anthracite / noir | #333333 |
| Bordure carte bleu clair (cards "Pour qui / À quoi sert-il" page d'accueil produit) | Bleu doux | #6699CC |

### Logique d'usage des couleurs
- La couleur d'accent (teal ou bleu marine) change selon le parcours actif : c'est le signal visuel principal pour savoir "où on est" dans le site.
- Rouge/orange = uniquement pour "ce que le kit n'est pas", alertes, ou messages d'attention encadrés (jamais pour une action positive).
- Vert franc = validation, coché, "ce qui est bon/à faire".
- Badge bleu marine plein ("Non disponible") = état désactivé d'une ressource.

## 4. Typographie

- Police observée : sans-serif générique de type Arial / Calibri / système (rendu PowerPoint standard, pas de police custom identifiable avec certitude). Sur le web, utiliser une police proche et lisible :
  - Recommandation : font-family: "Inter", "Segoe UI", Roboto, Arial, sans-serif;
  - Alternative plus "arrondie" pour matcher le logo/cover : "Poppins" ou "Nunito Sans" pour les titres uniquement.
- Titres de page (H1) : MAJUSCULES, gras, couleur teal ou bleu marine selon le parcours (ex. "UN KIT POUR ACCOMPAGNER L'HUMAIN…", "BIENVENUE, QUEL EST VOTRE BESOIN ?"). Taille ~24–28px équivalent.
- Titre de couverture : casse normale (pas tout majuscule), gras, vert bouteille, taille très grande (~36–40px), sur plusieurs lignes courtes.
- Sous-titres de section / headers de carte : gras, blanc sur fond coloré plein (bandeaux "Ressources à ma disposition", "Ce qu'est le kit"), taille ~16–18px, parfois en majuscules.
- Corps de texte : regular, gris foncé/noir, ~14–15px, interligne confortable.
- Mots-clés inline : mise en gras et/ou colorée (teal/bleu) directement dans les phrases pour souligner les termes importants — pattern très récurrent dans les checklists et cases "questions à se poser". C'est un style "lien visuel" même quand ce n'est pas un vrai lien.
- Italique : utilisé pour les informations secondaires (estimations de temps "~10 min", légendes, notes d'attention).
- Petites majuscules / labels : badges type "PROTOTYPE", "Non disponible" → texte petit, gras, majuscule, dans un badge coloré.

## 5. Composants UI récurrents

### 5.1 Breadcrumb / Stepper de navigation (header de chaque page de contenu)
- Barre horizontale pleine largeur, fond blanc/très clair.
- Suite d'étapes en forme de flèches/chevrons pointant vers la droite (comme des tags de type "pipeline"), collées les unes aux autres.
- Étape inactive : fond gris clair, texte gris.
- Étape active : fond plein coloré (teal ou bleu selon parcours), texte blanc gras.
- Exemple d'étapes : Accueil > Cas d'usage > Checklist pour moi-même > Ressources pour moi-même > Checklist des impacts humains > Ressources impacts humains > Checklist pour préparer le collectif > Ressources préparation collectif
- Cliquable (chaque étape ramène à la section correspondante).

### 5.2 Bandeau d'information / définition
- Pilule ou rectangle arrondi, fond gris clair (#F2F2F2), icône petit engrenage/paramètre à gauche.
- Texte en italique, taille légèrement réduite.
- Usage : donner une définition ou un rappel contextuel en haut de page (ex. définition des RPS).

### 5.3 Cartes "3 colonnes" (page d'intro produit)
- 3 cartes égales côte à côte, fond blanc, bordure bleue épaisse (#6699CC) et coins arrondis.
- Icône ronde colorée en haut (pictogramme dans un cercle bleu plein) + titre gras à droite de l'icône.
- Corps : texte descriptif, listes à puces simples.

### 5.4 Carte "Ce qui est / Ce qui n'est pas" (comparatif binaire)
- Deux cartes côte à côte, coins arrondis.
- Bandeau header plein coloré (vert #1FAE7E à gauche vs orange #D9491F à droite), titre centré blanc gras majuscule.
- Corps : fond teinté clair de la même couleur (vert menthe / pêche pâle), liste à puces, mots-clés en gras noir.
- Coins bas arrondis également (carte "pilule" complète).

### 5.5 Cartes homepage "choix de parcours" (Bienvenue)
- Deux (ou trois) grandes cartes cliquables plein écran, bordure fine colorée (teal ou bleu marine), fond blanc.
- Illustration plate (style "undraw", personnages 2D minimalistes avec touches de couleur) centrée dans la carte.
- Légende en dessous : texte gras italique centré, couleur = couleur de la carte.
- Icône main + curseur (pointer avec petites étincelles) en bas à droite de la carte = indicateur visuel "cliquable", couleur assortie à la carte.
- Au clic → navigation vers le parcours correspondant.

### 5.6 Checklist (composant central du site)
Tableau/liste de lignes, chaque ligne contient :
- Case à cocher à gauche : carrée, coins arrondis ; état vide = contour gris ; état coché = fond blanc, bordure verte, coche verte épaisse.
- Texte de l'item : phrase principale en noir, avec mots-clés en gras coloré (teal/bleu) qui semblent être des liens vers des ressources ou glossaire ; complément entre parenthèses en style normal/italique.
- Colonne "Combien de temps pour le faire ?" : icône sablier (bleu clair) + texte italique bleu type ~10 min / ~2h.
- Colonne "Pour aller plus loin" : icône loupe noire, cliquable → ouvre le détail/ressource associé à l'item.
- Titre de section au-dessus : "Les points essentiels à réaliser" (centré, gras).
- Bas de page : bouton/lien "Retour" (icône flèche courbe + texte, couleur assortie au thème).

### 5.7 Page de détail d'un item (2 colonnes) — "Questions à se poser" / "Ressources à disposition"
- Bandeau surligné en haut de page (fond teinté clair coloré), avec triangle/flèche pointant à droite + texte reprenant l'intitulé de l'item de la checklist (mots-clés en gras coloré).
- Colonne gauche — carte "Les questions à se poser" :
  - Bordure colorée fine (teal ou bleu), fond blanc.
  - Header : icône ampoule dans un cercle + titre gras centré.
  - Liste à puces de questions, avec mots-clés en gras/italique colorés.
- Colonne droite — carte "Ressources à ma disposition" :
  - Bandeau header plein coloré foncé (bleu marine/teal foncé), icône (main + document) + titre blanc gras centré.
  - Tableau 4 colonnes : Ressource (nom en gras coloré/lien + petite icône type pouce-levé ou croix bleue, badge "Non disponible" en dessous si applicable) | Ce qu'elle apporte (description courte) | icône sablier + temps estimé | icône cœur (favori — variante pleine/vide/avec petit chiffre ou "x").
  - Sous le tableau : zone de texte libre — rectangle avec bordure légère et placeholder gris "Zone de texte libre" (= futur champ de prise de notes utilisateur).
- Bas de page : lien "Retour" identique au composant checklist.

### 5.8 Badges
- "PROTOTYPE" : petit badge rectangulaire à coins arrondis, fond blanc, bordure et texte orange, majuscules, gras, petite taille — coin bas gauche de chaque écran (marqueur de statut prototype, à ne pas reproduire en prod).
- "Non disponible" : petit badge rectangulaire plein bleu marine, texte blanc, très petite taille, sous le nom d'une ressource pour indiquer qu'elle n'est pas encore accessible.
- "En cours de relecture par les experts spécialisés" : bandeau d'avertissement jaune pâle en haut à droite de certaines pages de contenu riche (indique un contenu provisoire).

### 5.9 Encart d'alerte / attention
- Rectangle fond rose/pêche très pâle, texte noir gras avec passage souligné pour l'emphase forte (ex. limites de rôle du manager). Utilisé pour poser un cadre/avertissement avant une liste de questions.
- Souvent suivi d'un bloc à fond bleu très pâle contenant la liste de questions/points (mots-clés en bleu).

### 5.10 Pages de transition / séparateur de section
- Mise en page en deux blocs verticaux : bande verticale gauche pleine couleur foncée (teal ou bleu marine selon la partie) occupant environ 1/3 de la largeur, logo SNCF en bas à gauche de cette bande.
- Zone blanche à droite : titre H1 gras coloré + sous-titre descriptif (mots-clés en gras).
- Utilisé pour annoncer "Ressources pour la partie 1 / 2 du kit".

### 5.11 Fiches ressources riches (fin de kit, contenu plus graphique)
Pages plus denses et illustrées, moins "gabarit uniforme", mélangeant :
- Diagrammes en colonnes/swimlanes (ex. parties prenantes d'un projet, blocs connectés en cascade avec flèches).
- Timelines illustrées en forme de route/chemin sinueux avec pastilles/étapes.
- Cartes "cas" avec émoticônes/pictos (visage neutre/inquiet) pour des situations (blocage, désengagement, surcharge).
- Diagramme en étoile façon "Start / Stop / Continue / Do more / Do less" (5 branches autour d'un centre "Notre équipe").
- Constante : cadre englobant avec bordure fine colorée, titre H2 centré en haut, bouton "Retour" en bas à droite, et un petit cachet/sceau "Merci à la BU [xxx] pour le partage de ces bonnes pratiques" en bas, texte italique gris avec icône médaille.

## 6. Iconographie & illustrations

- Style d'icônes : outline/ligne, simples, à 1-2 couleurs, souvent posées dans un cercle ou carré plein coloré (comme des pictos type Flaticon/Streamline).
- Icônes récurrentes et leur sens :
  - Main avec curseur + étincelles = élément cliquable / lien (mode navigation).
  - Loupe = "pour aller plus loin" / accéder au détail d'un item.
  - Flèche courbe retour = bouton "Retour" en bas de page.
  - Sablier = estimation de temps nécessaire.
  - Cœur (plein/vide, parfois avec petit chiffre ou "x") = favoris / disponibilité d'une ressource.
  - Ampoule = "Les questions à se poser" / astuce.
  - Enveloppe = "Pour qui ?".
  - Cible/bullseye = "À quoi sert-il ?".
  - Livre ouvert = "Vous y trouverez".
  - Engrenage/paramètre = bandeau d'information/définition.
  - Pouce levé / poignée de main / groupe de personnes = pictos de ressources humaines (aide, accompagnement, collectif).
  - Cercles numérotés (1, 2, 3) grands, fond marine plein, chiffre blanc gras = étapes d'instructions.
- Illustrations : personnages plats 2D, style "undraw"/flat design, couleurs limitées (teal, rose corail, noir/blanc, touches de couleur), utilisées uniquement sur la page d'accueil (choix de parcours) et la couverture (formes géométriques abstraites colorées en arrière-plan : rose, violet, bleu, jaune moutarde, superposées en transparence).
- Logo : logo SNCF Groupe (bandeau rose/magenta) positionné en bas à gauche des pages de couverture/transition.

## 7. Layout & grille

- Contenu conçu sur un format 16:9 type "slide/écran" (~1280x720 équivalent), à traiter comme des pages plein écran avec zones fixes :
  - Zone haute : titre de page (et/ou breadcrumb de navigation pour les pages internes).
  - Zone centrale : contenu (cartes, tableaux, listes).
  - Zone basse : badge "PROTOTYPE" (à ignorer en prod) en bas-gauche, lien "Retour" en bas-droite.
- Les cartes/tableaux à deux colonnes sont symétriques (50/50) avec un espace/gouttière clair entre elles.
- Coins arrondis généralisés sur quasiment tous les conteneurs (cartes, bandeaux, badges) — rayon moyen, style "friendly corporate".
- Beaucoup d'espace blanc, hiérarchie visuelle claire (header coloré → corps neutre clair → texte).
- Attention : la maquette est pensée desktop uniquement (aucune version mobile visible) — prévoir une adaptation responsive lors du vibecoding (empiler les colonnes en mobile, rendre le breadcrumb scrollable horizontalement ou transformé en menu déroulant).

## 8. Ton éditorial / contenu

- Titres à la 2e personne ou impersonnels directs : "Bienvenue, quel est votre besoin ?", "Comment utiliser ce kit ?".
- Questions fréquemment formulées à la première personne pour le manager : "Est-ce que je...", "Ai-je...".
- Vocabulaire RH/management professionnel mais accessible (pas de jargon excessif), acronymes du groupe SNCF utilisés (DET, DUO, DPX, IRP, CSE, CSSCT, PSP…) — probablement à garder tels quels, propres au contexte SNCF.
- Ton pédagogique, rassurant, orienté "outil d'aide" et non "outil de contrôle" (rappelé explicitement dans "Ce qu'il n'est pas" : pas de "go/no go", pas de recette magique).

## 9. Recommandations techniques pour le vibecoding

- Stack suggérée : composant "Breadcrumb/Stepper" réutilisable piloté par un état de navigation (parcours actif + étape active) pour gérer dynamiquement la couleur d'accent (variable CSS --accent-color qui bascule entre teal et bleu marine selon le parcours).
- Définir des variables CSS/tokens dès le départ :
```css
:root {
  --color-teal: #17A398;
  --color-teal-light: #E3F3EF;
  --color-navy: #1B3B5C;
  --color-navy-light: #EAF2FA;
  --color-success: #1FAE7E;
  --color-alert: #D9491F;
  --color-alert-light: #F7DCC9;
  --color-text: #333333;
  --color-border-blue: #6699CC;
  --radius-card: 12px;
}
```

- Composants à isoler comme "briques" réutilisables : ChecklistRow, ResourceTable, QuestionCard, SectionBanner, Breadcrumb, ChoiceCard (accueil), SectionDivider, Badge.
- Les icônes peuvent être remplacées par une librairie type Lucide, Phosphor ou Heroicons (styles outline) pour rester proches du rendu observé sans dépendre d'assets propriétaires.
- Le champ "Zone de texte libre" suggère une fonctionnalité de prise de notes persistante (à clarifier avec l'équipe métier : sauvegarde locale/session ou compte utilisateur).
- Le badge "PROTOTYPE" et les bandeaux "en cours de relecture" sont des artefacts de maquette : ne pas les intégrer en production, sauf besoin explicite d'un mode "brouillon/preview".
