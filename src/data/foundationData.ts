export interface Cause {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Volunteer {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface EventItem {
  id: string;
  title: string;
  tag: string;
  date: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: string;
}

export const CAUSES: Cause[] = [
  {
    id: 'c1',
    title: 'Project Bachpanshala (Child Welfare & Education)',
    description: 'Help us provide daily nutritious meals, school supplies, and healthcare essentials to underprivileged children.',
    image: '/gallery/637640724_1236697955260999_7323670824020618195_n.jpg',
  },
  {
    id: 'c2',
    title: 'Project Udaan (Women & Girl Child Empowerment)',
    description: 'Empowering girls and women through education, skill development, and financial literacy.',
    image: '/gallery/649873313_1250692197194908_5533923742098471725_n.jpg',
  },
  {
    id: 'c3',
    title: 'Project Prakriti (Environment & Sustainability)',
    description: 'Environmental conservation, climate sustainability workshops, farmer support, and mass tree planting.',
    image: '/gallery/518777262_1060431876220942_4132400102800644315_n.jpg',
  },
  {
    id: 'c4',
    title: 'Project Seva (Hunger Relief & Essential Supplies)',
    description: 'Distributing daily hot meals in slum areas, dry ration kits, and winter clothes/blankets to homeless families.',
    image: '/gallery/597408282_1179495034314625_2498788752597277326_n.jpg',
  },
  {
    id: 'c5',
    title: 'Project Jeev (Animal Welfare & Rescue)',
    description: 'Daily feeding rounds, emergency rescue, and veterinary healthcare support for stray animals.',
    image: '/gallery/515436142_1058142469783216_9036160058728734144_n.jpg',
  },
  {
    id: 'c6',
    title: 'Project Vikas (Youth Training & Skill Development)',
    description: 'Practical learning, creative problem solving, and career preparation workshops for youth.',
    image: '/gallery/656691606_1264373315826796_2188954449283016888_n.jpg',
  },
];

export const STATS = [
  { id: '1', value: '200+', label: 'OUR VOLUNTEERS', icon: 'Users' },
  { id: '2', value: '28', label: 'TEAMS', icon: 'UserCheck' },
  { id: '3', value: '6', label: 'MAIN CENTERS', icon: 'MapPin' },
  { id: '4', value: '50000+', label: 'PEOPLE HELPED', icon: 'HeartHandshake' },
];

export const EVENTS: EventItem[] = [
  {
    id: 'e1',
    title: 'International Day of Women and Girls in Science',
    tag: 'Upcoming',
    date: '11 February 2025',
    description: 'Digital workshops and community talks highlighting the importance of STEM education and skill-building for girls.',
    image: '/gallery/649873313_1250692197194908_5533923742098471725_n.jpg',
  },
  {
    id: 'e2',
    title: 'International Day of Happiness Community Outreach',
    tag: 'Upcoming',
    date: '20 March 2025',
    description: 'Community interaction drive distributing sweets, nutritious meals, and hosting creative games for children.',
    image: '/gallery/597408282_1179495034314625_2498788752597277326_n.jpg',
  },
  {
    id: 'e3',
    title: 'World Water Day & Green Action Campaign',
    tag: 'Upcoming',
    date: '22 March 2025',
    description: 'Clean water awareness sessions, local cleanliness drives, and discussions on water conservation.',
    image: '/gallery/537364223_1094416166155846_7689778449830767761_n.jpg',
  },
];
