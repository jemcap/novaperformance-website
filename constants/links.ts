

type NavLinks = {
  id:number;
  url:string;
  text:string
}

type Sports = {
  id:number;
  title:string;
  description:string;
  image:string
  url:string
}

type Membership = {
  id: number;
  title: string;
  description: string[];
  price: string | number;
}

type Members = {
  id:number
  name:string;
  role:string;
  url?:string;
  img?:string;
}

interface Events extends Sports {
  location: string;
  calendar: Date;
}


export const NAV_LINKS:NavLinks[] = [
  { id: 1, url: "/about", text: "About" },
  { id: 2, url: "/events", text: "Events" },
  { id: 3, url: "/membership", text: "Membership" },
  { id: 4, url: "/contact", text: "Contact" },
];

export const sportsList:Sports[] = [
  {
    id: 1,
    title: "Weightlifting",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta consectetur odio vitae temporibus voluptas labore beatae mollitia quo quae optio.",
    image: "/snatch_1.png",
    url: "/weightlifting",
  },
  {
    id: 2,
    title: "Powerlifting",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta consectetur odio vitae temporibus voluptas labore beatae mollitia quo quae optio.",
    image: "/craig_squat.jpg",
    url: "/powerlifting",
  },
  {
    id: 3,
    title: "Strongman",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta consectetur odio vitae temporibus voluptas labore beatae mollitia quo quae optio.",
    image: "/matt_deadlift.jpg",
    url: "/strongman",
  },
];

export const eventsList:Events[] = [
  {
    id: 1,
    title: "Nova Powerlifting Open",
    location: "St Ives, Cambridgeshire",
    calendar: new Date("2024-10-27"),
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta consectetur odio vitae temporibus voluptas labore beatae mollitia quo quae optio.",
    image: "/nova_powerlifting_competition_advert_2024.png",
    url: "/powerlifting",
  },
  {
    id: 2,
    title: "Nova Weightlifting Winter Open",
    location: "St Ives, Cambridgeshire",
    calendar: new Date("2024-12-10"),
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta consectetur odio vitae temporibus voluptas labore beatae mollitia quo quae optio.",
    image: "/nova_powerlifting_competition_advert_2024.png",
    url: "/weightlifting",
  },

]

export const membership:Membership[] = [
  {
    id: 1,
    title: "Nova Performance Athlete",
    description: [
      "Personalised training plans",
      "Access to expert coaching",
      "Nutritional guidance",
      "Performance assessments",
      "24/7 access to training facilities"
    ],
    price: 99
  }
]

export const teamList:Members[] = [
  {
    id: 1,
    name: "Adam Smith",
    role: "Gym Owner / Head Coach",
    img: "/adam_1.png"
  },
  {
    id: 2,
    name: "Craig Taylor",
    role: "Head Powerlifting Coach",
    img: "/craig_2.png"
  },
  {
    id: 3,
    name: "Matt Nice",
    role: "Head Strongman Coach",
    img: "/matt_1.png"
  },
  {
    id: 4,
    name: "Lily Yu",
    role: "Weightlifting Coach",
    img: "/lily_yu_1.png"
  },
  {
    id: 5,
    name: "Tiago Costa",
    role: "Weightlifting Coach",
    img: "/tiago_1.png"
  },
  {
    id: 6,
    name: "Sam Evans",
    role: "Weightlifting Coach",
    img: "/sam_1.png"
  },
  {
    id: 7,
    name: "Isaac Leatherland",
    role: "Physiotherapist / Powerlifting Coach",
    img: "/isaac_1.png"
  }
]



