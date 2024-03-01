import Image from "next/image";
import { Cards } from "../cards/Cards";
import { Container } from "../container/Container";
import { Typographie } from "@/ui/designsystem/typography/Typographie";

interface Props {}

export const About = ({}: Props) => {
  return (
    <Container>
      <Cards className="mx-auto" variant="big">
        <div className="flex flex-col text-center items-center space-y-4">
          <div //👈 wrap your Image tag
            className="relative grid place-content-center bg-light border-2 border-primary  h-[80px] w-[80px] rounded-full "
          >
            <Image
              src={"/assets/images/me2.png"}
              alt="image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <Typographie
            variant="h3"
            component="h3"
            className="font-semibold max-w-[500px]"
          >
            I am passionate front-end web developper
          </Typographie>
          <div className="flex items-center gap-4">
            <Typographie component="p">
              Hi I&apos;m Kilian Boularand
            </Typographie>
            <div //👈 wrap your Image tag
              className="relative h-[30px] w-[30px] "
            >
              <Image
                src={"/assets/images/smiley.png"}
                alt="image"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          <Typographie
            variant="body-sm"
            theme="tercery"
            component="p"
            className="max-w-[650px]"
          >
            A 17-year-old high school senior with a passion for creating
            captivating website designs and bringing them to life through
            coding. For nearly two years now, I&apos;ve been immersing myself in the
            world of web development, constantly honing my skills and pushing
            boundaries. What started as a curiosity has evolved into a
            full-blown passion, driving me to explore new design trends,
            experiment with coding languages, and seek out innovative ways to
            merge aesthetics with functionality.
          </Typographie>
        </div>
      </Cards>
    </Container>
  );
};
