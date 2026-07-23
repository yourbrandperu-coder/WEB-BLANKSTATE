export interface Swatch { name: string; hex: string; }
export interface ColorWithPhotos extends Swatch { photos: string[]; }

export interface Pack {
  num:          string;
  slug:         string;
  badge?:       string;
  name:         string;
  price:        string;
  priceNum:     number;
  qty:          string;
  unitCount:    number;
  unitType?:    string;
  unitLabels?:  string[];
  unitFits?:    (string[] | null)[];
  desc:         string;
  colorsNote?:  string | null;
  colors?:      ColorWithPhotos[] | null;
  swatches?:    Swatch[] | null;
  swatchesByFit?: Record<string, Swatch[]>;
  wsp:          string;
  thumb?:       string;
}

export interface SizeGuideData {
  note?: string;
  cols:  string[];
  rows:  string[][];
}

export interface SizeGuide {
  note?:  string;
  cols?:  string[];
  rows?:  string[][];
  byFit?: Record<string, SizeGuideData>;
}

// ─── CATÁLOGO DE PACKS ────────────────────────────────────────────────────────

export const PACKS: Record<string, Pack> = {
  '01': {
    num: '01', slug: 'basicos', badge: 'Más pedido',
    name: 'Pack Básicos',
    price: 'S/ 100', priceNum: 100, qty: '5 polos', unitCount: 5, unitType: 'Polo',
    desc: 'Los cortes que más rotan en el armario: Oversize con hombros caídos y largo generoso, Boxy cuadrado para un look más urbano, y Regular con caída estructurada para el día a día. Tela 20/1, 200g de algodón peinado reactivo — liviana, transpirable, ideal todo el año en Lima. Cinco polos para tener la semana cubierta sin repetir.',
    colorsNote: 'Colores disponibles según stock de temporada — te los confirmamos al pedir.',
    colors: null,
    swatches: [
      { name: 'Blanco',        hex: '#f5f5f5' },
      { name: 'PPT',           hex: '#EDE5D8' },
      { name: 'Beige',         hex: '#d4c5a9' },
      { name: 'Verde Manzana', hex: '#7DB868' },
      { name: 'Cocoa',         hex: '#8C6448' },
      { name: 'Plomo Plata',   hex: '#9FAAB5' },
      { name: 'Plomo Escolar', hex: '#6b7280' },
      { name: 'Marrón',        hex: '#795548' },
      { name: 'Negro',         hex: '#1a1a1a' },
      { name: 'English Blue',  hex: '#1e3a5f' },
      { name: 'Guinda',        hex: '#7c1d2e' },
      { name: 'Mauve',         hex: '#c8a0a0' },
      { name: 'Verde Militar', hex: '#4a5c3c' },
      { name: 'Verde Botella', hex: '#1f4a2e' },
      { name: 'Celeste',       hex: '#88C0D0' },
      { name: 'Acero',         hex: '#2E3F5C' }
    ],
    swatchesByFit: {
      'Oversize': [
        { name: 'Blanco',        hex: '#f5f5f5' },
        { name: 'PPT',           hex: '#EDE5D8' },
        { name: 'Beige',         hex: '#d4c5a9' },
        { name: 'Verde Manzana', hex: '#7DB868' },
        { name: 'Cocoa',         hex: '#8C6448' },
        { name: 'Plomo Plata',   hex: '#9FAAB5' },
        { name: 'Plomo Escolar', hex: '#6b7280' },
        { name: 'Marrón',        hex: '#795548' },
        { name: 'Negro',         hex: '#1a1a1a' },
        { name: 'English Blue',  hex: '#1e3a5f' },
        { name: 'Guinda',        hex: '#7c1d2e' },
        { name: 'Mauve',         hex: '#c8a0a0' },
        { name: 'Verde Militar', hex: '#4a5c3c' },
        { name: 'Verde Botella', hex: '#1f4a2e' },
        { name: 'Celeste',       hex: '#88C0D0' },
        { name: 'Acero',         hex: '#2E3F5C' }
      ],
      'Boxy': [
        { name: 'Blanco',        hex: '#f5f5f5' },
        { name: 'PPT',           hex: '#EDE5D8' },
        { name: 'Beige',         hex: '#d4c5a9' },
        { name: 'Plomo Plata',   hex: '#9FAAB5' },
        { name: 'Plomo Escolar', hex: '#6b7280' },
        { name: 'Marrón',        hex: '#795548' },
        { name: 'Negro',         hex: '#1a1a1a' },
        { name: 'Mauve',         hex: '#c8a0a0' },
        { name: 'Celeste',       hex: '#88C0D0' },
        { name: 'English Blue',  hex: '#1e3a5f' },
        { name: 'Acero',         hex: '#2E3F5C' }
      ],
      'Boxy Largo': [
        { name: 'Blanco',        hex: '#f5f5f5' },
        { name: 'PPT',           hex: '#EDE5D8' },
        { name: 'Beige',         hex: '#d4c5a9' },
        { name: 'Plomo Plata',   hex: '#9FAAB5' },
        { name: 'Plomo Escolar', hex: '#6b7280' },
        { name: 'Marrón',        hex: '#795548' },
        { name: 'Negro',         hex: '#1a1a1a' },
        { name: 'English Blue',  hex: '#1e3a5f' },
        { name: 'Mauve',         hex: '#c8a0a0' },
        { name: 'Verde Militar', hex: '#4a5c3c' },
        { name: 'Verde Botella', hex: '#1f4a2e' },
        { name: 'Celeste',       hex: '#88C0D0' },
        { name: 'Acero',         hex: '#2E3F5C' }
      ],
      'Regular': [
        { name: 'Blanco',        hex: '#f5f5f5' },
        { name: 'PPT',           hex: '#EDE5D8' },
        { name: 'Plomo Plata',   hex: '#9FAAB5' },
        { name: 'Plomo Escolar', hex: '#6b7280' },
        { name: 'Marrón',        hex: '#795548' },
        { name: 'Negro',         hex: '#1a1a1a' },
        { name: 'English Blue',  hex: '#1e3a5f' },
        { name: 'Beige',         hex: '#d4c5a9' },
        { name: 'Verde Manzana', hex: '#7DB868' },
        { name: 'Cocoa',         hex: '#8C6448' },
        { name: 'Mauve',         hex: '#c8a0a0' },
        { name: 'Verde Militar', hex: '#4a5c3c' },
        { name: 'Verde Botella', hex: '#1f4a2e' },
        { name: 'Celeste',       hex: '#88C0D0' },
        { name: 'Acero',         hex: '#2E3F5C' },
        { name: 'Guinda',        hex: '#7c1d2e' }
      ]
    },
    thumb: '/PRODUCTOS/OVERSIZE-20/Negro/1.webp',
    wsp: 'https://wa.me/51942418379?text=Hola%2C+quiero+el+Pack+B%C3%A1sicos+(5+polos+x+S%2F100)'
  },

  '02': {
    num: '02', slug: 'dama',
    name: 'Pack Dama',
    price: 'S/ 100', priceNum: 100, qty: '6 polos', unitCount: 6, unitType: 'Polo',
    desc: 'Seis polos en Corte Dama — entallado, con silueta femenina limpia. Tela 20/1, 200g de algodón peinado. El pack para renovar el armario de una vez — el que más prendas ofrece del catálogo.',
    colorsNote: 'Colores disponibles según stock de temporada.',
    colors: null,
    swatches: [
      { name: 'Negro',         hex: '#1a1a1a' },
      { name: 'Blanco',        hex: '#f5f5f5' },
      { name: 'PPT',           hex: '#EDE5D8' },
      { name: 'Beige Claro',   hex: '#d4c5a9' },
      { name: 'Mauve',         hex: '#c8a0a0' },
      { name: 'Plomo Escolar', hex: '#6b7280' },
      { name: 'English Blue',  hex: '#1e3a5f' },
      { name: 'Guinda',        hex: '#7c1d2e' },
      { name: 'Celeste',       hex: '#88C0D0' },
      { name: 'Verde Manzana', hex: '#7DB868' },
      { name: 'Rosado',        hex: '#f9a8d4' }
    ],
    thumb: '/PRODUCTOS/DAMA/Negro/1.webp',
    wsp: 'https://wa.me/51942418379?text=Hola%2C+quiero+el+Pack+Dama+(6+polos+x+S%2F100)'
  },

  '03': {
    num: '03', slug: 'acid-wash', badge: 'Edición especial',
    name: 'Pack Acid Wash',
    price: 'S/ 110', priceNum: 110, qty: '5 polos', unitCount: 5, unitType: 'Polo',
    desc: 'Base Jersey 20/1, 220g con tratamiento Acid Wash. El proceso decolora la tela de forma controlada pero impredecible — cada polo sale con un patrón de desteñido único, ninguno igual. El efecto es sutil y natural, nada recargado. Para quien quiere carácter en el básico sin necesidad de estampado.',
    colorsNote: 'Cada polo es único por el proceso Acid Wash. El color que eliges es el tono base del desteñido.',
    swatches: null,
    colors: [
      { name: 'Negro',       hex: '#1a1a1a', photos: ['/PRODUCTOS/ACID-WASH/NEGRO/1.webp','/PRODUCTOS/ACID-WASH/NEGRO/2.webp','/PRODUCTOS/ACID-WASH/NEGRO/3.webp','/PRODUCTOS/ACID-WASH/NEGRO/4.webp'] },
      { name: 'Guinda',      hex: '#7c1d2e', photos: ['/PRODUCTOS/ACID-WASH/GUINDA/1.webp','/PRODUCTOS/ACID-WASH/GUINDA/2.webp','/PRODUCTOS/ACID-WASH/GUINDA/3.webp','/PRODUCTOS/ACID-WASH/GUINDA/4.webp'] },
      { name: 'Rojo',        hex: '#C0392B', photos: ['/PRODUCTOS/ACID-WASH/ROJO/1.webp','/PRODUCTOS/ACID-WASH/ROJO/2.webp','/PRODUCTOS/ACID-WASH/ROJO/3.webp','/PRODUCTOS/ACID-WASH/ROJO/4.webp'] },
      { name: 'Morado',      hex: '#7c3aed', photos: ['/PRODUCTOS/ACID-WASH/MORADO/1.webp','/PRODUCTOS/ACID-WASH/MORADO/2.webp','/PRODUCTOS/ACID-WASH/MORADO/3.webp','/PRODUCTOS/ACID-WASH/MORADO/4.webp'] },
      { name: 'Marrón',      hex: '#7c5c3e', photos: ['/PRODUCTOS/ACID-WASH/MARRON/1.webp','/PRODUCTOS/ACID-WASH/MARRON/2.webp','/PRODUCTOS/ACID-WASH/MARRON/3.webp','/PRODUCTOS/ACID-WASH/MARRON/4.webp'] },
      { name: 'Plomo Plata', hex: '#9FAAB5', photos: ['/PRODUCTOS/ACID-WASH/PLOMO-PLATA/1.webp','/PRODUCTOS/ACID-WASH/PLOMO-PLATA/2.webp','/PRODUCTOS/ACID-WASH/PLOMO-PLATA/3.webp','/PRODUCTOS/ACID-WASH/PLOMO-PLATA/4.webp'] },
      { name: 'Chicle',      hex: '#f48fb1', photos: ['/PRODUCTOS/ACID-WASH/CHICLE/1.webp','/PRODUCTOS/ACID-WASH/CHICLE/2.webp','/PRODUCTOS/ACID-WASH/CHICLE/3.webp','/PRODUCTOS/ACID-WASH/CHICLE/4.webp'] },
      { name: 'Gris',        hex: '#9ca3af', photos: ['/PRODUCTOS/ACID-WASH/GRIS/1.webp','/PRODUCTOS/ACID-WASH/GRIS/2.webp','/PRODUCTOS/ACID-WASH/GRIS/3.webp','/PRODUCTOS/ACID-WASH/GRIS/4.webp'] },
      { name: 'Acero',       hex: '#6B8599', photos: ['/PRODUCTOS/ACID-WASH/ACERO/1.webp','/PRODUCTOS/ACID-WASH/ACERO/2.webp','/PRODUCTOS/ACID-WASH/ACERO/3.webp','/PRODUCTOS/ACID-WASH/ACERO/4.webp'] },
      { name: 'Verde',       hex: '#4A7C59', photos: ['/PRODUCTOS/ACID-WASH/VERDE/1.webp','/PRODUCTOS/ACID-WASH/VERDE/2.webp','/PRODUCTOS/ACID-WASH/VERDE/3.webp','/PRODUCTOS/ACID-WASH/VERDE/4.webp'] },
      { name: 'Turquesa',    hex: '#4E9FBF', photos: ['/PRODUCTOS/ACID-WASH/TURQUEZA/1.webp','/PRODUCTOS/ACID-WASH/TURQUEZA/2.webp','/PRODUCTOS/ACID-WASH/TURQUEZA/3.webp','/PRODUCTOS/ACID-WASH/TURQUEZA/4.webp'] },
      { name: 'Naranja',     hex: '#E8640A', photos: ['/PRODUCTOS/ACID-WASH/NARANJA/1.webp','/PRODUCTOS/ACID-WASH/NARANJA/2.webp','/PRODUCTOS/ACID-WASH/NARANJA/3.webp','/PRODUCTOS/ACID-WASH/NARANJA/4.webp'] }
    ],
    thumb: '/PRODUCTOS/ACID-WASH/NEGRO/1.webp',
    wsp: 'https://wa.me/51942418379?text=Hola%2C+quiero+el+Pack+Acid+Wash+(5+polos+x+S%2F110)'
  },

  '06': {
    num: '06', slug: 'hoodies',
    name: 'Pack Hoodies',
    price: 'S/ 99', priceNum: 99, qty: '2 hoodies', unitCount: 2, unitType: 'Hoodie',
    desc: 'Franela 24/1, 320 gramos — tela cepillada de gramaje pesado. Más abrigo que el jersey estándar, diferente al tacto. Dos cortes: Boxy para un look cuadrado y urbano, Oversize con hombros amplios y largo generoso. La polera para Lima de junio a septiembre.',
    colorsNote: 'Colores disponibles según stock de temporada.',
    colors: null,
    swatches: [
      { name: 'Negro',         hex: '#1a1a1a' },
      { name: 'Plomo Escolar', hex: '#6b7280' },
      { name: 'Plomo Plata',   hex: '#9FAAB5' },
      { name: 'Marrón',        hex: '#795548' },
      { name: 'Verde Botella', hex: '#1f4a2e' },
      { name: 'Acero',         hex: '#2E3F5C' },
      { name: 'PPT',           hex: '#EDE5D8' },
      { name: 'Lila 69',       hex: '#C9B1D9' }
    ],
    swatchesByFit: {
      'Boxy': [
        { name: 'Negro',         hex: '#1a1a1a' },
        { name: 'Plomo Escolar', hex: '#6b7280' },
        { name: 'Plomo Plata',   hex: '#9FAAB5' },
        { name: 'Marrón',        hex: '#795548' },
        { name: 'Verde Botella', hex: '#1f4a2e' },
        { name: 'Acero',         hex: '#2E3F5C' },
        { name: 'PPT',           hex: '#EDE5D8' },
        { name: 'Lila 69',       hex: '#C9B1D9' },
        { name: 'Celeste',       hex: '#88C0D0' },
        { name: 'Guinda',        hex: '#7c1d2e' }
      ],
      'Oversize': [
        { name: 'Negro',         hex: '#1a1a1a' },
        { name: 'Marrón',        hex: '#795548' },
        { name: 'Denim',         hex: '#5B7FA6' },
        { name: 'Plomo Escolar', hex: '#6b7280' },
        { name: 'Plomo Plata',   hex: '#9FAAB5' },
        { name: 'Verde Botella', hex: '#1f4a2e' },
        { name: 'Verde Militar', hex: '#4a5c3c' },
        { name: 'PPT',           hex: '#EDE5D8' },
        { name: 'Beige',         hex: '#d4c5a9' },
        { name: 'Acero',         hex: '#2E3F5C' },
        { name: 'Celeste',       hex: '#88C0D0' },
        { name: 'Lila 69',       hex: '#C9B1D9' },
        { name: 'Lila Oscuro',   hex: '#8A6BA8' },
        { name: 'Mauve',         hex: '#c8a0a0' },
        { name: 'Guinda',        hex: '#7c1d2e' }
      ]
    },
    thumb: '/PRODUCTOS/HOODIES-BOXY/Negro/1.webp',
    wsp: 'https://wa.me/51942418379?text=Hola%2C+quiero+el+Pack+Hoodies+(2+hoodies+x+S%2F99)'
  },

  '07': {
    num: '07', slug: 'pima', badge: 'Premium',
    name: 'Pack Pima',
    price: 'S/ 70', priceNum: 70, qty: '2 polos', unitCount: 2, unitType: 'Polo',
    desc: '100% algodón Pima peruano — la fibra larga que produce el mejor algodón del país. Suavidad real desde el primer uso, no encoge con el lavado, no pierde forma. Corte Slim Fit con caída limpia que funciona igual en trabajo o salida. Si usas polos todos los días y quieres sentir la diferencia, este es el punto de partida.',
    colorsNote: null,
    swatches: null,
    colors: [
      {
        name: 'Azul', hex: '#1a3a6e',
        photos: ['/PRODUCTOS/PIMA%20SLIM%20FIT/AZUL/1.webp','/PRODUCTOS/PIMA%20SLIM%20FIT/AZUL/2.webp','/PRODUCTOS/PIMA%20SLIM%20FIT/AZUL/3.webp','/PRODUCTOS/PIMA%20SLIM%20FIT/AZUL/4.webp']
      },
      {
        name: 'Negro', hex: '#111111',
        photos: ['/PRODUCTOS/PIMA%20SLIM%20FIT/NEGRO/1.webp','/PRODUCTOS/PIMA%20SLIM%20FIT/NEGRO/2.webp','/PRODUCTOS/PIMA%20SLIM%20FIT/NEGRO/3.webp','/PRODUCTOS/PIMA%20SLIM%20FIT/NEGRO/4.webp']
      }
    ],
    thumb: '/PRODUCTOS/PIMA%20SLIM%20FIT/AZUL/1.webp',
    wsp: 'https://wa.me/51942418379?text=Hola%2C+quiero+el+Pack+Pima+(2+polos+x+S%2F70)'
  },

  '08': {
    num: '08', slug: 'medium-cotton',
    name: 'Pack Medium Cotton 280g',
    price: 'S/ 100', priceNum: 100, qty: '4 polos', unitCount: 4, unitType: 'Polo',
    desc: 'Tela 15/1, 280 gramos — notablemente más densa que un polo de tienda, con mejor caída y más estructura. Tres cortes en un pack: Oversize suelto, Boxy cuadrado y Regular clásico. Para quien quiere calidad diaria con versatilidad de siluetas.',
    colorsNote: 'Colores disponibles según stock.',
    colors: null,
    swatches: [
      { name: 'Negro',         hex: '#1a1a1a' },
      { name: 'Plomo Plata',   hex: '#9FAAB5' },
      { name: 'Plomo Escolar', hex: '#6b7280' },
      { name: 'Marrón',        hex: '#795548' },
      { name: 'Verde Botella', hex: '#1f4a2e' },
      { name: 'Verde Militar', hex: '#4a5c3c' },
      { name: 'Celeste',       hex: '#88C0D0' },
      { name: 'Blanco',        hex: '#f5f5f5' },
      { name: 'PPT',           hex: '#EDE5D8' },
      { name: 'Beige Claro',   hex: '#DDD0B3' },
      { name: 'Acero',         hex: '#2E3F5C' },
      { name: 'Guinda',        hex: '#7c1d2e' }
    ],
    swatchesByFit: {
      'Oversize': [
        { name: 'Negro',         hex: '#1a1a1a' },
        { name: 'Plomo Plata',   hex: '#9FAAB5' },
        { name: 'Plomo Escolar', hex: '#6b7280' },
        { name: 'Marrón',        hex: '#795548' },
        { name: 'Verde Botella', hex: '#1f4a2e' },
        { name: 'Verde Militar', hex: '#4a5c3c' },
        { name: 'Celeste',       hex: '#88C0D0' },
        { name: 'Blanco',        hex: '#f5f5f5' },
        { name: 'PPT',           hex: '#EDE5D8' },
        { name: 'Beige Claro',   hex: '#DDD0B3' },
        { name: 'Acero',         hex: '#2E3F5C' },
        { name: 'Guinda',        hex: '#7c1d2e' }
      ],
      'Boxy': [
        { name: 'Negro',         hex: '#1a1a1a' },
        { name: 'Plomo Plata',   hex: '#9FAAB5' },
        { name: 'Plomo Escolar', hex: '#6b7280' },
        { name: 'Marrón',        hex: '#795548' },
        { name: 'Verde Botella', hex: '#1f4a2e' },
        { name: 'Verde Militar', hex: '#4a5c3c' },
        { name: 'Celeste',       hex: '#88C0D0' },
        { name: 'Blanco',        hex: '#f5f5f5' },
        { name: 'PPT',           hex: '#EDE5D8' },
        { name: 'Beige Claro',   hex: '#DDD0B3' },
        { name: 'Acero',         hex: '#2E3F5C' },
        { name: 'Guinda',        hex: '#7c1d2e' }
      ],
      'Regular': [
        { name: 'Negro',         hex: '#1a1a1a' },
        { name: 'Beige',         hex: '#d4c5a9' },
        { name: 'Plomo Plata',   hex: '#9FAAB5' },
        { name: 'Plomo Escolar', hex: '#6b7280' },
        { name: 'Marrón',        hex: '#795548' },
        { name: 'English Blue',  hex: '#1e3a5f' },
        { name: 'Guinda',        hex: '#7c1d2e' },
        { name: 'Mauve',         hex: '#c8a0a0' },
        { name: 'Verde Manzana', hex: '#7DB868' },
        { name: 'Cocoa',         hex: '#8C6448' },
        { name: 'Verde Militar', hex: '#4a5c3c' },
        { name: 'Verde Botella', hex: '#1f4a2e' },
        { name: 'Celeste',       hex: '#88C0D0' },
        { name: 'Acero',         hex: '#2E3F5C' }
      ]
    },
    thumb: '/PRODUCTOS/OVERSIZE/NEGRO/1.webp',
    wsp: 'https://wa.me/51942418379?text=Hola%2C+quiero+el+Pack+Medium+Cotton+280g+(4+polos+x+S%2F100)'
  },

  '09': {
    num: '09', slug: 'high-cotton', badge: 'El más grueso',
    name: 'Pack High Cotton 320g',
    price: 'S/ 110', priceNum: 110, qty: '4 polos', unitCount: 4, unitType: 'Polo',
    desc: '11/1 High Cotton, 320 gramos — el jersey más pesado del catálogo. Se nota la diferencia al primer tacto: más cuerpo, mejor caída, no se transparenta, mantiene la forma. Dos cortes en un pack: Oversize suelto y Boxy cuadrado. Para quien no negocia en calidad y quiere un polo que dure años.',
    colorsNote: 'Colores premium disponibles según stock.',
    colors: null,
    swatches: [
      { name: 'Negro',         hex: '#1a1a1a' },
      { name: 'Plomo Plata',   hex: '#9FAAB5' },
      { name: 'Plomo Escolar', hex: '#6b7280' },
      { name: 'Marrón',        hex: '#795548' },
      { name: 'Acero',         hex: '#2E3F5C' },
      { name: 'Blanco',        hex: '#f5f5f5' },
      { name: 'PPT',           hex: '#EDE5D8' },
      { name: 'Beige Claro',   hex: '#DDD0B3' },
      { name: 'Celeste',       hex: '#88C0D0' },
      { name: 'Verde Botella', hex: '#1f4a2e' },
      { name: 'Verde Militar', hex: '#4a5c3c' },
      { name: 'Guinda',        hex: '#7c1d2e' }
    ],
    thumb: '/PRODUCTOS/BOXY/Negro/1.webp',
    wsp: 'https://wa.me/51942418379?text=Hola%2C+quiero+el+Pack+High+Cotton+320g+(4+polos+x+S%2F110)'
  },

  '10': {
    num: '10', slug: 'invierno', badge: 'Polo 20/1 de regalo',
    name: 'Pack Invierno',
    price: 'S/ 120', priceNum: 120,
    qty: '2 prendas + polo 20/1 de regalo', unitCount: 2,
    unitLabels: ['Hoodie', 'Pantalón'],
    unitFits: [['Boxy', 'Oversize'], null],
    desc: 'Hoodie franela 24/1 (320g) en corte Boxy o Oversize + pantalón franela 24/1 (350g) corte recto. Las dos prendas en la paleta que elijas. Y de regalo, un polo 20/1 oversize — el color lo coordinas directo en el chat al hacer tu pedido. El look de invierno completo para Lima de junio a septiembre.',
    colorsNote: 'Elige los colores de hoodie y pantalón. El polo de regalo lo coordinas en el chat.',
    colors: null,
    swatches: [
      { name: 'Negro',         hex: '#1a1a1a' },
      { name: 'Plomo Escolar', hex: '#6b7280' },
      { name: 'Plomo Plata',   hex: '#9FAAB5' },
      { name: 'Marrón',        hex: '#795548' },
      { name: 'Verde Botella', hex: '#1f4a2e' },
      { name: 'Verde Militar', hex: '#4a5c3c' },
      { name: 'Beige',         hex: '#d4c5a9' },
      { name: 'Celeste',       hex: '#88C0D0' },
      { name: 'Azul',          hex: '#2B7FD4' },
      { name: 'PPT',           hex: '#EDE5D8' },
      { name: 'Acero',         hex: '#2E3F5C' }
    ],
    thumb: '/PRODUCTOS/HOODIES-BOXY/Negro/1.webp',
    wsp: 'https://wa.me/51942418379?text=Hola%2C+quiero+el+Pack+Invierno+(hoodie+%2B+pantal%C3%B3n+%2B+polo+20%2F1+de+regalo+x+S%2F120)'
  }
};

