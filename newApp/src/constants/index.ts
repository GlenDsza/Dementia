import { RoutineType } from '../pages/Caretaker/Home/components/RoutineItem';

export interface RoutineInterface {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
  status: string;
  startLocation: LocationInterface | null;
  endLocation: LocationInterface | null;
  location: LocationInterface | null;
}

export interface UploadsDescription {
  description: string;
}

export interface LocationInterface {
  lat: number;
  lng: number;
  name?: string;
}

export const markers = [
  {
    lat: 51.497351,
    lng: -0.147758,
    title: 'Deepthi',
    description: 'Mentor',
    address: 'Victoria Embankment, London SW1A 2JR, UK',
    email: 'deepthi@gmail.com',
    phone: '+44 20 9876 5432',
  },
  {
    lat: 51.52361,
    lng: -0.093545,
    title: 'Amol',
    description: 'Manager',
    address: 'Finsbury Circus, London EC2M 7EB, UK',
    email: 'amol@gmail.com',
    phone: '+44 20 3456 7890',
  },
  {
    lat: 51.497222,
    lng: -0.17,
    title: 'Kanika',
    description: 'Design Pro',
    address: 'Horse Guards Parade, Whitehall, London SW1A 2AX, UK',
    email: 'kanika@gmail.com',
    phone: '+44 20 6543 2109',
  },
  {
    lat: 51.531391,
    lng: -0.106243,
    title: 'Harit',
    description: 'React Pro',
    address: '60 London Wall, London EC2M 5TN, UK',
    email: 'harit@gmail.com',
    phone: '+44 20 1122 3344',
  },
  {
    lat: 51.503636,
    lng: -0.081998,
    title: 'Rajeshri',
    description: 'Team Lead',
    address:
      'Monument to the Great Fire of London, Fish St Hill, London EC3R 8AH, UK',
    email: 'rajeshri@gmail.com',
    phone: '+44 20 2233 4455',
  },
  {
    lat: 51.529639,
    lng: -0.063702,
    title: 'Purva',
    description: 'All rounder',
    address: 'Broadgate Cir, London EC2M 2QS, UK',
    email: 'purva@gmail.com',
    phone: '+44 20 3344 5566',
  },
  {
    lat: 51.503835,
    lng: -0.129224,
    title: 'Meet',
    description: 'LLM Pro',
    address: 'Trafalgar Square, London WC2N 5DN, UK',
    email: 'meet@gmail.com',
    phone: '+44 20 4455 6677',
  },
  {
    lat: 51.537979,
    lng: -0.090374,
    title: 'Disha',
    description: 'Spring Pro',
    address: 'Barbican Centre, Silk St, London EC2Y 8DS, UK',
    email: 'disha@gmail.com',
    phone: '+44 20 5566 7788',
  },
  {
    lat: 51.512306,
    lng: -0.137733,
    title: 'Ayesha',
    description: 'LLM Pro',
    address: 'Lincoln’s Inn Fields, Holborn, London WC2A 3TL, UK',
    email: 'ayesha@gmail.com',
    phone: '+44 20 6677 8899',
  },
];

export const members = [
  {
    image: '/assets/speakers/bear.jpg',
    name: 'Member 1',
    relation: 'Father',
    mobile: '1234567890',
  },
  {
    image: '/assets/speakers/bear.jpg',
    name: 'Member 2',
    relation: 'Mother',
    mobile: '1234567890',
  },
  {
    image: '/assets/speakers/bear.jpg',
    name: 'Member 3',
    relation: 'Brother',
    mobile: '1234567890',
  },
  {
    image: '/assets/speakers/bear.jpg',
    name: 'Member 4',
    relation: 'Sister',
    mobile: '1234567890',
  },
];

export const routines2 = [
  {
    title: 'Morning Walk',
    startTime: '6:00 AM',
    endTime: '7:00 AM',
    location: 'Koregaon Park',
    type: RoutineType.primary,
  },
  {
    title: 'Breakfast',
    startTime: '8:00 AM',
    endTime: '9:00 AM',
    location: 'Home',
    type: RoutineType.secondary,
  },
  {
    title: 'Work',
    startTime: '9:00 AM',
    endTime: '5:00 PM',
    location: 'Office',
    type: RoutineType.primary,
  },
  {
    title: 'Dinner',
    startTime: '8:00 PM',
    endTime: '9:00 PM',
    location: 'Home',
    type: RoutineType.secondary,
  },
  {
    title: 'Medicines',
    startTime: '9:00 PM',
    endTime: '9:30 PM',
    location: 'Home',
    type: RoutineType.primary,
  },
  {
    title: 'Night Walk',
    startTime: '10:00 PM',
    endTime: '11:00 PM',
    location: 'Garden',
    type: RoutineType.secondary,
  },
];

