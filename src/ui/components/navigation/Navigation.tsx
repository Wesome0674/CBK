"use client";

import { Typographie } from "@/ui/designsystem/typography/Typographie";
import { Container } from "../container/Container";
import { Button } from "@/ui/designsystem/Button";
import { IoChevronDown } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import Link from "next/link";

interface Props {}

export const Navigation = ({}: Props) => {
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
    <Container className="flex items-center justify-between gap-5 py-6">
      <LuMenu size={35} className="text-secondary block md:hidden" />
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
                Home
              </span>
            </Link>
            <Link href="#about" onClick={handleScroll}>
              <span className="link link-underline link-underline-black">
                About
              </span>
            </Link>
            <Link href="#skills" onClick={handleScroll}>
              <span className="link link-underline link-underline-black">
                Skills
              </span>
            </Link>
            <Link href="#work" onClick={handleScroll}>
              <span className="link link-underline link-underline-black">
                Projects
              </span>
            </Link>
            <Link href="#contact" onClick={handleScroll}>
              <span className="link link-underline link-underline-black">
                Contact
              </span>
            </Link>
          </Typographie>
        </div>
      </div>
      <Button size="medium" icon={{ icon: IoChevronDown }}>
        <select
          name="language"
          className="w-full bg-transparent appearance-none border-none focus:outline-none cursor-pointer"
        >
          <option className="text-black">Us English</option>
          <option className="text-black">Fr French</option>
        </select>
      </Button>
    </Container>
  );
};
