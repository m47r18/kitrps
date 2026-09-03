# Kit d'accompagnement humain et de prévention des RPS

Prototype web autonome pour aider les managers, chefs de projet, acteurs RH et préventeurs à intégrer les facteurs humains dans leurs projets et à prévenir les risques psychosociaux (RPS) au quotidien.

## Fonctionnalités

- Trois check-lists pour intégrer les facteurs humains dans un projet :
  - la check-list pour soi-même ;
  - l'identification des impacts humains du projet ;
  - la préparation du collectif aux impacts du projet.
- Un parcours dédié à la prévention et à l'accompagnement des situations de RPS.
- Des fiches pratiques sur la gestion de projet, les parties prenantes, la charge de travail, la communication, les relais humains et l'ajustement collectif du cap.
- Des questions de réflexion et des zones de notes libres.
- Une progression par check-list avec cases à cocher.
- Une sauvegarde automatique dans le navigateur.
- L'export et l'import des notes et de l'avancement au format JSON.
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
├── index.html     # Structure de la page et point d'entrée
├── kit-rps.css    # Styles, responsive et accessibilité visuelle
├── kit-rps.js     # Contenus, navigation, rendu et sauvegarde locale
└── README.md      # Documentation du projet
```

Le contenu éditorial est centralisé dans les objets `RES`, `CL`, `P2` et `FICHES` du fichier `kit-rps.js`. Les styles principaux sont regroupés dans les variables CSS au début de `kit-rps.css`.

## Statut

Ce projet est un **prototype**. Certaines ressources sont indiquées comme non disponibles ou en cours de relecture. Les informations et coordonnées affichées doivent être vérifiées avant un usage opérationnel.

## Licence

Aucune licence open source n'est actuellement déclarée dans ce dépôt. Ajouter une licence adaptée avant une réutilisation ou une diffusion externe.