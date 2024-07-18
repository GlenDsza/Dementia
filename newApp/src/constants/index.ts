import { RoutineType } from '../pages/Caretaker/Home/components/RoutineItem';

export interface RoutineInterface {
  id?: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string | null;
  status: string;
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
    description: 'Morning Walk',
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-07-31'),
    startTime: '6:00 AM',
    endTime: '7:00 AM',
    location: {
      lat: 18.520306,
      lng: 73.256733,
      name: 'Koregaon Park',
    },
    status: 'Done',
  },
  {
    id: '2',
    name: 'Breakfast',
    description: 'Breakfast',
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-07-31'),
    startTime: '8:00 AM',
    endTime: '9:00 AM',
    location: {
      lat: 18.520306,
      lng: 73.256733,
      name: 'Home',
    },
    status: 'Pending',
  },
  {
    id: '3',
    name: 'Work',
    description: 'Work',
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-07-31'),
    startTime: '9:00 AM',
    endTime: '5:00 PM',
    location: {
      lat: 18.520306,
      lng: 73.256733,
      name: 'Office',
    },
    status: 'Done',
  },
  {
    id: '4',
    name: 'Dinner',
    description: 'Dinner',
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-07-31'),
    startTime: '8:00 PM',
    endTime: '9:00 PM',
    location: {
      lat: 18.520306,
      lng: 73.256733,
      name: 'Home',
    },
    status: 'Pending',
  },
  {
    id: '5',
    name: 'Medicines',
    description: 'Medicines',
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-07-31'),
    startTime: '9:00 PM',
    endTime: '9:30 PM',
    location: {
      lat: 18.520306,
      lng: 73.256733,
      name: 'Home',
    },
    status: 'Done',
  },
  {
    id: '6',
    name: 'Night Walk',
    description: 'Night Walk',
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-07-31'),
    startTime: '10:00 PM',
    endTime: '11:00 PM',
    location: {
      lat: 18.520306,
      lng: 73.256733,
      name: 'Garden',
    },
    status: 'Pending',
  },
];

