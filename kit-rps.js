"use strict";
/* =====================================================================
   PICTOS SVG (inline, réutilisables)
   ===================================================================== */
const ICO = {
  perso:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/></svg>',
  groupe:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3.2"/><circle cx="17" cy="9.5" r="2.6"/><path d="M2.5 20c0-3.4 2.9-5 6.5-5s6.5 1.6 6.5 5M15 15.3c3 .2 6 1.6 6 4.7"/></svg>',
  check:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="3" width="16" height="18" rx="2.5"/><path d="M8.5 9.5l2 2 4-4M8.5 16h7"/></svg>',
  loupe:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/></svg>',
  livre:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20"/></svg>',
  bulle:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12z"/></svg>',
  alerte:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3 2.5 20h19z"/><path d="M12 10v4.5m0 2.8v.2"/></svg>',
  coeur:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21c-4.5-3.2-8-6.2-8-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 3.8-3.5 6.8-8 10z"/></svg>',
  boussole:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/></svg>',
  q:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.2a2.6 2.6 0 1 1 3.6 2.4c-.8.4-1.1 1-1.1 1.9m0 2.9v.1"/></svg>',
  crayon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 3.5 20.5 7 8 19.5 3.5 20.5 4.5 16z"/></svg>',
  doc:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2.5h8L19 7.5v14H6z"/><path d="M14 2.5v5h5"/></svg>',
  retour:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',
  maison:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 11 12 3.5 20.5 11M6 10v10.5h12V10"/></svg>',
  loupeMini:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/></svg>',
  coeurMini:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21c-4.5-3.2-8-6.2-8-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 3.8-3.5 6.8-8 10z"/></svg>',
  sablier:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h12M6 21h12M7 3c0 5 5 6.5 5 9s-5 4-5 9M17 3c0 5-5 6.5-5 9s5 4 5 9"/></svg>'
};

/* =====================================================================
   RESSOURCES (référencées par identifiant dans les checklists)
   dispo:false = grisée / désactivée · fiche:'id' = fiche interne
   href à renseigner plus tard pour les ressources externes.
   ===================================================================== */
const RES = {
  gestionProjet:{lib:"Bonnes pratiques de gestion de projet et ressources matérielles",desc:"Bonnes pratiques préventives pour gérer un projet et pour identifier et gérer les ressources matérielles nécessaires au projet",time:"~ 3 min",dispo:true,fiche:"gestion-projet",type:"ficheReco"},
  resistances:{lib:"Accompagner les résistances au changement",desc:"Recommandations sur comment évaluer et appréhender les risques autour de la résistance au changement",time:"~ 3 min",dispo:false,type:"ficheReco"},
  relais:{lib:"Les relais humains pour prévenir et accompagner les RPS",desc:"Cartographie des relais pour prévenir et accompagner les RPS : identifier les personnes clés, leurs rôles et leurs contacts pour savoir sur qui s'appuyer",time:"~ 3 min",dispo:true,fiche:"relais",type:"ficheReco"},
  partiesPrenantes:{lib:"Les parties prenantes sur un projet et comment les embarquer",desc:"Cartographie des différentes parties prenantes sur un projet et bonnes pratiques pour les embarquer",time:"~ 3 min",dispo:true,fiche:"parties-prenantes",type:"ficheReco"},
  charge:{lib:"Comment aborder la charge de travail avec les équipes",desc:"Recommandations pour aborder la charge de travail pour soi-même et avec les équipes",time:"~ 8 min",dispo:true,fiche:"charge",type:"ficheReco"},
  powerApps:{lib:"Power Apps RPS",desc:"À utiliser avec votre préventeur qui est habilité à l'outil. Évaluation RPS qui se base sur les questions issues du RH970",time:"~ 1 h",dispo:false,type:"outil"},
  outilImpacts:{lib:"Outil d'évaluation des impacts humains",desc:"Une trame pour prendre en note toute votre réflexion sur les impacts humains du projet et qui permet une évaluation globale du risque humain sous forme de jauge",time:"~ 15 min",dispo:false,type:"outil"},
  remontee:{lib:"Outil de remontée d'informations / expression des salariés",desc:"Recueil des interrogations des salariés permettant de faire émerger les dysfonctionnements dans le cadre d'un projet",time:"—",dispo:false,type:"outil"},
  communication:{lib:"Bonnes pratiques de communication",desc:"Étapes clés pour communiquer durant un projet et bonnes pratiques sur la manière de communiquer",time:"~ 3 min",dispo:true,fiche:"communication",type:"ficheReco"},
  dialogueSocial:{lib:"Préparation du dialogue social",desc:"Présentation du processus avec les IRP et de la liste des documents à produire, et recommandations sur quand communiquer en lien avec les RS",time:"~ 5 min",dispo:false,type:"ficheReco"},
  etoile:{lib:"Comment ajuster le cap ensemble pour préserver l'équipe ?",desc:"Outil pour prendre du recul en équipe et identifier collectivement ce qu'il faut continuer, arrêter, faire plus ou moins et commencer",time:"~ 60 min",dispo:true,fiche:"etoile",type:"ficheReco"},
  formation:{lib:"Formation « Comprendre, évaluer, prendre en charge les RPS pour moi et pour mon collectif de travail »",desc:"De la théorie et des techniques pratiques pour mieux comprendre les RPS et le rôle du manager, savoir repérer les signaux faibles et accompagner un collaborateur en difficulté",time:"~ 1 j",dispo:false,type:"formation"},
  boiteIdees:{lib:"Boîte à idées pour bâtir un plan d'actions pour améliorer la QVT",desc:"Proposition d'actions simples et rapides sur lesquelles travailler pour améliorer l'organisation du travail et la qualité de vie au travail",time:"~ 3 min",dispo:false,type:"outil"}
};
/* Légende des types de ressources (cf. besoins fonctionnels, légende diapositive 5) */
const RES_TYPE_LABEL = {ficheReco:"Fiche recommandation", outil:"Outil", formation:"Formation"};

/* =====================================================================
   CHECKLISTS — Partie 1 : intégrer les facteurs humains dans le projet
   ===================================================================== */
