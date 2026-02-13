export enum Page {
  HOME = 'HOME',
  TOURNAMENTS = 'TOURNAMENTS',
  CLINICS = 'CLINICS',
  MEMBERSHIP = 'MEMBERSHIP',
  ABOUT = 'ABOUT',
  EVENT_DETAILS = 'EVENT_DETAILS',
  TOURNAMENT_DETAILS = 'TOURNAMENT_DETAILS'
}

export interface NavItem {
  label: string;
  page: Page;
}

export interface Tournament {
  id: string;
  date: string;
  day: string;
  time: string;
  title: string;
  tags: { label: string; color: string }[];
  prizePool: string;
  entryFee: string;
  location: string;
  spotsLeft: string;
  spotsColor?: string;
  registeredAvatars: string[];
  registeredCount: number;
  isFull?: boolean;
}

export interface Clinic {
  id: string;
  title: string;
  image: string;
  badge?: { label: string; color: string };
  price: string;
  date: string;
  location: string;
  coach: { name: string; avatar: string };
}

export interface Coach {
  id: string;
  name: string;
  avatar: string;
  role: string;
  description: string;
  verified: boolean;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar?: string;
  wins: number;
  losses: number;
  points: number;
  teamName?: string;
}
