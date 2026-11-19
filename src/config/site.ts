/**
 * ============================================================
 *  VISA VERSLO INFORMACIJA VIENOJE VIETOJE
 *  (All business info lives here — edit this file to update the site.)
 *
 *  Paliktas tuščias laukas ('') tiesiog nebus rodomas svetainėje.
 *  Tonas: kalba prekės ženklas („mes“), be asmeninių detalių.
 * ============================================================
 */

export const site = {
  /** Verslo pavadinimas: darbinis, galutinis dar svarstomas. */
  name: 'Saldi Akimirka',
  tagline: 'Tortai & Desertai',
  city: 'Klaipėda',

  hero: {
    title: 'Rankų darbo desertai jūsų šventėms',
    subtitle:
      'Tortai, bento tortukai ir macarons pagal užsakymą Klaipėdoje. Atsiimkite patys arba susitarkime dėl pristatymo.',
  },

  /** „Apie mus“: trumpai, prekės ženklo balsu. Kiekviena eilutė yra atskira pastraipa. */
  about: {
    title: 'Mažai žodžių, daug skonio',
    paragraphs: [
      'Saldi Akimirka yra nedidelė konditerijos studija Klaipėdoje. Kepame tortus, bento tortukus, macarons ir desertus pagal užsakymą.',
      'Turime aiškų pasirinkimą skonių ir variantų, kuriuos darome geriausiai. Todėl kiekvienas tortas toks pat geras kaip ir praėjęs.',
    ],
  },

  contact: {
    phone: '', // pvz. '+370 600 00000'
    email: '', // pvz. 'info@saldiakimirka.lt'
    instagram: 'https://www.instagram.com/saldi_akimirka6/',
    instagramHandle: '@saldi_akimirka6',
    facebook: '', // pvz. 'https://facebook.com/...'
    address: 'Klaipėda', // tikslus atsiėmimo adresas, jei norite
    hours: '', // pvz. 'I–V 9:00–18:00'
  },

  ordering: {
    /** Standartinis užsakymo terminas dienomis. Išimtys derinamos tiesiogiai. */
    leadDays: 5,
    pickup: 'Atsiėmimas Klaipėdoje',
    delivery: 'Pristatymas galimas susitarus',
    /** Avanso taisyklė (tik tortams). */
    deposit:
      'Atsiimant vietoje avanso nereikia. Užsakant su pristatymu, tortams imamas avansas pagal svorį.',
  },

  /**
   * Specialūs poreikiai: TIK tai, ką tikrai darote. Patikslinkite sąrašą!
   * Tuščias masyvas – skiltis nerodoma.
   */
  dietOptions: ['Be laktozės', 'Be glitimo', 'Mažiau saldus'],

  /** Pasitikėjimo eilutė, pvz. 'Veikla registruota VMVT'. Rodyti tik kai tikrai sutvarkyta. */
  registration: '',
}

export type Offer = { title: string; text: string; icon?: string }

export const offers: Offer[] = [
  {
    icon: '🎂',
    title: 'Šventiniai tortai',
    text: 'Gimtadieniams, krikštynoms, jubiliejams. Su uogomis, gėlėmis ar užrašu.',
  },
  {
    icon: '🍱',
    title: 'Bento tortukai',
    text: 'Maži tortukai dėžutėje su užrašu ar piešiniu. Dovana ar staigmena dviem.',
  },
  {
    icon: '🌸',
    title: 'Macarons',
    text: 'Prancūziški sausainiai įvairiais skoniais, supakuoti dovanai.',
  },
  {
    icon: '🍓',
    title: 'Desertai',
    text: 'Mažesni saldumynai jūsų šventei ar susibūrimui.',
  },
]

/**
 * Galerijos nuotraukos. Įdėkite failus į aplanką `public/gallery/`
 * tokiais pavadinimais (arba pakeiskite pavadinimus čia).
 * Kol nuotraukos nėra, rodomas pakaitalas.
 */
export const gallery: { src: string; alt: string }[] = [
  { src: '/gallery/1.jpg', alt: 'Baltas tortas su gėlėmis' },
  { src: '/gallery/2.jpg', alt: 'Bento tortukas su meškiuku' },
  { src: '/gallery/3.jpg', alt: 'Žalias tortas su miško uogomis' },
  { src: '/gallery/4.jpg', alt: 'Dviejų aukštų tortas su uogomis' },
  { src: '/gallery/5.jpg', alt: 'Rožinis tortas su kaspinu' },
  { src: '/gallery/6.jpg', alt: 'Jūrinis tortas su žuvelėmis' },
  { src: '/gallery/7.jpg', alt: 'Šokoladinis tortas su uogomis' },
  { src: '/gallery/8.jpg', alt: 'Tortas su gėlių raštais' },
]

/** Pagrindinė (hero) nuotrauka. */
export const heroImage = '/gallery/hero.jpg'

