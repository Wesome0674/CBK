import { Navigation } from "@/ui/components/navigation/Navigation";
import { Header } from "@/ui/components/header/Header";
import { About } from "@/ui/components/about/About";
import { Skills } from "@/ui/components/skills/Skills";
import { Work } from "@/ui/components/work/Work";
import { Contact } from "@/ui/components/contact/Contact";
import { Footer } from "@/ui/components/footer/Footer";
import { Button } from "@/ui/designsystem/Button";
import { BsChatTextFill } from "react-icons/bs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="fixed z-20 bottom-6 right-6 text-white border-2 border-secondary border-dashed rounded-full p-0.5" >
        <Button variant="icon" size="large" icon={{ icon: BsChatTextFill }} />
      </div>



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