const CL = {
  moi:{
    titre:"La check-list pour moi-même",
    sousTitre:"Quelles actions à mener pour moi au titre de mes fonctions ?",
    ico:"perso",
    items:[
      {t:"Définir les ressources (processus, outils, guides…) et compétences dont j'ai besoin pour mener ce projet",time:"~ 10 min",
       q:["Est-ce que j'ai tous les outils nécessaires pour gérer ce projet (kit méthodologique de gestion de projet…) ? Quels sont mes éventuels besoins de formation ?",
          "Suis-je en mesure de détecter les signaux faibles et d'accompagner les situations de RPS ? Est-ce que je suis à l'aise pour traiter des sujets RPS ?",
          "Ai-je les ressources spécifiques et les connaissances requises pour conduire la prévention des RPS (mesures opérationnelles de prévention…) ? Ai-je identifié mes éventuels besoins de formation ?",
          "Est-ce que je dispose des moyens techniques pour mener sereinement le projet (outils de gestion de projet, outils spécifiques selon la nature du projet…) ? Ai-je identifié mes besoins d'outillage ?"],
       res:["gestionProjet","resistances"]},
      {t:"Identifier les relais humains sur lesquels je peux m'appuyer (sponsors, valideurs, chefs de lots, contributeurs, réseau d'appui, préventeur, RH, coach externe… et clients du projet à écouter), et la manière de les embarquer",time:"~ 20 min",
       q:["Ai-je bien écouté et identifié les attentes des clients du projet ? Est-il nécessaire de conduire une phase d'écoute approfondie pour mieux cerner leurs besoins avant de démarrer ?",
          "Est-ce que je dispose des moyens humains nécessaires pour conduire sereinement le projet (chef de projet dédié de bout en bout, chefs de lots identifiés et disponibles, contributeurs identifiés et disponibles…) ? Ai-je besoin de m'appuyer sur des relais ou de déléguer ?",
          "Quels sont les relais humains sur lesquels je peux m'appuyer pour la prévention et l'accompagnement des RPS (réseau d'appui et de soutien aux managers, préventeur, RH, cellule de gestion de crise du PSP, médecine du travail…) ?",
          "Quels sont les domaines d'expertise sur lesquels j'ai besoin d'un appui sur le projet et quels interlocuteurs solliciter pour y répondre (coach externe…) ?",
          "Comment et à quel moment embarquer les relais humains pour les intégrer efficacement au projet (modalités et délai de sollicitation, éléments de langage…) ?",
          "Est-ce que le management de l'entité concernée est bien embarqué sur le projet ?"],
       res:["relais","partiesPrenantes","resistances"]},
      {t:"Préparer le pilotage du projet (structuration de la gestion de projet, outils, indicateurs, moments de partage / instances…)",time:"~ 2 h",
       q:["Ai-je bien cadré et structuré la gestion de projet (organisation du projet, livrables identifiés, planning et priorisation des actions, indicateurs clés, rituels à mettre en place pour la conduite du projet…) ? Ai-je identifié le niveau d'importance de mes tâches ?",
          "En particulier, quelle gouvernance projet mettre en place (instances du projet, participants et rôle décisionnaire de ces instances…) ?",
          "Ai-je les bons outils de pilotage pour le suivi de l'avancement du projet ?",
          "Ai-je bien identifié et anticipé les autres tâches à faire en amont du projet (diagnostic, démarche RPS…) ?",
          "Est-ce que je connais le planning des instances, celles propres au projet et celles auxquelles le projet contribuera ? Le cas échéant, ai-je bien anticipé leur planification et les contributions attendues ?"],
       res:[]},
      {t:"Évaluer et organiser ma charge de travail liée au projet et son impact sur mon activité, et évaluer mon besoin de déléguer",time:"~ 1 h",
       q:["Ai-je la capacité d'assumer la charge de travail liée à mes missions de chef de projet ?",
          "Ai-je évalué la charge de travail du chef de projet de bout en bout du projet ainsi qu'en amont ? Ai-je la bande passante pour absorber cette charge compte tenu de mes autres activités en run ? Le cas échéant, ai-je identifié les tâches pouvant être reportées, abandonnées ou déléguées, et à qui les déléguer ?",
          "Au regard de l'évaluation de ma charge de travail, dois-je requestionner l'allotissement du projet et la priorisation des tâches ?",
          "Comment aborder avec ma hiérarchie (en entretien Forfait Jour…) mes éventuelles difficultés, risques et besoins liés à ma charge de travail ?"],
       res:["charge"]},
      {t:"Assurer que le projet réunit toutes les conditions de réussite (mandat clair et validé, sponsor et/ou commanditaire de bon niveau pour le projet, collectif représentant le projet engagé…)",time:"~ 20 min",
       q:["Mener ce projet est-il bien la bonne solution pour atteindre l'objectif fixé par le commanditaire ? Ai-je identifié, si besoin, les marges de manœuvre sur la manière de faire pour garantir l'atteinte de cet objectif ?",
          "Ai-je rédigé le mandat de projet ? Est-il clair, validé et partagé ?",
          "Est-ce que le sponsor et/ou le commanditaire est identifié et de bon niveau pour assurer son rôle décisionnaire sur le projet ? Est-il mobilisé et en capacité de m'appuyer sur le projet ?",
          "Le projet est-il représenté et porté par un collectif (CODIR…) ? Ce collectif est-il engagé dans le projet ?",
          "Quelles sont les contraintes locales pour le déploiement de la solution ? Quelles marges de manœuvre au regard des échéances non négociables ? Le cas échéant, quels renoncements ou reports seront nécessaires par ailleurs ?"],
       res:[]}
    ]
  },
  impacts:{
    titre:"Identifier les impacts humains du projet",
    sousTitre:"Comment identifier les impacts humains du projet ?",
    ico:"loupe",
    items:[
      {t:"Identifier les entités les plus impactées, celles en interface potentiellement impactées et les interférences possibles avec d'autres projets",time:"~ 10 min",
       q:["Dans le périmètre du projet, certaines entités sont-elles plus impactées ou plus à risque et nécessiteraient une vigilance accrue dans l'accompagnement humain de leurs équipes ?",
          "Est-ce que des entités en interface de celles impliquées dans le périmètre du projet seraient potentiellement impactées également ? Quelle est la nature des impacts ? Besoin de vigiler l'accompagnement humain des équipes concernées ?",
          "Quelles adhérences du projet avec d'autres projets en cours ? Quelles interférences potentielles, y compris sur le timing ?",
          "Quelles mesures d'accompagnement prévoir pour les entités les plus impactées ? Pour les entités en interface ?"],
       res:["powerApps"]},
      {t:"Consulter le contexte global et l'historique des RPS pour disposer d'une vision consolidée des événements passés de l'entité concernée (ex. réorganisation récente…)",time:"~ 15 min",
       q:["Ai-je pris en compte le contexte global en termes de RPS au sein de l'entité concernée (baromètre C'est à Vous dont le pré-diagnostic RPS, enquête Pulse le cas échéant, EvRPS, démarche d'évaluation des RPS initiale, indicateurs RH : absentéisme, arrêts maladie, départs et mobilité, accidents…) ?",
          "Ai-je la vision des événements vécus ces dernières années par l'entité qui ont pu avoir un impact négatif sur son niveau de RPS (réorganisation récente subie, conflit dans l'équipe, changement managérial, déménagement…) ? Ai-je consulté la ligne managériale, les RH et les préventeurs de l'entité ?",
          "Une évaluation RPS des entités impactées par le projet a-t-elle déjà été faite ?",
          "Quel est l'impact du projet à court terme pour l'équipe concernée ? Les mesures d'accompagnement prévues tiennent-elles compte du contexte RPS de l'entité ? Quelles marges de manœuvre pour adapter le déploiement ?"],
       res:["powerApps"]},
      {t:"Évaluer l'impact potentiel sur les missions et les pratiques des salariés (geste métier, compétences, utilisation d'outil, polyvalence, contact client…) et identifier les actions facilitant la mise en mouvement",time:"~ 20 min",
       q:["Le projet induit-il de nouveaux gestes métiers, une modification ou une suppression de certains gestes métiers pour réaliser les missions des salariés ?",
          "Les salariés doivent-ils acquérir de nouvelles compétences ou faire évoluer leurs compétences (non-utilisation de compétences acquises par exemple) ? Est-ce que le projet induit ou impacte la polyvalence des salariés ?",
          "Le projet fait-il évoluer l'outillage ou le matériel utilisé pour réaliser les missions (nouvel outil SI, évolution d'un matériel…) ?",
          "Quel est l'impact du projet sur l'exigence émotionnelle demandée aux salariés (plage de contact avec les clients plus longue ou courte, évolution des interactions sociales, des niveaux hiérarchiques en interface, du nombre d'interlocuteurs, interaction avec de nouvelles EF…) ?",
          "Est-ce que le projet induit une modification substantielle de poste ? Le cas échéant, ai-je prévu les actions d'accompagnement nécessaires : formation (à créer si non existante), visite médicale d'aptitude, adaptation du poste de travail, changements d'habilitations, période de montée en compétence avec objectifs adaptés, changements de matériel… ?"],
       res:["outilImpacts"]},
      {t:"Évaluer l'impact sur l'emploi des salariés (création / suppression / modification substantielle de postes) et sur leur parcours professionnel, et déterminer dès le début du projet l'accompagnement spécifique",time:"~ 15 min",
       q:["Est-ce que le projet supprime des postes existants ou en crée de nouveaux ?",
          "Est-ce que l'impact du projet sur les emplois nécessite d'anticiper des reclassements pour certains salariés ? Ai-je prévu de me rapprocher de l'ATM pour préparer l'accompagnement ?",
          "L'impact du projet sur l'emploi de l'agent est-il positif ou négatif quant à son parcours professionnel à moyen-long terme (prérequis pour un futur poste, accès à de futurs postes, mobilité interne, progression hiérarchique, intégration au parcours hauts potentiels…) ?",
          "Quel est l'impact du projet sur l'employabilité par rapport au bassin d'emploi local (progression possible à l'externe, valorisation du poste à l'externe…) ?"],
       res:["outilImpacts"]},
      {t:"Évaluer l'impact sur les rôles, le périmètre de responsabilité ou le sens du travail (ex. ennui…) pour les agents concernés",time:"~ 5 min",
       q:["Quel est l'impact du projet sur le rôle ou le périmètre de responsabilité de l'agent : évolution des responsabilités, nouvelle répartition des tâches impliquant une évolution du rôle (ex. rôle d'expert au sein de l'équipe), chevauchement de responsabilités… ?",
          "Est-ce que les nouveaux périmètres peuvent conduire à un conflit de rôle : attentes en contradiction avec la conception du rôle perçue par l'agent ou avec ses valeurs, incompatibilité entre plusieurs attentes (ex. réduire le temps passé auprès d'un client et assurer un meilleur service), difficulté à concilier les attentes des différentes sphères de vie… ?",
          "Est-ce que le projet peut impacter positivement ou négativement le sens du travail : ennui lié à une répétitivité des tâches, monotonie liée à un nouveau périmètre d'action, reconnaissance pour un nouveau positionnement, perte du lien social en cas de réduction du travail en équipe… ?",
          "Quel accompagnement pour anticiper ces impacts ?"],
       res:["outilImpacts"]},
      {t:"Évaluer si le projet induira un impact sur la charge de travail des agents pendant le projet (participation au projet…) et en run",time:"~ 15 min",
       q:["Est-ce que le projet aura un impact sur la charge de travail des agents une fois les évolutions déployées (en run) ? Ai-je évalué la charge de travail des agents en cible, et me suis-je assuré qu'elle est compatible avec leurs autres missions ?",
          "Quel sera l'impact sur la charge de travail pendant le projet pour les agents embarqués ? Ai-je évalué cette charge et me suis-je assuré que les agents ont la bande passante pour l'absorber ? Le cas échéant, ai-je identifié les tâches pouvant être reportées, abandonnées ou déléguées, et à qui ?",
          "Ai-je identifié les mesures d'accompagnement des agents pour qu'ils puissent aborder la question de la charge de travail pendant le projet et en cible (entretien avec le manager…) ?"],
       res:["outilImpacts","charge"]},
      {t:"Identifier si le projet fait évoluer les conditions de travail des agents (amplitude horaire, travail de nuit, autonomie, télétravail, diversité des tâches…)",time:"~ 20 min",
       q:["Quel est l'impact du projet sur le temps de travail : amplitude horaire, travail de nuit ou le week-end, horaires décalés, flexibilité des horaires… ?",
          "Est-ce que le projet a un impact sur le rythme de travail : intensité, objectifs irréalistes ou flous, imprévisibilité des horaires, évolution des temps de pause… ?",
          "Est-ce que le projet fait évoluer l'autonomie ou la marge de manœuvre : rythme imposé, participation aux décisions, fatigue décisionnelle, faibles marges de manœuvre, autonomie trop grande, impossibilité de développer ses compétences… ?",
          "La complexité et la diversité des tâches (nature, fréquence, périodicité) évoluent-elles ?",
          "Est-ce que le projet fait évoluer le télétravail : possibilité d'en faire, évolutions des modalités (ex. jours imposés)… ?",
          "Quel est l'impact sur les moyens et les contraintes physiques : évolution des équipes, ergonomie du poste, répétitivité des gestes, manipulation d'équipements lourds… ?",
          "Est-ce que l'environnement de travail est impacté : nuisances sonores, visuelles ou olfactives, travail à l'intérieur / extérieur, exposition à des produits chimiques… ?",
          "Quel impact sur les relations avec les clients, la hiérarchie et les collègues ?",
          "Les impacts impliquent-ils de faire évoluer l'organisation du travail au global : plages de travail et temps de déconnexion (ex. décalage du prochain service), congé dominical, éléments du package de rémunération… ?",
          "Quelles mesures d'accompagnement mettre en place pour préparer le collectif aux changements ?"],
       res:["outilImpacts"]},
      {t:"Identifier si le projet implique un changement géographique avec des impacts directs sur les agents (déménagement, temps de déplacement…) ou d'autres impacts sur leur organisation personnelle",time:"~ 10 min",
       q:["Est-ce que le projet implique un changement géographique (déménagement, délocalisation…) ? Quel impact pour les agents : temps de trajet travail-domicile, accessibilité au nouveau site (transports en commun, difficulté d'itinéraire, parking sécurisé…) ? Quelles solutions (navette, véhicule professionnel, aménagement des horaires, adaptation du télétravail, covoiturage…) ?",
          "Le projet fait-il évoluer le nombre de déplacements professionnels (fréquence des découchés…) ? Quelles solutions proposer (hébergement, frais de taxi, frais de restauration, aménagement du temps de travail…) ?",
          "Quels impacts sur l'équilibre vie professionnelle-personnelle : incompatibilité avec les horaires de crèches ou d'établissements scolaires, garde d'enfants supplémentaire, fatigue à gérer, incompatibilité avec des contraintes médicales ou le rôle d'aidant, accessibilité contrainte à une activité sportive… ?",
          "Quelles marges de manœuvre dans la mise en œuvre du projet pour assurer cet équilibre ? Ai-je échangé avec les agents concernés sur les mesures individuelles nécessaires au regard de leur situation personnelle ?",
          "Quelles mesures d'accompagnement pour les agents en situation de handicap ?"],
       res:["outilImpacts"]},
      {t:"Évaluer les impacts financiers du projet pour les agents : directs (rémunération, astreintes…) et indirects (frais de déplacement, frais de garde d'enfants…)",time:"~ 10 min",
       q:["Quels sont les impacts sur la rémunération globale : évolution de la rémunération, des éléments variables (primes, compléments, avantages en nature…), des heures supplémentaires, des astreintes, de l'enveloppe déplacements (trajet, repas…) ?",
          "Est-ce que le projet impacte le niveau de vie des agents : frais de déplacement supplémentaires (essence, péage…), usure du véhicule personnel, frais de restauration, frais de garde d'enfant, frais d'équipement du poste de travail à domicile pour le télétravail… ?",
          "Quelles mesures d'accompagnement individuelles est-il possible de mettre en œuvre : prise en charge des frais supplémentaires (allocation déplacement, prime carburant…), mise à disposition de moyens de transport (navette, taxi, véhicule de fonction…), places en crèche à proximité du lieu de travail… ?"],
       res:["outilImpacts"]},
      {t:"Déterminer si le projet induit des changements par rapport à la culture du collectif (culture hiérarchique, identité métier, sentiment d'appartenance, modalités de reconnaissance…)",time:"~ 15 min",
       q:["Est-ce que le projet fait évoluer la culture du métier et comment (identité du métier, ce qu'il représente pour les agents et sa valeur — ex. passer d'un métier sédentaire à un métier roulant —, sentiment d'appartenance, passage d'une organisation par métier à une organisation par produit…) ?",
          "Les changements font-ils évoluer la culture hiérarchique du collectif (ex. passage de missions concentrées sur une expertise reconnue à des missions multi-métiers avec perte du rôle d'expert, passage d'une approche de sanction des erreurs à une approche de pédagogie…) ?",
          "Quels changements sur les relations interpersonnelles avec les collègues, la hiérarchie ou les clients internes / externes ?",
          "Quel est l'impact du projet sur les rituels formels ou informels de l'équipe ou de l'entité ?",
          "Quel accompagnement du collectif prévoir pour anticiper ces impacts ?"],
       res:["outilImpacts"]}
    ]
  },
  collectif:{
    titre:"Préparer le collectif aux impacts du projet",
    sousTitre:"Comment préparer le collectif aux impacts du projet ?",
    ico:"groupe",
    items:[
      {t:"Incarner le projet, savoir en expliquer la finalité, le sens et le bien-fondé, et s'assurer que les éléments de langage sont produits et partagés par la ligne hiérarchique",time:"~ 20 min",
       q:["Est-ce que je me sens à l'aise pour incarner le projet ?",
          "Est-ce que je sais expliquer les raisons et / ou dans quel but est mené le projet ? Ai-je les éléments de langage pour expliquer ce que va apporter le projet en termes de bénéfices, de résolution de dysfonctionnements, d'évolution pour les bénéficiaires… ?",
          "Est-ce que je sais porter auprès des équipes la viabilité du projet ? Ai-je réalisé son analyse économique pour comparer bénéfices et coûts ? Est-ce que je sais expliquer les gains ou pertes qu'amène le projet pour l'entité et pour l'entreprise ?",
          "Est-ce que je sais porter les risques à ne pas faire le projet ainsi que les intérêts à le faire plutôt qu'à ne pas le faire ?",
          "Les éléments de langage ont-ils été produits et sont-ils partagés par la ligne hiérarchique ? Ai-je eu des recommandations sur la manière de porter les messages ? Sinon, comment prendre contact avec le collectif représentant le projet / le sponsor pour les recueillir ?"],
       res:[]},
      {t:"Identifier les moments incontournables du projet et définir comment accompagner les agents lors de ces jalons",time:"~ 20 min",
       q:["Quelles sont les étapes clés à « ne pas rater » en termes de communication et d'accompagnement humain : embarquer les parties prenantes en amont, associer le responsable RH/RS dès l'origine, faire une réunion de lancement avec l'équipe, communiquer au collectif avant les informations en instances représentatives du personnel, communiquer régulièrement pour éviter l'effet « tunnel »… ?",
          "Quelles actions à destination des agents mettre en place pour les accompagner à ces jalons ?"],
       res:[]},
      {t:"S'appuyer sur des bonnes pratiques pour conduire le changement et favoriser une approche de travail collaboratif (intelligence collective, groupe miroir, médecine du travail…)",time:"~ 10 min",
       q:["Est-ce que je connais les bonnes pratiques pour conduire le changement auprès des agents pendant le projet et à sa mise en œuvre ? Ai-je échangé avec des pairs sur leurs témoignages concrets ? Quelles actions d'accompagnement mettre en place et auprès de quelles cibles ?",
          "Ai-je prévu d'utiliser une méthode d'intelligence collective ?",
          "Ai-je prévu de favoriser le travail en collaboration avec les managers, agents, partenaires médico-sociaux (Action Sociale, PSP, médecine du travail…), autres parties prenantes, clients… ? Ai-je prévu la présence des partenaires médico-sociaux au lancement du projet ? Comment intégrer les nouveaux collaborateurs ? Quelle collaboration entre collaborateurs d'entités différentes ?",
          "Quelles modalités de travail collaboratif ai-je prévues : groupe miroir, atelier participatif, tournée terrain, séminaire de travail… ? Comment y associer les parties prenantes ?",
          "Ai-je identifié les marges de manœuvre possibles pour le déploiement ? Le collectif concerné a-t-il la possibilité d'influer sur la manière de déployer le projet ? Comment l'associer pour identifier la solution organisationnelle la plus adéquate ?"],
       res:[]},
      {t:"S'appuyer sur des dispositifs d'écoute active et d'échanges avec les agents dès la phase amont et aux moments clés, et comprendre les enjeux des parties prenantes",time:"~ 10 min",
       q:["Comment est-ce que je m'assure d'être informé des interrogations des salariés en amont et aux moments clés du projet ?",
          "Ai-je prévu la mise en place d'espaces d'échange pour favoriser l'écoute active des agents (démarche d'écoute, forum sur site, participation à un rituel…) ?",
          "Ai-je besoin de m'appuyer ou de déléguer à un tiers neutre la réalisation des dispositifs d'écoute (partenaires médico-sociaux, prestataires spécialisés…) ? Comment solliciter ces interlocuteurs et les embarquer ?",
          "Ai-je établi la cartographie des parties prenantes ? Ai-je bien identifié leurs enjeux et leurs priorités ?"],
       res:["remontee"]},
      {t:"Identifier à quel moment réaliser une évaluation RPS approfondie, en complément de l'évaluation initiale",time:"~ 5 min",
       q:["Est-ce qu'une évaluation RPS a été réalisée au démarrage du projet ?",
          "Durant le projet, comment j'identifie le besoin de réaliser une évaluation du ressenti des agents impliqués ? À quel moment opportun la réaliser ?",
          "Pendant le projet, comment je détecte le besoin de réaliser une évaluation approfondie des RPS liés à la solution organisationnelle cible ? Quand serait-il judicieux de la conduire ?"],
       res:["powerApps"]},
      {t:"Organiser la communication sur le projet pour donner aux équipes la primeur de l'information (au regard du calendrier social), avec le relais des parties prenantes",time:"~ 20 min",
       q:["Ai-je identifié comment et à quel moment communiquer pendant les différentes phases du projet au regard des échéances du dialogue social ?",
          "Quel niveau d'information puis-je communiquer aux agents ? Comment leur donner la primeur de l'information ?",
          "Ai-je préparé le plan de communication : cibles et leurs caractéristiques, modalités de diffusion pour chaque cible (fréquence, pluralité des formats…), temps forts de communication ?",
          "Comment je m'assure d'identifier les ressources fiables (informations certaines, ne pas véhiculer de « rumeurs ») ?",
          "Est-ce que je peux m'appuyer sur les parties prenantes (chef de projet, sponsor, ligne managériale…) pour assurer un relais de la communication ? Maîtrisent-elles les éléments de langage et savent-elles « raconter l'histoire » ?"],
       res:["communication"]},
      {t:"Préparer le dialogue avec les Instances Représentatives du Personnel tout au long du projet : du calendrier des instances à la stratégie à mettre en place",time:"~ 20 min",
       q:["Quel est le contexte de dialogue social avant le projet ?",
          "Comment embarquer les Organisations Syndicales comme partie prenante pour relayer les retours du terrain, contribuer aux réflexions… ?",
          "Ai-je pu m'appuyer sur le RH/RS pour préparer le calendrier social : auprès de quelles instances communiquer (CSE, CSP, CSSCT, comité de proximité, informations-consultations, bilatérales…), à quelle fréquence, quels éléments et à quel niveau de détail, à quelle date être prêt, comment se mettre en relation avec les personnes qui préparent et président l'instance… ?",
          "Ai-je préparé ma stratégie de dialogue social en accord avec mon mandat : limites légales, opérationnelles et stratégiques à ne pas franchir, sujets et leviers de négociation possibles… ?",
          "Comment je m'assure de ne pas faire de délit d'entrave ? Bonnes pratiques : intégrer les consultations du CSE dès la conception, garder une trace écrite des échanges, fournir les informations demandées dans les délais, sensibiliser les équipes aux obligations légales."],
       res:["dialogueSocial"]}
    ]
  }
};

