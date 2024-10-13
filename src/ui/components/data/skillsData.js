import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { Button } from "@/ui/designsystem/Button";
import Image from "next/image";
import Link from "next/link";

export const workData = [
  {
    id: 1,
    title: "The.Weather",
    subtitle: "name1",
    text: "text1",
    madeUsing: {
      first: FaReact,
      second: "OpenWeather API",
    },
    img: "/assets/images/theweathermockup.png",
    hrefSite: "https://wesome0674.github.io/The.Weather/",
    hrefCode: "https://github.com/Wesome0674/The.Weather/tree/main/weather-app",
  },
  {
    id: 2,
    title: "YankeeBites",
    subtitle: "name2",
    text: "text2",
    madeUsing: {
      first: FaReact,
      second: SiTailwindcss,
    },
    img: "/assets/images/yankeebitesmockup.png",
    hrefSite: "https://wesome0674.github.io/YankeeBites/",
    hrefCode: "https://github.com/Wesome0674/YankeeBites",
  },
  {
    id: 3,
    title: "Professional Portfolio",
    subtitle: "name3",
    text: "text3",
    madeUsing: {
      first: FaReact,
      second: SiTailwindcss,
    },
    img: "/assets/images/portofoliomockup.png",
    hrefSite: "https://wesome0674.github.io/myPortfolio/",
    hrefCode: "https://github.com/Wesome0674/myPortfolio",
  },
  {
    id: 4,
    title: "Foodieland",
    subtitle: "name4",
    text: "text4",
    madeUsing: {
      first: FaHtml5,
      second: FaCss3Alt,
    },
    img: "/assets/images/foodieland.png",
    hrefSite: "https://cooking-website-rho.vercel.app/",
    hrefCode: "https://github.com/Wesome0674/CookingWebsite/",
  },
  {
    id: 5,
    title: "EnergieX",
    subtitle: "name5",
    text: "text5",
    madeUsing: {
      first: FaHtml5,
      second: FaCss3Alt,
    },
    img: "/assets/images/energiex.png",
    hrefSite: "https://energie-x.vercel.app/",
    hrefCode: "https://github.com/Wesome0674/EnergieX/",
  },
];

export const socialMedia = [
  {
    id: 1,
    logo: "/assets/svg/insta.svg",
    name: "@killian_bd_",
    buttonVariant: (
      <Link href="https://www.instagram.com/killian_bd_/?hl=fr">
        <Button variant="insta" size="small">
          Follow
        </Button>
      </Link>
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
      <Link href="https://github.com/Wesome0674">
        <Button variant="git" size="small">
          Follow
        </Button>
      </Link>
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
      <Link href="https://dribbble.com/Killianbld">
        <Button variant="dribble" size="small">
          Follow
        </Button>
      </Link>
    ),
    textButton: "Follow",
    bgColor: "#F2DAE3",
  },
  {
    id: 6,
    logo: "/assets/svg/cv.svg",
    name: "Curriculum vitæ",
    buttonVariant: (
      <Link href="https://www.canva.com/design/DAGAWiwOtAQ/6oSl7Nb3oZiWh9x7aKZhIg/view?utm_content=DAGAWiwOtAQ&utm_campaign=designshare&utm_medium=link&utm_source=editor">
        <Button variant="insta" size="small">
          Download
        </Button>
      </Link>
    ),
    textButton: "Download",
    bgColor: "white",
  },
];
