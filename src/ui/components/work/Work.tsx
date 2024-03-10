import { Container } from "../container/Container";
import { Typographie } from "@/ui/designsystem/typography/Typographie";
import { Button } from "@/ui/designsystem/Button";
import { HiArrowSmallRight } from "react-icons/hi2";
import Image from "next/image";
import { workData } from "../data/skillsData";

interface Props {}

export const Work = ({}: Props) => {
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
        <div
          key={index}
          className="flex items-center justify-between gap-4 my-20"
        >
          {item.id % 2 === 0 ? (
            <div className="w-[35em] aspect-video relative rounded-md border border-primary">
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
          <div className="space-y-2">
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
              <Button icon={{ icon: HiArrowSmallRight }}>Visite website</Button>
              <Button variant="outline">Code on Github Repo</Button>
            </div>
          </div>
          {item.id % 2 === 1 ? (
            <div className="w-[35em] aspect-video relative rounded-md border border-primary">
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
