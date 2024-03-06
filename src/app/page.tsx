import { Button } from "@/ui/designsystem/Button";
import { Typographie } from "@/ui/designsystem/typography/Typographie";
import Image from "next/image";
import { BiCodeBlock, BiSolidMessageRoundedDetail } from "react-icons/bi"; // code and message // mail and loc // react
import { SiTailwindcss } from "react-icons/si"; // tailwind
import { Container } from "@/ui/components/container/Container";
import { Navigation } from "@/ui/components/navigation/Navigation";
import { Header } from "@/ui/components/header/Header";
import { Cards } from "@/ui/components/cards/Cards";
import { About } from "@/ui/components/about/About";
import { Skills } from "@/ui/components/skills/Skills";
import { Work } from "@/ui/components/work/Work";
import { Contact } from "@/ui/components/contact/Contact";
import { Footer } from "@/ui/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
