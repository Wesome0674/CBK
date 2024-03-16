import { Navigation } from "@/ui/components/navigation/Navigation";
import { Header } from "@/ui/components/header/Header";
import { About } from "@/ui/components/about/About";
import { Skills } from "@/ui/components/skills/Skills";
import { Work } from "@/ui/components/work/Work";
import { Contact } from "@/ui/components/contact/Contact";
import { Footer } from "@/ui/components/footer/Footer";
import QuickMessage from "@/ui/components/quickMessage/QuickMessage";

export default function Home() {
  return (
    <>
      <QuickMessage />
      <Navigation />
      <div id="home">
        <Header />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}
