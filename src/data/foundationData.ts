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
    title: 'Donate to Us',
    description: 'Help us provide daily nutritious meals, school supplies, and healthcare essentials to underprivileged children.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'c2',
    title: 'Become a Volunteer',
    description: 'Join our passionate volunteer family and dedicate your time and skills to transform lives across local communities.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'c3',
    title: 'Volunteers & Donations',
    description: 'Unite with our ground team to organize ration drives, educational workshops, and emergency relief distribution.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'c4',
    title: 'International Social Cause & Care',
    description: 'Supporting marginalized groups, senior citizens, and differently-abled individuals with dignity and holistic care.',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'c5',
    title: 'Environment and Cleaning',
    description: 'Community tree plantation drives, environmental cleanliness campaigns, and sustainable conservation awareness.',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'c6',
    title: 'Community Empowerment',
    description: 'Empowering youth and women through skill development, vocational training, and self-reliant entrepreneurship.',
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=600&q=80',
  },
];

export const STATS = [
  { id: '1', value: '200+', label: 'OUR VOLUNTEERS', icon: 'Users' },
  { id: '2', value: '28', label: 'TEAMS', icon: 'UserCheck' },
  { id: '3', value: '6', label: 'MAIN CENTERS', icon: 'MapPin' },
  { id: '4', value: '50000+', label: 'PEOPLE HELPED', icon: 'HeartHandshake' },
];

export const VOLUNTEERS: Volunteer[] = [
  {
    id: 'v1',
    name: 'OM SHAH',
    role: 'City Chapter Lead',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'v2',
    name: 'PRERNA SINGH',
    role: 'Lead Volunteer Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'v3',
    name: 'RISHI',
    role: 'Operations Executive',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
  },
];

export const EVENTS: EventItem[] = [
  {
    id: 'e1',
    title: 'World Water Day 2024',
    tag: 'Upcoming',
    date: '22 March 2024',
    description: 'Spreading awareness about clean drinking water conservation and installing filtration setups in rural schools.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'e2',
    title: 'International Day of Friendship 2024',
    tag: 'Upcoming',
    date: '30 July 2024',
    description: 'A special day uniting underprivileged children with volunteer mentors for fun games, art, and gift distribution.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'e3',
    title: 'International Day of Older Persons 2024',
    tag: 'Upcoming',
    date: '01 October 2024',
    description: 'Visiting elderly care homes with health checkups, cultural performances, and distributing warmth kits for winter.',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80',
  },
];

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Animal Care & Feeding Drive',
    category: 'Animal Welfare',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'g2',
    title: 'Evening Ration Kit Distribution',
    category: 'Relief Aid',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'g3',
    title: 'Child Education Workshop',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'g4',
    title: 'Sanitation & Clean Drive',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'g5',
    title: 'Relief Food Packet Packing',
    category: 'Volunteering',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'g6',
    title: 'Tree Plantation Drive',
    category: 'Environment',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80',
  },
];