/* =====================================================================
   PARTIE 2 : prévenir et accompagner les RPS au quotidien
   ===================================================================== */
const P2 = {
  comprendre:{titre:"Comprendre et s'informer",ico:"livre",
    intro:"Les points essentiels à réaliser pour développer sa capacité à comprendre les RPS.",
    pts:["Se questionner sur sa capacité à comprendre, prévenir et accompagner les RPS",
         "Analyser ses pratiques managériales (réguler ses propres émotions…)",
         "Être sensibilisé et sensibiliser les équipes aux RPS",
         "Situer les experts RPS à solliciter"]},
  prevenir:{titre:"Comment agir pour prévenir les RPS",ico:"boussole",
    intro:"Les points essentiels à réaliser pour agir en prévention au quotidien.",
    pts:["Écouter les agents (individuellement et collectivement) pour comprendre la situation et savoir détecter les signaux faibles",
         "Connaître et vigiler les indicateurs de suivi des RPS",
         "Contribuer au dialogue social de proximité autour de la santé au travail (connaître les obligations d'information en instance, qui informer, dans quel cas)",
         "Agir sur les facteurs de risque (évaluation de la charge de travail, charge cognitive, perte de sens, perte de repères sur l'avenir…)",
         "Écouter les agents par soi-même (temps d'échange qualitatifs, ex. 6 h d'expression des salariés…) ou par un tiers neutre (expert…)",
         "Communiquer de manière transparente pour expliquer les changements prévus ou en cours (support, temps d'échange)",
         "Remonter les alertes : comment et à qui (outils, référents RPS…)",
         "Traiter les dysfonctionnements du terrain qui génèrent du stress au quotidien (mise en qualité des procédures métier…)",
         "S'appuyer sur des relais humains (préventeur, RH, ligne managériale, pairs…)",
         "Orienter les agents soumis à des RPS : vers qui (médecine du travail, PSP, Action Sociale…) et comment les inciter à utiliser ces moyens",
         "Mettre en place des plans d'action pour aider les salariés à faire face aux RPS (gestion du stress, des changements, bonnes pratiques…)"]},
  difficiles:{titre:"Comment accompagner et traiter les situations difficiles",ico:"coeur",
    intro:"En tant que manager, vous êtes accompagné par des interlocuteurs spécialisés pour la gestion des situations difficiles. Vous pouvez également vous questionner sur les points suivants, dans les limites de votre rôle de manager et de vos responsabilités face à la situation.",
    pts:["Est-ce que je suis à l'écoute de mes émotions et de mes besoins face à la situation de RPS ?",
         "Est-ce que je connais mon périmètre d'intervention dans cette situation en tant que manager (rester dans l'empathie…) ?",
         "Est-ce que j'ai besoin de déléguer et/ou d'être aidé, et par qui (préventeur, RH, ligne managériale, Action Sociale, médecine du travail, cellule de soutien psychologique…) ?",
         "Comment sécuriser le reste de l'équipe ?",
         "Comment communiquer auprès du reste de l'équipe (être présent, être accompagné d'un collègue…) ?",
         "Comment communiquer auprès des IRP (quelle obligation d'information, qui informer…) ?",
         "Comment accompagner l'agent en souffrance liée à une situation RPS avérée ?",
         "Comment accompagner l'équipe en cas d'événement grave ?",
         "Comment accompagner la poursuite ou le retour au travail des agents ayant eu une situation RPS ?",
         "Identifier son propre état vis-à-vis de la situation et connaître les attitudes à éviter (vouloir solutionner, être dans la sympathie…)",
         "Détecter les situations professionnelles et personnelles à risque, savoir évaluer la cause et le degré de risque (évaluation RPS) et prendre des décisions"]},
  ressources:{titre:"Ressources complémentaires",ico:"doc",
    intro:"Les ressources à votre disposition pour la prévention et l'accompagnement des RPS au quotidien.",
    res:["charge","etoile","formation","relais","boiteIdees"]}
};

