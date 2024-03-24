"use client";

import { Typographie } from "@/ui/designsystem/typography/Typographie";
import { Container } from "../container/Container";
import { Cards } from "../cards/Cards";
import { Datatableau } from "../data/skillsData";
import { Timeline } from "../timeline/Timeline";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

interface Props {}

export const Skills = ({}: Props) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-[#F0F1F3] pb-20 pt-56 space-y-36 ">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-7">
        <div className="space-y-4 flex flex-col items-center">
          <Typographie variant="h1" component="h1">
            My Skills
          </Typographie>
          <Typographie
            variant="body-sm"
            component="p"
            theme="tercery"
            className="text-center max-w-[450px]"
          >
            Explore my journey in web development through this interactive
            timeline. Discover my skills, projects, and achievements, and delve
            into the evolution of my coding abilities. From my initial steps in
            HTML and CSS to my advanced explorations in JavaScript and beyond,
            follow my path towards technical mastery and creativity in web
            design.
          </Typographie>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {Datatableau.map((item, index) => (
            <div  className="bg-white rounded-md md:p-[32px] p-[20px]"  data-aos="fade-down">
                {
                  <item.icon
                    size={40}
                    className="text-primary bg-primary/20 p-2"
                  />
                }
                <Typographie variant="body-bold" component="h4">
                  {item.title}
                </Typographie>
                <Typographie
                  className="max-w-[200px]"
                  variant="body-sm"
                  theme="tercery"
                >
                  {item.text}
                </Typographie>
            </div>
          ))}
        </div>
      </Container>
      <Timeline />
    </div>
  );
};