// ─── FITS POR PACK ────────────────────────────────────────────────────────────

export const FITS: Record<string, string[]> = {
  '01': ['Oversize', 'Boxy', 'Boxy Largo', 'Regular'],
  '02': ['Dama'],
  '06': ['Boxy', 'Oversize'],
  '08': ['Oversize', 'Boxy', 'Regular'],
  '09': ['Oversize', 'Boxy'],
  '10': ['Boxy', 'Oversize']
};

export const DISABLED_FITS: Record<string, string[]> = {
  '01': ['Boxy Largo']
};

// ─── FOTOS POR FIT Y COLOR ────────────────────────────────────────────────────

export const FIT_PHOTOS: Record<string, Record<string, Record<string, string[]>>> = {
  '01': {
    'Oversize': {
      'Blanco':        ['/PRODUCTOS/OVERSIZE-20/Blanco/1.webp','/PRODUCTOS/OVERSIZE-20/Blanco/2.webp','/PRODUCTOS/OVERSIZE-20/Blanco/3.webp','/PRODUCTOS/OVERSIZE-20/Blanco/4.webp'],
      'PPT':           ['/PRODUCTOS/OVERSIZE-20/PPT/1.webp','/PRODUCTOS/OVERSIZE-20/PPT/2.webp','/PRODUCTOS/OVERSIZE-20/PPT/3.webp','/PRODUCTOS/OVERSIZE-20/PPT/4.webp'],
      'Beige':         ['/PRODUCTOS/OVERSIZE-20/Beige/1.webp','/PRODUCTOS/OVERSIZE-20/Beige/2.webp','/PRODUCTOS/OVERSIZE-20/Beige/3.webp','/PRODUCTOS/OVERSIZE-20/Beige/4.webp'],
      'Verde Manzana': ['/PRODUCTOS/OVERSIZE-20/Verde Manzana/1.webp','/PRODUCTOS/OVERSIZE-20/Verde Manzana/2.webp','/PRODUCTOS/OVERSIZE-20/Verde Manzana/3.webp','/PRODUCTOS/OVERSIZE-20/Verde Manzana/4.webp'],
      'Cocoa':         ['/PRODUCTOS/OVERSIZE-20/Cocoa/1.webp','/PRODUCTOS/OVERSIZE-20/Cocoa/2.webp','/PRODUCTOS/OVERSIZE-20/Cocoa/3.webp','/PRODUCTOS/OVERSIZE-20/Cocoa/4.webp'],
      'Plomo Plata':   ['/PRODUCTOS/OVERSIZE-20/Plomo Plata/1.webp','/PRODUCTOS/OVERSIZE-20/Plomo Plata/2.webp','/PRODUCTOS/OVERSIZE-20/Plomo Plata/3.webp','/PRODUCTOS/OVERSIZE-20/Plomo Plata/4.webp'],
      'Plomo Escolar': ['/PRODUCTOS/OVERSIZE-20/Plomo Escolar/1.webp','/PRODUCTOS/OVERSIZE-20/Plomo Escolar/2.webp','/PRODUCTOS/OVERSIZE-20/Plomo Escolar/3.webp','/PRODUCTOS/OVERSIZE-20/Plomo Escolar/4.webp'],
      'Marrón':        ['/PRODUCTOS/OVERSIZE-20/Marron/1.webp','/PRODUCTOS/OVERSIZE-20/Marron/2.webp','/PRODUCTOS/OVERSIZE-20/Marron/3.webp','/PRODUCTOS/OVERSIZE-20/Marron/4.webp'],
      'Negro':         ['/PRODUCTOS/OVERSIZE-20/Negro/1.webp','/PRODUCTOS/OVERSIZE-20/Negro/2.webp','/PRODUCTOS/OVERSIZE-20/Negro/3.webp','/PRODUCTOS/OVERSIZE-20/Negro/4.webp'],
      'English Blue':  ['/PRODUCTOS/OVERSIZE-20/English Blue/1.webp','/PRODUCTOS/OVERSIZE-20/English Blue/2.webp','/PRODUCTOS/OVERSIZE-20/English Blue/3.webp','/PRODUCTOS/OVERSIZE-20/English Blue/4.webp'],
      'Guinda':        ['/PRODUCTOS/OVERSIZE-20/Guinda/1.webp','/PRODUCTOS/OVERSIZE-20/Guinda/2.webp','/PRODUCTOS/OVERSIZE-20/Guinda/3.webp','/PRODUCTOS/OVERSIZE-20/Guinda/4.webp'],
      'Mauve':         ['/PRODUCTOS/OVERSIZE-20/Mauve/1.webp','/PRODUCTOS/OVERSIZE-20/Mauve/2.webp','/PRODUCTOS/OVERSIZE-20/Mauve/3.webp','/PRODUCTOS/OVERSIZE-20/Mauve/4.webp'],
      'Verde Militar': ['/PRODUCTOS/OVERSIZE-20/Verde Militar/1.webp','/PRODUCTOS/OVERSIZE-20/Verde Militar/2.webp','/PRODUCTOS/OVERSIZE-20/Verde Militar/3.webp','/PRODUCTOS/OVERSIZE-20/Verde Militar/4.webp'],
      'Verde Botella': ['/PRODUCTOS/OVERSIZE-20/Verde Botella/1.webp','/PRODUCTOS/OVERSIZE-20/Verde Botella/2.webp','/PRODUCTOS/OVERSIZE-20/Verde Botella/3.webp','/PRODUCTOS/OVERSIZE-20/Verde Botella/4.webp'],
      'Celeste':       ['/PRODUCTOS/OVERSIZE-20/Celeste/1.webp','/PRODUCTOS/OVERSIZE-20/Celeste/2.webp','/PRODUCTOS/OVERSIZE-20/Celeste/3.webp','/PRODUCTOS/OVERSIZE-20/Celeste/4.webp'],
      'Acero':         ['/PRODUCTOS/OVERSIZE-20/Acero/1.webp','/PRODUCTOS/OVERSIZE-20/Acero/2.webp','/PRODUCTOS/OVERSIZE-20/Acero/3.webp','/PRODUCTOS/OVERSIZE-20/Acero/4.webp']
    },
    'Boxy': {
      'Blanco':        ['/PRODUCTOS/BOXY/Blanco/1.webp','/PRODUCTOS/BOXY/Blanco/2.webp','/PRODUCTOS/BOXY/Blanco/3.webp','/PRODUCTOS/BOXY/Blanco/4.webp'],
      'PPT':           ['/PRODUCTOS/BOXY/PPT/1.webp','/PRODUCTOS/BOXY/PPT/2.webp','/PRODUCTOS/BOXY/PPT/3.webp','/PRODUCTOS/BOXY/PPT/4.webp'],
      'Beige':         ['/PRODUCTOS/BOXY/Beige/1.webp','/PRODUCTOS/BOXY/Beige/2.webp','/PRODUCTOS/BOXY/Beige/3.webp','/PRODUCTOS/BOXY/Beige/4.webp'],
      'Plomo Plata':   ['/PRODUCTOS/BOXY/Plomo Plata/1.webp','/PRODUCTOS/BOXY/Plomo Plata/2.webp','/PRODUCTOS/BOXY/Plomo Plata/3.webp','/PRODUCTOS/BOXY/Plomo Plata/4.webp'],
      'Plomo Escolar': ['/PRODUCTOS/BOXY/Plomo Escolar/1.webp','/PRODUCTOS/BOXY/Plomo Escolar/2.webp','/PRODUCTOS/BOXY/Plomo Escolar/3.webp','/PRODUCTOS/BOXY/Plomo Escolar/4.webp'],
      'Marrón':        ['/PRODUCTOS/BOXY/Marron/1.webp','/PRODUCTOS/BOXY/Marron/2.webp','/PRODUCTOS/BOXY/Marron/3.webp','/PRODUCTOS/BOXY/Marron/4.webp'],
      'Negro':         ['/PRODUCTOS/BOXY/Negro/1.webp','/PRODUCTOS/BOXY/Negro/2.webp','/PRODUCTOS/BOXY/Negro/3.webp','/PRODUCTOS/BOXY/Negro/4.webp'],
      'Mauve':         ['/PRODUCTOS/BOXY/Mauve/1.webp','/PRODUCTOS/BOXY/Mauve/2.webp','/PRODUCTOS/BOXY/Mauve/3.webp','/PRODUCTOS/BOXY/Mauve/4.webp'],
      'Celeste':       ['/PRODUCTOS/BOXY/Celeste/1.webp','/PRODUCTOS/BOXY/Celeste/2.webp','/PRODUCTOS/BOXY/Celeste/3.webp','/PRODUCTOS/BOXY/Celeste/4.webp'],
      'English Blue':  ['/PRODUCTOS/BOXY/English Blue/1.webp','/PRODUCTOS/BOXY/English Blue/2.webp','/PRODUCTOS/BOXY/English Blue/3.webp','/PRODUCTOS/BOXY/English Blue/4.webp'],
      'Acero':         ['/PRODUCTOS/BOXY/Acero/1.webp','/PRODUCTOS/BOXY/Acero/2.webp','/PRODUCTOS/BOXY/Acero/3.webp','/PRODUCTOS/BOXY/Acero/4.webp']
    },
    'Regular': {
      'Blanco':        ['/PRODUCTOS/REGULAR/Blanco/1.webp','/PRODUCTOS/REGULAR/Blanco/2.webp','/PRODUCTOS/REGULAR/Blanco/3.webp'],
      'PPT':           ['/PRODUCTOS/REGULAR/PPT/1.webp','/PRODUCTOS/REGULAR/PPT/2.webp','/PRODUCTOS/REGULAR/PPT/3.webp'],
      'Plomo Plata':   ['/PRODUCTOS/REGULAR/Plomo Plata/1.webp','/PRODUCTOS/REGULAR/Plomo Plata/2.webp','/PRODUCTOS/REGULAR/Plomo Plata/3.webp'],
      'Plomo Escolar': ['/PRODUCTOS/REGULAR/Plomo Escolar/1.webp','/PRODUCTOS/REGULAR/Plomo Escolar/2.webp','/PRODUCTOS/REGULAR/Plomo Escolar/3.webp'],
      'Marrón':        ['/PRODUCTOS/REGULAR/Marron/1.webp','/PRODUCTOS/REGULAR/Marron/2.webp','/PRODUCTOS/REGULAR/Marron/3.webp'],
      'Negro':         ['/PRODUCTOS/REGULAR/Negro/1.webp','/PRODUCTOS/REGULAR/Negro/2.webp','/PRODUCTOS/REGULAR/Negro/3.webp'],
      'English Blue':  ['/PRODUCTOS/REGULAR/English Blue/1.webp','/PRODUCTOS/REGULAR/English Blue/2.webp','/PRODUCTOS/REGULAR/English Blue/3.webp'],
      'Beige':         ['/PRODUCTOS/REGULAR/Beige/1.webp','/PRODUCTOS/REGULAR/Beige/2.webp','/PRODUCTOS/REGULAR/Beige/3.webp'],
      'Verde Manzana': ['/PRODUCTOS/REGULAR/Verde Manzana/1.webp','/PRODUCTOS/REGULAR/Verde Manzana/2.webp','/PRODUCTOS/REGULAR/Verde Manzana/3.webp'],
      'Cocoa':         ['/PRODUCTOS/REGULAR/Cocoa/1.webp','/PRODUCTOS/REGULAR/Cocoa/2.webp','/PRODUCTOS/REGULAR/Cocoa/3.webp'],
      'Mauve':         ['/PRODUCTOS/REGULAR/Mauve/1.webp','/PRODUCTOS/REGULAR/Mauve/2.webp','/PRODUCTOS/REGULAR/Mauve/3.webp'],
      'Verde Militar': ['/PRODUCTOS/REGULAR/Verde Militar/1.webp','/PRODUCTOS/REGULAR/Verde Militar/2.webp','/PRODUCTOS/REGULAR/Verde Militar/3.webp'],
      'Verde Botella': ['/PRODUCTOS/REGULAR/Verde Botella/1.webp','/PRODUCTOS/REGULAR/Verde Botella/2.webp','/PRODUCTOS/REGULAR/Verde Botella/3.webp'],
      'Celeste':       ['/PRODUCTOS/REGULAR/Celeste/1.webp','/PRODUCTOS/REGULAR/Celeste/2.webp','/PRODUCTOS/REGULAR/Celeste/3.webp'],
      'Acero':         ['/PRODUCTOS/REGULAR/Acero/1.webp','/PRODUCTOS/REGULAR/Acero/2.webp','/PRODUCTOS/REGULAR/Acero/3.webp'],
      'Guinda':        ['/PRODUCTOS/REGULAR/Guinda/1.webp','/PRODUCTOS/REGULAR/Guinda/2.webp','/PRODUCTOS/REGULAR/Guinda/3.webp']
    }
  },
  '02': {
    'Dama': {
      'Negro':         ['/PRODUCTOS/DAMA/Negro/1.webp','/PRODUCTOS/DAMA/Negro/2.webp','/PRODUCTOS/DAMA/Negro/3.webp','/PRODUCTOS/DAMA/Negro/4.webp'],
      'Blanco':        ['/PRODUCTOS/DAMA/Blanco/1.webp','/PRODUCTOS/DAMA/Blanco/2.webp','/PRODUCTOS/DAMA/Blanco/3.webp','/PRODUCTOS/DAMA/Blanco/4.webp'],
      'PPT':           ['/PRODUCTOS/DAMA/PPT/1.webp','/PRODUCTOS/DAMA/PPT/2.webp','/PRODUCTOS/DAMA/PPT/3.webp','/PRODUCTOS/DAMA/PPT/4.webp'],
      'Beige Claro':   ['/PRODUCTOS/DAMA/Beige Claro/1.webp','/PRODUCTOS/DAMA/Beige Claro/2.webp','/PRODUCTOS/DAMA/Beige Claro/3.webp','/PRODUCTOS/DAMA/Beige Claro/4.webp'],
      'Mauve':         ['/PRODUCTOS/DAMA/Mauve/1.webp','/PRODUCTOS/DAMA/Mauve/2.webp','/PRODUCTOS/DAMA/Mauve/3.webp','/PRODUCTOS/DAMA/Mauve/4.webp'],
      'Plomo Escolar': ['/PRODUCTOS/DAMA/Plomo Escolar/1.webp','/PRODUCTOS/DAMA/Plomo Escolar/2.webp','/PRODUCTOS/DAMA/Plomo Escolar/3.webp','/PRODUCTOS/DAMA/Plomo Escolar/4.webp'],
      'English Blue':  ['/PRODUCTOS/DAMA/English Blue/1.webp','/PRODUCTOS/DAMA/English Blue/2.webp','/PRODUCTOS/DAMA/English Blue/3.webp','/PRODUCTOS/DAMA/English Blue/4.webp'],
      'Guinda':        ['/PRODUCTOS/DAMA/Guinda/1.webp','/PRODUCTOS/DAMA/Guinda/2.webp','/PRODUCTOS/DAMA/Guinda/3.webp','/PRODUCTOS/DAMA/Guinda/4.webp'],
      'Celeste':       ['/PRODUCTOS/DAMA/Celeste/1.webp','/PRODUCTOS/DAMA/Celeste/2.webp','/PRODUCTOS/DAMA/Celeste/3.webp','/PRODUCTOS/DAMA/Celeste/4.webp'],
      'Verde Manzana': ['/PRODUCTOS/DAMA/Verde Manzana/1.webp','/PRODUCTOS/DAMA/Verde Manzana/2.webp','/PRODUCTOS/DAMA/Verde Manzana/3.webp','/PRODUCTOS/DAMA/Verde Manzana/4.webp'],
      'Rosado':        ['/PRODUCTOS/DAMA/Rosado/1.webp','/PRODUCTOS/DAMA/Rosado/2.webp','/PRODUCTOS/DAMA/Rosado/3.webp','/PRODUCTOS/DAMA/Rosado/4.webp']
    }
  },
  '06': {
    'Boxy': {
      'Negro':         ['/PRODUCTOS/HOODIES-BOXY/Negro/1.webp','/PRODUCTOS/HOODIES-BOXY/Negro/2.webp'],
      'Plomo Escolar': ['/PRODUCTOS/HOODIES-BOXY/Plomo Escolar/1.webp','/PRODUCTOS/HOODIES-BOXY/Plomo Escolar/2.webp','/PRODUCTOS/HOODIES-BOXY/Plomo Escolar/3.webp'],
      'Plomo Plata':   ['/PRODUCTOS/HOODIES-BOXY/Plomo Plata/1.webp','/PRODUCTOS/HOODIES-BOXY/Plomo Plata/2.webp','/PRODUCTOS/HOODIES-BOXY/Plomo Plata/3.webp'],
      'Marrón':        ['/PRODUCTOS/HOODIES-BOXY/Marron/1.webp','/PRODUCTOS/HOODIES-BOXY/Marron/2.webp'],
      'Verde Botella': ['/PRODUCTOS/HOODIES-BOXY/Verde Botella/1.webp','/PRODUCTOS/HOODIES-BOXY/Verde Botella/2.webp','/PRODUCTOS/HOODIES-BOXY/Verde Botella/3.webp'],
      'Acero':         ['/PRODUCTOS/HOODIES-BOXY/Acero/1.webp','/PRODUCTOS/HOODIES-BOXY/Acero/2.webp','/PRODUCTOS/HOODIES-BOXY/Acero/3.webp'],
      'Lila 69':       ['/PRODUCTOS/HOODIES-BOXY/Lila 69/1.webp','/PRODUCTOS/HOODIES-BOXY/Lila 69/2.webp','/PRODUCTOS/HOODIES-BOXY/Lila 69/3.webp'],
      'Celeste':       ['/PRODUCTOS/HOODIES-BOXY/Celeste/1.webp','/PRODUCTOS/HOODIES-BOXY/Celeste/2.webp','/PRODUCTOS/HOODIES-BOXY/Celeste/3.webp'],
      'Guinda':        ['/PRODUCTOS/HOODIES-BOXY/Guinda/1.webp','/PRODUCTOS/HOODIES-BOXY/Guinda/2.webp','/PRODUCTOS/HOODIES-BOXY/Guinda/3.webp']
    },
    'Oversize': {
      'Negro':         ['/PRODUCTOS/HOODIES-OVERSIZE/Negro/1.webp'],
      'Marrón':        ['/PRODUCTOS/HOODIES-OVERSIZE/Marron/1.webp','/PRODUCTOS/HOODIES-OVERSIZE/Marron/2.webp','/PRODUCTOS/HOODIES-OVERSIZE/Marron/3.webp'],
      'Plomo Escolar': ['/PRODUCTOS/HOODIES-OVERSIZE/Plomo Escolar/1.webp','/PRODUCTOS/HOODIES-OVERSIZE/Plomo Escolar/2.webp','/PRODUCTOS/HOODIES-OVERSIZE/Plomo Escolar/3.webp'],
      'Plomo Plata':   ['/PRODUCTOS/HOODIES-OVERSIZE/Plomo Plata/1.webp','/PRODUCTOS/HOODIES-OVERSIZE/Plomo Plata/2.webp','/PRODUCTOS/HOODIES-OVERSIZE/Plomo Plata/3.webp'],
      'Verde Botella': ['/PRODUCTOS/HOODIES-OVERSIZE/Verde Botella/1.webp','/PRODUCTOS/HOODIES-OVERSIZE/Verde Botella/2.webp','/PRODUCTOS/HOODIES-OVERSIZE/Verde Botella/3.webp'],
      'Beige':         ['/PRODUCTOS/HOODIES-OVERSIZE/Beige/1.webp','/PRODUCTOS/HOODIES-OVERSIZE/Beige/2.webp','/PRODUCTOS/HOODIES-OVERSIZE/Beige/3.webp'],
      'Acero':         ['/PRODUCTOS/HOODIES-OVERSIZE/Acero/1.webp','/PRODUCTOS/HOODIES-OVERSIZE/Acero/2.webp','/PRODUCTOS/HOODIES-OVERSIZE/Acero/3.webp'],
      'Celeste':       ['/PRODUCTOS/HOODIES-OVERSIZE/Celeste/1.webp','/PRODUCTOS/HOODIES-OVERSIZE/Celeste/2.webp','/PRODUCTOS/HOODIES-OVERSIZE/Celeste/3.webp'],
      'Lila 69':       ['/PRODUCTOS/HOODIES-OVERSIZE/Lila 69/1.webp','/PRODUCTOS/HOODIES-OVERSIZE/Lila 69/2.webp','/PRODUCTOS/HOODIES-OVERSIZE/Lila 69/3.webp'],
      'Guinda':        ['/PRODUCTOS/HOODIES-OVERSIZE/Guinda/1.webp','/PRODUCTOS/HOODIES-OVERSIZE/Guinda/2.webp','/PRODUCTOS/HOODIES-OVERSIZE/Guinda/3.webp']
    }
  },
  '08': {
    'Oversize': {
      'Negro':         ['/PRODUCTOS/OVERSIZE/NEGRO/1.webp','/PRODUCTOS/OVERSIZE/NEGRO/2.webp','/PRODUCTOS/OVERSIZE/NEGRO/3.webp','/PRODUCTOS/OVERSIZE/NEGRO/4.webp'],
      'Plomo Plata':   ['/PRODUCTOS/OVERSIZE/PLOMO PLATA/1.webp','/PRODUCTOS/OVERSIZE/PLOMO PLATA/2.webp','/PRODUCTOS/OVERSIZE/PLOMO PLATA/3.webp','/PRODUCTOS/OVERSIZE/PLOMO PLATA/4.webp'],
      'Plomo Escolar': ['/PRODUCTOS/OVERSIZE/PLOMO ESCOLAR/1.webp','/PRODUCTOS/OVERSIZE/PLOMO ESCOLAR/2.webp','/PRODUCTOS/OVERSIZE/PLOMO ESCOLAR/3.webp','/PRODUCTOS/OVERSIZE/PLOMO ESCOLAR/4.webp'],
      'Marrón':        ['/PRODUCTOS/OVERSIZE/MARRON/1.webp','/PRODUCTOS/OVERSIZE/MARRON/2.webp','/PRODUCTOS/OVERSIZE/MARRON/3.webp','/PRODUCTOS/OVERSIZE/MARRON/4.webp'],
      'Verde Botella': ['/PRODUCTOS/OVERSIZE/VERDE BOTELLA/1.webp','/PRODUCTOS/OVERSIZE/VERDE BOTELLA/2.webp','/PRODUCTOS/OVERSIZE/VERDE BOTELLA/3.webp','/PRODUCTOS/OVERSIZE/VERDE BOTELLA/4.webp'],
      'Verde Militar': ['/PRODUCTOS/OVERSIZE/VERDE MILITAR/1.webp','/PRODUCTOS/OVERSIZE/VERDE MILITAR/2.webp','/PRODUCTOS/OVERSIZE/VERDE MILITAR/3.webp','/PRODUCTOS/OVERSIZE/VERDE MILITAR/4.webp'],
      'Blanco':        ['/PRODUCTOS/OVERSIZE/BLANCO/1.webp','/PRODUCTOS/OVERSIZE/BLANCO/2.webp','/PRODUCTOS/OVERSIZE/BLANCO/3.webp','/PRODUCTOS/OVERSIZE/BLANCO/4.webp'],
      'PPT':           ['/PRODUCTOS/OVERSIZE/PPT/1.webp','/PRODUCTOS/OVERSIZE/PPT/2.webp','/PRODUCTOS/OVERSIZE/PPT/3.webp','/PRODUCTOS/OVERSIZE/PPT/4.webp'],
      'Beige Claro':   ['/PRODUCTOS/OVERSIZE/BEIGE CLARO/1.webp','/PRODUCTOS/OVERSIZE/BEIGE CLARO/2.webp','/PRODUCTOS/OVERSIZE/BEIGE CLARO/3.webp','/PRODUCTOS/OVERSIZE/BEIGE CLARO/4.webp'],
      'Acero':         ['/PRODUCTOS/OVERSIZE/ACERO/1.webp','/PRODUCTOS/OVERSIZE/ACERO/2.webp','/PRODUCTOS/OVERSIZE/ACERO/3.webp','/PRODUCTOS/OVERSIZE/ACERO/4.webp'],
      'Guinda':        ['/PRODUCTOS/OVERSIZE/GUINDA/1.webp','/PRODUCTOS/OVERSIZE/GUINDA/2.webp','/PRODUCTOS/OVERSIZE/GUINDA/3.webp','/PRODUCTOS/OVERSIZE/GUINDA/4.webp'],
      'Celeste':       ['/PRODUCTOS/OVERSIZE/CELESTE/1.webp','/PRODUCTOS/OVERSIZE/CELESTE/2.webp','/PRODUCTOS/OVERSIZE/CELESTE/3.webp','/PRODUCTOS/OVERSIZE/CELESTE/4.webp']
    },
    'Boxy': {
      'Negro':         ['/PRODUCTOS/BOXY/Negro/1.webp','/PRODUCTOS/BOXY/Negro/2.webp','/PRODUCTOS/BOXY/Negro/3.webp','/PRODUCTOS/BOXY/Negro/4.webp'],
      'Plomo Plata':   ['/PRODUCTOS/BOXY/Plomo Plata/1.webp','/PRODUCTOS/BOXY/Plomo Plata/2.webp','/PRODUCTOS/BOXY/Plomo Plata/3.webp','/PRODUCTOS/BOXY/Plomo Plata/4.webp'],
      'Plomo Escolar': ['/PRODUCTOS/BOXY/Plomo Escolar/1.webp','/PRODUCTOS/BOXY/Plomo Escolar/2.webp','/PRODUCTOS/BOXY/Plomo Escolar/3.webp','/PRODUCTOS/BOXY/Plomo Escolar/4.webp'],
      'Marrón':        ['/PRODUCTOS/BOXY/Marron/1.webp','/PRODUCTOS/BOXY/Marron/2.webp','/PRODUCTOS/BOXY/Marron/3.webp','/PRODUCTOS/BOXY/Marron/4.webp'],
      'Verde Botella': ['/PRODUCTOS/BOXY/Verde Botella/1.webp','/PRODUCTOS/BOXY/Verde Botella/2.webp','/PRODUCTOS/BOXY/Verde Botella/3.webp','/PRODUCTOS/BOXY/Verde Botella/4.webp'],
      'Verde Militar': ['/PRODUCTOS/BOXY/Verde Militar/1.webp','/PRODUCTOS/BOXY/Verde Militar/2.webp','/PRODUCTOS/BOXY/Verde Militar/3.webp','/PRODUCTOS/BOXY/Verde Militar/4.webp'],
      'Celeste':       ['/PRODUCTOS/BOXY/Celeste/1.webp','/PRODUCTOS/BOXY/Celeste/2.webp','/PRODUCTOS/BOXY/Celeste/3.webp','/PRODUCTOS/BOXY/Celeste/4.webp'],
      'Blanco':        ['/PRODUCTOS/BOXY/Blanco/1.webp','/PRODUCTOS/BOXY/Blanco/2.webp','/PRODUCTOS/BOXY/Blanco/3.webp','/PRODUCTOS/BOXY/Blanco/4.webp'],
      'PPT':           ['/PRODUCTOS/BOXY/PPT/1.webp','/PRODUCTOS/BOXY/PPT/2.webp','/PRODUCTOS/BOXY/PPT/3.webp','/PRODUCTOS/BOXY/PPT/4.webp'],
      'Beige Claro':   ['/PRODUCTOS/BOXY/Beige Claro/1.webp','/PRODUCTOS/BOXY/Beige Claro/2.webp','/PRODUCTOS/BOXY/Beige Claro/3.webp','/PRODUCTOS/BOXY/Beige Claro/4.webp'],
      'Acero':         ['/PRODUCTOS/BOXY/Acero/1.webp','/PRODUCTOS/BOXY/Acero/2.webp','/PRODUCTOS/BOXY/Acero/3.webp','/PRODUCTOS/BOXY/Acero/4.webp'],
      'Guinda':        ['/PRODUCTOS/BOXY/Guinda/1.webp','/PRODUCTOS/BOXY/Guinda/2.webp','/PRODUCTOS/BOXY/Guinda/3.webp','/PRODUCTOS/BOXY/Guinda/4.webp']
    },
    'Regular': {
      'Plomo Plata':   ['/PRODUCTOS/REGULAR/Plomo Plata/1.webp','/PRODUCTOS/REGULAR/Plomo Plata/2.webp','/PRODUCTOS/REGULAR/Plomo Plata/3.webp'],
      'Plomo Escolar': ['/PRODUCTOS/REGULAR/Plomo Escolar/1.webp','/PRODUCTOS/REGULAR/Plomo Escolar/2.webp','/PRODUCTOS/REGULAR/Plomo Escolar/3.webp'],
      'Marrón':        ['/PRODUCTOS/REGULAR/Marron/1.webp','/PRODUCTOS/REGULAR/Marron/2.webp','/PRODUCTOS/REGULAR/Marron/3.webp'],
      'English Blue':  ['/PRODUCTOS/REGULAR/English Blue/1.webp','/PRODUCTOS/REGULAR/English Blue/2.webp','/PRODUCTOS/REGULAR/English Blue/3.webp'],
      'Guinda':        ['/PRODUCTOS/REGULAR/Guinda/1.webp','/PRODUCTOS/REGULAR/Guinda/2.webp','/PRODUCTOS/REGULAR/Guinda/3.webp'],
      'Mauve':         ['/PRODUCTOS/REGULAR/Mauve/1.webp','/PRODUCTOS/REGULAR/Mauve/2.webp','/PRODUCTOS/REGULAR/Mauve/3.webp'],
      'Verde Manzana': ['/PRODUCTOS/REGULAR/Verde Manzana/1.webp','/PRODUCTOS/REGULAR/Verde Manzana/2.webp','/PRODUCTOS/REGULAR/Verde Manzana/3.webp'],
      'Cocoa':         ['/PRODUCTOS/REGULAR/Cocoa/1.webp','/PRODUCTOS/REGULAR/Cocoa/2.webp','/PRODUCTOS/REGULAR/Cocoa/3.webp'],
      'Verde Militar': ['/PRODUCTOS/REGULAR/Verde Militar/1.webp','/PRODUCTOS/REGULAR/Verde Militar/2.webp','/PRODUCTOS/REGULAR/Verde Militar/3.webp'],
      'Verde Botella': ['/PRODUCTOS/REGULAR/Verde Botella/1.webp','/PRODUCTOS/REGULAR/Verde Botella/2.webp','/PRODUCTOS/REGULAR/Verde Botella/3.webp'],
      'Celeste':       ['/PRODUCTOS/REGULAR/Celeste/1.webp','/PRODUCTOS/REGULAR/Celeste/2.webp','/PRODUCTOS/REGULAR/Celeste/3.webp'],
      'Acero':         ['/PRODUCTOS/REGULAR/Acero/1.webp','/PRODUCTOS/REGULAR/Acero/2.webp','/PRODUCTOS/REGULAR/Acero/3.webp'],
      'Negro':         ['/PRODUCTOS/REGULAR/Negro/1.webp','/PRODUCTOS/REGULAR/Negro/2.webp','/PRODUCTOS/REGULAR/Negro/3.webp'],
      'Beige':         ['/PRODUCTOS/REGULAR/Beige/1.webp','/PRODUCTOS/REGULAR/Beige/2.webp','/PRODUCTOS/REGULAR/Beige/3.webp']
    }
  },
  '09': {
    'Oversize': {
      'Negro':         ['/PRODUCTOS/OVERSIZE/NEGRO/1.webp','/PRODUCTOS/OVERSIZE/NEGRO/2.webp','/PRODUCTOS/OVERSIZE/NEGRO/3.webp','/PRODUCTOS/OVERSIZE/NEGRO/4.webp'],
      'Plomo Plata':   ['/PRODUCTOS/OVERSIZE/PLOMO PLATA/1.webp','/PRODUCTOS/OVERSIZE/PLOMO PLATA/2.webp','/PRODUCTOS/OVERSIZE/PLOMO PLATA/3.webp','/PRODUCTOS/OVERSIZE/PLOMO PLATA/4.webp'],
      'Plomo Escolar': ['/PRODUCTOS/OVERSIZE/PLOMO ESCOLAR/1.webp','/PRODUCTOS/OVERSIZE/PLOMO ESCOLAR/2.webp','/PRODUCTOS/OVERSIZE/PLOMO ESCOLAR/3.webp','/PRODUCTOS/OVERSIZE/PLOMO ESCOLAR/4.webp'],
      'Marrón':        ['/PRODUCTOS/OVERSIZE/MARRON/1.webp','/PRODUCTOS/OVERSIZE/MARRON/2.webp','/PRODUCTOS/OVERSIZE/MARRON/3.webp','/PRODUCTOS/OVERSIZE/MARRON/4.webp'],
      'Acero':         ['/PRODUCTOS/OVERSIZE/ACERO/1.webp','/PRODUCTOS/OVERSIZE/ACERO/2.webp','/PRODUCTOS/OVERSIZE/ACERO/3.webp','/PRODUCTOS/OVERSIZE/ACERO/4.webp'],
      'Blanco':        ['/PRODUCTOS/OVERSIZE/BLANCO/1.webp','/PRODUCTOS/OVERSIZE/BLANCO/2.webp','/PRODUCTOS/OVERSIZE/BLANCO/3.webp','/PRODUCTOS/OVERSIZE/BLANCO/4.webp'],
      'PPT':           ['/PRODUCTOS/OVERSIZE/PPT/1.webp','/PRODUCTOS/OVERSIZE/PPT/2.webp','/PRODUCTOS/OVERSIZE/PPT/3.webp','/PRODUCTOS/OVERSIZE/PPT/4.webp'],
      'Beige Claro':   ['/PRODUCTOS/OVERSIZE/BEIGE CLARO/1.webp','/PRODUCTOS/OVERSIZE/BEIGE CLARO/2.webp','/PRODUCTOS/OVERSIZE/BEIGE CLARO/3.webp','/PRODUCTOS/OVERSIZE/BEIGE CLARO/4.webp'],
      'Verde Botella': ['/PRODUCTOS/OVERSIZE/VERDE BOTELLA/1.webp','/PRODUCTOS/OVERSIZE/VERDE BOTELLA/2.webp','/PRODUCTOS/OVERSIZE/VERDE BOTELLA/3.webp','/PRODUCTOS/OVERSIZE/VERDE BOTELLA/4.webp'],
      'Verde Militar': ['/PRODUCTOS/OVERSIZE/VERDE MILITAR/1.webp','/PRODUCTOS/OVERSIZE/VERDE MILITAR/2.webp','/PRODUCTOS/OVERSIZE/VERDE MILITAR/3.webp','/PRODUCTOS/OVERSIZE/VERDE MILITAR/4.webp'],
      'Guinda':        ['/PRODUCTOS/OVERSIZE/GUINDA/1.webp','/PRODUCTOS/OVERSIZE/GUINDA/2.webp','/PRODUCTOS/OVERSIZE/GUINDA/3.webp','/PRODUCTOS/OVERSIZE/GUINDA/4.webp'],
      'Celeste':       ['/PRODUCTOS/OVERSIZE/CELESTE/1.webp','/PRODUCTOS/OVERSIZE/CELESTE/2.webp','/PRODUCTOS/OVERSIZE/CELESTE/3.webp','/PRODUCTOS/OVERSIZE/CELESTE/4.webp']
    },
    'Boxy': {
      'Negro':         ['/PRODUCTOS/BOXY/Negro/1.webp','/PRODUCTOS/BOXY/Negro/2.webp','/PRODUCTOS/BOXY/Negro/3.webp','/PRODUCTOS/BOXY/Negro/4.webp'],
      'Plomo Plata':   ['/PRODUCTOS/BOXY/Plomo Plata/1.webp','/PRODUCTOS/BOXY/Plomo Plata/2.webp','/PRODUCTOS/BOXY/Plomo Plata/3.webp','/PRODUCTOS/BOXY/Plomo Plata/4.webp'],
      'Plomo Escolar': ['/PRODUCTOS/BOXY/Plomo Escolar/1.webp','/PRODUCTOS/BOXY/Plomo Escolar/2.webp','/PRODUCTOS/BOXY/Plomo Escolar/3.webp','/PRODUCTOS/BOXY/Plomo Escolar/4.webp'],
      'Marrón':        ['/PRODUCTOS/BOXY/Marron/1.webp','/PRODUCTOS/BOXY/Marron/2.webp','/PRODUCTOS/BOXY/Marron/3.webp','/PRODUCTOS/BOXY/Marron/4.webp'],
      'Acero':         ['/PRODUCTOS/BOXY/Acero/1.webp','/PRODUCTOS/BOXY/Acero/2.webp','/PRODUCTOS/BOXY/Acero/3.webp','/PRODUCTOS/BOXY/Acero/4.webp'],
      'Blanco':        ['/PRODUCTOS/BOXY/Blanco/1.webp','/PRODUCTOS/BOXY/Blanco/2.webp','/PRODUCTOS/BOXY/Blanco/3.webp','/PRODUCTOS/BOXY/Blanco/4.webp'],
      'PPT':           ['/PRODUCTOS/BOXY/PPT/1.webp','/PRODUCTOS/BOXY/PPT/2.webp','/PRODUCTOS/BOXY/PPT/3.webp','/PRODUCTOS/BOXY/PPT/4.webp'],
      'Beige Claro':   ['/PRODUCTOS/BOXY/Beige Claro/1.webp','/PRODUCTOS/BOXY/Beige Claro/2.webp','/PRODUCTOS/BOXY/Beige Claro/3.webp','/PRODUCTOS/BOXY/Beige Claro/4.webp'],
      'Celeste':       ['/PRODUCTOS/BOXY/Celeste/1.webp','/PRODUCTOS/BOXY/Celeste/2.webp','/PRODUCTOS/BOXY/Celeste/3.webp','/PRODUCTOS/BOXY/Celeste/4.webp'],
      'Verde Botella': ['/PRODUCTOS/BOXY/Verde Botella/1.webp','/PRODUCTOS/BOXY/Verde Botella/2.webp','/PRODUCTOS/BOXY/Verde Botella/3.webp','/PRODUCTOS/BOXY/Verde Botella/4.webp'],
      'Verde Militar': ['/PRODUCTOS/BOXY/Verde Militar/1.webp','/PRODUCTOS/BOXY/Verde Militar/2.webp','/PRODUCTOS/BOXY/Verde Militar/3.webp','/PRODUCTOS/BOXY/Verde Militar/4.webp'],
      'Guinda':        ['/PRODUCTOS/BOXY/Guinda/1.webp','/PRODUCTOS/BOXY/Guinda/2.webp','/PRODUCTOS/BOXY/Guinda/3.webp','/PRODUCTOS/BOXY/Guinda/4.webp']
    }
  },
  '10': {
    'Boxy': {
      'Negro':         ['/PRODUCTOS/HOODIES-BOXY/Negro/1.webp','/PRODUCTOS/HOODIES-BOXY/Negro/2.webp'],
      'Plomo Escolar': ['/PRODUCTOS/HOODIES-BOXY/Plomo Escolar/1.webp','/PRODUCTOS/HOODIES-BOXY/Plomo Escolar/2.webp','/PRODUCTOS/HOODIES-BOXY/Plomo Escolar/3.webp'],
      'Plomo Plata':   ['/PRODUCTOS/HOODIES-BOXY/Plomo Plata/1.webp','/PRODUCTOS/HOODIES-BOXY/Plomo Plata/2.webp','/PRODUCTOS/HOODIES-BOXY/Plomo Plata/3.webp'],
      'Marrón':        ['/PRODUCTOS/HOODIES-BOXY/Marron/1.webp','/PRODUCTOS/HOODIES-BOXY/Marron/2.webp'],
      'Verde Botella': ['/PRODUCTOS/HOODIES-BOXY/Verde Botella/1.webp','/PRODUCTOS/HOODIES-BOXY/Verde Botella/2.webp','/PRODUCTOS/HOODIES-BOXY/Verde Botella/3.webp'],
      'Acero':         ['/PRODUCTOS/HOODIES-BOXY/Acero/1.webp','/PRODUCTOS/HOODIES-BOXY/Acero/2.webp','/PRODUCTOS/HOODIES-BOXY/Acero/3.webp'],
      'Celeste':       ['/PRODUCTOS/HOODIES-BOXY/Celeste/1.webp','/PRODUCTOS/HOODIES-BOXY/Celeste/2.webp','/PRODUCTOS/HOODIES-BOXY/Celeste/3.webp'],
      'Guinda':        ['/PRODUCTOS/HOODIES-BOXY/Guinda/1.webp','/PRODUCTOS/HOODIES-BOXY/Guinda/2.webp','/PRODUCTOS/HOODIES-BOXY/Guinda/3.webp']
    },
    'Oversize': {
      'Negro':         ['/PRODUCTOS/HOODIES-OVERSIZE/Negro/1.webp'],
      'Marrón':        ['/PRODUCTOS/HOODIES-OVERSIZE/Marron/1.webp','/PRODUCTOS/HOODIES-OVERSIZE/Marron/2.webp','/PRODUCTOS/HOODIES-OVERSIZE/Marron/3.webp'],
      'Plomo Escolar': ['/PRODUCTOS/HOODIES-OVERSIZE/Plomo Escolar/1.webp','/PRODUCTOS/HOODIES-OVERSIZE/Plomo Escolar/2.webp','/PRODUCTOS/HOODIES-OVERSIZE/Plomo Escolar/3.webp'],
      'Plomo Plata':   ['/PRODUCTOS/HOODIES-OVERSIZE/Plomo Plata/1.webp','/PRODUCTOS/HOODIES-OVERSIZE/Plomo Plata/2.webp','/PRODUCTOS/HOODIES-OVERSIZE/Plomo Plata/3.webp'],
      'Verde Botella': ['/PRODUCTOS/HOODIES-OVERSIZE/Verde Botella/1.webp','/PRODUCTOS/HOODIES-OVERSIZE/Verde Botella/2.webp','/PRODUCTOS/HOODIES-OVERSIZE/Verde Botella/3.webp'],
      'Beige':         ['/PRODUCTOS/HOODIES-OVERSIZE/Beige/1.webp','/PRODUCTOS/HOODIES-OVERSIZE/Beige/2.webp','/PRODUCTOS/HOODIES-OVERSIZE/Beige/3.webp'],
      'Acero':         ['/PRODUCTOS/HOODIES-OVERSIZE/Acero/1.webp','/PRODUCTOS/HOODIES-OVERSIZE/Acero/2.webp','/PRODUCTOS/HOODIES-OVERSIZE/Acero/3.webp'],
      'Celeste':       ['/PRODUCTOS/HOODIES-OVERSIZE/Celeste/1.webp','/PRODUCTOS/HOODIES-OVERSIZE/Celeste/2.webp','/PRODUCTOS/HOODIES-OVERSIZE/Celeste/3.webp'],
      'Lila 69':       ['/PRODUCTOS/HOODIES-OVERSIZE/Lila 69/1.webp','/PRODUCTOS/HOODIES-OVERSIZE/Lila 69/2.webp','/PRODUCTOS/HOODIES-OVERSIZE/Lila 69/3.webp'],
      'Guinda':        ['/PRODUCTOS/HOODIES-OVERSIZE/Guinda/1.webp','/PRODUCTOS/HOODIES-OVERSIZE/Guinda/2.webp','/PRODUCTOS/HOODIES-OVERSIZE/Guinda/3.webp']
    }
  }
};

