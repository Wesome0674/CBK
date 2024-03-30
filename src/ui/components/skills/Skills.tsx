"use client";

import { Typographie } from "@/ui/designsystem/typography/Typographie";
import { Container } from "../container/Container";
import { Timeline } from "../timeline/Timeline";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";
import { BiCodeBlock } from "react-icons/bi";
import { FaServer } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiArduino } from "react-icons/si";

interface Props {}

export const Skills = ({}: Props) => {
  useEffect(() => {
    Aos.init();
  }, []);
  const t = useTranslations("Skills");

  const translations = [
    { id: 1, key: "boxTitle1", textKey: "boxtext1", icon: BiCodeBlock },
    { id: 2, key: "boxTitle2", textKey: "boxtext2", icon: FaServer },
    { id: 3, key: "boxTitle3", textKey: "boxtext3", icon: MdOutlineDesignServices },
    { id: 4, key: "boxTitle4", textKey: "boxtext4", icon:  SiArduino },
  ];
  return (
    <div className="bg-[#F0F1F3] pb-20 pt-56 space-y-36 ">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-7">
        <div className="space-y-4 flex flex-col items-center">
          <Typographie variant="h1" component="h1">
            {t("title")}
          </Typographie>
          <Typographie
            variant="body-sm"
            component="p"
            theme="tercery"
            className="text-center max-w-[450px]"
          >
            {t("text")}
          </Typographie>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {translations.map((translation, index) => (
            <div
              key={index}
              className="bg-white rounded-md md:p-[32px] p-[20px] space-y-2"
              data-aos="fade-down"
            >
              {
                <translation.icon
                  size={40}
                  className="text-primary bg-primary/20 p-2"
                />
              }
              <Typographie variant="body-bold" component="h4">
                {t(translation.key)}
              </Typographie>
              <Typographie
                className="max-w-[200px]"
                variant="body-sm"
                theme="tercery"
              >
                {t(translation.textKey)}
              </Typographie>
            </div>
          ))}
        </div>
      </Container>
      <Timeline />
    </div>
  );
};
