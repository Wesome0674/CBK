import { Navigation } from "@/ui/components/navigation/Navigation";
import { Header } from "@/ui/components/header/Header";
import { About } from "@/ui/components/about/About";
import { Skills } from "@/ui/components/skills/Skills";
import { Work } from "@/ui/components/work/Work";
import { Contact } from "@/ui/components/contact/Contact";
import { Footer } from "@/ui/components/footer/Footer";
import Form from "@/ui/components/quickMessage/Form"
import Loader from "@/ui/components/loader/Loader";
import { useTranslations } from "next-intl";



export default function Home() {
  const t = useTranslations("Index");
  return (
    <>
    <h1>{t('title')}</h1>
      <Form /> 
      <Loader/>
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
