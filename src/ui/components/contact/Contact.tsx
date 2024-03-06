import { Typographie } from "@/ui/designsystem/typography/Typographie";
import { Container } from "../container/Container";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail, IoMdPin } from "react-icons/io";
import { Cards } from "../cards/Cards";
import Image from "next/image";
import { Button } from "@/ui/designsystem/Button";
import { socialMedia } from "../data/skillsData";

interface Props { }

export const Contact = ({ }: Props) => {
  return (
    <Container>
      <Cards variant="big" className="mx-auto">
        <div className="flex items-center justify-between gap-10">
          <div className="space-y-8">
            <div className="space-y-2">
              <Typographie variant="h1" component="h3">
                Let&apos;s get in touch
              </Typographie>
              <Typographie
                className="max-w-[350px]"
                variant="body-sm"
                component="p"
                theme="tercery"
              >
                Feel free to contact me via phone or through my social media
                channels. I&apos;m always available to connect!
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
                    Call Me Now:
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
                    My Email:
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
          <div className="grid grid-cols-3 gap-2 auto-rows-fr">
            {socialMedia.map((item, index) => (
                <Cards
                  key={index}
                  variant="small"
                  className={`space-y-2 ${item.bgColor}`}
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
                  <Typographie>{item.name}</Typographie>
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