/* =====================================================================
   FICHES RESSOURCES (contenu des slides 39 à 48)
   ===================================================================== */
const FICHES = {
  "gestion-projet":{
    titre:"Comment identifier et gérer les ressources matérielles nécessaires au projet ?",
    credit:"Merci à la BU TER HDF pour le partage de ces bonnes pratiques",
    html:()=>`
    <div class="cols">
      <section class="bloc" aria-labelledby="f-gp-1">
        <h3 id="f-gp-1">${ICO.check} Les ressources matérielles — 3 bons réflexes</h3>
        <h4>J'identifie</h4>
        <p>Je m'assure que toutes les ressources dont j'ai besoin pour conduire le projet (outil SI, outil de gestion de projet, habilitations / badges, locaux, poste de travail, matériel IT / téléphonie, équipement technique…) sont bien identifiées, disponibles et connues / maîtrisées de toutes les équipes concernées.</p>
        <h4>Je prévois</h4>
        <p>Je n'attends pas le dernier moment pour identifier et communiquer mes besoins en ressources à chaque nouvelle phase du projet.</p>
        <h4>J'alerte</h4>
        <p>Je n'attends pas si une ressource manque ou est insuffisante : je sollicite les responsables directs du projet pour les décisions opérationnelles ; je fais appel aux décideurs ou sponsors si un arbitrage plus important est nécessaire.</p>
      </section>
      <section class="bloc" aria-labelledby="f-gp-2">
        <h3 id="f-gp-2">${ICO.alerte} En cas de désengagement, blocage, surcharge ?</h3>
        <p class="lead" style="margin-bottom:.8rem">Privilégiez certaines actions clés qui peuvent vous aider :</p>
        <ul class="q">
          <li>Identifier les questions structurantes à instruire en début de projet</li>
          <li>Toujours tracer les décisions</li>
          <li>Mettre les acteurs en responsabilité et en visibilité</li>
          <li>Revoir régulièrement l'analyse de risques</li>
          <li>Jouer la transparence sur les alertes et risques</li>
          <li>Privilégier un pilotage de projet clair, simple et efficace</li>
          <li>Se méfier de la sur-information en trouvant le bon niveau de partage et en privilégiant des informations ciblées</li>
        </ul>
      </section>
    </div>`
  },
  "parties-prenantes":{
    titre:"Les différentes parties prenantes sur un projet et comment les embarquer ?",
    credit:"Merci à la BU TER HDF pour le partage de ces bonnes pratiques",
    html:()=>`
    <section class="bloc" aria-labelledby="f-pp-1">
      <h3 id="f-pp-1">${ICO.groupe} Qui intervient quand ?</h3>
      <div class="cols">
        <div class="relais-card"><span class="tag">Décisions &amp; orientations</span>
          <h5>Sponsor(s)</h5><p>Porte le projet au plus haut niveau et arbitre les orientations stratégiques.</p></div>
        <div class="relais-card"><span class="tag">Pilotage</span>
          <h5>Chef de projet</h5><p>Pilote le projet et le bon déroulement des travaux ainsi que leur coordination.</p>
          <h5 style="margin-top:.7rem">Chefs de lots ou de chantiers</h5><p>Secondent le chef de projet sur le périmètre d'un lot ou d'un chantier en suivant son avancement et en garantissant la qualité des travaux.</p></div>
        <div class="relais-card"><span class="tag">Réalisation / mise en œuvre</span>
          <h5>Préfigurateur</h5><p>Challenge les chefs de lot sur les travaux et préfigure la solution sur le terrain.</p>
          <h5 style="margin-top:.7rem">Contributeurs &amp; experts</h5><p>Contribuent aux travaux du projet en apportant leur expertise métier ou technique.</p>
          <h5 style="margin-top:.7rem">Ambassadeurs et relais opérationnels</h5><p>Facilitent l'appropriation avec le relais sur le terrain et la remontée des retours.</p></div>
        <div class="relais-card"><span class="tag">Bénéficiaires</span>
          <h5>Clients du projet</h5><p>Expriment leurs besoins et attentes sur la solution cible.</p></div>
      </div>
    </section>
    <section class="bloc" aria-labelledby="f-pp-2">
      <h3 id="f-pp-2">${ICO.check} Bonnes pratiques pour le chef de projet pour embarquer les parties prenantes</h3>
      <ul class="q">
        <li>Embarquer les parties prenantes en amont du lancement du projet en les informant et en clarifiant avec elles leur rôle sur le projet</li>
        <li>Intégrer les contributeurs dans la conception de la solution en la coconstruisant avec eux selon leurs retours</li>
        <li>Informer les parties prenantes, qui ne sont pas directement contributrices, de l'avancement du projet à chaque jalon clé</li>
        <li>Identifier les collectifs qui seront impactés par la solution en run et les tenir informés du projet au fil de l'eau par les ambassadeurs et les relais</li>
        <li>Identifier les contributeurs nécessaires à la bonne réalisation du projet, clarifier les responsabilités de chacun et alerter la ligne hiérarchique en cas de besoin de ressources complémentaires</li>
        <li>Évaluer les enjeux et la disponibilité de chaque partie prenante pour adapter leur niveau d'implication au besoin et mieux prévenir les RPS</li>
        <li>Prévoir un dispositif d'écoute des clients au démarrage du projet pour mieux comprendre leurs attentes</li>
      </ul>
    </section>`
  },
  "relais":{
    titre:"Les relais humains pour prévenir et accompagner les RPS",
    credit:"En cours de relecture par les experts spécialisés",
    html:()=>{
      const card=(titre,desc,contact)=>`<div class="relais-card bloc" style="margin-bottom:0"><h5>${titre}</h5><p>${desc}</p>${contact?`<p class="contact">${contact}</p>`:""}</div>`;
      return `
      <p class="lead">Identifier les relais internes sur lesquels vous appuyer au cours d'un projet ou au quotidien, pour prévenir, repérer et accompagner les RPS, et les mobiliser en amont des projets afin d'assurer un soutien efficace aux équipes.</p>
      <h4 class="fiche-h4" style="color:var(--c-accent);text-transform:uppercase;letter-spacing:.08em;font-size:.85rem;margin:.4rem 0 .7rem">Relais au sein de mon entité</h4>
      <div class="cols">
        ${card("Direction","Me guide et me soutient, sécurise les ressources pour conduire le projet, facilite les décisions et relaye la communication projet.")}
        ${card("Ressources Humaines","Conseille, outille et accompagne sur le volet humain pour identifier et prévenir les RPS, gérer les situations difficiles et orienter vers les bons relais.")}
        ${card("Préventeur","Aide, conseille et accompagne pour évaluer, prévenir et traiter les situations RPS.")}
        ${card("Responsable Social (RS)","Me conseille et m'accompagne pour préparer le dialogue social, me connecter aux organisateurs des instances et constituer les dossiers.")}
      </div>
      <h4 style="color:var(--c-accent);text-transform:uppercase;letter-spacing:.08em;font-size:.85rem;margin:1.4rem 0 .7rem">Relais spécialisés sur mon territoire</h4>
      <div class="cols">
        ${card("Réseau d'appui et de soutien","M'accompagne pour renforcer le dialogue de proximité et prévenir les RPS, me soutient dans la gestion des situations difficiles et m'aide à évaluer les risques humains, structurer des plans d'action, animer des groupes de travail…","Contact à venir")}
        ${card("Médecine du travail","Offre une écoute confidentielle et une analyse neutre, m'accompagne dans la construction de solutions pour gérer les situations de RPS, et est à embarquer au lancement du projet pour le préparer.","Taper « annuaire médical » dans la barre de l'intranet")}
        ${card("Pôle de Soutien Psychologique (PSP)","Offre un soutien psychologique aux salariés et aux collectifs de travail exposés à un stress professionnel ou à un événement impactant, et m'accompagne, en tant que manager, dans la gestion des situations préoccupantes et l'accompagnement des agents en difficulté.","Numéro vert unique : <strong>0800 39 17 87</strong><br>Lun-ven : 8 h-18 h · Nuit et week-end si événement grave")}
        ${card("Action Sociale","Offre un accompagnement confidentiel face aux difficultés personnelles ou de vie, propose un soutien individualisé et familial, m'aide à analyser les situations (difficulté ou arrêt d'un agent), m'oriente vers les bons dispositifs internes ou externes, et est à embarquer au lancement du projet pour le préparer.","Numéro vert : <strong>0800 20 66 20</strong><br>Lun-jeu : 9 h-17 h · Ven et veilles de fêtes : 9 h-16 h<br><a href='mailto:action.sociale@sncf.fr'>action.sociale@sncf.fr</a>")}
      </div>
      <h4 style="color:var(--c-accent);text-transform:uppercase;letter-spacing:.08em;font-size:.85rem;margin:1.4rem 0 .7rem">Relais complémentaires en territoire</h4>
      <div class="cols">
        ${card("ATM — Agences Territoriales de la Mobilité","Me conseille dès l'amont des réorganisations et m'accompagne pour repositionner les salariés impactés.")}
        ${card("Médiateurs","Facilitent, en tant que tiers neutre, le dialogue lors de tensions interpersonnelles et m'aident à résoudre le conflit et à reprendre le travail dans un contexte relationnel apaisé.")}
        ${card("Coachs internes","M'aident à renforcer mes compétences relationnelles et managériales pour prévenir les RPS et agir efficacement.","SharePoint Coaching DPML")}
      </div>`;
    }
  },
  "charge":{
    titre:"Aborder la charge de travail avec les équipes",
    credit:"",
    html:()=>`
    <p class="lead">La charge de travail se situe au carrefour des objectifs de chacun et des ressources dont ils disposent. Son déséquilibre (surcharge, sous-charge) peut générer des risques psychosociaux. Son analyse régulière permet de repérer les situations en écart et d'y répondre avec le collectif. Le manager joue un rôle central : en parler sans tabou pour mieux l'organiser.</p>
    <div class="cols">
      <section class="bloc" aria-labelledby="f-ch-1">
        <h3 id="f-ch-1">${ICO.boussole} Quand</h3>
        <ul class="q">
          <li>Ne pas attendre une situation dégradée pour l'évoquer</li>
          <li>La réévaluer régulièrement pour mieux piloter l'activité et prévenir les RPS</li>
        </ul>
        <h4>Les occasions pour le faire</h4>
        <ul class="q">
          <li>En entretien individuel (entretien annuel, entretien forfait jour, entretien à la demande…)</li>
          <li>En collectif pour aborder la répartition de la charge collective (réunion d'équipe, point d'activité, réunion dédiée…)</li>
        </ul>
      </section>
      <section class="bloc" aria-labelledby="f-ch-2">
        <h3 id="f-ch-2">${ICO.loupe} Comment</h3>
        <p style="margin-bottom:.7rem">Mettre en évidence une charge au plus proche de la réalité en prenant en compte les 3 dimensions de la charge de travail :</p>
        <ul class="q">
          <li><strong>Objectiver</strong> la charge nécessaire pour réaliser les missions du poste et les activités complémentaires (lettre de mission, projet…) en tenant compte de la récurrence des tâches</li>
          <li><strong>Identifier</strong> les autres impacts indirects sur la charge des équipes (projet de transformation, évolution de fonctionnement, absences imprévues…)</li>
          <li><strong>Tenir compte</strong> de la charge ressentie par le collaborateur (contraintes externes — temps de trajet, contraintes familiales —, caractéristiques personnelles — expérience, santé —, engagement, difficultés perçues…)</li>
        </ul>
        <h4>Intégrer les conditions réelles qui influent sur la charge</h4>
        <ul class="q">
          <li>Aléa (imprévu, dysfonctionnement…)</li>
          <li>Coordination (échanges entre collègues, entraide, rituels…)</li>
          <li>Compétences (apprentissage d'un nouvel outil, évolution des compétences…)</li>
          <li>Conditions de travail (ressources / outils insuffisants ou facilitants, interruptions fréquentes, environnement physique, impact du télétravail…)</li>
          <li>Temps « improductif » (pauses, prise de recul, délais de route…)</li>
        </ul>
      </section>
      <section class="bloc" aria-labelledby="f-ch-3">
        <h3 id="f-ch-3">${ICO.check} Avant, pendant, après l'entretien</h3>
        <ul class="q">
          <li><strong>Avant :</strong> proposer au collaborateur de préparer son analyse, préparer la vôtre, planifier un temps dédié distinct de tout autre sujet</li>
          <li><strong>En entretien :</strong> y accorder de l'importance, questionner les conditions réelles, explorer le ressenti, discuter des priorités, échanger sur les ajustements utiles, demander à être alerté sur les besoins de renoncement, s'engager à accompagner les difficultés</li>
          <li><strong>Après :</strong> escalader si nécessaire (hiérarchie, RH, médecine du travail, préventeur), identifier les solutions d'aménagement, assurer un suivi</li>
          <li>Au besoin, déployer une démarche d'écoute du collectif</li>
        </ul>
        <h4>En collectif</h4>
        <ul class="q">
          <li>Valoriser les succès</li>
          <li>Partager des repères collectifs (niveau de qualité, priorités, fonctionnement)</li>
          <li>Laisser au collectif la marge de manœuvre de proposer des ajustements (entraide, binôme…) et les arbitrer en tenant compte des souhaits et compétences</li>
          <li>Prévenir l'éventuelle mauvaise répartition de la charge en toute transparence avec le collectif</li>
        </ul>
      </section>
      <section class="bloc" aria-labelledby="f-ch-4">
        <h3 id="f-ch-4">${ICO.bulle} Avec quelle posture</h3>
        <ul class="q">
          <li><strong>Libérer la parole :</strong> prendre l'initiative, ouvrir un espace bienveillant, être exemplaire, prendre le temps d'en parler à tous les niveaux</li>
          <li><strong>Écouter activement :</strong> ne pas interrompre, reformuler pour vérifier la compréhension, poser des questions ouvertes, rester attentif aux signaux non verbaux contradictoires</li>
          <li><strong>Favoriser le dialogue :</strong> accueillir les émotions sans les minimiser, ne pas se justifier ni être sur la défensive, prendre le temps de réfléchir et coconstruire les solutions</li>
        </ul>
      </section>
    </div>`
  },
  "communication":{
    titre:"Bonnes pratiques de communication autour d'un projet",
    credit:"Merci à la BU Axe TGV Sud-Est pour le partage de ces bonnes pratiques",
    html:()=>`
    <p class="lead">Informer les agents tout au long du projet avec une communication claire permet de réduire les incertitudes, de limiter les inquiétudes, de maintenir un climat de confiance et de favoriser l'adhésion au projet.</p>
    <section class="bloc" aria-labelledby="f-co-1">
      <h3 id="f-co-1">${ICO.bulle} Communication dans les étapes clés du projet</h3>
      <ol class="frise" style="list-style:none">
        <li class="e"><h5>Amont du projet</h5><ul><li>Réunion d'information avec le collectif concerné</li><li>Temps de questions / réponses avec les agents</li></ul></li>
        <li class="e"><h5>Lancement du projet</h5><ul><li>Réunion de lancement avec les parties prenantes</li><li>Message de lancement au collectif concerné</li></ul></li>
        <li class="e"><h5>Préparation du projet</h5><ul><li>Information régulière du collectif concerné</li><li>Communication suite aux instances paritaires, et information en amont si possible</li></ul></li>
        <li class="e"><h5>Déploiement</h5><ul><li>Communication de lancement aux agents concernés par le projet</li></ul></li>
        <li class="e"><h5>Projet déployé</h5><ul><li>Temps de questions / réponses avec les agents</li><li>Archivage de la documentation</li></ul></li>
      </ol>
    </section>
    <section class="bloc" aria-labelledby="f-co-2">
      <h3 id="f-co-2">${ICO.check} Une communication réussie</h3>
      <ul class="q">
        <li>Communiquer régulièrement pour éviter l'effet « tunnel »</li>
        <li>Prévoir des temps d'échange pour répondre aux questions et recueillir les retours des agents</li>
        <li>Diffuser les informations au bon moment en évitant la surcharge et la concurrence avec d'autres communications majeures</li>
        <li>Identifier en amont les canaux de communication disponibles et leurs gestionnaires (intranet, SharePoint, newsletter…)</li>
        <li>Diversifier les formats et les canaux (réunions, e-mails, intranet, SharePoint, vidéos, newsletter…)</li>
        <li>Associer le chargé de communication dès le lancement du projet pour construire le plan de communication</li>
        <li>Identifier les relais de communication possibles tout au long du projet (sponsor, ligne managériale, DirCom locale…)</li>
        <li>Recueillir les retours des agents et adapter la stratégie de communication pour répondre aux préoccupations exprimées</li>
      </ul>
    </section>`
  },
  "etoile":{
    titre:"Comment ajuster le cap ensemble pour préserver l'équipe ?",
    credit:"Outil issu de la formation « Comprendre, évaluer, prendre en charge les RPS pour moi et mon équipe » du catalogue « managers & leaders » SNCF, dispensée par Empreinte Humaine",
    html:()=>`
    <p class="lead"><strong>Notre objectif :</strong> agir sur ce qui compte vraiment pour améliorer notre quotidien et renforcer notre capacité à durer ensemble. Prévoir une réunion d'1 h pour réfléchir collectivement.</p>
    <section class="bloc" aria-labelledby="f-et-1">
      <h3 id="f-et-1">${ICO.boussole} Comment utiliser cet outil ?</h3>
      <ul class="q">
        <li><strong>En équipe :</strong> prenez un temps ensemble pour réfléchir à chacune des 5 branches de l'étoile</li>
        <li><strong>Échangez :</strong> partagez vos idées, écoutez-vous et complétez toutes les branches</li>
        <li><strong>Priorisez :</strong> choisissez 1 à 3 actions à mettre en œuvre en priorité — quelle est l'action qui aura le plus d'impact avec le moins d'effort ?</li>
      </ul>
      <p class="contact"><strong>Astuce :</strong> soyez concrets et réalistes. De petites actions régulières ont plus d'impact que de grandes intentions.</p>
    </section>
    <div class="etoile" role="list">
      <div class="b" role="listitem"><h5>Continuer</h5><p>Qu'est-ce qui fonctionne déjà et que nous souhaitons préserver ?</p><em>Exemple : soutien entre collègues, proximité managériale…</em></div>
      <div class="b" role="listitem"><h5>Faire plus</h5><p>Quelles pratiques nous aident aujourd'hui et méritent d'être renforcées ?</p><em>Exemple : temps de transmission, entraide, reconnaissance…</em></div>
      <div class="b" role="listitem"><h5>Faire moins</h5><p>Qu'est-ce que nous pouvons accepter de réduire ou simplifier ?</p><em>Exemple : perfectionnisme, reporting excessif, contrôle systématique…</em></div>
      <div class="b" role="listitem"><h5>Commencer</h5><p>Quelles nouvelles actions pourrions-nous expérimenter ?</p><em>Exemple : point météo hebdomadaire, débrief difficile…</em></div>
      <div class="b" role="listitem"><h5>Arrêter</h5><p>Quelles habitudes ou pratiques nous coûtent inutilement de l'énergie ?</p><em>Exemple : réunions peu utiles, sur-sollicitation, gestion dans l'urgence…</em></div>
    </div>
    <section class="bloc" style="margin-top:1.2rem" aria-labelledby="f-et-2">
      <h3 id="f-et-2">${ICO.crayon} Nos prochaines actions</h3>
      ${zone("fiche-etoile-actions","Notez ici vos 1 à 3 actions prioritaires et la date de revue (à revoir le __ / __ / ____).")}
    </section>`
  }
};

