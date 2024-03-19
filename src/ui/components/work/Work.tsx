"use client";

import { Container } from "../container/Container";
import { Typographie } from "@/ui/designsystem/typography/Typographie";
import { Button } from "@/ui/designsystem/Button";
import { HiArrowSmallRight } from "react-icons/hi2";
import Image from "next/image";
import { workData } from "../data/skillsData";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props { }

export const Work = ({ }: Props) => {

  const [largeur, setLargeur] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setLargeur(window.innerWidth);
      console.log(largeur)
    };
    handleResize(); // set initial width
    window.addEventListener('resize', handleResize);

  },);

  return (
    <Container className="py-10">
      <div className="flex flex-col items-center text-center space-y-2">
        <Typographie variant="h1" component="h3">
          Portfolio
        </Typographie>
        <Typographie
          variant="body-sm"
          component="p"
          theme="tercery"
          className="max-w-[550px]"
        >
          &quot;Discover my diverse projects, reflecting passion and dedication
          in development and design.&quot;
        </Typographie>
      </div>

      {workData.map((item, index) => (
        largeur <= 768 ?
          <>
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between gap-20 md:gap-4 my-20"
            >
              <div className="space-y-4">
                <Typographie
                  theme="tercery"
                  variant="body-sm"
                  className=" font-light"
                >
                  {item.subtitle}
                </Typographie>
                <Typographie variant="h1">{item.title}</Typographie>
                <Typographie
                  variant="body-sm"
                  theme="tercery"
                  className="max-w-[500px]"
                >
                  {item.text}
                </Typographie>
                <div className="flex items-center gap-3">
                  <Typographie>Built Using:</Typographie>
                  {typeof item.madeUsing.first === "string" ? (
                    <Typographie theme="primary">
                      {item.madeUsing.first}
                    </Typographie>
                  ) : (
                    <item.madeUsing.first size={30} className="text-primary" />
                  )}
                  <Typographie>&amp;</Typographie>
                  {typeof item.madeUsing.second === "string" ? (
                    <Typographie theme="primary">
                      {item.madeUsing.second}
                    </Typographie>
                  ) : (
                    <item.madeUsing.second size={30} className="text-primary" />
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <Link href={item.hrefSite}><Button size="small" icon={{ icon: HiArrowSmallRight }}>Visite website</Button></Link>
                  <Link href={item.hrefCode}><Button size="small" variant="outline">Code on Github Repo</Button></Link>
                </div>
              </div>
              <div className="md:w-[35em] w-[25em] aspect-video relative rounded-md  bg-white shadow-md bg-clip-border">
                <Image
                  src={item.img}
                  fill
                  alt="weather"
                  className="w-full h-auto"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </>
          :
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between gap-20 md:gap-4 my-20"
          >
            {item.id % 2 === 0 ? (
              <div className="md:w-[35em] w-[25em] aspect-video relative rounded-md  bg-white shadow-md bg-clip-border">
                <Image
                  src={item.img}
                  fill
                  alt="weather"
                  className="w-full h-auto"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            ) : (
              ""
            )}
            <div className="space-y-4">
              <Typographie
                theme="tercery"
                variant="body-sm"
                className=" font-light"
              >
                {item.subtitle}
              </Typographie>
              <Typographie variant="h1">{item.title}</Typographie>
              <Typographie
                variant="body-sm"
                theme="tercery"
                className="max-w-[500px]"
              >
                {item.text}
              </Typographie>
              <div className="flex items-center gap-3">
                <Typographie>Built Using:</Typographie>
                {typeof item.madeUsing.first === "string" ? (
                  <Typographie theme="primary">
                    {item.madeUsing.first}
                  </Typographie>
                ) : (
                  <item.madeUsing.first size={30} className="text-primary" />
                )}
                <Typographie>&amp;</Typographie>
                {typeof item.madeUsing.second === "string" ? (
                  <Typographie theme="primary">
                    {item.madeUsing.second}
                  </Typographie>
                ) : (
                  <item.madeUsing.second size={30} className="text-primary" />
                )}
              </div>
              <div className="flex items-center gap-4">
                <Link href={item.hrefSite}><Button icon={{ icon: HiArrowSmallRight }}>Visite website</Button></Link>
                <Link href={item.hrefCode}><Button variant="outline">Code on Github Repo</Button></Link>
              </div>
            </div>
            {item.id % 2 === 1 ? (
              <div className="md:w-[35em] w-[25em] aspect-video relative rounded-md  bg-white shadow-md bg-clip-border">
                <Image
                  src={item.img}
                  fill
                  alt="weather"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            ) : (
              ""
            )}
          </div>
      ))}
    </Container>
  );
};
