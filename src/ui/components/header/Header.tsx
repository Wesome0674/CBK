import { Typographie } from "@/ui/designsystem/typography/Typographie";
import { Container } from "../container/Container";
import { Button } from "@/ui/designsystem/Button";
import { HiArrowSmallRight } from "react-icons/hi2"; // right arrow
import { BsFileEarmarkCode } from "react-icons/bs"; // code header
import { MdOutlineDesignServices } from "react-icons/md"; // design header
import { TbWorldWww } from "react-icons/tb"; // www
import Image from "next/image";

interface Props {}

export const Header = ({}: Props) => {
  return (
    <Container className="flex items-center justify-between my-14 gap-5 ">
      <div className="space-y-4">
        <div>
          <Typographie
            variant="display"
            component="h1"
            className="flex flex-col"
          >
            <span>Hello, i&apos;m</span>
            <span>Boularand Killian</span>
          </Typographie>
          <Typographie
            variant="body-sm"
            theme="tercery"
            className="max-w-[500px]"
            component="p"
          >
            I&apos;m a passionate student coder based in Annecy France. I
            strives to build immersive and beautiful web applications through
            carefully crafted code and user-centric design.
          </Typographie>
        </div>

        <Typographie
          theme="tercery"
          component="div"
          className="flex items-center gap-x-2"
        >
          <span>Code</span>
          <BsFileEarmarkCode size={24} />
          <span>.</span>
          <span>Design</span>
          <MdOutlineDesignServices size={24} />
          <span>.</span>
          <span>Web</span>
          <TbWorldWww size={24} />
        </Typographie>
        <div className="space-x-7">
          <Button icon={{ icon: HiArrowSmallRight }}>See my Work</Button>
          <Button variant="outline">Contact me</Button>
        </div>
      </div>
      <div></div>
      <div className="relative">
        <div //👈 wrap your Image tag
          className="drop-shadow-lg bg-black  h-[340px] w-[230px] border-4 border-light rounded origin-bottom -rotate-12 "
        >
          <Image
            src={"/assets/images/meheader.jpeg"}
            alt="image"
            fill
            objectFit="cover"
          />
        </div>
        <div //👈 wrap your Image tag
          className=" h-[175px] w-[175px] absolute top-[-25px]  mx-[-230px]"
        >
          <Image
            src={"/assets/svg/arrowme.svg"}
            alt="image"
            fill
            objectFit="contain"
          />
        </div>
      </div>
    </Container>
  );
};