// ─── GUÍAS DE TALLA ───────────────────────────────────────────────────────────

export const SIZE_GUIDES: Record<string, SizeGuide> = {
  '01': {
    byFit: {
      'Oversize':   { cols: ['Talla','Pecho','Largo','Hombro','Manga'], rows: [['S','55cm','71.5cm','21.5cm','22cm'],['M','57cm','73.5cm','22cm','24cm'],['L','60cm','76cm','22cm','24.5cm'],['XL','62cm','79cm','23cm','25cm']] },
      'Boxy':       { cols: ['Talla','Pecho','Largo','Manga'],          rows: [['S','57cm','62cm','23cm'],['M','59cm','64cm','25cm'],['L','61cm','66cm','27cm']] },
      'Boxy Largo': { cols: ['Talla','Pecho','Largo','Hombro','Manga'], rows: [['S','56cm','68cm','22cm','21cm'],['M','59cm','71cm','23.5cm','22cm'],['L','62cm','74cm','25cm','22.5cm'],['XL','65cm','77cm','26.5cm','23cm']] },
      'Regular':    { cols: ['Talla','Ancho','Largo','Manga'],          rows: [['S','50cm','69cm','22.5cm'],['M','52cm','71cm','24cm'],['L','54cm','74cm','25cm'],['XL','57cm','77cm','26cm']] }
    }
  },
  '02': {
    byFit: {
      'Regular': { cols: ['Talla','Ancho','Largo','Manga'],   rows: [['S','50cm','69cm','22.5cm'],['M','52cm','71cm','24cm'],['L','54cm','74cm','25cm'],['XL','57cm','77cm','26cm']] },
      'Dama':    { cols: ['Talla','Pecho','Cintura','Largo'], rows: [['S','45cm','43cm','61cm'],['M','47cm','45cm','63cm'],['L','49cm','46cm','66cm']] }
    }
  },
  '03': {
    cols: ['Talla','Pecho','Largo','Hombro','Manga'],
    rows: [['S','54cm','68cm','20cm','21.5cm'],['M','56cm','72cm','19.5cm','23cm'],['L','57cm','74cm','20cm','24cm'],['XL','59.5cm','76.5cm','22cm','25cm']]
  },
  '06': {
    byFit: {
      'Boxy':     { cols: ['Talla','Pecho','Largo','Hombro','Manga'], rows: [['S','57cm','60cm','20.5cm','56cm'],['M','59cm','62.5cm','22cm','57cm'],['L','61cm','65cm','23.5cm','59cm']] },
      'Oversize': { cols: ['Talla','Pecho','Largo','Hombro','Manga'], rows: [['S','62cm','72cm','23cm','55cm'],['M','65cm','74cm','24cm','57cm'],['L','68cm','76.5cm','25cm','59cm']] }
    }
  },
  '07': {
    note: '100% algodón Pima peruano. Corte slim fit entallado.',
    cols: ['Talla','Largo','Pecho','Hombro','Manga'],
    rows: [['S','64.5cm','47.5cm','12.5cm','19.5cm'],['M','66.5cm','49cm','13.5cm','21cm'],['L','68.5cm','51.5cm','15cm','23cm']]
  },
  '08': {
    byFit: {
      'Oversize': { cols: ['Talla','Pecho','Largo','Hombro','Manga'], rows: [['S','55cm','71.5cm','21.5cm','22cm'],['M','57cm','73.5cm','22cm','24cm'],['L','60cm','76cm','22cm','24.5cm'],['XL','62cm','79cm','23cm','25cm']] },
      'Boxy':     { cols: ['Talla','Pecho','Largo','Manga'],          rows: [['S','57cm','62cm','23cm'],['M','59cm','64cm','25cm'],['L','61cm','66cm','27cm']] },
      'Regular':  { cols: ['Talla','Ancho','Largo','Manga'],          rows: [['S','50cm','69cm','22.5cm'],['M','52cm','71cm','24cm'],['L','54cm','74cm','25cm'],['XL','57cm','77cm','26cm']] }
    }
  },
  '09': {
    byFit: {
      'Oversize': { cols: ['Talla','Pecho','Largo','Hombro','Manga'], rows: [['S','55cm','71.5cm','21.5cm','22cm'],['M','57cm','73.5cm','22cm','24cm'],['L','60cm','76cm','22cm','24.5cm'],['XL','62cm','79cm','23cm','25cm']] },
      'Boxy':     { cols: ['Talla','Pecho','Largo','Manga'],          rows: [['S','57cm','62cm','23cm'],['M','59cm','64cm','25cm'],['L','61cm','66cm','27cm']] }
    }
  },
  '10': {
    note: 'Medidas del pantalón franela 24/1 (350g). Medidas del hoodie: consulta al pedir.',
    cols: ['Talla','Largo','Cintura','Cadera'],
    rows: [['S','103.5cm','28cm','50cm'],['M','106cm','30cm','51cm'],['L','108cm','32cm','52cm']]
  }
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────

export const PACK_ORDER = ['07', '01', '08', '09', '02', '03', '06', '10'];

export function getPackBySlug(slug: string): Pack | undefined {
  return Object.values(PACKS).find(p => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return Object.values(PACKS).map(p => p.slug);
}