export const routines: RoutineInterface[] = [
  {
    id: '1',
    name: 'Morning Walk',
    description:
      'Start your day off right with a refreshing morning walk in Hyde Park. This routine involves walking for one hour every day, from 6:00 AM to 7:00 AM, throughout the month of July 2024.',
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-07-31'),
    startTime: '6:00 AM',
    endTime: '7:00 AM',
    startLocation: {
      lat: 51.507268,
      lng: -0.16573,
      name: 'Hyde Park, London',
    },
    endLocation: {
      lat: 51.514547,
      lng: -0.158833,
      name: 'Marble Arch, London',
    },
    location: null,
    status: 'Done',
  },
  {
    id: '2',
    name: 'Medicines',
    description:
      'Make sure to follow the recommended dosage and timing to maintain your health and well-being.',
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-07-31'),
    startTime: '7:15 AM',
    endTime: '7:30 AM',
    location: {
      lat: 51.509865,
      lng: -0.118092,
      name: 'Home, London',
    },
    startLocation: null,
    endLocation: null,
    status: 'Pending',
  },
  {
    id: '2',
    name: 'Breakfast',
    description:
      'Today, you have the option of choosing between a bowl of oatmeal with fresh fruits and nuts, scrambled eggs with whole grain toast, or a protein-packed smoothie made with Greek yogurt, banana, and almond butter. Enjoy your breakfast at home before heading out for the day.',
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-07-31'),
    startTime: '8:00 AM',
    endTime: '9:00 AM',
    location: {
      lat: 51.509865,
      lng: -0.118092,
      name: 'Home, London',
    },
    startLocation: null,
    endLocation: null,
    status: 'Pending',
  },
  {
    id: '3',
    name: 'Going to Office',
    description:
      'You will be traveling from Home in London to Canary Wharf, which is approximately a 30-minute drive. Make sure to leave on time to avoid traffic and arrive at the office by 9:30 AM.',
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-07-31'),
    startTime: '9:00 AM',
    endTime: '9:30 AM',
    startLocation: {
      lat: 51.509865,
      lng: -0.118092,
      name: 'Home, London',
    },
    endLocation: {
      lat: 51.505456,
      lng: -0.023511,
      name: 'Canary Wharf, London',
    },
    location: null,
    status: 'Done',
  },
  {
    id: '4',
    name: 'Going Home',
    description:
      "Wrap up your workday and head back home. You'll be leaving from Canary Wharf in London and making your way back to your home. The commute usually takes around 30 minutes, depending on traffic.",
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-07-31'),
    startTime: '5:30 PM',
    endTime: '6:00 PM',
    endLocation: {
      lat: 51.509865,
      lng: -0.118092,
      name: 'Home, London',
    },
    startLocation: {
      lat: 51.505456,
      lng: -0.023511,
      name: 'Canary Wharf, London',
    },
    location: null,
    status: 'Done',
  },
  {
    id: '5',
    name: 'Dinner',
    description:
      'You can have grilled chicken with roasted vegetables, vegetable stir-fry with brown rice, or a hearty vegetable soup with a side of whole grain bread. We also have a variety of salads and fresh fruits available to complement your meal.',
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-07-31'),
    startTime: '8:00 PM',
    endTime: '9:00 PM',
    startLocation: null,
    endLocation: null,
    location: {
      lat: 51.509865,
      lng: -0.118092,
      name: 'Home, London',
    },
    status: 'Pending',
  },
  {
    id: '6',
    name: 'Medicines',
    description: 'Medicines are placed in the cupboard.',
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-07-31'),
    startTime: '9:00 PM',
    endTime: '9:30 PM',
    location: {
      lat: 51.509865,
      lng: -0.118092,
      name: 'Home, London',
    },
    startLocation: null,
    endLocation: null,
    status: 'Done',
  },
  {
    id: '7',
    name: 'Night Walk',
    description:
      'End your day with a relaxing night walk from Trafalgar Square to Big Ben. This 2 km walk is a great way to unwind and destress after a long day.',
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-07-31'),
    startTime: '10:00 PM',
    endTime: '11:00 PM',
    location: null,
    startLocation: {
      lat: 51.508039,
      lng: -0.128069,
      name: 'Trafalgar Square, London',
    },
    endLocation: {
      lat: 51.500729,
      lng: -0.124625,
      name: 'Big Ben, London',
    },
    status: 'Pending',
  },
];
