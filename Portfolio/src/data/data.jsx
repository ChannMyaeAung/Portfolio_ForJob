/* Social Media Icons */
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

/* all imgIcons for aboutMe component */
import graduationPhoto from "../assets/graduation_photo.jpg";
import Lottie from "lottie-react";
import helloAnimation from "../assets/animations/hello_animation.json";
import codingAnimation from "../assets/animations/coding_animation.json";
/* Tech Stack Icons */
import htmlIcon from "../assets/icons/html-icon.png";
import cssIcon from "../assets/icons/css-icon.png";
import jsIcon from "../assets/icons/javascript-icon.png";
import reactIcon from "../assets/icons/react-icon.png";
import reduxIcon from "../assets/icons/redux-icon.png";
import tailwindIcon from "../assets/icons/tailwind-icon.png";
import bootstrapIcon from "../assets/icons/bootstrap-icon.png";
import typescriptIcon from "../assets/icons/typescript-icon.png";
import sassIcon from "../assets/icons/sass-icon.png";

export const aboutMe = [
  {
    id: 1,
    title: "Hello!",
    imgIcon: null,
    animation: <Lottie animationData={helloAnimation} loop={true} />,
    description_1: `Hi, I am Chan Myae Aung. I am a passionate front-end developer from Myanmar. I was born and grew up in my small hometown, Hpa-an, in Kayin State
    which is at the lower part of Myanmar. I was born in 1999. I'm 5' 11" (180cm).`,
    description_2: `I specialize in ReactJS and its related technology with a love for crafting beautiful,
    user-friendly websites to solve modern problems or simply facilitate one's business. It's a pleasure to have you here!
    `,
  },

  {
    id: 2,
    title: "Education",
    imgIcon: graduationPhoto,
    animation: null,
    description_1: `I hold a Bachelor's degree in Information Technology from James Cook University in Singapore, 
    where I honed my programming skills and learned the foundations of web development, project management(Scrum & Sprints), networking and machine learning.`,
    description_2: `I am now still honing the tech stacks I have learnt so far by exploring new technologies or updates that keep coming out, as well as
    I am planning to learn NextJS to become a full-stack developer and ReactNative to start developing apps.
    `,
  },
  {
    id: 3,
    title: "Journey",
    imgIcon: null,
    animation: <Lottie animationData={codingAnimation} loop={true} />,
    description_1: `My journey into the world of web development began with a simple curiosity. I was always intrigued by the way websites worked and amazed by how beautifully the websites/apps
    help facilitate everyone's life. FoodPanda, Netflix and Grab are great examples. Besides, I was also inspired by the beautiful yet optimized portfolio with some large-scale projects of my acquaintance.`,
    description_2: `Thus, I decided to dive in and explore the magic behind the web which then led me to discover
    the endless possibilities of coding, design and user experience.
    `,
  },
];

export const aboutMeDetails = [
  {
    id: "1",
    timeline: "2019-2021",
    description: `I graduated on December of 2019 so it is pretty much 2020-2021.
                After graduation, I decided to come back to my family in Myanmar
                and give myself a break after 3 years of studying in Singapore.
                There was a covid pandemic happening at that time and I was
                stuck here in my hometown for like 1 year. I literally regret I
                didn't studied anything during that time and I wish I could have
                that 1 year to further improve my web development journey.`,
  },
  {
    id: "2",
    timeline: "2021-2023",
    description: `I started learning Python again at the end of 2021 but I found out that 
    Javascript actually ranked top one in IT job industry and I decided to jump right into web development.
    In early 2022, I decided to become a full-stack developer and I was further inspired 
    by one of my acquaintances's beautiful full-stacked website. Since then I've decided to go full-stack in web development and I keep on learning new things and improving myself till this day.`,
  },
];

export const socialMediaLinks = [
  {
    id: 1,
    title: "Facebook",
    icon: <FaFacebook />,
    href: "https://www.facebook.com/Chanmyaeaung251",
  },
  {
    id: 2,
    title: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/chan-myae-aung-4434b9157",
  },
  {
    id: 3,
    title: "Instagram",
    icon: <FaInstagram />,
    href: "https://instagram.com/vincentchen25?igshid=OGQ5ZDc2ODk2ZA==",
  },
  {
    id: 4,
    title: "Github",
    icon: <FaGithub />,
    href: "https://github.com/ChannMyaeAung",
  },
];

export const skills = [
  {
    id: 1,
    title: "HTML",
    icon: htmlIcon,
  },
  {
    id: 2,
    title: "CSS",
    icon: cssIcon,
  },
  {
    id: 3,
    title: "Javscript",
    icon: jsIcon,
  },
  {
    id: 4,
    title: "React",
    icon: reactIcon,
  },
  {
    id: 5,
    title: "Typescript",
    icon: typescriptIcon,
  },
  {
    id: 6,
    title: "Redux",
    icon: reduxIcon,
  },
  {
    id: 7,
    title: "Tailwind CSS",
    icon: tailwindIcon,
  },
  {
    id: 8,
    title: "Bootstrap",
    icon: bootstrapIcon,
  },
  {
    id: 9,
    title: "SASS/SCSS",
    icon: sassIcon,
  },
];
