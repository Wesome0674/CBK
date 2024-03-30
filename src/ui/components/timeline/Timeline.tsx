"use client";

import { Typographie } from "@/ui/designsystem/typography/Typographie";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";

import { translation } from "../timelinedata"

export const Timeline = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const t = useTranslations("Timeline");

  return (
    <>
      <div>
        <Typographie variant="h3" className="text-center my-20">
          Beginning of my coding journey
        </Typographie>
        <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
          {translation.map((item, index) => (
            <>
              {item.id % 2 === 0 ? (
                <>
                  <div className="col-span-4 w-full h-full"></div>
                  <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-primary/20"></div>
                    <div className="absolute w-6 h-6 rounded-full bg-primary z-10 text-white text-center">
                      {item.id}
                    </div>
                  </div>
                  <div
                    data-aos="fade-up-left"
                    key={index}
                    className="col-span-4 w-full h-full "
                  >
                    <div className="w-full h-full bg-white rounded-md p-4 md:pl-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <Typographie
                          className="text-[20px] font-semibold"
                          theme="primary"
                        >
                          {t(item.title)}
                        </Typographie>
                        <div className="flex items-center gap-2">
                          {item.icons}
                        </div>
                      </div>
                      <Typographie>{t(item.text)}</Typographie>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    data-aos="fade-up-right"
                    key={index}
                    className="col-span-4 w-full h-full "
                  >
                    <div className="w-full h-full bg-white rounded-md p-4 md:pl-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <Typographie
                          className="text-[20px] font-semibold"
                          theme="primary"
                        >
                          {t(item.title)}
                        </Typographie>
                        <div className="flex items-center gap-2 flex-wrap">
                          {item.icons}
                        </div>
                      </div>
                      <Typographie>{t(item.text)}</Typographie>
                    </div>
                  </div>
                  <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-primary/20"></div>
                    <div className="absolute w-6 h-6 rounded-full bg-primary z-10 text-white text-center">
                      {item.id}
                    </div>
                  </div>
                  <div className="col-span-4 w-full h-full"></div>
                </>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
};
