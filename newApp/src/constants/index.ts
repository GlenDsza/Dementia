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
    lat: 18.124564,
    lng: 73.792699,
    title: 'Glen',
    description: 'Map Owner',
    address:
      '35, A 1, Main Road, Mundhwa Road, Koregaon Park Annexe, Pune, Maharashtra 411036',
    email: 'dsouzaglen30@gmail.com',
    phone: '+91 93257 12345',
  },
  {
    lat: 18.511183,
    lng: 73.526154,
    title: 'Deepthi',
    description: 'Mentor',
    address:
      'Next to Mars society, Diagonally Opp. Oxford Golf Course, Off NIBM, Pune, Maharashtra 411048',
    email: 'deepthi@gmail.com',
    phone: '+91 20 2688 6222',
  },
  {
    lat: 18.514639,
    lng: 73.628824,
    title: 'Amol',
    description: 'Manager',
    address: '1242 B, Apte Rd, Deccan Gymkhana, Pune, Maharashtra 411004',
    email: 'amol@gmail.com',
    phone: '+91 20 2553 9640',
  },
  {
    lat: 18.923276,
    lng: 73.841912,
    title: 'Kanika',
    description: 'Design Pro',
    address:
      '1218/1, Fergusson College Rd, near Good Luck Chowk, Deccan Gymkhana, Pune, Maharashtra 411004',
    email: 'kanika@gmail.com',
    phone: '+91 20 2565 5256',
  },
  {
    lat: 18.245409,
    lng: 73.905146,
    title: 'Harit',
    description: 'React Pro',
    address:
      'Koregaon Park, Lane Number 6, Meera Nagar, Pune, Maharashtra 411001',
    email: 'harit@gmail.com',
    phone: '+91 20 2615 0081',
  },
  {
    lat: 18.528289,
    lng: 73.147007,
    title: 'Rajeshri',
    description: 'Team Lead',
    address:
      'Lane 5, Off North Main Road, Koregaon Park, Pune, Maharashtra 411001',
    email: 'rajeshri@gmail.com',
    phone: '+91 20 2615 0081',
  },
  {
    lat: 18.531757,
    lng: 73.467006,
    title: 'Purva',
    description: 'All rounder',
    address:
      'Shop No. 2, Lake Plaza, Opposite Kalyani Nagar, Jogging Park, Kalyani Nagar, Pune, Maharashtra 411006',
    email: 'purva@gmail.com',
    phone: '+91 20 2661 5098',
  },
  {
    lat: 18.520306,
    lng: 73.256733,
    title: 'Meet',
    description: 'LLM Pro',
    address:
      'Shop No. 2, Lake Plaza, Opposite Kalyani Nagar, Jogging Park, Kalyani Nagar, Pune, Maharashtra 411006',
    email: 'meet@gmail.com',
    phone: '+91 20 2661 5098',
  },
  {
    lat: 18.820306,
    lng: 73.956733,
    title: 'Disha',
    description: 'Spring Pro',
    address:
      'Shop No. 2, Lake Plaza, Opposite Kalyani Nagar, Jogging Park, Kalyani Nagar, Pune, Maharashtra 411006',
    email: 'disha@gmail.com',
    phone: '+91 20 2661 5098',
  },
  {
    lat: 18.920306,
    lng: 73.056733,
    title: 'Ayesha',
    description: 'LLM Pro',
    address:
      'Shop No. 2, Lake Plaza, Opposite Kalyani Nagar, Jogging Park, Kalyani Nagar, Pune, Maharashtra 411006',
    email: 'ayesha@gmail.com',
    phone: '+91 20 2661 5098',
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
      'Start your day off right with a refreshing morning walk in Koregaon Park. This routine involves walking for one hour every day, from 6:00 AM to 7:00 AM, throughout the month of July 2024.',
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-07-31'),
    startTime: '6:00 AM',
    endTime: '7:00 AM',
    startLocation: {
      lat: 18.511564,
      lng: 73.922984,
      name: 'Cybercity, Magarpatta',
    },
    endLocation: {
      lat: 18.496668,
      lng: 73.941666,
      name: 'Hadapsar',
    },
    location: null,
    status: 'Done',
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
      lat: 18.520306,
      lng: 73.256733,
      name: 'Home',
    },
    startLocation: null,
    endLocation: null,
    status: 'Pending',
  },
  {
    id: '3',
    name: 'Going to Office',
    description:
      'You will be traveling from Cybercity in Magarpatta to Business Bay in Pune, which is approximately a 30-minute drive. Make sure to leave on time to avoid traffic and arrive at the office by 9:30 AM.',
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-07-31'),
    startTime: '9:00 AM',
    endTime: '9:30 AM',
    startLocation: {
      lat: 18.511564,
      lng: 73.922984,
      name: 'Cybercity, Magarpatta',
    },
    endLocation: {
      lat: 18.5516,
      lng: 73.8899,
      name: 'Business Bay, Pune',
    },
    location: null,
    status: 'Done',
  },
  {
    id: '4',
    name: 'Going Home',
    description:
      "Wrap up your workday and head back home. You'll be leaving from Business Bay in Pune and making your way to Cybercity in Magarpatta. The commute usually takes around 30 minutes, depending on traffic.",
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-07-31'),
    startTime: '5:30 PM',
    endTime: '6:00 PM',
    endLocation: {
      lat: 18.511564,
      lng: 73.922984,
      name: 'Cybercity, Magarpatta',
    },
    startLocation: {
      lat: 18.5516,
      lng: 73.8899,
      name: 'Business Bay, Pune',
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
      lat: 18.520306,
      lng: 73.256733,
      name: 'Home',
    },
    status: 'Pending',
  },
  {
    id: '6',
    name: 'Medicines',
    description: 'Medicines are placed in cupboard',
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-07-31'),
    startTime: '9:00 PM',
    endTime: '9:30 PM',
    location: {
      lat: 18.520306,
      lng: 73.256733,
      name: 'Home',
    },
    startLocation: null,
    endLocation: null,
    status: 'Done',
  },
  {
    id: '7',
    name: 'Night Walk',
    description:
      'End your day with a relaxing night walk from Cybercity, Magarpatta to Hadapsar. This 3.5 km walk is a great way to unwind and destress after a long day.',
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-07-31'),
    startTime: '10:00 PM',
    endTime: '11:00 PM',
    location: null,
    startLocation: {
      lat: 18.511564,
      lng: 73.922984,
      name: 'Cybercity, Magarpatta',
    },
    endLocation: {
      lat: 18.496668,
      lng: 73.941666,
      name: 'Hadapsar',
    },
    status: 'Pending',
  },
];
