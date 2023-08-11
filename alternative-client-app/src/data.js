import { SiBitcoinsv } from "react-icons/si";
import { SiNike } from "react-icons/si";
import { SiMcdonalds } from "react-icons/si";
import { SiApple } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";

export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Register",
    path: "/register",
  },
  {
    name: "Vendors",
    path: "/vendors",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const offers = [
  {
    id: 1,
    icon: <SiBitcoinsv />,
    title: "Fund Allocation",
    info: "Send BSV to a recipient and restrict spendability. A whole new ballgame to checks and balances for financial responsibility.",
    path: "/about",
  },
  {
    id: 2,
    icon: <SiBitcoinsv />,
    title: "Personal Financing",
    info: "Upgrade your personal financial planning by restricting your spending based on your choice",
    path: "/about",
  },

];

export const vendors = [
  {
    id: 1,
    icon: <SiNike />,
    title: "Nike",
    desc: "Maximize performance and style with Nike's innovative products.",
    category: "Clothing",
    address: "16Lp7fuguGmXj4QHDrpwqxNydSDFh9DdVi",
  },
  {
    id: 2,
    icon: <SiMcdonalds />,
    title: "McDonalds",
    desc: "Savor joy with McDonald's iconic flavors and moments.",
    category: "Food",
    address: "1ERTuTnputLbCpFjJanMqTmPHEC5XnNwE8",
  },
  {
    id: 3,
    icon: <SiApple />,
    title: "Apple",
    desc: "Innovate life with Apple's cutting-edge technology and design.",
    category: "Gadgets",
    address: "1HuyZ9t3w2S2ExLdERS23RTjdy8hYY6nJv",
  },
  {
    id: 4,
    icon: <AiFillHome />,
    title: "Homes for Rent",
    desc: "Find comfort in diverse rental properties with us.",
    category: "Rent",
    address: "1BkWEnTjnjG8UBpmCvh28m7BnzgPqXgF3r",
  },
];

export const faqs = [
  {
    id: 1,
    question: "How often should I exercise?",
    answer:
      "Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!",
  },
  {
    id: 2,
    question: "What time of day is best to work out?",
    answer:
      "Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui. Eos, omnis beatae? Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit.",
  },
  {
    id: 3,
    question: "How long should my workouts be?",
    answer:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
  {
    id: 4,
    question: "Do I need to warm up before my workouts?",
    answer:
      "Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate? Qui totam est omnis dolor nobis quisquam veritatis a!",
  },
  {
    id: 5,
    question: "Should I do strength training, cardio or both?",
    answer:
      "Maiores fuga, cum praesentium esse laudantium! Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui.",
  },
  {
    id: 6,
    question: "Should I lift weights for strength training?",
    answer:
      "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate.",
  },
];

// export const testimonials = [
//     {
//         id: 1,
//         name: "Diana Ayi",
//         quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
//         job: "Student",
//         avatar: require("./images/avatar1.jpg")
//     },
//     {
//         id: 2,
//         name: "Daniel Vinyo",
//         quote: "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
//         job: "Software Egineer",
//         avatar: require("./images/avatar2.jpg")
//     },
//     {
//         id: 3,
//         name: "Edem Quist",
//         quote: "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
//         job: "University Lecturer",
//         avatar: require("./images/avatar3.jpg")
//     },
//     {
//         id: 4,
//         name: "Grace Lavoe",
//         quote: "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
//         job: "Talking Parrot",
//         avatar: require("./images/avatar4.jpg")
//     },
//     {
//         id: 5,
//         name: "Nana Yaa Dankwa",
//         quote: "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
//         job: "Pharmacist",
//         avatar: require("./images/avatar5.jpg")
//     }
// ]

export const plans = [
  {
    id: 1,
    name: "Silver Package",
    desc: "This package is perfect for beginners who need constant help",
    price: 29.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature Plus", available: false },
      { feature: "Sixth Feature", available: false },
      { feature: "Seventh Feature", available: false },
      { feature: "Seventh Feature Plus", available: false },
      { feature: "Eighth Feature", available: false },
      { feature: "Ninth Feature", available: false },
      { feature: "Tenth Feature", available: false },
      { feature: "Eleventh Feature", available: false },
    ],
  },
  {
    id: 2,
    name: "Gold Package",
    desc: "This is the perfect package for beginners who know what their doing",
    price: 49.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature Plus", available: true },
      { feature: "Sixth Feature", available: true },
      { feature: "Seventh Feature", available: true },
      { feature: "Seventh Feature Plus", available: true },
      { feature: "Eighth Feature", available: false },
      { feature: "Ninth Feature", available: false },
      { feature: "Tenth Feature", available: false },
      { feature: "Eleventh Feature", available: false },
    ],
  },
  {
    id: 3,
    name: "Platinum Package",
    desc: "This package is perfect for busy people who need home service",
    price: 89.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature Plus", available: true },
      { feature: "Sixth Feature", available: true },
      { feature: "Seventh Feature", available: true },
      { feature: "Seventh Feature Plus", available: true },
      { feature: "Eighth Feature", available: true },
      { feature: "Ninth Feature", available: true },
      { feature: "Tenth Feature", available: true },
      { feature: "Eleventh Feature", available: true },
    ],
  },
];

// const Trainer1 = require('./images/trainer1.jpg')
// const Trainer2 = require('./images/trainer2.jpg')
// const Trainer3 = require('./images/trainer3.jpg')
// const Trainer4 = require('./images/trainer4.jpg')
// const Trainer5 = require('./images/trainer5.jpg')
// const Trainer6 = require('./images/trainer6.jpg')

// export const trainers = [
//     {
//         id: 1,
//         image: Trainer1,
//         name: 'John Doe',
//         job: 'Aerobic Trainer',
//         socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
//     },
//     {
//         id: 2,
//         image: Trainer2,
//         name: 'Daniel vinyo',
//         job: 'Speed Trainer',
//         socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
//     },
//     {
//         id: 3,
//         image: Trainer3,
//         name: 'Edem Quist',
//         job: 'Flexibility Trainer',
//         socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
//     },
//     {
//         id: 4,
//         image: Trainer4,
//         name: 'Shatta Wale',
//         job: 'Body Composition Trainer',
//         socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
//     },
//     {
//         id: 5,
//         image: Trainer5,
//         name: 'Diana Ayi',
//         job: 'Circuit Trainer',
//         socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
//     },
//     {
//         id: 6,
//         image: Trainer6,
//         name: 'Wayne Carter',
//         job: 'Physical Intelligence Trainer',
//         socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
//     }
// ]
