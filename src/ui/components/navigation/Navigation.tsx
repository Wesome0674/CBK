"use client";

import { Typographie } from "@/ui/designsystem/typography/Typographie";
import { Container } from "../container/Container";
import { LuMenu } from "react-icons/lu";
import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Switcher from "../switcher/Switcher";
import { useTranslations } from "use-intl";

interface Props {}

export const Navigation = ({}: Props) => {
  const [show, setShow] = useState(false);
  const t = useTranslations("Navigation");

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

  const functions = () => {
    handleScroll;
    setShow(!show);
  };
  return (
    <>
      {show ? (
        <div className="p-6 block md:hidden fixed top-0 left-0 z-50 w-screen h-full space-y-10 bgImg bg-[#F0F1F3]">
          <div className="flex items-center justify-between">
            <h1 className="text-[30px] tracking-wide text-valorant text-primary ">
              CBK
            </h1>
            <IoMdClose
              onClick={() => setShow(!show)}
              size={35}
              className="text-secondary"
            />
          </div>
          <Typographie
            variant="link"
            className="gap-8 cursor-pointer flex flex-col"
            component="span"
          >
            <Link href="#home" onClick={functions}>
              <span className="link link-underline link-underline-black">
                {t("Home")}
              </span>
            </Link>
            <Link href="#about" onClick={functions}>
              <span className="link link-underline link-underline-black">
                {t("About")}
              </span>
            </Link>
            <Link href="#skills" onClick={functions}>
              <span className="link link-underline link-underline-black">
                {t("Skills")}
              </span>
            </Link>
            <Link href="#work" onClick={functions}>
              <span className="link link-underline link-underline-black">
                {t("Projects")}
              </span>
            </Link>
            <Link href="#contact" onClick={functions}>
              <span className="link link-underline link-underline-black">
                {t("Contact")}
              </span>
            </Link>
          </Typographie>
        </div>
      ) : (
        ""
      )}
      <Container className="flex items-center justify-between gap-5 py-6">
        <LuMenu
          size={35}
          className="text-secondary block md:hidden"
          onClick={() => setShow(!show)}
        />
        <div className="flex items-center md:gap-16 lg:gap-28">
          <h1 className="text-[30px] tracking-wide text-valorant ">CBK</h1>
          <div>
            <Typographie
              variant="link"
              className="items-center gap-14 cursor-pointer hidden md:flex"
              component="span"
            >
              <Link href="#home" onClick={handleScroll}>
                <span className="link link-underline link-underline-black">
                  {t("Home")}
                </span>
              </Link>
              <Link href="#about" onClick={handleScroll}>
                <span className="link link-underline link-underline-black">
                  {t("About")}
                </span>
              </Link>
              <Link href="#skills" onClick={handleScroll}>
                <span className="link link-underline link-underline-black">
                  {t("Skills")}
                </span>
              </Link>
              <Link href="#work" onClick={handleScroll}>
                <span className="link link-underline link-underline-black">
                  {t("Projects")}
                </span>
              </Link>
              <Link href="#contact" onClick={handleScroll}>
                <span className="link link-underline link-underline-black">
                  {t("Contact")}
                </span>
              </Link>
            </Typographie>
          </div>
        </div>
        <Switcher />
      </Container>
    </>
  );
};
