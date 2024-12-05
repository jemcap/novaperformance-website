

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
  social?:string;
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
      "Weightlifting focuses on the snatch and clean and jerk, demanding strength, precision, and explosive power. At Nova Performance, we are the house of Weightlifting, where athletes have won numerous awards nationwide, guided by dedicated coaches to master their lifts.",
    image: "/snatch_1.png",
    url: "/weightlifting",
  },
  {
    id: 2,
    title: "Powerlifting",
    description:
      "Powerlifting tests raw strength through the squat, bench press, and deadlift. At Nova Performance, we empower athletes to push their limits and achieve personal bests, fostering a community of support and excellence in the pursuit of strength.",
    image: "/craig_squat.jpg",
    url: "/powerlifting",
  },
  {
    id: 3,
    title: "Strongman",
    description:
      "Strongman is a dynamic strength sport featuring events like lifting atlas stones and pulling trucks. At Nova Performance, we embrace this thrilling challenge, training athletes to excel in both power and endurance as they compete to showcase their extraordinary strength.",
    image: "/matt_deadlift.jpg",
    url: "/strongman",
  },
];

export const eventsList:Events[] = [
  {
    id: 1,
    title: "Nova Winter Open",
    location: "St Ives, Cambridgeshire",
    calendar: new Date("2024-12-12"),
    description:
      "Join us for the Nova Powerlifting Open, where athletes compete under IPF rules with calibrated plates. This event promises an exciting showcase of strength and skill, bringing together the powerlifting community in St Ives. Don't miss your chance to witness incredible feats of strength!",
    image: "/snatch_adam.jpg",
    url: "/powerlifting",
  },
  {
    id: 2,
    title: "Nova Powerlifting Open",
    location: "St Ives, Cambridgeshire",
    calendar: new Date("2025-03-15"),
    description:
      "Join us for the Nova Powerlifting Open, where athletes compete under IPF rules with calibrated plates. This event promises an exciting showcase of strength and skill, bringing together the powerlifting community in St Ives. Don't miss your chance to witness incredible feats of strength!",
    image: "/sumo_dl.png",
    url: "/powerlifting",
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
    img: "/adam_1.png",
    social: "thicc__astley/"
  },
  {
    id: 2,
    name: "Craig Taylor",
    role: "Head Powerlifting Coach",
    img: "/craig_2.png",
    social: "cmt_coaching/"
  },
  {
    id: 3,
    name: "Matt Nice",
    role: "Head Strongman Coach",
    img: "/matt_1.png",
    social: "cambridge_strength_coaching/"
  },
  {
    id: 4,
    name: "Lily Yu",
    role: "Weightlifting Coach",
    img: "/lily_yu_1.png",
    social: "coach_yustrength/"
  },
  {
    id: 5,
    name: "Tiago Costa",
    role: "Weightlifting Coach",
    img: "/tiago_1.png",
    social: "tdotlifting/"
  },
  {
    id: 6,
    name: "Sam Evans",
    role: "Weightlifting Coach",
    img: "/sam_1.png",
    social: "sevanstraining/"
  },
  {
    id: 7,
    name: "Isaac Leatherland",
    role: "Physiotherapist / Powerlifting Coach",
    img: "/isaac_1.png",
    social: "ijlclinic_coaching/"
  }
]


