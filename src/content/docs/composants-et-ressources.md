---
title: "Composants et ressources"
description: "Marquer des composants et leurs variantes, retrouver les composants et les variables du projet, et laisser l'IA bâtir votre design system."
order: 9
group: "Concevoir"
---

Un composant est un élément d'interface réutilisé dans plusieurs pages : un bouton, une carte, un champ, un en-tête. Dans Coall, vous marquez ces éléments comme composants, avec leurs variantes. L'IA s'en sert pour garder vos pages cohérentes, et le plugin Figma les transforme en vrais composants.

## Faire un composant

1. Entrez dans une frame (double-clic) et sélectionnez un élément : un bouton, une carte, un en-tête…
2. En haut du panneau **Design**, cliquez sur **Faire un composant**.
3. Donnez-lui un nom (par exemple « Bouton »), puis **OK**.

Dans le panneau **Calques**, un composant est signalé par une icône violette.

<div class="capture">Capture : panneau Design d'un bouton sélectionné, avec en haut le bloc composant (nom « Bouton », champ Variante, nombre d'occurrences, boutons Renommer et Détacher)</div>

### Relier d'autres éléments au même composant

Pour qu'un autre élément, dans n'importe quelle page, soit le même composant, donnez-lui le même nom. La liste propose les composants existants.

### Gérer un composant

| Action | Effet |
|---|---|
| **Nombre d'occurrences** | Le panneau indique combien de fois le composant est utilisé dans le projet. |
| **Renommer** | Renomme toutes les occurrences. |
| **Détacher** (icône de lien brisé) | Détache cet élément seulement ; les autres occurrences restent liées. |

## Les variantes

Un composant peut avoir des variantes, écrites dans la syntaxe de Figma : « Type=Primaire, État=Survol ».

- Dans le panneau **Design**, sous le nom du composant, le champ **Variante** se lit et se modifie.
- La liste propose les variantes existantes.

> **Astuce** Choisissez le nom du composant et de la variante dans la liste proposée plutôt que de les retaper : une faute de frappe crée un nouveau composant ou une nouvelle variante.

## L'onglet Ressources

L'onglet **Ressources**, dans le panneau de gauche à côté de **Calques**, rassemble ce qui structure le projet.

### Composants

- Chaque composant marqué dans le projet, avec son nombre d'occurrences.
- Sous chaque composant, ses variantes et leur nombre d'occurrences.
- Un clic mène à une occurrence, puis à la suivante à chaque nouveau clic.

### Variables

Les variables du projet, lues dans les frames officielles :

- **couleurs**, avec leur aperçu et leur code ;
- **tailles de texte** et **interlignages** ;
- **polices** ;
- **arrondis** ;
- **espacements**.

Elles portent les mêmes noms que dans Figma : Coall et le plugin font le même calcul. Les variables CSS de vos maquettes (par exemple `--color-primary`) gardent leur nom.

<div class="capture">Capture : onglet Ressources du panneau de gauche, avec la liste des composants (Bouton et ses variantes, avec leurs occurrences) et la liste des variables (couleurs avec aperçu et code, tailles de texte, polices)</div>

## L'IA travaille en composants

Par défaut, à chaque demande, l'IA reçoit la liste des composants du projet et de leurs variantes. Quand elle crée une page ou ajoute un élément :

- elle **réutilise** les composants existants : même HTML, même CSS, même marquage ;
- s'il n'y en a pas, elle **crée** le composant et marque les nouveaux éléments d'interface ;
- elle **harmonise** les occurrences qui diffèrent sans raison.

### Unifier vos composants et créer la planche

Sur demande, l'IA crée les variantes d'un composant et une frame **Composants**, la planche de votre design system. Par exemple :

> « Unifie les boutons : primaire, secondaire, tertiaire, avec leurs états (survol, désactivé). »

L'IA alors :

1. harmonise le style des boutons de toutes les pages officielles et les marque comme composant « Bouton », avec la bonne variante ;
2. crée une frame **Composants**, qui montre chaque variante une fois, états compris ;
3. dit dans sa réponse quels composants et variantes elle a créés.

Les pages créées ensuite (« crée une page Tarifs ») reprennent ces composants.

<div class="capture">Capture : frame « Composants » créée par l'IA, montrant le bouton en variantes Primaire, Secondaire et Tertiaire, chacune avec ses états (normal, survol, désactivé)</div>

## Dans Figma

Avec le plugin Figma connecté, les composants arrivent sur une page **Composants** de votre fichier Figma. Un composant à variantes devient un jeu de composants, tiré de la planche **Composants** si elle existe. Dans les écrans, chaque occurrence devient une instance de sa variante, avec son propre texte. Les variables arrivent liées aux calques. Voir [Plugin Figma](/docs/plugin-figma).

> **À savoir** La charte d'un skill (ses couleurs et polices) n'est pas encore transformée automatiquement en variables dans Figma. Ce sont les variables lues dans vos frames officielles qui partent.

## Voir aussi

- [Skills et règles](/docs/skills-et-regles) : décrire vos composants maison et votre charte une fois pour toutes
- [Modifier une page à la main](/docs/modifier-a-la-main)
