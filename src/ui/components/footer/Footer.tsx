"use client";
import Image from "next/image";
import { Container } from "../container/Container";
import { Typographie } from "@/ui/designsystem/typography/Typographie";
import Link from "next/link";

interface Props {}

export const Footer = ({}: Props) => {
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
  const year = new Date().getFullYear(); // returns the current year
  return (
    <div className="bg-secondary py-20">
      <Container>
        <div className="flex items-center justify-around">
          <div className="flex gap-4 items-center">
            <h1 className="text-light text-base">CBK</h1>
            <div className="w-[40px] relative aspect-square rounded-full bg-primary">
              <Image
                alt="logo"
                fill
                src="/assets/images/me2.png"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <Typographie
            variant="body-sm"
            theme="light"
            className="flex flex-col md:flex-row gap-4 md:gap-10 items-center cursor-pointer"
          >
            <Link href="#home" onClick={handleScroll}><span>Home</span></Link>
            <Link href="#about" onClick={handleScroll}><span>About</span></Link>
            <Link href="#skills" onClick={handleScroll}><span>Skills</span></Link>
            <Link href="#work" onClick={handleScroll}><span>Projects</span></Link>
            <Link href="#contact" onClick={handleScroll}><span>Contact</span></Link>
          </Typographie>
          <Typographie variant="body-sm" theme="light">
            Copyright © {year} CBK
          </Typographie>
        </div>
      </Container>
    </div>
  );
};
