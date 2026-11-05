# Coall — site vitrine et documentation

Site statique (Astro) : pages marketing et documentation utilisateur de **Coall**, l'outil de conception collaborative pilotée par la voix.

## Lancer

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # site statique dans dist/, avec l'index de recherche (Pagefind)
npm run preview
```

La recherche de la documentation n'existe qu'après `npm run build` (index généré par Pagefind).

## Structure

| Chemin | Contenu |
|---|---|
| `src/pages/index.astro` | Accueil : hero avec démo animée, six promesses, graphe « comment ça marche », règle de base, skills, mode Play, parcours Coall → Figma, confiance, liste d'attente |
| `src/pages/fonctionnalites.astro`, `cas-d-usage.astro`, `tarifs.astro` | Pages produit |
| `src/content/docs/*.md` | Les 22 chapitres de la documentation (frontmatter : `title`, `description`, `order`, `group`) |
| `src/components/HeroDemo.astro` | La démo de réunion rejouée en boucle |
| `src/styles/global.css` | Jetons de couleur, typographie, composants partagés |
| `src/config.ts` | URL de l'app, e-mail de contact, point d'envoi de la liste d'attente |
| `docs/VEILLE.md` | Veille sur les sites de référence et choix repris |

## Conventions de la documentation

- `<div class="capture">Capture : …</div>` : emplacement d'une capture à fournir.
- `[à confirmer]`, `[à mettre à jour au lancement]`, `[URL de l'app]` : soulignés en pointillés, à résoudre avant publication.
- `> **Astuce** …` et `> **À savoir** …` : encadré sobre, le mot en gras devient son titre.

## Avant publication

- **Tarifs** : grille provisoire, page en `noindex` avec bandeau. Ne pas publier sans accord.
- **Liste d'attente** : renseigner `waitlistEndpoint` dans `src/config.ts` (sinon le formulaire n'envoie rien et le dit).
- **Domaine** : `site` dans `astro.config.mjs`.
- **Contact, confidentialité, mentions légales** : contenus à fournir.
- Points `[à confirmer]` de la documentation : `grep -rn "à confirmer\|à mettre à jour" src/content/docs`.
