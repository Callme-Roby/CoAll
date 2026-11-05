---
title: "Appel, écoute de l'IA et transcription"
description: "Démarrer un appel, gérer micro et caméra, activer l'écoute de l'IA, comprendre ce qu'elle fait de la conversation et retrouver la transcription."
order: 11
group: "IA et voix"
---

Coall intègre une visio au canvas. Pendant l'appel, l'IA peut écouter la conversation, avec l'accord de chacun, et transformer les idées dites à voix haute en propositions sur le canvas. Ce chapitre décrit l'appel, l'écoute de l'IA et la transcription.

## Démarrer l'appel

1. Dans l'en-tête du projet, tout à droite, cliquez sur **Démarrer l'appel**.
2. Une fenêtre d'entrée s'ouvre, avec :
   - l'aperçu de votre caméra ;
   - une jauge du micro, pour vérifier qu'il vous entend ;
   - le choix du micro, du haut-parleur et de la caméra ;
   - les **accords** (voir ci-dessous).
3. Cliquez sur **Entrer dans l'appel**, ou sur **Annuler**.

<div class="capture">Capture : fenêtre d'entrée dans l'appel avec l'aperçu caméra, la jauge du micro, les listes de périphériques, les deux cases d'accord (écoute de l'IA, conservation de la transcription) et les boutons Annuler et Entrer dans l'appel</div>

### Les deux accords

La fenêtre d'entrée vous demande deux accords, distincts :

| Accord | Ce qu'il permet |
|---|---|
| **Écoute de l'IA** | L'IA peut entendre ce que vous dites, quand l'écoute est activée. |
| **Conservation de la transcription** | Ce que vous dites pendant l'écoute est conservé dans le projet, dans la transcription. |

Vous pouvez accepter l'écoute sans accepter la conservation. Si l'hôte a désactivé la conservation de la transcription, la fenêtre d'entrée l'annonce.

> **À savoir** Votre micro et votre caméra par défaut se règlent dans **Préférences** (voir [Compte et réglages](/docs/compte-et-reglages)).

## Le panneau d'appel

Pendant l'appel, tout tient dans un panneau à droite du canvas.

- **En haut** : « En appel », la durée, le nombre de participants et le bouton pour replier le panneau.
- **Au milieu** : les caméras des participants. Chaque vignette montre qui parle, qui a coupé son micro et qui a levé la main.
- **En bas** : les commandes, puis **Quitter**.

| Commande | Effet |
|---|---|
| **Micro** | Couper ou rallumer votre micro. |
| **Caméra** | Couper ou rallumer votre caméra (**Ctrl/⌘ + E**). |
| **Sous-titres** | Afficher ce que l'IA entend. |
| **Écoute de l'IA** | Activer ou mettre en pause l'écoute. |
| **Main levée** | Demander la parole. |
| **Quitter** | Quitter l'appel. |

<div class="capture">Capture : panneau d'appel déplié à droite du canvas, avec la durée et le nombre de participants en haut, trois vignettes vidéo (une qui parle, une avec micro coupé, une main levée) et la rangée de commandes en bas</div>

### Replier et redimensionner le panneau

- **Replié**, le panneau devient un rail fin. Il garde l'essentiel : durée, nombre de participants, micro, caméra, main levée et **Quitter**. Un clic sur le bouton du haut le déplie.
- **Redimensionner** : glissez le bord gauche du panneau. Un double-clic rend la taille par défaut.
- Le bouton **Participants**, avec le nombre de personnes dans l'appel, ouvre l'onglet **Personnes** et rouvre le panneau de droite s'il était replié.

### Changer de périphérique pendant l'appel

Une petite flèche à côté des boutons micro et caméra ouvre la liste des micros, des haut-parleurs et des caméras. Le choix s'applique tout de suite et est retenu pour les prochains appels.

> **À savoir** Le choix du haut-parleur dépend du navigateur. Chrome et Edge le permettent.

### Faire suivre votre vue

Pendant un appel, **Faire suivre** (en haut à droite, ou l'icône de présentation dans les commandes de l'appel) invite les autres participants à suivre votre vue du canvas. Voir [Collaborer](/docs/collaborer).

## L'écoute de l'IA

### Quand l'IA écoute

- Elle n'écoute que lorsque l'indicateur **« L'IA écoute »** est allumé.
- Elle n'écoute que les personnes qui ont donné leur accord.
- Si l'écoute est active sans que vous l'ayez acceptée, une pastille ambre vous rappelle que votre voix n'est pas transmise.

L'écoute ne dépend pas des droits de modification : chacun l'active pour lui-même en acceptant l'écoute à l'entrée de l'appel.

<div class="capture">Capture : indicateur « L'IA écoute » allumé en violet, avec en dessous le message « Compris : passer le titre en vert » et les sous-titres de la conversation</div>

### Mettre en pause et reprendre

- **N'importe qui peut mettre l'IA en pause**, avec le bouton ou à la voix : « l'IA, pause ».
- **La reprise se fait uniquement au bouton.**

### Voir ce que l'IA entend et comprend

- Les **sous-titres** montrent exactement ce que l'IA entend.
- Sous l'indicateur, l'IA dit ce qu'elle a compris :

| Message | Signification |
|---|---|
| « Compris : … » | L'IA a compris une demande et la traite. |
| « J'attends la suite » | La phrase n'est pas terminée ; l'IA attend. |
| « Rien à modifier » | Ce qui a été dit ne concerne pas la maquette. |

En cas de problème, l'erreur s'affiche au même endroit.

### Ce que l'IA fait de la conversation

Vous n'avez pas besoin de vous adresser à elle. L'IA suit la discussion et réagit selon ce qu'elle entend.

| Ce qui est dit | Ce que fait l'IA |
|---|---|
| Une idée claire (« passe le titre en vert ») | Une modification. Sur un écran officiel, elle arrive en hypothèse à valider. |
| Une idée incertaine (« et si on essayait un fond noir ? ») | Une hypothèse. |
| Une remarque implicite (« en plus sombre ça passerait peut-être mieux », « il manque un appel à l'action ») | Une hypothèse, pour vérifier. |
| Un désaccord (« moi je veux la version A » / « je préférerais tester la version B ») | Une hypothèse par personne : « Version Jean », « Version Arthur ». |
| Une validation (« ok, on garde ça ») | Une proposition de décision, à valider. |
| Une demande de retour en arrière (« dommage, c'était plus lisible avant ») | Un retour à une version passée (voir [Travailler avec l'IA](/docs/travailler-avec-l-ia)). |

La modification arrive quelques secondes après la fin de la phrase. Une idée évoquée plusieurs fois sans apparaître sur le canvas finit par être créée ; une version qui existe déjà n'est pas recréée.

> **À savoir** À la voix comme à l'écrit, l'IA ne modifie jamais directement un écran officiel existant. Et ce qu'elle propose à partir de la voix (ranger le canvas, choisir une hypothèse) attend toujours une validation.

> **Astuce** Les skills et règles du projet s'appliquent aussi aux demandes faites à la voix. Voir [Skills et règles](/docs/skills-et-regles).

## La transcription

### Où la trouver

Ouvrez l'onglet **Timeline**, puis **Transcription**. Vous y trouvez ce qui a été dit pendant l'appel, par prise de parole : qui, et à quelle heure.

Seules y figurent les paroles des personnes qui ont accepté la conservation, prononcées pendant que l'IA écoutait.

### Relier la conversation au canvas

- Une phrase **soulignée** a créé une étape (modification, hypothèse, décision). Au survol, une carte montre l'étape et un aperçu de la version créée à ce moment. Au clic, cette version s'ouvre.
- Une autre phrase ouvre le canvas tel qu'il était quand elle a été dite.
- Dans la timeline, une étape née d'une phrase a un lien **Transcription** qui mène à ses phrases.

<div class="capture">Capture : onglet Timeline › Transcription avec les prises de parole, une phrase soulignée survolée et la carte d'aperçu de la version créée à ce moment</div>

### Accepter plus tard, ou désactiver

- Si vous n'avez pas accepté la conservation en entrant dans l'appel, vous pouvez le faire depuis l'onglet **Transcription**.
- **L'hôte peut désactiver la conservation**, avec la case en haut de l'onglet. Seuls les résumés arrivent alors dans la timeline.
- La transcription est supprimée avec le projet.

### Dans le compte rendu

La transcription figure dans le compte rendu exporté (Markdown et PDF), chaque phrase avec l'étape qu'elle a créée. Voir [Importer et exporter](/docs/importer-et-exporter).

## Langue

La reconnaissance vocale et les réponses de l'IA suivent la langue choisie dans **Préférences** : français ou anglais. Parlez dans la langue de l'interface.

## Navigateurs

Chrome et Edge sont recommandés, notamment pour la transcription. [à confirmer selon l'hébergement choisi : dans ces navigateurs, la transcription peut passer par le service de reconnaissance vocale du navigateur (Google ou Microsoft) ; la fenêtre d'entrée de l'appel le précise.]

Voir aussi [Confidentialité et sécurité](/docs/confidentialite-et-securite).

## Sur téléphone

Pendant un appel sur téléphone, le panneau des caméras démarre replié pour laisser le canvas visible, et s'ouvre par-dessus quand on le déplie. Voir [Sur téléphone et tablette](/docs/mobile-et-tablette).