const schedules = [
  {
    date: '2047-05-17',
    groups: [
      {
        time: '8:00 am',
        sessions: [
          {
            id: '1',
            name: 'Breakfast',
            description: 'Breakfast',
            startDate: new Date('2047-05-17'),
            endDate: new Date('2047-05-17'),
            startTime: '8:00 am',
            endTime: '9:00 am',
            location: {
              lat: 18.520306,
              lng: 73.256733,
              name: 'Dining Hall',
            },
          },
        ],
      },
      {
        time: '9:15 am',
        sessions: [
          {
            name: 'Getting Started with Ionic',
            location: 'Hall 2',
            description:
              'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
            speakerNames: ['Ted Turtle'],
            timeStart: '9:30 am',
            timeEnd: '9:45 am',
            tracks: ['Ionic'],
            id: '2',
          },
          {
            name: 'Ionic Tooling',
            location: 'Executive Ballroom',
            description:
              'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
            speakerNames: ['Rachel Rabbit'],
            timeStart: '9:45 am',
            timeEnd: '10:00 am',
            tracks: ['Tooling'],
            id: '3',
          },
          {
            name: 'University of Ionic',
            location: 'Hall 3',
            description:
              'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
            speakerNames: ['Ellie Elephant'],
            timeStart: '9:15 am',
            timeEnd: '9:30 am',
            tracks: ['Ionic'],
            id: '4',
          },
        ],
      },
      {
        time: '10:00 am',
        sessions: [
          {
            name: 'Migrating to Ionic',
            location: 'Hall 1',
            description:
              'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
            speakerNames: ['Eva Eagle', 'Lionel Lion'],
            timeStart: '10:00 am',
            timeEnd: '10:15 am',
            tracks: ['Ionic'],
            id: '5',
          },
          {
            name: "What's New in Angular",
            location: 'Hall 3',
            description:
              'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
            speakerNames: ['Rachel Rabbit'],
            timeStart: '10:15 am',
            timeEnd: '10:30 am',
            tracks: ['Angular'],
            id: '6',
          },
          {
            name: 'The Evolution of Ionicons',
            location: 'Hall 2',
            description:
              'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
            speakerNames: ['Isabella Iguana', 'Eva Eagle'],
            timeStart: '10:15 am',
            timeEnd: '10:30 am',
            tracks: ['Design'],
            id: '7',
          },
          {
            name: 'Ionic Pro',
            location: 'Grand Ballroom A',
            description:
              'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
            speakerNames: ['Charlie Cheetah'],
            timeStart: '10:45 am',
            timeEnd: '11:00 am',
            tracks: ['Services'],
            id: '8',
          },
        ],
      },
      {
        time: '11:00 am',
        sessions: [
          {
            name: 'Ionic Workshop',
            location: 'Hall 1',
            description:
              'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
            speakerNames: ['Karl Kitten', 'Lionel Lion'],
            timeStart: '11:00 am',
            timeEnd: '11:45 am',
            tracks: ['Workshop'],
            id: '9',
          },
          {
            name: 'Community Interaction',
            location: 'Hall 3',
            description:
              'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
            speakerNames: ['Lionel Lion', 'Gino Giraffe'],
            timeStart: '11:30 am',
            timeEnd: '11:50 am',
            tracks: ['Communication'],
            id: '10',
          },
          {
            name: 'Navigation in Ionic',
            location: 'Grand Ballroom A',
            description:
              'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
            speakerNames: ['Rachel Rabbit', 'Eva Eagle'],
            timeStart: '11:30 am',
            timeEnd: '12:00 pm',
            tracks: ['Navigation'],
            id: '11',
          },
        ],
      },
      {
        time: '12:00 pm',
        sessions: [
          {
            name: 'Lunch',
            location: 'Dining Hall',
            description:
              'Come grab lunch with all the Ionic fanatics and talk all things Ionic',
            timeStart: '12:00 pm',
            timeEnd: '1:00 pm',
            tracks: ['Food'],
            id: '12',
          },
        ],
      },
      {
        time: '1:00 pm',
        sessions: [
          {
            name: 'Ionic in the Enterprise',
            location: 'Hall 1',
            description:
              'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
            speakerNames: ['Paul Puppy'],
            timeStart: '1:00 pm',
            timeEnd: '1:15 pm',
            tracks: ['Communication'],
            id: '13',
          },
          {
            name: 'Ionic Worldwide',
            location: 'Hall 1',
            description:
              'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
            speakerNames: ['Gino Giraffe'],
            timeStart: '1:15 pm',
            timeEnd: '1:30 pm',
            tracks: ['Communication'],
            id: '14',
          },
          {
            name: 'The Ionic Package',
            location: 'Grand Ballroom B',
            description:
              'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
            speakerNames: ['Molly Mouse', 'Burt Bear'],
            timeStart: '1:30 pm',
            timeEnd: '2:00 pm',
            tracks: ['Services'],
            id: '15',
          },
        ],
      },
      {
        time: '2:00 pm',
        sessions: [
          {
            name: 'Push Notifications in Ionic',
            location: 'Hall 2',
            description:
              'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
            speakerNames: ['Burt Bear', 'Charlie Cheetah'],
            timeStart: '2:00 pm',
            timeEnd: '2:30 pm',
            tracks: ['Services'],
            id: '16',
          },
          {
            name: 'Ionic Documentation',
            location: 'Grand Ballroom B',
            description:
              'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
            speakerNames: ['Donald Duck'],
            timeStart: '2:30 pm',
            timeEnd: '2:45 pm',
            tracks: ['Documentation'],
            id: '17',
          },
          {
            name: 'UX in Ionic',
            location: 'Hall 3',
            description:
              'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
            speakerNames: ['Isabella Iguana', 'Ellie Elephant'],
            timeStart: '2:45 pm',
            timeEnd: '3:00 pm',
            tracks: ['Design'],
            id: '18',
          },
        ],
      },
      {
        time: '3:00',
        sessions: [
          {
            name: 'Angular Directives in Ionic',
            location: 'Hall 1',
            description:
              'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
            speakerNames: ['Ted Turtle'],
            timeStart: '3:00 pm',
            timeEnd: '3:30 pm',
            tracks: ['Angular'],
            id: '19',
          },
          {
            name: 'Mobile States',
            location: 'Hall 2',
            description:
              'Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.',
            speakerNames: ['Rachel Rabbit'],
            timeStart: '3:30 pm',
            timeEnd: '3:45 pm',
            tracks: ['Navigation'],
            id: '20',
          },
        ],
      },
    ],
  },
];
