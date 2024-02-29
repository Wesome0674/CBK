import { Button } from "@/ui/designsystem/Button";
import { Typographie } from "@/ui/designsystem/typography/Typographie";
import Image from "next/image";
import { BiCodeBlock, BiSolidMessageRoundedDetail } from "react-icons/bi"; // code and message
import { FaServer } from "react-icons/fa6"; // back-end
import { SiArduino } from "react-icons/si"; // iot
import { FaPhoneAlt } from "react-icons/fa"; // phone
import { IoIosMail, IoMdPin } from "react-icons/io"; // mail and loc
import { FaReact } from "react-icons/fa"; // react
import { SiTailwindcss } from "react-icons/si"; // tailwind
import { Container } from "@/ui/components/container/Container";
import { Navigation } from "@/ui/components/navigation/Navigation";
import { Header } from "@/ui/components/header/Header";

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <Container>
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
      </Container>
    </>
  );
}
