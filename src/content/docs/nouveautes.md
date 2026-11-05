---
title: "Nouveautés"
description: "Le journal des versions de Coall, côté utilisateur : ce qui a changé, de la plus récente à la plus ancienne."
order: 22
group: "Référence"
---

Ce journal liste les changements visibles dans Coall, du plus récent au plus ancien. Vos projets sont conservés d'une version à l'autre.

## Mode Play : une page devient un prototype

- Un bouton **▶** en haut à droite de chaque frame (au survol, ou quand la frame est sélectionnée) ouvre la page en plein écran, à sa largeur.
- La page défile, les survols réagissent, on peut écrire dans les champs.
- Les liens et boutons mènent aux autres écrans du projet, par leur texte (« Tarifs » ouvre l'écran « Tarifs »), par leur adresse, ou par un lien posé par l'IA (« relie le bouton Commencer à la page Inscription »). Un lien `#section` fait défiler la page.
- Un clic à côté d'un lien montre en violet tout ce qui est cliquable. Un lien qui ne mène à aucun écran le dit ; un lien externe n'est pas suivi.
- En haut : retour, liste des écrans, formats de l'écran, **Recommencer** et **Quitter** (ou Échap). D'un format à l'autre, les liens restent dans le même format.
- À l'import d'un site à plusieurs pages, les liens entre pages sont reliés aux écrans importés.

Voir [Mode Play](/docs/mode-play).

## Comparer une hypothèse à l'officielle

- En sélectionnant une hypothèse, le panneau Design liste ses différences avec l'officielle, numérotées dans l'ordre de la page : **Modifié** (avec l'avant → après), **Ajouté**, **Retiré**, **Déplacé**.
- Survoler une différence l'éclaire sur les deux pages.
- **Comparer** (au-dessus de l'hypothèse) ou **Surligner sur le canvas** numérote toutes les différences sur les deux pages.
- La liste suit les modifications en direct, faites à la main, par l'IA ou par un autre participant.

Voir [Hypothèses, comparaison et décisions](/docs/hypotheses-et-comparaison).

## Pendant que l'IA travaille, la page se prépare sous vos yeux

- La future page apparaît en pointillés violets, à l'endroit exact où elle sera créée, et se remplit de vagues. L'écran d'origine est balayé d'une ligne : l'IA le lit.
- Une modification sur place voile la page de vagues légères, avec la pastille « L'IA modifie cette page… ».
- À l'arrivée, la nouvelle page passe du flou au net ; une page modifiée est traversée d'un reflet.
- Tous les participants voient la même animation, avec le temps écoulé. Avec le réglage « réduire les animations » du système, les vagues restent immobiles.

## L'IA garde vos retouches faites pendant qu'elle travaille

- Vous pouvez continuer à modifier une page pendant qu'une demande est en cours.
- À l'arrivée, l'IA adapte ses modifications : ce que personne n'a touché est modifié comme prévu ; sur le même texte, la même couleur ou la même règle CSS, votre retouche est gardée.
- La timeline l'indique, par exemple « (retouches faites pendant la génération gardées : 2) ».

## Co-design s'appelle maintenant Coall

- Le nouveau nom apparaît partout : interface, onglet du navigateur, e-mails d'invitation, comptes rendus et exports, plugin Figma (« Coall ⇄ Figma »).
- Vos projets et vos skills ne changent pas.
- Dans un fichier Figma déjà synchronisé, la page « Archives Co-design » garde son nom ; le plugin la retrouve quand même.

## Assistant IA pour créer vos skills

- **Skills et règles › Ajouter un skill › Construire avec l'assistant IA** : décrivez votre besoin en une phrase.
- L'assistant pose des questions (trois au plus à la fois) et lit vos documents : charte en PDF, captures PNG ou JPEG, notes.
- Il propose le skill (nom, description, consignes et, pour une charte, les jetons : couleurs, polices, espacements, arrondis), modifiable.
- **Essayer (sans et avec)** génère la même page d'exemple côte à côte. **Ajouter à ma bibliothèque** l'ajoute à vos skills.

Voir [Skills et règles](/docs/skills-et-regles).

## Deux nouvelles règles de base

- **Une section par écran** : dès qu'un écran officiel a plusieurs formats, ils sont rangés automatiquement dans une section à son nom, en ligne du plus large au plus étroit.
- **Toujours une hypothèse d'abord** : une demande sur un écran officiel existant crée une hypothèse à valider, en mode **Auto** comme à la voix. Seul le mode **Officielle**, choisi explicitement, modifie encore directement l'écran.
- Une hypothèse promue prend la place de l'écran dans sa section.

## Skills et règles : orientez l'IA dans vos projets

- Nouvelle entrée **Skills et règles** dans la barre latérale de l'accueil, en deux onglets : **Skills** (une façon de faire, au format `SKILL.md`) et **Règles** (une phrase, au niveau **Toujours** ou **Jamais**).
- Chaque skill ou règle s'applique à tous vos projets ou à une sélection, pour toutes les demandes, celles des invités comprises, à l'écrit comme à la voix.
- **Retirer** archive ; chaque modification d'un skill garde la version précédente.

## Transcription de l'appel, reliée à la timeline

- **Timeline › Transcription** : ce qui a été dit pendant l'appel, par prise de parole.
- Une phrase soulignée a créé une étape : au survol, un aperçu de la version créée ; au clic, cette version s'ouvre.
- La transcription figure dans le compte rendu exporté.
- Elle n'est conservée que pour les personnes qui ont donné un accord distinct. Un accord donné avant cette version ne vaut pas : chacun l'accepte à sa prochaine entrée dans l'appel.
- L'hôte peut désactiver la conservation : seuls les résumés arrivent alors dans la timeline.
- Les grosses demandes (nouvelle page, composants) sont plus rapides.

## Zoom fluide au trackpad

- Le zoom au trackpad ne saccade plus, même sur un projet avec beaucoup de pages. Contours et libellés des frames gardent leur taille à l'écran.

## Versions tablette et mobile plus rapides

- Pour une version tablette ou mobile, la page est copiée à la nouvelle largeur (768 ou 390 px), puis l'IA n'écrit que les adaptations. La réponse est bien plus rapide, et la page d'origine ne change pas.

## IA plus rapide sur les grands projets

- Sur un grand projet, l'IA se concentre sur les pages concernées par la demande : la frame sélectionnée et les pages citées par leur nom.
- Une page citée par abréviation est reconnue (« la page doc » pour « Documentation »).
- La timeline affiche, à côté du modèle et de la durée, la quantité de texte lue et écrite par l'IA.
- Si une réponse de l'IA est incomplète, le message le dit et invite à réessayer.

## Règles de design de base pour l'IA

- L'IA évite d'elle-même un ensemble de mauvaises pratiques d'interface : accessibilité, lisibilité, ergonomie.
- **Interdit** : elle ne le fait jamais, fait l'alternative et le dit. **À éviter** : seulement sur demande explicite, en le signalant.

## Composants et variantes

- Un composant peut avoir des **variantes**, dans la syntaxe de Figma : « Type=Primaire, État=Survol ».
- Sur demande (« unifie les boutons : primaire, secondaire, tertiaire, avec leurs états »), l'IA harmonise les boutons, crée les variantes et une frame **Composants**, la planche du design system.
- Par défaut, l'IA travaille en composants : elle réutilise les composants existants et marque les nouveaux éléments d'interface.
- Dans Figma, un composant à variantes devient un jeu de composants, et chaque occurrence une instance de sa variante.

## Onglet Ressources

- Dans le panneau de gauche, à côté de **Calques** : les **composants** du projet, avec leur nombre d'occurrences, et les **variables** (couleurs, tailles de texte, interlignages, polices, arrondis, espacements), avec les mêmes noms que dans Figma.
- Correction de l'envoi vers Figma, qui pouvait s'arrêter sur certains noms de variables.

## Composants marqués dans Coall, instances dans Figma

- **Faire un composant**, en haut du panneau Design : donnez un nom ; un autre élément devient le même composant en lui donnant le même nom.
- **Renommer** renomme toutes les occurrences ; **Détacher** ne concerne que l'élément sélectionné. Un composant a une icône violette dans les calques.
- Dans Figma, le composant principal arrive sur une page **Composants**, et chaque occurrence devient une instance avec son propre texte.

## Plugin Figma : variables et bouton Actualiser

- À chaque envoi, le plugin crée ou complète une collection de variables au nom du projet et y lie les calques : couleurs, typographie, arrondis, espacements.
- Les variables CSS de la maquette gardent leur nom. D'un envoi à l'autre, les variables sont réutilisées.
- Un bouton **↻** à côté du projet actualise la liste sans se reconnecter.

## Suivre le point de vue de quelqu'un

- Un clic sur un avatar, une vignette vidéo ou l'œil du panneau **Personnes** : votre vue suit la sienne, avec un bandeau **Vous suivez …**.
- **Faire suivre** (pendant un appel) : les autres participants suivent votre vue ; chacun peut s'en détacher.
- Les droits d'une personne se règlent maintenant dans la fenêtre **Inviter**.

## Plugin Figma connecté à Coall

- Plus besoin de passer par un `.zip` : avec un **code de connexion** (Préférences › Figma), le plugin envoie directement les frames officielles dans Figma.
- **Lire le projet** compare Coall et Figma : **Nouvelle**, **Différence** (**Coall remplace** / **Garder Figma**), **Archivée**, **Supprimée**.
- Le fichier Figma est rangé en une page **Écrans** et une page **Archives Coall**. Rien n'est supprimé dans Figma.

## Corrections : recherche, et fenêtres sur téléphone

- La recherche sur tout le canvas affiche les bons résultats quand le projet contient des hypothèses.
- Sur téléphone, toutes les fenêtres (**Démarrer l'appel**, **Inviter**, **Exporter**, **Importer**, version consultée) tiennent dans l'écran.
- Pendant un appel sur téléphone, le panneau des caméras démarre replié.
- Un projet ne s'ouvre plus vide après un rechargement juste après une modification.
- Les messages d'erreur s'affichent dans la bonne langue dès l'ouverture d'un lien d'invitation.

## Première version pour téléphone et petits écrans

- Accueil : la barre latérale devient un menu (**☰**).
- Éditeur : le canvas d'abord, les panneaux en tiroirs, un en-tête réduit, déplacement et zoom au doigt.
- Sur tablette ou fenêtre étroite, les panneaux sont repliés à l'ouverture d'un projet.

Voir [Sur téléphone et tablette](/docs/mobile-et-tablette).

## Copier-coller, aligner et répartir

- Copier, couper, coller des frames (la copie se range à droite) ou un élément, y compris dans une autre frame ou un autre projet ouvert. Couper une frame l'archive.
- Aligner plusieurs frames (barre d'icônes du panneau de droite, ou **Alt + A · H · D · W · V · S**) et les répartir à partir de 3 (**Alt + Maj + H · V**).

## Recherche et zoom, comme dans Figma

- Un champ de recherche en haut du panneau de gauche filtre les frames, les sections et les calques.
- **Ctrl/⌘ + F** cherche sur tout le canvas, textes des pages compris.
- Double-clic sur un calque : la vue zoome dessus.
- Nouveaux raccourcis de zoom : **Maj + 2**, **Ctrl/⌘ + 0**, **Ctrl/⌘ + / −**.

## En-tête du projet réorganisé

- À droite : les personnes présentes, **Inviter** et **Démarrer l'appel** ; le zoom juste à leur gauche.
- L'état de la connexion n'apparaît plus qu'en cas de souci : **Connexion…**, **Reconnexion…** ou **Hors ligne**.

## Historique limité à 30 versions, avec des versions épinglées

- Chaque projet garde ses 30 dernières versions, en roulement.
- La **punaise** épingle une version, gardée quel que soit son âge. Une version créée avec **Enregistrer** est épinglée d'office.
- Compteur et filtre **Épinglées** en haut de la liste.

## Largeur des pages à l'export et à l'import

- **Exporter › Largeur** : celle de chaque frame, ou une largeur fixe (1440, 1280, 1024, 768, 390 px ou libre).
- **Au pixel près, pour Figma** : les pages sont figées à leur largeur pour un transfert exact.
- À l'import, Coall montre la largeur des pages et propose de les garder ou de choisir une même largeur pour toutes.

## Contrastes revus, en thème clair comme en sombre

- Tous les textes de l'interface sont lisibles sur leur fond, dans les deux thèmes.
- Un anneau de focus bleu entoure les boutons et les liens au clavier (touche Tab).
- Avec le réglage « réduire les animations », les points qui pulsent restent fixes.

## Curseur à l'image de l'outil

- Sur le canvas, le curseur prend la forme de l'outil choisi : flèche, main, viseur de frame ou de section, bulle de commentaire.

## Commentaires sur le canvas

- Outil **Commentaire** (**C**) : un commentaire sur un élément ou sur la page entière.
- Pastilles aux initiales de l'auteur, bulle avec réponses, **Résoudre** / **Rouvrir**.
- Onglet **Commentaires** dans le panneau de droite, par page, **Ouverts** / **Résolus**.
- Tout le monde peut commenter, même sans le droit de modifier.

## Magnétisme en déplaçant les frames

- Une frame déplacée se cale sur les bords et les centres des autres, reprend l'écart d'une rangée ou se centre entre deux frames. Des repères rouges le montrent ; **Ctrl** maintenu l'ignore.

## Exporter les frames, et les ouvrir dans Figma

- Bouton **Exporter** : la sélection, une section, les frames officielles ou tout le projet, en PNG, PDF ou HTML/CSS.
- Dans le plugin Figma, un `.zip` HTML/CSS devient des frames modifiables : auto layout, vrais calques texte, images, icônes en vecteurs, sections et hypothèses.

## Étiquettes plus lisibles

- Titres de section et étiquette « Hypothèse » plus contrastés. La pastille **Voir la nouvelle frame** suit le thème.

## Barre d'outils du canvas

- Une barre verticale à gauche du canvas : **Sélection (V)**, **Main (H)**, **Frame (F)**, **Section (Maj + S)**.
- Avec l'outil Sélection, glisser sur le fond trace un rectangle de sélection. Pour se déplacer : Espace + glisser, l'outil Main, la molette ou le bouton du milieu.

## Droit « modifier l'officiel », sélection multiple, sections

- Nouveau droit **modifier l'officiel**, désactivé par défaut : sans lui, on ne travaille que sur des hypothèses.
- Sélection multiple (Maj + clic, rectangle de sélection, Ctrl/⌘ + A).
- **Sections** : cadres nommés qui regroupent des frames (Ctrl/⌘ + Alt + G).
- Une hypothèse sur plusieurs pages est rangée dans une section « Hypothèse — Version … », qui s'officialise en un clic.
- Une section ou plusieurs frames sélectionnées deviennent la cible de la barre de demande.

## Anglais et français

- L'interface existe en anglais (par défaut) et en français : **Preferences › Language**.
- La reconnaissance vocale, les réponses de l'IA et les textes de la timeline suivent la langue choisie. Le contenu des maquettes n'est pas traduit.

## Le panneau d'appel remplace la barre du bas

- Tout l'appel tient dans le panneau de droite : durée et participants, caméras, commandes, **Quitter**. Replié, il devient un rail fin.

## Nouvelle identité visuelle, accueil complet, thème sombre

- Nouvel écran d'entrée dans l'appel : aperçu caméra, jauge du micro, choix des périphériques, accord pour l'écoute de l'IA.
- Accueil avec barre latérale : **Projets**, **Collaborateurs**, **Compte**, **Plan et facturation**, **Préférences**.
- Thème **Clair**, **Sombre** ou **Système**. Les maquettes gardent leurs couleurs.

## Revenir à une version passée, à l'écrit ou à la voix

- « Rétablis la version jaune » : les pages officielles reprennent leur contenu d'alors, et leur contenu actuel est gardé en hypothèse.
- « Remets en hypothèse la version d'avant » : l'ancienne version apparaît à côté, en copie verte, sans toucher à l'officielle.
- On peut viser certaines pages (« la page contact comme ce matin ») ou toutes.

## L'IA comprend mieux les remarques implicites

- Pendant l'appel, une remarque qui ne s'adresse pas à l'IA (« en plus sombre ça passerait peut-être mieux ») donne une hypothèse.
- Une version qui existe déjà n'est pas recréée.
- Une remarque générale (« les pages en bleu ») s'applique à toutes les pages concernées.

## Changer de micro ou de caméra pendant l'appel

- Une flèche à côté des boutons micro et caméra ouvre la liste des micros, haut-parleurs et caméras. Le choix est retenu pour les prochains appels.
- Les `.zip` créés sous Windows, avec des noms de fichiers accentués, sont lus correctement.

## Import : messages clairs quand un .zip ne passe pas

- Coall explique si le fichier ne peut pas être lu sur votre ordinateur, ou si le serveur ne répond pas.
- Les maquettes en JavaScript sont figées plus vite.

## Rangement du canvas et panneaux

- « Range les pages par familles » fonctionne de nouveau : une carte « L'IA propose » apparaît.
- Les boutons flottants indiquent ce qu'ils rouvrent : **Écrans** à gauche, **Design · Timeline** à droite.

## Qui peut modifier, qui peut valider

- Deux droits accordés par l'hôte : **modifier** et **valider**, pour tout le monde (fenêtre **Inviter**) ou personne par personne.
- Par défaut, un nouvel invité suit le projet et peut **Demander l'accès** ; l'hôte répond d'un clic (**Modifier**, **Modifier et valider**, **Ignorer**).

## Panneaux pliables

- Le bouton pour replier un panneau est dans le panneau lui-même ; replié, un bouton flottant le fait réapparaître. **Ctrl/⌘ + \\** fonctionne toujours.
- Le bouton **Participants** ouvre l'onglet **Personnes**.

## Frames entières, flèches dans les champs

- Chaque frame montre sa page en entier, de l'en-tête au pied de page ; la hauteur suit le contenu.
- Dans les champs numériques, ↑ / ↓ ajustent la valeur (Maj : ×10).

## L'IA propose, vous validez

- L'IA peut ranger le canvas (en ligne, en colonne, en grille, par familles) et placer une frame à côté d'une autre.
- Ces actions, et le choix d'une hypothèse (« on part sur la version de Jean »), arrivent sous forme de carte « L'IA propose : … », avec **Valider** et **Annuler**. Le survol montre l'aperçu.

## Le bon modèle pour chaque demande

- Une retouche simple est traitée en quelques secondes ; un changement de structure ou une page entière passe par un modèle plus puissant.
- La timeline affiche le modèle utilisé et la durée.

## Plugin Figma vers Coall, espace de travail aéré

- Le plugin Figma exporte des frames en `.zip` HTML/CSS pour Coall.
- **Importer un projet** sur la page d'accueil : un `.zip` crée directement un nouveau projet.
- Panneaux pliables (**Ctrl/⌘ + \\**), vignettes vidéo redimensionnables, minimap qui s'efface après quelques secondes sans mouvement.
- En appel, quand deux personnes veulent des versions différentes, l'IA crée une version par personne.

## La vue suit les créations de l'IA

- Quand l'IA crée une frame, la vue s'y déplace si vous ne faites rien sur le canvas ; sinon, un bouton **Voir la nouvelle frame** apparaît.
- Sous l'indicateur **L'IA écoute**, l'IA dit ce qu'elle a compris : « Compris : … », « J'attends la suite », « Rien à modifier ».

## Appel, écoute vocale et invitations

- Visio intégrée au canvas, avec **Démarrer l'appel**.
- Écoute de l'IA, avec accord de chacun, sous-titres et pause possible par n'importe qui.
- Invitations par lien à usage unique, sans compte pour les invités ; **Proposer cette version** pour un invité.

## Barre de demande, hypothèses, timeline et export

- Barre de demande en bas du canvas (**/**), avec les modes **Auto**, **Officielle** et **Hypothèse**, et un bouton **Annuler**.
- **Créer une hypothèse** et **Promouvoir**.
- Note-timeline : chaque étape signée et datée ; un clic affiche le canvas à ce moment.
- Export du compte rendu en Markdown et en PDF.

## Canvas, import, édition et versions

- Projets sauvegardés en continu.
- Canvas infini, frames déplaçables et redimensionnables, minimap.
- Import d'un `.zip` Claude Design, d'un fichier HTML ou d'un dossier.
- Édition à la main : texte, typographie, couleurs, marges, insertion d'éléments, calques.
- Collaboration en temps réel.
- Frames archivées, jamais supprimées ; Annuler / Rétablir.
- Versions consultables et restaurables.
