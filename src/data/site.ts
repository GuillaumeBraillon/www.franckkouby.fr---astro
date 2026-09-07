export const site = {
  name: "Franck Kouby Officiel",
  website: "www.franckkouby.fr",
  tagline: "La musique de Franck Kouby et du FK-Group",
  defaultTitle: "Franck Kouby Officiel",
  home: {
    badge: "Auteur, compositeur, interprète, guitariste et chanteur",
    description: [
      "Franck Kouby est auteur, compositeur et interprète. Sa musique mêle les rythmes créoles traditionnels au jazz, au reggae, au zouk et au rock.",
      "Avec le **FK-Group**, il partage une fusion créole portée par plus de 30 ans d’expérience scénique, entre textes en créole et en français.",
      "Retrouvez ici ses albums, ses vidéos, ses actualités et les dernières publications du blog.",
    ],
  },
} as const;

export const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/articles", label: "News" },
] as const;

export const contactLinks = [
  {
    label: "Site officiel",
    value: site.website,
    href: `https://${site.website}`,
    icon: "website",
  },
  {
    label: "Facebook",
    value: "Franck Kouby",
    href: "https://www.facebook.com/FranckKouby",
    icon: "facebook",
  },
  {
    label: "YouTube",
    value: "Franck Kouby",
    href: "https://www.youtube.com/user/FranckKouby",
    icon: "youtube",
  },
] as const;