/* =====================================================================
   ÉTAT — localStorage
   Statut à 3 niveaux (0 = vide, 1 = en cours, 2 = fait — cf. besoins
   fonctionnels diapositive 4 : « cases à cocher vide / en cours / fait »).
   Les anciens exports (checks booléens) restent lisibles : true => fait.
   ===================================================================== */
const KEY="kit-rps-v1";
let STATE={};
try{STATE=JSON.parse(localStorage.getItem(KEY)||"{}")}catch(e){STATE={}}
function save(){localStorage.setItem(KEY,JSON.stringify(STATE))}
function touchRevision(id){STATE.revised=STATE.revised||{};STATE.revised[id]=new Date().toISOString()}
function setNote(id,val){STATE.notes=STATE.notes||{};STATE.notes[id]=val;touchRevision(id);save()}
function getNote(id){return (STATE.notes&&STATE.notes[id])||""}
function setChk(id,val){STATE.checks=STATE.checks||{};STATE.checks[id]=Math.max(0,Math.min(2,val));touchRevision(id);save()}
function getChk(id){
  const v=STATE.checks&&STATE.checks[id];
  if(v===true) return 2;
  if(typeof v==="number") return v;
  return 0;
}
function cycleChk(id){setChk(id,(getChk(id)+1)%3)}
function getRevised(id){
  const v=STATE.revised&&STATE.revised[id];
  if(!v) return "";
  const d=new Date(v);
  return isNaN(d)?"":d.toLocaleDateString("fr-FR");
}
function setLike(id,val){STATE.likes=STATE.likes||{};STATE.likes[id]=val;save()}
function getLike(id){return !!(STATE.likes&&STATE.likes[id])}
function toggleLike(id){setLike(id,!getLike(id))}

