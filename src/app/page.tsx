import { Button } from "@/ui/designsystem/Button";
import { Typographie } from "@/ui/designsystem/typography/Typographie";
import Image from "next/image";
import { HiArrowSmallRight } from "react-icons/hi2"; // right arrow
import { BsFileEarmarkCode } from "react-icons/bs"; // code header
import { MdOutlineDesignServices } from "react-icons/md"; // design header
import { TbWorldWww } from "react-icons/tb"; // www
import { IoChevronDown } from "react-icons/io5"; // down chevron
import { BiCodeBlock, BiSolidMessageRoundedDetail } from "react-icons/bi"; // code and message
import { FaServer } from "react-icons/fa6"; // back-end
import { SiArduino } from "react-icons/si"; // iot
import { FaPhoneAlt } from "react-icons/fa"; // phone
import { IoIosMail, IoMdPin } from "react-icons/io"; // mail and loc
import { FaReact } from "react-icons/fa"; // react
import { SiTailwindcss } from "react-icons/si"; // tailwind

export default function Home() {
  return (
    <main className="bg-slate-300 min-h-screen p-5">
      <div className="flex gap-5 items-center">
        <Button size="small" variant="accent">
          button
        </Button>
        <Button variant="outline">button</Button>
        <Button size="large" variant="insta">
          button
        </Button>
        <Button
          variant="icon"
          iconTheme="secondary"
          icon={{ icon: HiArrowSmallRight }}
        />
        <Button variant="icon" icon={{ icon: HiArrowSmallRight }} />
        <Button icon={{ icon: HiArrowSmallRight }}>Button icon</Button>
      </div>
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
    </main>
  );
}
