import { Typographie } from "@/ui/designsystem/typography/Typographie";
import { Container } from "../container/Container";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail, IoMdPin } from "react-icons/io";
import { Cards } from "../cards/Cards";
import Image from "next/image";
import { Button } from "@/ui/designsystem/Button";
import { socialMedia } from "../data/skillsData";
import { useTranslations } from "next-intl";

interface Props { }

export const Contact = ({ }: Props) => {

  const t = useTranslations("Contact")

  return (
    <Container>
      <Cards variant="big" className="mx-auto my-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-20 md:gap-10">
          <div className="space-y-8">
            <div className="space-y-2">
              <Typographie variant="h1" component="h3">
                {t("title")}
              </Typographie>
              <Typographie
                className="max-w-[350px]"
                variant="body-sm"
                component="p"
                theme="tercery"
              >
               {t("text")}
              </Typographie>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaPhoneAlt
                  size={40}
                  className="text-primary bg-primary/20 p-3 "
                />
                <div className="flex flex-col ">
                  <Typographie variant="body-sm" theme="tercery">
                    {t("phone")}
                  </Typographie>
                  <Typographie>06-03-85-03-49</Typographie>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <IoIosMail
                  size={40}
                  className="text-primary bg-primary/20 p-3"
                />
                <div className="flex flex-col ">
                  <Typographie variant="body-sm" theme="tercery">
                    {t("email")}
                  </Typographie>
                  <Typographie>killian.boularand@outlook.fr</Typographie>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <IoMdPin size={40} className="text-primary bg-primary/20 p-3" />
                <div className="flex flex-col ">
                  <Typographie variant="body-sm" theme="tercery">
                    Address:
                  </Typographie>
                  <Typographie>Rumilly, Annecy</Typographie>
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 auto-rows-fr md:max-w-[55%]">
            {socialMedia.map((item, index) => (
                <Cards
                  key={index}
                  variant="small"
                  className={`flex flex-col gap-2  ${item.bgColor} ${item.otherStyles}`}
                  Style={{ backgroundColor: item.bgColor }} // Passer la classe Style comme une prop
                >
                  <div className="relative w-[32px] aspect-square">
                    <Image
                      src={item.logo}
                      alt="insta"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <Typographie className="text-wrap">{item.name}</Typographie>
                  {item.buttonVariant !== "none" ? (
                    item.buttonVariant
                  ) : (
                    <Typographie variant="body-bold">
                      {item.subtitle}
                    </Typographie>
                  )}
                </Cards>
            ))}
          </div>
        </div>
      </Cards>
    </Container>
  );
};