/* =====================================================================
   PARCOURS FLÉCHÉ (« réglette » — besoins fonctionnels diapositive 4)
   Bandeau d'étapes cliquables reproduisant le repérage visuel présent
   sur les diapositives 12 à 25 de la maquette PPTX, pour permettre à
   l'utilisateur de se situer et de revenir en 1 clic à toute étape.
   ===================================================================== */
const STEPPER_PROJET=[
  {key:"accueil",label:"Accueil",href:"#/"},
  {key:"cas",label:"Cas d'usage",href:"#/projet"},
  {key:"cl-moi",label:"Checklist pour moi-même",href:"#/cl/moi"},
  {key:"res-moi",label:"Ressources pour moi-même",href:"#/cl/moi"},
  {key:"cl-impacts",label:"Checklist des impacts humains",href:"#/cl/impacts"},
  {key:"res-impacts",label:"Ressources impacts humains",href:"#/cl/impacts"},
  {key:"cl-collectif",label:"Checklist pour préparer le collectif",href:"#/cl/collectif"},
  {key:"res-collectif",label:"Ressources préparation collectif",href:"#/cl/collectif"}
];
const STEPPER_RPS=[
  {key:"cas",label:"Cas d'usage",href:"#/rps"},
  {key:"comprendre",label:"Comprendre et s'informer",href:"#/rps/comprendre"},
  {key:"prevenir",label:"Prévenir les RPS",href:"#/rps/prevenir"},
  {key:"difficiles",label:"Accompagner les situations difficiles",href:"#/rps/difficiles"},
  {key:"ressources",label:"Ressources complémentaires",href:"#/rps/ressources"}
];
function stepperHtml(steps,currentKey){
  const lis=steps.map(s=>{
    const cur=s.key===currentKey;
    return `<li><a href="${s.href}"${cur?' class="current" aria-current="step"':""}>${s.label}</a></li>`;
  }).join("");
  return `<nav class="stepper" aria-label="Étapes du parcours"><ol>${lis}</ol></nav>`;
}

/* =====================================================================
   HELPERS DE RENDU
   ===================================================================== */
