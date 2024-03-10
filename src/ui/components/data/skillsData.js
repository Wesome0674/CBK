import { BiCodeBlock } from "react-icons/bi";
import { FaServer } from "react-icons/fa6"; // back-end
import { SiArduino } from "react-icons/si"; // iot
import { MdOutlineDesignServices } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { Button } from "@/ui/designsystem/Button";
import Image from "next/image";

export const Datatableau = [
  {
    id: 1,
    icon: BiCodeBlock,
    title: "1. Front-end",
    text: "Discovering front-end was my entry into coding, exploring the creation of interactive and dynamic layouts.",
  },

  {
    id: 2,
    icon: FaServer,
    title: "2. Back-end",
    text: "To improve website functionality, exploring back-end with PHP and Firebase was crucial.",
  },

  {
    id: 3,
    icon: MdOutlineDesignServices,
    title: "3. Design",
    text: "To craft compelling websites, mastering design through tools like Figma became essential in my journey",
  },

  {
    id: 4,
    icon: SiArduino,
    title: "4. IOT",
    text: "Expanding into IoT, mastering Python and Raspberry Pi projects became essential.",
  },
];

export const workData = [
  {
    id: 1,
    title: "The.Weather",
    subtitle: "Weather App",
    text: "A weather website enabling users to check temperature, humidity, rainfall, and other weather details for any city or country worldwide.",
    madeUsing: {
      first: FaReact,
      second: "OpenWeather API",
    },
    img: "/assets/images/theweathermockup.png",
  },
  {
    id: 2,
    title: "YankeeBites",
    subtitle: "Food App",
    text: "My initial project using React and Tailwind CSS, allowing users to add food items to their cart, review them, and remove selections.",
    madeUsing: {
      first: FaReact,
      second: SiTailwindcss,
    },
    img: "/assets/images/yankeebitesmockup.png",
  },
  {
    id: 3,
    title: "Professional Portfolio",
    subtitle: "Portfolio",
    text: "A portfolio showcasing my skills and projects, created for freelancing on platforms like Fiverr.",
    madeUsing: {
      first: FaReact,
      second: SiTailwindcss,
    },
    img: "/assets/images/portofoliomockup.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    logo: "/assets/svg/insta.svg",
    name: "@killian_bd_",
    buttonVariant: (
      <Button variant="insta" size="small">
        Follow 72
      </Button>
    ),
    textButton: "Follow",
    bgColor: "white",
  },
  {
    id: 2,
    logo: "/assets/svg/linkedin.png",
    name: "linkedin.com",
    buttonVariant: "none",
    bgColor: "#F0F6F9",
  },
  {
    id: 3,
    logo: "/assets/svg/meicloud.svg",
    name: "killian.boularand@icloud.com",
    buttonVariant: "none",
    subtitle: "Icloud",
    bgColor: "#D2EAFA",
    otherStyles: "col-span-2",
  },
  {
    id: 4,
    logo: "/assets/svg/git.svg",
    name: "Killian.bld",
    buttonVariant: (
      <Button variant="git" size="small">
        Follow
      </Button>
    ),
    textButton: "Follow",
    bgColor: "#F6F8FA",
    otherStyles: "col-span-2",
  },
  {
    id: 5,
    logo: "/assets/svg/dribbble.svg",
    name: "Dribbble",
    buttonVariant: (
      <Button variant="dribble" size="small">
        Follow
      </Button>
    ),
    textButton: "Follow",
    bgColor: "#F2DAE3",
  },
  {
    id: 6,
    logo: "/assets/svg/cv.svg",
    name: "Curriculum vitæ",
    buttonVariant: (
      <Button variant="insta" size="small">
        Download
      </Button>
    ),
    textButton: "Download",
    bgColor: "white",
  },
];

export const timelineData = [
  {
    id: 1,
    title: "Code Discovery",
    icons: (
      <>
        <div className="relative w-6 aspect-square ">
          <Image alt="logo" fill src="/assets/svg/html.svg" />
        </div>
        <div className="relative w-6 aspect-square ">
          <Image alt="logo" fill src="/assets/svg/css.svg" />
        </div>
        <div className="relative w-6 aspect-square ">
          <Image alt="logo" fill src="/assets/svg/python.svg" />
        </div>
      </>
    ),
    text: "Initial steps into web development during high school science classes. Basics of Python explored during math courses.",
  },
  {
    id: 2,
    title: "Introduction to JavaScript",
    icons: (
      <div className="relative w-6 aspect-square ">
        <Image alt="logo" fill src="/assets/svg/js.svg" />
      </div>
    ),
    text: " Discovery of JavaScript and its capabilities as a programming language.",
  },
  {
    id: 3,
    title: "Mastery of React",
    icons: (
      <div className="relative w-6 aspect-square ">
        <Image alt="logo" fill src="/assets/svg/react.svg" />
      </div>
    ),
    text: "Learning the React framework to develop dynamic and interactive web applications.",
  },
  {
    id: 4,
    title: "Exploration of Tailwind CSS",
    icons: (
      <div className="relative w-6 aspect-square ">
        <Image alt="logo" fill src="/assets/svg/tailwindcss.svg" />
      </div>
    ),
    text: "Discovery and use of Tailwind CSS to simplify and expedite the design process.",
  },
  {
    id: 5,
    title: "Knowledge Expansion",
    icons: (
      <>
        <div className="relative w-6 aspect-square ">
          <Image alt="logo" fill src="/assets/svg/c.svg" />
        </div>
        <div className="relative w-6 aspect-square ">
          <Image alt="logo" fill src="/assets/svg/php.svg" />
        </div>
      </>
    ),
    text: "Learning the C language to grasp fundamental programming concepts and exploring PHP for server-side web development.",
  },
  {
    id: 6,
    title: "Raspberry Pi Programming",
    icons: (
      <div className="relative w-6 aspect-square ">
        <Image alt="logo" fill src="/assets/svg/raspberrypi.svg" />
      </div>
    ),
    text: "Using Python to program Raspberry Pi boards for personal projects.",
  },
  {
    id: 7,
    title: " Emerging Web Technologies",
    icons: (
      <>
        <div className="relative w-6 aspect-square ">
          <Image alt="logo" fill src="/assets/svg/next.svg" />
        </div>
        <div className="relative w-6 aspect-square ">
          <Image alt="logo" fill src="/assets/svg/TypeScript.svg" />
        </div>
      </>
    ),
    text: "Learning Next.js to create modern and high-performance web applications. Exploring TypeScript to enhance the quality and maintainability of web projects.",
  },
];
