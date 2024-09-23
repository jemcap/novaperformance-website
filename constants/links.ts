

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



