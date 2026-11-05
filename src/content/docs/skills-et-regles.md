---
title: "Skills et règles"
description: "Apprendre à l'IA votre charte et vos façons de faire, fixer des règles Toujours ou Jamais, et créer un skill avec l'assistant IA."
order: 10
group: "IA et voix"
---

Les skills et les règles orientent l'IA dans tous vos projets, sans qu'il faille les répéter à chaque demande. Un skill lui apprend une façon de faire, par exemple votre charte graphique. Une règle tient en une phrase : « Jamais de dégradés ». Un assistant vous aide à créer un skill à partir de vos documents.

## Où les trouver

Sur la page d'accueil, ouvrez **Skills et règles** dans la barre latérale. La page a deux onglets : **Skills** et **Règles**.

<div class="capture">Capture : page Skills et règles avec l'onglet Skills ouvert, la liste des skills de la bibliothèque, le bouton « Ajouter un skill » et, pour chaque skill, les projets auxquels il s'applique</div>

## Les skills

Un skill apprend à l'IA une façon de faire. Par exemple :

- votre charte graphique (couleurs, polices, espacements) ;
- « toujours concevoir en mobile d'abord » ;
- vos composants maison.

### Le format d'un skill

Coall reprend le format des skills de Claude : un dossier qui contient un fichier `SKILL.md`.

Le fichier `SKILL.md` contient :

- un **nom** ;
- une **description** qui dit quand appliquer le skill ;
- les **consignes**.

```markdown
---
name: charte-lumen
description: Charte graphique de Lumen. À appliquer à toutes les pages.
---

# Consignes
- Bleu #1D4ED8 pour les actions…
```

Le dossier peut contenir d'autres fichiers **texte**, joints au skill : par exemple un fichier `tokens.json` avec vos couleurs et vos polices, ou des exemples de composants.

| Élément | Limite |
|---|---|
| Nom (`name`) | Obligatoire, 64 caractères au plus. |
| Description (`description`) | Obligatoire, 1 024 caractères au plus. |
| Consignes | 20 000 caractères au plus. |
| Fichiers texte joints | 60 000 caractères au total. |

[à confirmer : publier ou non ces limites chiffrées]

> **À savoir** Les images et les polices placées dans le dossier d'un skill sont laissées de côté. Coall le signale à l'ajout.

### Ajouter un skill

1. Dans l'onglet **Skills**, cliquez sur **Ajouter un skill**.
2. Déposez un dossier, un `.zip` ou un fichier `SKILL.md`, ou choisissez-le dans vos fichiers.
3. Un aperçu s'affiche. Vérifiez-le, puis confirmez l'ajout.

Un fichier invalide est refusé, avec une explication.

Pour créer un skill sans écrire le fichier vous-même, utilisez l'assistant (voir plus bas).

## Les règles

Une règle est une phrase, à l'un de deux niveaux :

| Niveau | Sens | Exemple |
|---|---|---|
| **Toujours** | Ce que l'IA doit faire. | « Toujours utiliser la police Inter » |
| **Jamais** | Ce que l'IA ne doit pas faire. | « Jamais de dégradés » |

Ajoutez-les dans l'onglet **Règles**.

## Où ils s'appliquent

Chaque skill et chaque règle s'applique :

- à **tous vos projets**, y compris les prochains ;
- ou à une **sélection** de projets, que vous cochez.

Ils s'appliquent à **toutes les demandes** faites à l'IA dans ces projets, celles de vos invités comprises, à l'écrit comme à la voix.

> **À savoir** La bibliothèque appartient à votre compte. Dans un projet, ce sont les skills et règles de l'hôte qui s'appliquent, et seul l'hôte choisit ce qui s'applique à son projet.

## L'ordre des priorités

Quand l'IA traite une demande, elle suit cet ordre :

1. **Les règles de base de l'outil** passent toujours en premier. Elles ne sont pas visibles et ne se désactivent pas. Aucun skill ni aucune règle ne les contourne.
2. **La demande explicite d'une personne** vient ensuite. Si elle contredit un skill ou une règle, l'IA la suit et le signale dans sa réponse.
3. **Vos skills et règles** s'appliquent enfin, sans qu'on les redemande.

Les règles de base sont décrites dans [Travailler avec l'IA](/docs/travailler-avec-l-ia).

## Rien n'est supprimé

- **Retirer** un skill ou une règle l'archive.
- Chaque modification d'un skill garde la version précédente.

## Créer un skill avec l'assistant IA

L'assistant construit un skill avec vous, par la conversation, à partir de vos documents.

1. Dans l'onglet **Skills**, cliquez sur **Ajouter un skill**, puis **Construire avec l'assistant IA**.
2. Décrivez votre besoin en une phrase : « notre charte graphique, à appliquer à toutes les pages », « toujours concevoir en mobile d'abord ».
3. Répondez à ses questions. Il en pose trois au plus à la fois : couleurs exactes, polices, formats d'écran, ce qui est interdit…
4. Joignez vos documents avec le trombone si vous en avez : charte en PDF, captures (PNG, JPEG), notes en texte. L'assistant y relève couleurs, polices et règles, et ne vous redemande pas ce qu'ils disent déjà.
5. Dès qu'il en sait assez, il propose le skill : nom, description (quand l'appliquer), consignes et, pour une charte, les **jetons** (couleurs, polices, espacements, arrondis).
6. Modifiez la proposition à droite, ou continuez à lui demander des changements.
7. Cliquez sur **Essayer (sans et avec)** : la même page d'exemple est générée sans puis avec le skill, côte à côte.
8. Si le résultat vous convient, cliquez sur **Ajouter à ma bibliothèque**. Le skill rejoint vos skills, avec ses jetons (fichier `tokens.json`), et s'applique à vos projets comme les autres.

<div class="capture">Capture : assistant IA de création de skill, avec la conversation à gauche (questions de l'assistant et charte PDF jointe) et, à droite, le skill proposé (nom, description, consignes, jetons) modifiable</div>

<div class="capture">Capture : résultat de « Essayer (sans et avec) », la même page d'exemple générée sans le skill et avec le skill, côte à côte</div>

### Documents acceptés

| | Limite |
|---|---|
| Types | Texte, images (PNG, JPEG), PDF [à confirmer : WebP et GIF aussi acceptés] |
| Nombre | 8 documents au plus |
| Taille | 8 Mo par fichier, 15 Mo au total |

[à confirmer : publier ou non ces limites chiffrées]

> **À savoir** Un skill ne peut pas contredire les règles de base de l'outil. Dans ce cas, l'assistant le dit et propose une alternative.

> **À savoir** Chaque message à l'assistant et chaque essai est un appel à l'IA. Un essai en fait deux, puisqu'il génère deux pages. [à confirmer : décompte dans l'usage de l'IA du mois]

## Vérifier qu'un skill s'applique

1. Ajoutez une règle « Jamais : mettre des dégradés » et un petit skill de charte (couleurs, police).
2. Dans un de vos projets, demandez une nouvelle section : elle doit suivre la charte, sans dégradé.
3. Décochez ce projet pour le skill, puis refaites une demande : la charte ne s'applique plus.

## Ce qui n'est pas encore disponible

- La charte d'un skill (ses jetons) n'est pas encore transformée automatiquement en variables dans Figma.
- Il n'y a pas de pack de skills par défaut visible dans la bibliothèque.
- Les règles de base de l'outil ne peuvent pas être désactivées.

## Voir aussi

- [Travailler avec l'IA](/docs/travailler-avec-l-ia)
- [Composants et ressources](/docs/composants-et-ressources)
