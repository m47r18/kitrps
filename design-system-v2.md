# Design System — Kit RPS Managers (SNCF)
## Version fusionnée : maquette produit × charte officielle Groupe SNCF

> Document unique fusionnant :
> 1. le design system extrait de la maquette PowerPoint « Démarche Accompagnement Humain & Prévention des RPS — Kit manager Prototype V2 » ;
> 2. la synthèse de la charte graphique officielle **Groupe SNCF** (espace marques.groupe-sncf.com), transmise par la direction de la communication.
>
> **Règle d'arbitrage** : en cas de divergence, la charte officielle prime. Les couleurs approximatives de la maquette sont remplacées par leurs équivalents officiels (table de correspondance en §3.3). Classification estimée : **C1 (Interne)**.

---

## Sommaire

1. [Contexte du produit](#1-contexte-du-produit)
2. [Fondations de marque (charte Groupe SNCF)](#2-fondations-de-marque-charte-groupe-sncf)
3. [Couleurs](#3-couleurs)
4. [Typographie](#4-typographie)
5. [Architecture / Sitemap](#5-architecture--sitemap)
6. [Composants UI récurrents](#6-composants-ui-récurrents)
7. [Iconographie & illustrations](#7-iconographie--illustrations)
8. [Layout & grille](#8-layout--grille)
9. [Ton éditorial / contenu](#9-ton-éditorial--contenu)
10. [Recommandations techniques pour le vibecoding](#10-recommandations-techniques-pour-le-vibecoding)
11. [Ressources et contacts](#11-ressources-et-contacts)

---

## 1. Contexte du produit

Site web (SPA ou site statique multi-pages) destiné aux managers, chefs de projet et acteurs RH/préventeurs du groupe SNCF. Objectif : les aider à intégrer le facteur humain et prévenir les risques psychosociaux (RPS) dans leurs projets, via des checklists interactives et des ressources.

Le site est structuré en deux grands parcours (couleur = identité de section) :

- **Parcours 1 — Menthe (vert)** : « J'ai besoin d'intégrer les facteurs humains en amont et pendant le projet » → destiné aux chefs de projet.
- **Parcours 2 — Bleu Marine** : « J'ai besoin de prévenir et d'accompagner les situations de RPS pour mon collectif » → destiné aux managers d'équipe.

Chaque parcours a son propre code couleur mais partage exactement les mêmes composants (cards, checklists, tableaux de ressources, breadcrumb).

---

## 2. Fondations de marque (charte Groupe SNCF)

### 2.1 Le logo Groupe SNCF

Le logo **Groupe SNCF** est composé du logo iconique SNCF, accompagné en dessous de la mention **« GROUPE »** en majuscules. C'est le logo à utiliser pour représenter la holding / le groupe.

- Version couleur : à privilégier systématiquement.
- Version en défonce (monochrome sur fond coloré ou sombre) : possible si le fond ne permet pas la version couleur.
- Taille minimale : **20 mm** de largeur (logo Groupe SNCF) / **5 mm** (logo SNCF seul).

### 2.2 Règles d'usage communes du logo

- **Zone de réserve** : aucun élément graphique, texte ou visuel ne doit empiéter dans la zone de protection qui entoure chaque logo (mesurée en multiples de « X », X étant dérivé de la hauteur du sigle).
- Ne jamais encombrer le logo d'éléments additionnels (texte, formes, ombres non prévues).
- **N'utiliser que les fichiers officiels issus de la logothèque** — ne jamais recréer le logo en CSS/SVG « à la main ».
- Dans le produit : logo Groupe SNCF positionné en bas à gauche des pages de couverture et de transition (voir §6.10).

### 2.3 Interdits logo (« à ne pas faire »)

| Interdit | Description |
|---|---|
| Changer la couleur du dégradé | Le dégradé rouge/violet du sigle SNCF ne doit pas être modifié ou recoloré |
| Désaxer le logo | Ne pas incliner, faire pivoter ou déformer le logo |
| Modifier la forme du logo | Ne pas retoucher le tracé du sigle |
| Changer la typographie du logo | La typo du mot « GROUPE » ne doit pas être remplacée |
| Utiliser le typogramme seul | Ne pas utiliser le mot « GROUPE » sans le sigle SNCF associé |
| Changer la taille de SNCF dans la motrice | Ne pas modifier les proportions internes |
| Utiliser des couleurs différentes pour la motrice et la typographie Groupe | Les deux éléments doivent rester cohérents en couleur |
| Changer la couleur de la typographie du logo | La typo doit garder sa couleur d'origine (noir ou blanc selon le fond) |

### 2.4 La motrice (élément de marque)

La **motrice** est l'élément graphique distinctif de l'identité Groupe SNCF : une forme iconique qui sert de cadre ou de motif pour mettre en valeur images, illustrations ou messages.

**Règles générales :**
- Toujours utilisée droite. S'il y a plusieurs motrices, au moins une doit rester droite (horizontale ou verticale).
- Traiter la forme comme un asset graphique (SVG/masque), ne pas la déformer en CSS (border-radius, skew…).

**Usages types :** mise en exergue (transparente, centrée, ombre externe colorée) · cadrage d'une scène clé (image intérieure à 115 %, extérieur obscurci/flouté) · double/triple motrice sur fond blanc ou uni (≥ 1/3 d'espace blanc) · alliance de deux idées · motif (transparence/superposition, couleur vive unie, croppée sur au moins un côté) · **surlignage** d'un mot-clé (texte en Avenir Black, bas de casse, seul le premier mot-clé surligné via une motrice allongée).

**Application au Kit RPS :**
- Utiliser la motrice comme cadre/masque pour les visuels clés (héros de page d'accueil, mise en avant de fiches ressources).
- Réserver le surlignage motrice à un usage éditorial ponctuel (titre de couverture, citations dans les fiches ressources), jamais comme style de lien générique.

---

## 3. Couleurs

### 3.1 Philosophie de la palette officielle

Palette « harmonieuse » construite en camaïeux : chaque couleur vive est associée à une déclinaison pastel et une déclinaison sombre. Palette naturelle, minérale, moderne et polyvalente.

### 3.2 Palette complète Groupe SNCF (référence)

| Camaïeu | Pastel | Vif | Foncé |
|---|---|---|---|
| 1 | Ambre #EED484 (7403 C) | Safran #DAAA00 (110 C) | Mordoré #4A412A (448 C) |
| 2 | Pêche #FDBE87 (713 C) | Ocre #DC582A (7579 C) | Chocolat #4F2910 (1545 C) |
| 3 | Nude #F8C1B8 (2337 C) | Corail #F2827F (2029 C) | Burgundy #651C32 (7421 C) |
| 4 | Dragée #EFBAE1 (2365 C) | Vieux Rose #F59BBB (1905 C) | Aubergine #3F2A56 (669 C) |
| 5 | Parme #C7B2DE (2071 C) | Lavande #6558B1 (2102 C) | Bleu Marine #00205B (281 C) |
| 6 | Bleu Horizon #A4C8E1 (543 C) | Céruléen #0084D4 (2184 C) | Cobalt #003865 (2955 C) |
| 7 | Vert d'Eau #A1D6CA (565 C) | Menthe #00B388 (339 C) | Forêt #154734 (3435 C) |

Codes RVB et CMJN complets disponibles sur l'espace marques (formats ASE, LESS, SCSS téléchargeables). Le logo SNCF conserve ses couleurs propres (dégradé rouge/violet), hors palette et non modifiables.

### 3.3 Table de correspondance maquette → palette officielle

Les couleurs de la maquette PPTX étaient des estimations visuelles. Elles sont remplacées par leurs équivalents officiels les plus proches :

| Usage produit | Hex maquette (obsolète) | Couleur officielle | Hex officiel |
|---|---|---|---|
| Accent Parcours 1 (titres, liens, onglet actif) | #17A398 | **Menthe** (camaïeu 7 vif) | #00B388 |
| Fond clair Parcours 1 (tints, zones questions) | #E3F3EF | **Vert d'Eau** (camaïeu 7 pastel)¹ | #A1D6CA |
| Accent Parcours 2 (bandeaux, blocs sombres) | #1B3B5C | **Bleu Marine** (camaïeu 5 foncé) | #00205B |
| Fond clair Parcours 2 | #EAF2FA | **Bleu Horizon** (camaïeu 6 pastel)¹ | #A4C8E1 |
| Bleu accent (liens, onglets actifs P2) | #2E6DA4 | **Céruléen** (camaïeu 6 vif) | #0084D4 |
| Vert succès / validation / coches | #1FAE7E | **Menthe** | #00B388 |
| Alerte / négatif / « ce qu'il n'est pas » | #D9491F | **Ocre** (camaïeu 2 vif) | #DC582A |
| Fond alerte pâle | #F7DCC9 | **Pêche** (camaïeu 2 pastel)¹ | #FDBE87 |
| Vert foncé (titre de couverture) | #1B4B3A | **Forêt** (camaïeu 7 foncé) | #154734 |
| Doré / accents couverture, badges « merci » | #D4A017 | **Safran** (camaïeu 1 vif) | #DAAA00 |
| Gris neutre (bandeaux info, fonds secondaires) | #F2F2F2 | — neutre hors palette, conservé | #F2F2F2 |
| Texte courant | #333333 | — neutre hors palette, conservé | #333333 |
| Bordure carte bleue (cards accueil produit) | #6699CC | **Bleu Horizon** | #A4C8E1 |

¹ Les pastels officiels sont plus saturés que les tints très pâles de la maquette. Deux options : les utiliser tels quels (recommandé pour bandeaux et fonds de carte), ou les décliner en tint (`color-mix(in srgb, var(--sncf-vert-eau) 30%, white)`) pour les grands aplats de fond — dans ce cas, revalider le contraste.

### 3.4 Logique d'usage des couleurs (produit)

- La couleur d'accent (**Menthe** ou **Bleu Marine**) change selon le parcours actif : c'est le signal visuel principal pour situer l'utilisateur dans le site.
- **Ocre** = uniquement pour « ce que le kit n'est pas », alertes et encarts d'attention (jamais pour une action positive).
- **Menthe** = validation, coché, positif. Elle cumule le rôle d'accent Parcours 1 et de couleur de succès : la distinction se fait par le contexte (checkbox vs titre), pas par la teinte.
- Badge Bleu Marine plein (« Non disponible ») = état désactivé d'une ressource.
- **Safran** = accent secondaire éditorial (couverture, badges remerciement), usage ponctuel.

### 3.5 Accessibilité des couleurs

- Les associations fond + texte de la palette officielle ont été **testées par binôme** pour garantir un contraste conforme WCAG.
- Certaines paires ne sont conformes qu'en **« AA18 »** : texte à utiliser à une taille **≥ 18 pt**, sinon contraste insuffisant.
- En cas de paire non accessible, basculer vers une couleur voisine du même camaïeu.
- **Pour le web** : toujours vérifier le contraste texte/fond avec un outil (WCAG contrast checker) avant validation, en priorité pour le texte < 18 px. Point de vigilance produit : Menthe #00B388 sur fond blanc est limite pour du texte courant petit — réserver aux titres, gros mots-clés et éléments graphiques ; pour les liens dans le corps de texte, préférer Forêt ou Céruléen selon le parcours, contraste à vérifier.
- Document dédié d'accessibilité des couleurs disponible sur l'espace marques.

### 3.6 Interdits couleurs (« à ne pas faire »)

- Ne pas utiliser des couleurs trop proches entre elles (manque de contraste).
- Ne pas utiliser trop de couleurs sombres ensemble.
- Ne pas utiliser les couleurs en dégradé (hors dégradé propre au sigle SNCF).
- Ne pas utiliser les couleurs à usage spécifique hors de leur contexte prévu.
- Ne pas multiplier le nombre de couleurs dans une même composition (« trop c'est trop »).
- Ne pas associer des couleurs dont le contraste « vibre à l'œil ».

---

## 4. Typographie

### 4.1 Police principale : Avenir (LT Std)

> Remplace la recommandation Inter/Poppins de la maquette initiale.

- Typographie officielle du Groupe SNCF (rondeur, modernité, ouverture).
- Usage recommandé **en bas de casse (minuscules)** de préférence, pour accessibilité et lisibilité.
- 6 graisses principales disponibles (kit « Avenir LT Std » téléchargeable sur l'espace marques, licence à vérifier avec le Pôle identité avant auto-hébergement web).

### 4.2 Police de substitution : Arial

À utiliser uniquement lorsque Avenir n'est pas disponible. Font-stack de repli pour le site :

```css
font-family: "Avenir LT Std", Arial, Helvetica, sans-serif;
```

### 4.3 Hiérarchie typographique du produit (ajustée charte)

- **Titres de page (H1)** : gras, couleur Menthe ou Bleu Marine selon le parcours, ~24–28 px. ⚠️ La maquette les affichait en MAJUSCULES ; la charte recommande le bas de casse → **passer les H1 en bas de casse** (majuscule initiale uniquement), les majuscules restant réservées à des mises en avant ponctuelles.
- **Titre de couverture** : casse normale, gras, Forêt #154734, très grand (~36–40 px), sur plusieurs lignes courtes. Candidat naturel au surlignage motrice (Avenir Black sur le premier mot-clé).
- **Sous-titres / headers de carte** : gras, blanc sur fond coloré plein, ~16–18 px.
- **Corps de texte** : regular, #333333, ~14–15 px, interligne confortable.
- **Mots-clés inline** : gras et/ou colorés (Menthe/Céruléen) directement dans les phrases — pattern récurrent des checklists et blocs « questions à se poser ». Style « lien visuel » même hors lien réel.
- **Italique** : informations secondaires (estimations « ~10 min », légendes, notes d'attention).
- **Badges / labels** : texte petit, gras, majuscules tolérées (usage ponctuel conforme charte).

---

## 5. Architecture / Sitemap

```
Accueil (page « Bienvenue, quel est votre besoin ? »)
├── Parcours 1 (Menthe) — « Facteurs humains en amont du projet »
│   ├── Accueil du parcours (3 entrées : projet conséquent / projet modeste / je veux explorer)
│   ├── Cas d'usage (aperçu des 3 checklists)
│   ├── Checklist « pour moi-même » → détails/ressources par item
│   ├── Checklist « impacts humains » → détails/ressources par item
│   ├── Checklist « préparer le collectif » → détails/ressources par item
│   └── Ressources complémentaires (fiches pratiques illustrées)
├── Parcours 2 (Bleu Marine) — « Prévenir/accompagner les RPS au quotidien »
│   ├── Cas d'usage (Comprendre & s'informer / Agir pour prévenir / Accompagner situations difficiles)
│   ├── Checklists correspondantes (mêmes composants, thème bleu)
│   └── Ressources complémentaires
└── Fiches « ressources » transverses (fin de kit) : fiches infographiques riches
    (parties prenantes, relais humains, charge de travail, communication de projet,
    outil « ajuster le cap ensemble »)
```

Chaque page de contenu affiche en permanence, en haut, un breadcrumb horizontal listant toutes les étapes du parcours en cours (§6.1).

---

## 6. Composants UI récurrents

### 6.1 Breadcrumb / Stepper de navigation
- Barre horizontale pleine largeur, fond blanc/très clair.
- Suite d'étapes en chevrons pointant vers la droite, collées les unes aux autres.
- Étape inactive : fond gris clair, texte gris. Étape active : fond plein coloré (Menthe ou Bleu Marine selon parcours), texte blanc gras.
- Cliquable (chaque étape ramène à la section correspondante).

### 6.2 Bandeau d'information / définition
- Pilule ou rectangle arrondi, fond gris clair #F2F2F2, icône engrenage à gauche.
- Texte italique, taille légèrement réduite.
- Usage : définition ou rappel contextuel en haut de page (ex. définition des RPS).

### 6.3 Cartes « 3 colonnes » (page d'intro produit)
- 3 cartes égales, fond blanc, bordure Bleu Horizon #A4C8E1 et coins arrondis.
- Icône ronde colorée en haut (picto dans un cercle plein) + titre gras à droite.
- Corps : texte descriptif, listes à puces simples.

### 6.4 Carte « Ce qui est / Ce qui n'est pas » (comparatif binaire)
- Deux cartes côte à côte, coins arrondis.
- Bandeau header plein coloré (Menthe #00B388 à gauche vs Ocre #DC582A à droite), titre centré blanc gras.
- Corps : fond teinté clair de la même couleur (tint Vert d'Eau / tint Pêche), liste à puces, mots-clés en gras noir.
- Coins bas arrondis également (carte « pilule » complète).

### 6.5 Cartes homepage « choix de parcours » (Bienvenue)
- Deux (ou trois) grandes cartes cliquables, bordure fine colorée (Menthe ou Bleu Marine), fond blanc.
- Illustration plate centrée dans la carte (voir §7.2 pour les règles d'illustration officielles).
- Légende en dessous : texte gras italique centré, couleur = couleur de la carte.
- Icône main + curseur en bas à droite = indicateur « cliquable », couleur assortie.

### 6.6 Checklist (composant central du site)
Tableau/liste de lignes, chaque ligne contient :
- Case à cocher à gauche : carrée, coins arrondis ; vide = contour gris ; cochée = fond blanc, bordure Menthe, coche Menthe épaisse.
- Texte de l'item : phrase principale en noir, mots-clés en gras coloré (Menthe/Céruléen), complément entre parenthèses en normal/italique.
- Colonne « Combien de temps pour le faire ? » : icône sablier + texte italique type ~10 min / ~2h.
- Colonne « Pour aller plus loin » : icône loupe, cliquable → détail/ressource de l'item.
- Titre de section au-dessus : « Les points essentiels à réaliser » (centré, gras).
- Bas de page : bouton/lien « Retour » (icône flèche courbe + texte, couleur du thème).

### 6.7 Page de détail d'un item (2 colonnes)
- Bandeau surligné en haut (fond teinté clair), triangle/flèche à droite + intitulé de l'item (mots-clés en gras coloré).
- Colonne gauche — carte « Les questions à se poser » : bordure colorée fine, fond blanc, header icône ampoule + titre gras centré, liste à puces de questions.
- Colonne droite — carte « Ressources à ma disposition » : bandeau header plein foncé (Bleu Marine / Forêt), icône + titre blanc gras centré. Tableau 4 colonnes : Ressource (nom en gras coloré/lien, badge « Non disponible » si applicable) | Ce qu'elle apporte | sablier + temps estimé | cœur (favori).
- Sous le tableau : zone de texte libre (futur champ de prise de notes utilisateur).
- Bas de page : lien « Retour ».

### 6.8 Badges
- **« PROTOTYPE »** : badge blanc, bordure et texte Ocre, majuscules, gras — artefact de maquette, **à ne pas reproduire en prod**.
- **« Non disponible »** : badge plein Bleu Marine, texte blanc, très petit, sous le nom d'une ressource.
- **« En cours de relecture par les experts spécialisés »** : bandeau jaune pâle (tint Ambre #EED484) — artefact de maquette, à ne conserver que si un mode « brouillon » est explicitement demandé.

### 6.9 Encart d'alerte / attention
- Rectangle fond tint Pêche très pâle, texte noir gras avec passage souligné pour l'emphase forte (ex. limites de rôle du manager).
- Souvent suivi d'un bloc à fond tint Bleu Horizon contenant la liste de questions (mots-clés en bleu).

### 6.10 Pages de transition / séparateur de section
- Deux blocs verticaux : bande gauche pleine couleur foncée (Menthe foncée → **Forêt** / **Bleu Marine** selon la partie), ~1/3 de la largeur, **logo Groupe SNCF officiel** en bas à gauche (fichier logothèque, version en défonce si le contraste l'exige, zone de réserve respectée).
- Zone blanche à droite : H1 gras coloré + sous-titre descriptif (mots-clés en gras).
- Candidate au cadrage motrice pour le visuel d'ouverture de partie.

### 6.11 Fiches ressources riches (fin de kit)
Pages denses et illustrées, moins « gabarit uniforme » :
- Diagrammes en colonnes/swimlanes (parties prenantes, blocs en cascade avec flèches).
- Timelines en forme de chemin sinueux avec pastilles/étapes.
- Cartes « cas » avec pictos d'émotion (visage neutre/inquiet) pour des situations (blocage, désengagement, surcharge).
- Diagramme en étoile « Start / Stop / Continue / Do more / Do less » (5 branches autour d'un centre « Notre équipe »).
- Constante : cadre englobant bordure fine colorée, titre H2 centré, bouton « Retour » en bas à droite, cachet « Merci à la BU [xxx] pour le partage de ces bonnes pratiques » en italique gris avec icône médaille (couleur Safran).

---

## 7. Iconographie & illustrations

### 7.1 Photographie (charte officielle)
- Style spontané, lumineux et ouvert.
- Moments du quotidien liés au Groupe SNCF : photos réalistes et intimistes, incarnées (voyageurs, agents, infrastructures).
- Application produit : si des photos sont ajoutées au kit (fiches ressources, pages d'accueil), respecter ce style et privilégier le cadrage motrice pour les mises en avant.

### 7.2 Illustration (charte officielle)
- **Illustrations « motrice »** : réservées aux prises de parole sur engagements/valeurs/partenariats du Groupe. Toute nouvelle création doit être réalisée par des partenaires validés et approuvée par le Pôle identité.
- **Illustrations secondaires** : relais de la photo pour les concepts abstraits. Représentation de l'humain moins détaillée, corps non normés, pour proximité et inclusivité. Fond blanc possible, principalement sur fond coloré (palette du Groupe).
- Application produit : les illustrations flat « undraw » de la maquette (choix de parcours, couverture) sont à faire converger vers ce style d'illustrations secondaires — aplats de couleurs issus de la palette officielle uniquement, pas de couleurs libres. Les formes géométriques abstraites de la couverture reprennent les vifs de la palette (Corail, Lavande, Céruléen, Safran) en transparence.

### 7.3 Pictogrammes et icônes d'interface
- Charte : pictogrammes simples, accessibles, bien identifiés — usage signalétique, bureautique et web. Rester sur un style simple/géométrique, éviter le détail excessif.
- Produit : icônes outline 1-2 couleurs, souvent dans un cercle ou carré plein coloré. Librairie recommandée : **Lucide, Phosphor ou Heroicons** (styles outline), cohérentes avec les pictos officiels sans dépendre d'assets propriétaires.
- Vocabulaire iconographique du kit :
  - Main + curseur + étincelles = cliquable / lien
  - Loupe = « pour aller plus loin »
  - Flèche courbe = « Retour »
  - Sablier = estimation de temps
  - Cœur (plein/vide/chiffré) = favori / disponibilité
  - Ampoule = « questions à se poser » / astuce
  - Enveloppe = « Pour qui ? » · Cible = « À quoi sert-il ? » · Livre ouvert = « Vous y trouverez »
  - Engrenage = bandeau d'information/définition
  - Pouce levé / poignée de main / groupe = ressources humaines (aide, accompagnement, collectif)
  - Cercles numérotés (1, 2, 3), fond Bleu Marine plein, chiffre blanc gras = étapes d'instructions

---

## 8. Layout & grille

- Contenu conçu sur un format 16:9 type « slide/écran » (~1280×720), à traiter comme des pages plein écran avec zones fixes :
  - Zone haute : titre de page et/ou breadcrumb.
  - Zone centrale : contenu (cartes, tableaux, listes).
  - Zone basse : lien « Retour » en bas-droite (badge « PROTOTYPE » à ignorer en prod).
- Cartes/tableaux deux colonnes symétriques (50/50) avec gouttière claire.
- Coins arrondis généralisés (cartes, bandeaux, badges) — rayon moyen, style « friendly corporate ».
- Beaucoup d'espace blanc, hiérarchie visuelle claire (header coloré → corps neutre clair → texte) — cohérent avec la règle motrice du 1/3 d'espace blanc.
- ⚠️ Maquette pensée desktop uniquement : prévoir l'adaptation responsive (empiler les colonnes en mobile, breadcrumb scrollable horizontalement ou transformé en menu déroulant).

---

## 9. Ton éditorial / contenu

- Titres à la 2e personne ou impersonnels directs : « Bienvenue, quel est votre besoin ? », « Comment utiliser ce kit ? ».
- Questions formulées à la première personne pour le manager : « Est-ce que je… », « Ai-je… ».
- Vocabulaire RH/management professionnel mais accessible, acronymes du groupe SNCF conservés tels quels (DET, DUO, DPX, IRP, CSE, CSSCT, PSP…).
- Ton pédagogique, rassurant, orienté « outil d'aide » et non « outil de contrôle » (pas de « go/no go », pas de recette magique).
- Conformément à la charte : privilégier le bas de casse dans la titraille.

---

## 10. Recommandations techniques pour le vibecoding

### 10.1 Tokens CSS (palette officielle)

```css
:root {
  /* Palette officielle Groupe SNCF — ne pas modifier les valeurs */
  --sncf-menthe: #00B388;        /* accent Parcours 1, succès, coches */
  --sncf-vert-eau: #A1D6CA;      /* pastel Parcours 1 */
  --sncf-foret: #154734;         /* foncé Parcours 1, titre couverture */
  --sncf-bleu-marine: #00205B;   /* accent Parcours 2, bandeaux, badges */
  --sncf-bleu-horizon: #A4C8E1;  /* pastel Parcours 2, bordures cartes */
  --sncf-ceruleen: #0084D4;      /* liens, onglets actifs P2 */
  --sncf-cobalt: #003865;        /* foncé camaïeu bleu si besoin */
  --sncf-ocre: #DC582A;          /* alerte, négatif */
  --sncf-peche: #FDBE87;         /* fond alerte pâle */
  --sncf-safran: #DAAA00;        /* accent éditorial ponctuel */
  --sncf-ambre: #EED484;         /* bandeau brouillon éventuel */

  /* Neutres produit (hors palette officielle) */
  --color-gris-fond: #F2F2F2;
  --color-text: #333333;

  /* Tints pour grands aplats (revalider contraste) */
  --tint-p1: color-mix(in srgb, var(--sncf-vert-eau) 30%, white);
  --tint-p2: color-mix(in srgb, var(--sncf-bleu-horizon) 30%, white);
  --tint-alerte: color-mix(in srgb, var(--sncf-peche) 35%, white);

  /* Thème dynamique par parcours */
  --accent-color: var(--sncf-menthe);        /* basculer vers --sncf-bleu-marine en Parcours 2 */
  --accent-light: var(--tint-p1);

  --radius-card: 12px;
  --font-main: "Avenir LT Std", Arial, Helvetica, sans-serif;
}
```

### 10.2 Architecture composants
- Composant « Breadcrumb/Stepper » réutilisable piloté par un état de navigation (parcours actif + étape active) gérant la bascule de `--accent-color`.
- Briques réutilisables : `ChecklistRow`, `ResourceTable`, `QuestionCard`, `SectionBanner`, `Breadcrumb`, `ChoiceCard`, `SectionDivider`, `Badge`.
- Le champ « Zone de texte libre » suggère une prise de notes persistante (à clarifier avec le métier : sauvegarde locale/session ou compte utilisateur).
- Le badge « PROTOTYPE » et les bandeaux « en cours de relecture » sont des artefacts de maquette : ne pas intégrer en production, sauf mode « brouillon/preview » explicite.

### 10.3 Checklist qualité marque avant mise en ligne
1. Logo : fichiers officiels de la logothèque uniquement, zone de réserve et taille minimale respectées.
2. Couleurs : uniquement la palette officielle (+ neutres #F2F2F2 / #333333), aucun dégradé hors sigle.
3. Contraste : chaque paire fond/texte vérifiée WCAG, vigilance particulière sur Menthe et texte < 18 px (paires AA18).
4. Typo : Avenir LT Std chargée (licence validée avec le Pôle identité), Arial en fallback, titraille en bas de casse.
5. Motrice : jamais déformée, toujours droite, usage validé si création inédite.
6. Toute création graphique non couverte par ce document → validation Pôle identité / équipe ADN de marque avant diffusion.

---

## 11. Ressources et contacts

- **Espace Marques Groupe SNCF** : section « La charte graphique », « Les ressources » (logothèque, illustrations, pictos, photos, vidéos, sons) et « Les exemples ». Palette téléchargeable (ASE, LESS, SCSS), kit logo, kit Avenir LT Std, document d'accessibilité des couleurs.
- **Formation à la marque** : e-learning de 20 minutes sur **Station C**, ouvert à tous.
- **Questions charte et identité** : équipe **ADN de marque**.
- **Questions ressources iconographiques** : équipe **contenus de marque**.
- Fil d'actualité : Viva Engage.

---

*Document fusionné à partir de : (1) l'extraction du prototype PPTX Kit RPS Managers V2 et (2) la synthèse de la charte graphique officielle Groupe SNCF (marques.groupe-sncf.com). En cas de doute ou d'usage inédit, la charte officielle et le Pôle identité font foi.*
