# Franck Kouby Officiel

Site vitrine officiel de Franck Kouby, auteur, compositeur, interprete, guitariste et chanteur. Le site presente son univers musical, le FK-Group, ses albums, ses videos, les temoignages des visiteurs et les actualites du blog.

Ce projet est une migration du contenu de l'ancien site WordPress vers Astro.

## Contenu du site

- **Accueil** : presentation de Franck Kouby et du FK-Group, albums mis en avant et dernieres publications.
- **Albums** : pochettes d'albums cliquables vers iMusician et playlist YouTube integree.
- **Blog** : articles musicaux, concerts, interviews, archives et videos.
- **Articles video** : lecteurs YouTube integres, liens directs vers les videos et credits presentes sous forme de cartes.
- **Musiciens** : fiches avec photo, nom, instrument et biographie.
- **Temoignages** : messages historiques laisses par les visiteurs, presentes dans une grille de cartes.

## Stack technique

- [Astro](https://astro.build/) 7
- TypeScript
- Tailwind CSS 4 via Vite
- Markdown et Content Collections Astro
- Images locales resolues par Astro
- Adaptateur Vercel
- Sitemap Astro

Le site utilise le rendu serveur Astro. Les contenus sont stockes dans des fichiers Markdown et valides par le schema defini dans `src/content.config.ts`.

## Architecture

```text
src/
├── components/                # Composants Astro reutilisables
├── content/
│   ├── articles/              # Articles, videos et actualites
│   └── pages/                 # Pages migrees depuis WordPress
│       ├── album-de-franck-kouby/
│       ├── blog/
│       └── franck-kouby-officiel/
├── data/
│   └── site.ts                # Identite et liens sociaux du site
├── layouts/
│   └── Layout.astro           # Structure globale et metadonnees SEO
├── pages/
│   ├── index.astro            # Page d'accueil
│   ├── articles/              # Liste et detail des articles
│   └── pages/                 # Rendu des pages migrees
└── styles/
    └── global.css             # Theme sombre et styles Markdown
```

Les images propres a un contenu sont conservees dans le meme dossier que son fichier `index.md`. Les chemins relatifs sont traites par Astro pendant le build.

## Design

Le site reprend une direction sombre inspiree du site WordPress original :

- fond sombre et surfaces gris charbon
- texte clair ivoire
- liens et accents orange dore
- cartes responsives pour les credits, les temoignages et les contenus musicaux
- lecteurs video YouTube responsives

## Demarrage rapide

### Prerequis

- Node.js `>= 22.12.0`
- npm

### Installation

```bash
npm install
```

### Developpement local

```bash
npm run dev
```

Le site est disponible sur `http://localhost:4321/`.

### Verifications et production

```bash
npm run check    # Verification Astro et TypeScript
npm run lint     # Verification ESLint
npm run build    # Build de production
npm run preview  # Previsualisation du build
```

## Configuration

Les informations generales sont centralisees dans [src/data/site.ts](src/data/site.ts) : nom, domaine, titre, description et liens sociaux.

Les metadonnees des articles et pages sont definies dans leur frontmatter Markdown et validees dans [src/content.config.ts](src/content.config.ts).

Les lecteurs YouTube sont ajoutes directement dans les contenus Markdown avec un iframe responsive. Les credits video utilisent les classes `.video-credits`, `.credit-card` et `.credit-list` definies dans [src/styles/global.css](src/styles/global.css).

## Deploiement

Le projet est configure pour Vercel avec l'adaptateur Astro correspondant. Le domaine et le sitemap sont definis dans [astro.config.mjs](astro.config.mjs).
