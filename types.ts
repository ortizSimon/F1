
export interface Team {
  id: string;
  name: string;
  fullName: string;
  color: string;
  base: string;
  chief: string;
  chassis: string;
  powerUnit: string;
  worldChampionships: number;
  image: string;
  description: string;
}

export interface Driver {
  id: string;
  name: string;
  number: number;
  country: string;
  team: string;
  podiums: number;
  points: number;
  wins: number;
  image: string;
  bio: string;
}

export interface Race {
  id: string;
  name: string;
  location: string;
  date: string;
  circuit: string;
  image: string;
  laps: number;
  distance: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Apparel' | 'Collectibles' | 'Accessories';
  team: string;
  image: string;
}