const esc=s=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
function zone(id,label){
  return `<label for="${id}" style="display:block;font-weight:500;margin-bottom:.5rem">${label}</label>
  <textarea id="${id}" data-note="${id}">${esc(getNote(id))}</textarea>
  <p class="saved" id="${id}-saved" aria-live="polite"></p>`;
}
const TRI_LABEL=["Vide","En cours","Fait"];
function triCtrl(id,itemLabel){
  const v=getChk(id);
  return `<button type="button" class="tri tri-${v}" data-tri="${id}" aria-label="Statut de « ${esc(itemLabel)} » : ${TRI_LABEL[v]}. Cliquer pour changer de statut (vide, en cours, fait)."><span aria-hidden="true"></span></button>`;
}
function resTable(ids){
  if(!ids.length) return "";
  const rows=ids.map(id=>{
    const r=RES[id];
    const typeBadge=r.type&&RES_TYPE_LABEL[r.type]?`<span class="type-badge type-${r.type}">${RES_TYPE_LABEL[r.type]}</span>`:"";
    const liked=getLike(id);
    const likeBtn=r.dispo?`<button type="button" class="like${liked?" liked":""}" data-like="${id}" aria-pressed="${liked}" aria-label="${liked?"Retirer « "+esc(r.lib)+" » de mes ressources utiles":"Marquer « "+esc(r.lib)+" » comme utile"}">${ICO.coeurMini}</button>`:"";
    if(r.dispo){
      const lien=r.fiche?`<a href="#/fiche/${r.fiche}">${r.lib}</a>`:(r.href?`<a href="${r.href}" target="_blank" rel="noopener">${r.lib} <span class="visually-hidden">(nouvelle fenêtre)</span></a>`:`<span class="lib">${r.lib}</span>`);
      return `<tr><td>${lien}${typeBadge}</td><td>${r.desc}</td><td><span class="time time-ico">${ICO.sablier} ${r.time}</span></td><td>${likeBtn}</td></tr>`;
    }
    return `<tr class="res-off"><td><span class="lib">${r.lib}</span><span class="badge-off">Non disponible</span>${typeBadge}</td><td>${r.desc}</td><td><span class="time time-ico" style="background:var(--c-fond);color:var(--c-off)">${ICO.sablier} ${r.time}</span></td><td></td></tr>`;
  }).join("");
  return `<section class="bloc" aria-label="Ressources à ma disposition">
    <h3>${ICO.loupeMini} Ressources à ma disposition</h3>
    <div style="overflow-x:auto"><table class="res">
      <thead><tr><th scope="col">Ressource</th><th scope="col">Ce qu'elle apporte</th><th scope="col">Durée</th><th scope="col"><span class="visually-hidden">Marquer comme utile</span></th></tr></thead>
      <tbody>${rows}</tbody></table></div>
  </section>`;
}
/* Regroupements de points d'une checklist affichés sur une même page,
   quand la maquette PPTX ne consacre pas de diapositive dédiée à chacun
   (ex. « moi » : les points 1 et 2 partagent une seule page, slides 17-18). */
const ITEM_GROUPS={moi:[[0,1],[2],[3],[4]]};
function itemGroup(clId,i){
  const g=(ITEM_GROUPS[clId]||[]).find(g=>g.includes(i));
  return g||[i];
}
function itemBlock(clId,i){
  const cl=CL[clId],it=cl.items[i];
  const noteId=`note-${clId}-${i}`,statusId=`${clId}-${i}`,rev=getRevised(statusId);
  const questions=`<section class="bloc quest-card"><h3>${ICO.q} Les questions à se poser</h3>
      <ul class="q">${it.q.map(q=>`<li>${q}</li>`).join("")}</ul></section>`;
  const notes=`<section class="bloc"><h3>${ICO.crayon} Zone de texte libre</h3>
      ${zone(noteId,"Vos notes sur ce point (sauvegardées automatiquement dans ce navigateur) :")}</section>`;
  const corps=it.res.length
    ? `<div class="cols">${questions}<div style="display:flex;flex-direction:column;gap:1.1rem">${resTable(it.res)}${notes}</div></div>`
    : `${questions}${notes}`;
  return `<div class="item-head"><h2 class="page">${it.t}</h2><span class="time time-ico">${ICO.sablier} ${it.time}</span></div>
    ${corps}
    <div class="bloc item-status">
      ${triCtrl(statusId,it.t)}
      <span>${rev?`Révisé le ${rev}`:"Statut non renseigné pour l'instant"}</span>
    </div>`;
}
function ptsList(clId,cl){
  const total=cl.items.length;
  const done=cl.items.filter((_,i)=>getChk(`${clId}-${i}`)===2).length;
  const pct=Math.round(done/total*100);
  const lis=cl.items.map((it,i)=>{
    const id=`${clId}-${i}`,lvl=getChk(id),rev=getRevised(id);
    return `<li class="pt${lvl===2?" done":""}${lvl===1?" inprogress":""}">
      ${triCtrl(id,it.t)}
      <span class="t"><a class="tlink" href="#/cl/${clId}/${i}">${it.t}</a>${rev?`<span class="revised">Révisé le ${rev}</span>`:""}</span>
      <span class="meta"><span class="time time-ico">${ICO.sablier} ${it.time}</span><a class="detail" href="#/cl/${clId}/${i}">${ICO.loupeMini} Pour aller plus loin</a></span>
    </li>`;
  }).join("");
  return `<div class="progress"><strong>${done} / ${total}</strong> points traités
      <div class="bar" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100" aria-label="Avancement de la checklist"><div style="width:${pct}%"></div></div>
    </div>
    <ul class="pts">${lis}</ul>
    <section class="bloc" style="margin-top:1.2rem"><h3>${ICO.crayon} Notes générales sur cette checklist</h3>
      ${zone(`cl-${clId}-notes`,"Vos observations générales sur cette checklist (sauvegardées automatiquement dans ce navigateur) :")}</section>`;
}

/* =====================================================================
   VUES
   ===================================================================== */
/* Page placeholder pour les liens légaux de pied de page, en attendant leur rédaction */
function pageEnConstruction(titre){
  return {titre,crumbs:[["#/","Accueil"]],render:()=>`
    <h2 class="page">${titre}</h2>
    <div class="bloc">
      <p class="lead">Cette page est en cours de construction.</p>
      <p>Le contenu de « ${titre} » sera ajouté prochainement.</p>
    </div>
    <div class="navret">
      <a class="btn sec" href="#/">${ICO.maison} Accueil</a>
    </div>`};
}
const VUES={
  "":{titre:"Accueil",crumbs:[],render:()=>`
    <div class="home-shell">
      <h2 class="page home-title">Bienvenue, quel est votre besoin ?</h2>
    <div class="grid g2">
      <a class="brique brique-projet" href="#/projet"><img class="brique-illus" src="img/besoinProjet.png" alt="" aria-hidden="true"><span class="ico">${ICO.boussole}</span>
        <h3>J'ai besoin d'intégrer les facteurs humains en amont et pendant le projet</h3>
        <p>Checklists pour moi-même, pour identifier les impacts humains du projet et pour préparer le collectif.</p>
        <span class="cta">Commencer →</span></a>
      <a class="brique brique-rps" href="#/rps"><img class="brique-illus" src="img/besoinPrevention.png" alt="" aria-hidden="true"><span class="ico">${ICO.coeur}</span>
        <h3>J'ai besoin de prévenir et d'accompagner les situations de RPS pour mon collectif</h3>
        <p>Comprendre et s'informer, agir en prévention, accompagner et traiter les situations difficiles.</p>
        <span class="cta">Commencer →</span></a>
      </div></div>`},
  "projet":{titre:"Intégrer les facteurs humains dans le projet",crumbs:[["#/","Accueil"]],render:()=>`
    <h2 class="page">Intégrer les facteurs humains en amont et pendant le projet</h2>
    <div class="grid g3">
      <a class="brique bleu" href="#/projet/checklists"><img class="brique-illus" src="img/besoinProjetConsequent.png" alt="" aria-hidden="true"><span class="ico">${ICO.check}</span>
        <h3>J'ai un projet conséquent</h3><p>Je veux parcourir les questions à se poser pour assurer un accompagnement humain du projet.</p>
        <span class="cta">Voir les 3 checklists →</span></a>
      <a class="brique bleu" href="#/projet/essentiel"><img class="brique-illus" src="img/besoinProjetModeste.png" alt="" aria-hidden="true"><span class="ico">${ICO.boussole}</span>
        <h3>J'ai un projet plus modeste</h3><p>Je veux aller à l'essentiel et identifier les incontournables.</p>
        <span class="cta">Voir l'essentiel →</span></a>
      <a class="brique bleu" href="#/sommaire"><img class="brique-illus" src="img/besoinProjetExplorer.png" alt="" aria-hidden="true"><span class="ico">${ICO.loupe}</span>
        <h3>Je veux explorer</h3><p>Je veux naviguer librement pour trouver les informations qui m'aident.</p>
        <span class="cta">Voir le sommaire →</span></a>
    </div>
    <div class="bloc" style="margin-top:1.4rem">
      <h3>${ICO.q} À savoir</h3>
      <p>Faire l'intégralité des trois checklists et de leurs ressources prend environ <strong>2 jours</strong>. Conseil : vous pouvez sanctuariser un temps dédié en amont du projet si vous souhaitez tout parcourir.</p>
    </div>`},
  "projet/checklists":{titre:"Les 3 checklists",crumbs:[["#/","Accueil"],["#/projet","Facteurs humains projet"]],render:()=>`
    <h2 class="page">Les trois checklists du volet humain</h2>
    <div class="grid g3">
      ${Object.entries(CL).map(([id,cl])=>`
      <a class="brique brique-projet" href="#/cl/${id}"><span class="ico">${ICO[cl.ico]}</span>
        <h3>${cl.titre}</h3><p>${cl.sousTitre}</p>
        <span class="cta">${cl.items.length} points · ouvrir →</span></a>`).join("")}
    </div>`},
  "projet/essentiel":{titre:"L'essentiel",crumbs:[["#/","Accueil"],["#/projet","Facteurs humains projet"]],render:()=>`
    <h2 class="page">Aller à l'essentiel : les incontournables</h2>
    <p class="lead">Les points essentiels des trois checklists, en un coup d'œil. Cochez ce qui est traité ; cliquez sur un point pour ses questions et ressources.</p>
    ${Object.entries(CL).map(([id,cl])=>`
      <h3 style="color:var(--c-primaire);margin:1.4rem 0 .8rem;display:flex;gap:.5rem;align-items:center"><span style="color:var(--c-accent)">${ICO[cl.ico]}</span>${cl.titre}</h3>
      ${ptsList(id,cl)}`).join("")}`},
  "rps":{titre:"Prévenir et accompagner les RPS",crumbs:[["#/","Accueil"]],render:()=>`
    <h2 class="page">Prévenir et accompagner les situations de RPS pour mon collectif</h2>
    <p class="lead">Les risques psychosociaux (RPS) sont des risques induits par le travail, son organisation ou ses relations, susceptibles d'altérer la santé physique ou mentale des salariés.</p>
    <div class="grid g2">
      ${Object.entries(P2).map(([id,s])=>`
      <a class="brique brique-rps" href="#/rps/${id}"><span class="ico">${ICO[s.ico]}</span>
        <h3>${s.titre}</h3><p>${s.intro}</p><span class="cta">Ouvrir →</span></a>`).join("")}
    </div>`},
  "sommaire":{titre:"Sommaire",crumbs:[["#/","Accueil"]],render:()=>`
    <h2 class="page">Explorer librement le kit</h2>
    <div class="cols">
      <section class="bloc"><h3>${ICO.check} Checklists projet</h3><ul class="q">
        ${Object.entries(CL).map(([id,cl])=>`<li><a class="detail" href="#/cl/${id}">${cl.titre}</a></li>`).join("")}
        <li><a class="detail" href="#/projet/essentiel">L'essentiel des trois checklists</a></li></ul></section>
      <section class="bloc"><h3>${ICO.coeur} RPS au quotidien</h3><ul class="q">
        ${Object.entries(P2).map(([id,s])=>`<li><a class="detail" href="#/rps/${id}">${s.titre}</a></li>`).join("")}</ul></section>
      <section class="bloc"><h3>${ICO.livre} Fiches ressources</h3><ul class="q">
        ${Object.entries(FICHES).map(([id,f])=>`<li><a class="detail" href="#/fiche/${id}">${f.titre}</a></li>`).join("")}</ul></section>
    </div>`},
  "mentions-legales":pageEnConstruction("Mentions légales"),
  "confidentialite":pageEnConstruction("Politique de confidentialité"),
  "cookies":pageEnConstruction("Gestion des cookies"),
  "cgu":pageEnConstruction("Conditions générales d'utilisation"),
  "accessibilite":pageEnConstruction("Accessibilité"),
  "plan-du-site":pageEnConstruction("Plan du site")
};

