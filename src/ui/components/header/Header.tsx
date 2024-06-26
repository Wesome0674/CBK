"use client";

import { Typographie } from "@/ui/designsystem/typography/Typographie";
import { useEffect } from "react";
import { Container } from "../container/Container";
import { Button } from "@/ui/designsystem/Button";
import { HiArrowSmallRight } from "react-icons/hi2"; // right arrow
import { BsFileEarmarkCode } from "react-icons/bs"; // code header
import { MdOutlineDesignServices } from "react-icons/md"; // design header
import { TbWorldWww } from "react-icons/tb"; // www
import Image from "next/image";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";

interface Props {}

export const Header = ({}: Props) => {
  useEffect(() => {
    Aos.init();
  }, []);

  const t = useTranslations("Header");
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <Container className="flex flex-col md:flex-row items-center justify-between mt-6 md:mt-14 lg:mt-20 gap-7 ">
      <div className="space-y-6">
        <div className="space-y-3">
          <Typographie
            variant="display"
            component="h1"
            className="flex flex-col"
          >
            <span>{t("title")}</span>
            <span>Boularand Killian</span>
          </Typographie>
          <Typographie
            variant="body-sm"
            theme="tercery"
            className="max-w-[500px]"
            component="p"
          >
            {t("text")}
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
          <Link onClick={handleScroll} href="#work">
            <Button icon={{ icon: HiArrowSmallRight }}>
              {t("buttonPrimary")}
            </Button>
          </Link>
          <Link onClick={handleScroll} href="#contact">
            <Button variant="outline">{t("buttonSecondary")}</Button>
          </Link>
        </div>
      </div>
      <div></div>
      <div className="relative" data-aos="fade-left">
        <div //👈 wrap your Image tag
          className="drop-shadow-lg bg-black md:h-[400px] w-[200px] h-[325px] md:w-[275px]  border-4 border-light rounded origin-bottom md:-rotate-12 "
        >
          <Image
            src={"/assets/images/meheader.jpeg"}
            alt="image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div //👈 wrap your Image tag
          className=" aspect-square md:w-[175px] w-[100px] lg:block hidden  absolute top-[-25px]  mx-[-250px]"
        >
          <Image
            src={"/assets/svg/arrowme.svg"}
            alt="image"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </Container>
  );
};
