// src/data/navbarData.ts

export interface SubcategoryItem {
  path: string;
  label: string;
}

export interface NavigationItem {
  path: string;
  label: string;
  subcategories?: SubcategoryItem[];
}

export const mainNavigation: NavigationItem[] = [
  { 
    path: '/astrology', 
    label: 'ASTROLOGIA',
    subcategories: [
      { path: '/astrology/signs', label: 'SIGNOS' },
      { path: '/astrology/houses', label: 'CASAS' },
      { path: '/astrology/aspects', label: 'ASPECTOS' }
    ]
  },
  { 
    path: '/tarot', 
    label: 'TAROT',
    subcategories: [
      { path: '/tarot/major-arcana', label: 'ARCANOS MAIORES' },
      { path: '/tarot/minor-arcana', label: 'ARCANOS MENORES' },
      { path: '/readings', label: 'ORACULO' }
    ]
  },
  { 
    path: '/cabala', 
    label: 'CABALA',
    subcategories: [
      { path: '/cabala/tree-of-life', label: 'ÁRVORE DA VIDA' },
      { path: '/cabala/sephirot', label: 'SEPHIROT' },
      { path: '/cabala/tree-of-death', label: 'ÁRVORE DA MORTE' },
      { path: '/cabala/qliphoth', label: 'QLIPHOTH' },
      { path: '/anjos', label: 'ANJOS' }
    ]
  },
  { path: '/goetia', label: 'GOETIA' },
  { 
    path: '/vedas', 
    label: 'VEDAS',
    subcategories: [
      { path: '/vedas/jyotish', label: 'JYOTISH' },
      { path: '/vedas/ayurveda', label: 'AYURVEDA' }
    ]
  },
  { path: '/archive', label: 'ARQUIVO' },
  { path: '/about', label: 'SOBRE' }
];