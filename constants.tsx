
import { Team, Driver, Race, Product } from './types';

export const TEAMS: Team[] = [
  {
    id: 'redbull',
    name: 'Red Bull Racing',
    fullName: 'Oracle Red Bull Racing',
    color: '#0600EF',
    base: 'Milton Keynes, United Kingdom',
    chief: 'Christian Horner',
    chassis: 'RB20',
    powerUnit: 'Honda RBPT',
    worldChampionships: 6,
    image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1200',
    description: 'Relentless pursuit of performance and innovation.'
  },
  {
    id: 'ferrari',
    name: 'Ferrari',
    fullName: 'Scuderia Ferrari',
    color: '#E80020',
    base: 'Maranello, Italy',
    chief: 'Frédéric Vasseur',
    chassis: 'SF-24',
    powerUnit: 'Ferrari',
    worldChampionships: 16,
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1200',
    description: 'The soul of racing, heritage meets speed.'
  },
  {
    id: 'mercedes',
    name: 'Mercedes',
    fullName: 'Mercedes-AMG PETRONAS F1 Team',
    color: '#27F4D2',
    base: 'Brackley, United Kingdom',
    chief: 'Toto Wolff',
    chassis: 'W15',
    powerUnit: 'Mercedes',
    worldChampionships: 8,
    image: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?auto=format&fit=crop&q=80&w=1200',
    description: 'Defining the standard for excellence in engineering.'
  },
  {
    id: 'mclaren',
    name: 'McLaren',
    fullName: 'McLaren Formula 1 Team',
    color: '#FF8000',
    base: 'Woking, United Kingdom',
    chief: 'Andrea Stella',
    chassis: 'MCL38',
    powerUnit: 'Mercedes',
    worldChampionships: 8,
    image: 'https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?auto=format&fit=crop&q=80&w=1200',
    description: 'Brave and bold, challenging the limits of speed.'
  }
];

export const DRIVERS: Driver[] = [
  {
    id: 'verstappen',
    name: 'Max Verstappen',
    number: 1,
    country: 'Netherlands',
    team: 'Red Bull Racing',
    podiums: 106,
    points: 2586,
    wins: 61,
    image: 'https://picsum.photos/seed/ver/600/800',
    bio: 'The dominant force in modern Formula 1.'
  },
  {
    id: 'hamilton',
    name: 'Lewis Hamilton',
    number: 44,
    country: 'United Kingdom',
    team: 'Mercedes',
    podiums: 197,
    points: 4639,
    wins: 103,
    image: 'https://picsum.photos/seed/ham/600/800',
    bio: 'The seven-time champion seeking one last title.'
  },
  {
    id: 'leclerc',
    name: 'Charles Leclerc',
    number: 16,
    country: 'Monaco',
    team: 'Ferrari',
    podiums: 30,
    points: 1120,
    wins: 6,
    image: 'https://picsum.photos/seed/lec/600/800',
    bio: 'Monaco\'s golden boy leading the Tifosi.'
  },
  {
    id: 'norris',
    name: 'Lando Norris',
    number: 4,
    country: 'United Kingdom',
    team: 'McLaren',
    podiums: 20,
    points: 750,
    wins: 1,
    image: 'https://picsum.photos/seed/nor/600/800',
    bio: 'The rising star of the British grid.'
  }
];

export const RACES: Race[] = [
  {
    id: 'monaco',
    name: 'Monaco Grand Prix',
    location: 'Monte Carlo',
    date: 'May 25, 2025',
    circuit: 'Circuit de Monaco',
    image: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?auto=format&fit=crop&q=80&w=1200',
    laps: 78,
    distance: '260.286 km'
  },
  {
    id: 'spa',
    name: 'Belgian Grand Prix',
    location: 'Stavelot',
    date: 'July 27, 2025',
    circuit: 'Circuit de Spa-Francorchamps',
    image: 'https://images.unsplash.com/photo-1541890289-b86df5bafd81?auto=format&fit=crop&q=80&w=1200',
    laps: 44,
    distance: '308.052 km'
  },
  {
    id: 'monza',
    name: 'Italian Grand Prix',
    location: 'Monza',
    date: 'August 31, 2025',
    circuit: 'Autodromo Nazionale Monza',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
    laps: 53,
    distance: '306.720 km'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Team Polo 2024 - Special Edition',
    price: 89.99,
    category: 'Apparel',
    team: 'Red Bull Racing',
    image: 'https://picsum.photos/seed/merch1/400/400'
  },
  {
    id: 'p2',
    name: 'Classic Scuderia Cap',
    price: 45.00,
    category: 'Accessories',
    team: 'Ferrari',
    image: 'https://picsum.photos/seed/merch2/400/400'
  },
  {
    id: 'p3',
    name: '1:18 Scale W15 Model',
    price: 199.99,
    category: 'Collectibles',
    team: 'Mercedes',
    image: 'https://picsum.photos/seed/merch3/400/400'
  }
];