/* =====================================================================
   ROUTEUR
   ===================================================================== */
const $vue=document.getElementById("vue");
const $crumbs=document.getElementById("crumbs");

function crumbsHtml(list,current){
  const items=[...list.map(([h,l])=>`<li><a href="${h}">${l}</a></li>`),`<li><span aria-current="page">${current}</span></li>`];
  return items.join("");
}
function retour(href,label){
  return `<div class="navret">
    <a class="btn sec" href="${href}">${ICO.retour} ${label}</a>
    <a class="btn sec" href="#/">${ICO.maison} Accueil</a>
  </div>`;
}
function render(){
  const hash=location.hash.replace(/^#\//,"");
  let html="",titre="Accueil",crumbs=[];

  const mCl=hash.match(/^cl\/([a-z]+)$/);
  const mIt=hash.match(/^cl\/([a-z]+)\/(\d+)$/);
  const mP2=hash.match(/^rps\/([a-z]+)$/);
  const mF=hash.match(/^fiche\/([a-z-]+)$/);
  const STEPPER_HASH={"projet":[STEPPER_PROJET,"cas"],"projet/checklists":[STEPPER_PROJET,"cas"],"rps":[STEPPER_RPS,"cas"]};

  if(VUES[hash]){
    const v=VUES[hash];titre=v.titre;crumbs=v.crumbs;
    const st=STEPPER_HASH[hash];
    html=(st?stepperHtml(st[0],st[1]):"")+v.render();
  }else if(mCl&&CL[mCl[1]]){
    const cl=CL[mCl[1]];titre=cl.titre;
    crumbs=[["#/","Accueil"],["#/projet","Facteurs humains projet"],["#/projet/checklists","Checklists"]];
    html=stepperHtml(STEPPER_PROJET,"cl-"+mCl[1])+`<h2 class="page">${cl.titre}</h2><p class="lead">${cl.sousTitre}</p>
      ${ptsList(mCl[1],cl)}${retour("#/projet/checklists","Retour aux checklists")}`;
  }else if(mIt&&CL[mIt[1]]&&CL[mIt[1]].items[+mIt[2]]){
    const clId=mIt[1],i=+mIt[2],cl=CL[clId],group=itemGroup(clId,i);
    titre=cl.items[group[0]].t;crumbs=[["#/","Accueil"],["#/projet","Facteurs humains projet"],[`#/cl/${clId}`,cl.titre]];
    const blocks=group.map(idx=>itemBlock(clId,idx)).join(`<hr class="item-sep">`);
    html=stepperHtml(STEPPER_PROJET,"res-"+clId)+blocks+retour(`#/cl/${clId}`,"Retour à la checklist");
  }else if(mP2&&P2[mP2[1]]){
    const s=P2[mP2[1]];titre=s.titre;crumbs=[["#/","Accueil"],["#/rps","RPS au quotidien"]];
    const noteId=`note-rps-${mP2[1]}`;
    html=stepperHtml(STEPPER_RPS,mP2[1])+`<h2 class="page">${s.titre}</h2><p class="lead">${s.intro}</p>
      ${s.pts?`<section class="bloc"><h3>${ICO.check} Les points essentiels</h3><ul class="q">${s.pts.map(p=>`<li>${p}</li>`).join("")}</ul></section>`:""}
      ${s.res?resTable(s.res):""}
      <section class="bloc"><h3>${ICO.crayon} Zone de texte libre</h3>
        ${zone(noteId,"Vos notes (sauvegardées automatiquement dans ce navigateur) :")}</section>
      ${retour("#/rps","Retour au menu RPS")}`;
  }else if(mF&&FICHES[mF[1]]){
    const f=FICHES[mF[1]];titre=f.titre;crumbs=[["#/","Accueil"],["#/sommaire","Sommaire"]];
    html=`<div class="fiche"><h2 class="page">${f.titre}</h2>${f.html()}
      ${f.credit?`<p style="font-size:.82rem;color:var(--c-texte-2);margin-top:1rem;font-style:italic">${f.credit}</p>`:""}
      <div class="navret">
        <button type="button" class="btn sec" data-back>${ICO.retour} Retour</button>
        <a class="btn sec" href="#/">${ICO.maison} Accueil</a>
      </div></div>`;
  }else{
    const v=VUES[""];titre=v.titre;crumbs=[];html=v.render();
  }

  $vue.innerHTML=html;
  $crumbs.innerHTML=crumbsHtml(crumbs,titre);
  document.title=(titre==="Accueil"?"":titre+" — ")+"Kit d'accompagnement humain et de prévention des RPS";
  document.body.classList.toggle("theme-projet",hash==="projet"||hash.startsWith("projet/")||hash.startsWith("cl/"));
  document.body.classList.toggle("theme-rps",hash==="rps"||hash.startsWith("rps/"));
  $vue.focus({preventScroll:true});
  window.scrollTo(0,0);
  bind();
}

/* =====================================================================
   INTERACTIONS
   ===================================================================== */
let debounce;
function bind(){
  $vue.querySelectorAll("textarea[data-note]").forEach(t=>{
    t.addEventListener("input",()=>{
      clearTimeout(debounce);
      debounce=setTimeout(()=>{
        setNote(t.dataset.note,t.value);
        const s=document.getElementById(t.id+"-saved");
        if(s){s.textContent="Enregistré ✓";setTimeout(()=>{s.textContent=""},2000)}
      },400);
    });
  });
  $vue.querySelectorAll("button[data-tri]").forEach(b=>{
    b.addEventListener("click",()=>{cycleChk(b.dataset.tri);render()});
  });
  $vue.querySelectorAll("button[data-like]").forEach(b=>{
    b.addEventListener("click",()=>{toggleLike(b.dataset.like);render()});
  });
  $vue.querySelectorAll("[data-back]").forEach(b=>{
    b.addEventListener("click",()=>history.back());
  });
}

/* Export / import */
document.getElementById("btn-export").addEventListener("click",()=>{
  const blob=new Blob([JSON.stringify({exporteLe:new Date().toISOString(),...STATE},null,2)],{type:"application/json"});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download="kit-rps-notes-"+new Date().toISOString().slice(0,10)+".json";
  a.click();URL.revokeObjectURL(a.href);
});
const $file=document.getElementById("file-import");
document.getElementById("btn-import").addEventListener("click",()=>$file.click());
$file.addEventListener("change",()=>{
  const f=$file.files[0];if(!f)return;
  const r=new FileReader();
  r.onload=()=>{try{
    const d=JSON.parse(r.result);
    STATE={notes:d.notes||{},checks:d.checks||{},likes:d.likes||{},revised:d.revised||{}};save();render();
    alert("Notes importées.");
  }catch(e){alert("Fichier invalide : import impossible.")}};
  r.readAsText(f);$file.value="";
});

window.addEventListener("hashchange",render);
render();