/**
 * Puslapis „Įmonėms“. Pradžioje gaminama namų virtuvėje,
 * todėl siūlomi nedidelės apimties užsakymai.
 */
export const business = {
  title: 'Desertai įmonėms',
  intro:
    'Darbuotojų šventės, dovanos klientams ar nedidelis susibūrimas biure. Priimame nedidelės apimties užsakymus, kad kokybė liktų tokia pati.',
  services: [
    {
      title: 'Darbuotojų šventės',
      text: 'Tortas ar bento tortukai kolegos gimtadieniui, jubiliejui ar komandos pasiekimui paminėti.',
    },
    {
      title: 'Dovanos klientams',
      text: 'Macarons dėžutės ar bento tortukai su jūsų žinute šventėms ir padėkoms.',
    },
    {
      title: 'Nedideli renginiai',
      text: 'Tortai ir desertai mažesniems biuro susibūrimams. Apimtį suderiname iš anksto.',
    },
    {
      title: 'Pasikartojantys užsakymai',
      text: 'Reguliarūs nedideli užsakymai biurui ar kavinei. Grafiką suderiname vieną kartą.',
    },
  ],
  invoices: 'Išrašome sąskaitas faktūras.',
}

/**
 * MENIU (puslapis /meniu). Fiksuotas pasirinkimas: tik tai, ką tikrai gaminate.
 * `price` tuščias – kaina nerodoma. `tags` – pvz. 'Be laktozės'. `image` – nuotrauka iš public/.
 * Šis sąrašas vėliau bus tortų konstruktoriaus pagrindas.
 */
export type MenuItem = { name: string; desc?: string; price?: string; tags?: string[] }
export type MenuCategory = {
  id: string
  title: string
  note?: string
  image?: string
  items: MenuItem[]
}

/**
 * ⚠ KOL TRUE, puslapyje rodomas pranešimas „Pavyzdinis meniu“.
 * Visi skoniai ir kainos žemiau yra PAVYZDŽIAI. Pakeitę tikrais, nustatykite false.
 */
export const menuIsExample = true

export const menu: MenuCategory[] = [
  {
    id: 'tortai',
    title: 'Šventiniai tortai',
    note: 'Nuo 1,5 kg. Dydis ir dizainas derinami užsakant.',
    image: '/gallery/4.jpg',
    items: [
      {
        name: 'Vanilė ir braškės',
        desc: 'Vanilinis biskvitas, maskarponės kremas, braškių įdaras',
        price: '32 €/kg',
        tags: ['Populiariausias'],
      },
      {
        name: 'Šokoladas ir avietės',
        desc: 'Šokoladinis biskvitas, šokoladinis ganašas, avietių įdaras',
        price: '34 €/kg',
      },
      {
        name: 'Sūri karamelė',
        desc: 'Vanilinis biskvitas, karamelinis kremas, sūrios karamelės sluoksnis',
        price: '34 €/kg',
      },
      {
        name: 'Citrina ir mėlynės',
        desc: 'Citrininis biskvitas, jogurtinis kremas, mėlynių įdaras',
        price: '32 €/kg',
        tags: ['Be laktozės'],
      },
      {
        name: 'Pistacija ir vyšnios',
        desc: 'Pistacijų biskvitas, pistacijų kremas, vyšnių įdaras',
        price: '38 €/kg',
      },
    ],
  },
  {
    id: 'bento',
    title: 'Bento tortukai',
    note: 'Apie 400 g, 2 asmenims. Užrašas ar paprastas piešinys įskaičiuotas.',
    image: '/gallery/2.jpg',
    items: [
      { name: 'Bento tortukas', desc: 'Skonis iš tortų sąrašo', price: '22 €' },
      { name: 'Bento + 2 macarons', desc: 'Dovanų dėžutėje', price: '26 €' },
    ],
  },
  {
    id: 'macarons',
    title: 'Macarons',
    note: 'Galima rinktis kelis skonius vienoje dėžutėje.',
    image: '/gallery/5.jpg',
    items: [
      { name: 'Dėžutė, 6 vnt.', price: '12 €' },
      { name: 'Dėžutė, 12 vnt.', price: '22 €' },
      {
        name: 'Skoniai',
        desc: 'Avietiniai · Pistacijų · Sūrios karamelės · Vanilės · Šokolado',
      },
    ],
  },
  {
    id: 'desertai',
    title: 'Desertai',
    note: 'Užsakoma nuo 6 vnt. vieno skonio.',
    image: '/gallery/7.jpg',
    items: [
      { name: 'Tiramisu indelyje', price: '4,50 €/vnt.' },
      { name: 'Sūrio pyragėlis su uogomis', price: '4 €/vnt.', tags: ['Be glitimo'] },
      { name: 'Šokoladinis musas', price: '4 €/vnt.' },
    ],
  },
]
