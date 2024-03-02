import { Button } from "@/ui/designsystem/Button";
import { Typographie } from "@/ui/designsystem/typography/Typographie";
import Image from "next/image";
import { BiCodeBlock, BiSolidMessageRoundedDetail } from "react-icons/bi"; // code and message
import { FaPhoneAlt } from "react-icons/fa"; // phone
import { IoIosMail, IoMdPin } from "react-icons/io"; // mail and loc // react
import { SiTailwindcss } from "react-icons/si"; // tailwind
import { Container } from "@/ui/components/container/Container";
import { Navigation } from "@/ui/components/navigation/Navigation";
import { Header } from "@/ui/components/header/Header";
import { Cards } from "@/ui/components/cards/Cards";
import { About } from "@/ui/components/about/About";
import { Skills } from "@/ui/components/skills/Skills";
import { Work } from "@/ui/components/work/Work";

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Skills />
      <Work />
      <Container>
        <Cards variant="small">
          <Typographie theme="linear" variant="display" component="h1">
            Typography
          </Typographie>
          <Typographie theme="secondary" variant="h1" component="h1">
            Typography
          </Typographie>
          <Typographie theme="tercery" variant="h2" component="h1">
            Typography
          </Typographie>
          <Typographie theme="error" variant="h3" component="h1">
            Typography
          </Typographie>
          <Typographie theme="success" variant="body-base" component="h1">
            Typography
          </Typographie>
          <Typographie theme="light" variant="body-bold" component="h1">
            Typography
          </Typographie>
          <Typographie theme="primary" variant="body-sm" component="h1">
            Typography
          </Typographie>
          <Typographie variant="pre-title" component="h1">
            Typography
          </Typographie>
          <Typographie variant="button-text" component="h1">
            Typography
          </Typographie>
          <Typographie variant="link" component="h1">
            Typography
          </Typographie>
        </Cards>
      </Container>
    </>
  );
}
