import nextcentAgencyImg from "../assets/project_imgs/nextcentagency.png";
import easyBankImg from "../assets/project_imgs/easybank-landingpage.jpg";
import dynamicPaymentImg from "../assets/project_imgs/dynamic_paymentcard.jpg";
import loopstudioImg from "../assets/project_imgs/loop-studio.jpg";
import weatherImg from "../assets/project_imgs/weather-project.jpg";

export const projectsData = [
  {
    title: "NextCent Agency",
    technologies: ["Tailwind CSS", "ReactJS", "Framer motion"],
    description: `I was searching for a project to test my ReactJS and Tailwind CSS knowledge and came across this project. The is an agency website called NextCentAgency where 
      users can explore more about the agency and its services.`,
    sourceCodeLink: "https://github.com/ChannMyaeAung/NextCentAgency",
    demoLink: "https://nextcent-agency-bychan.netlify.app/",
    image: nextcentAgencyImg,
  },
  {
    title: "EasyBank",
    technologies: ["Tailwind CSS", "ReactJS"],
    description:
      "A responsive EasyBank Landing Page where users can explore about the bank's features, articles and information etc.",
    sourceCodeLink: "https://github.com/ChannMyaeAung/EasyBank-LandingPage",
    demoLink: "https://easy-bank-landing-page-bychan.vercel.app/",
    image: easyBankImg,
  },
  {
    title: "Loop Studio",
    technologies: ["HTML", "Tailwind CSS", "ReactJS"],
    description:
      "Another landing page where one can explore about the loop studio services, creations and features. It is a challenge from frontend mentor.",
    sourceCodeLink: "https://github.com/ChannMyaeAung/LoopStudioLandingPage",
    demoLink: "https://loop-studio-landing-page-bychan.vercel.app/",
    image: loopstudioImg,
  },

  {
    title: "Dynamic Payment Card",
    technologies: ["HTML", "CSS", "SCSS", "Javascript"],
    description:
      "A payment page where the information the user types is updated dynamically on the card. This is a coding challenge from frontend mentor.",
    sourceCodeLink:
      "https://github.com/ChannMyaeAung/payment_page_with_dynamic_cards",
    demoLink:
      "https://payment-page-with-dynamic-cards.vercel.app/?vercelToolbarCode=NEGqah_QiGf_Uz2",
    image: dynamicPaymentImg,
  },

  {
    title: "Weather App",
    technologies: ["HTML", "Tailwind CSS", "Javascript", "API"],
    description:
      "This is a weather website where one can search the weather condition for any country/city in the world. It fetches data directly from 'openweather.com' API.",
    sourceCodeLink: "https://github.com/ChannMyaeAung/WeatherApp",
    demoLink: "https://weather-app-bychan.vercel.app/",
    image: weatherImg,
  },
];
