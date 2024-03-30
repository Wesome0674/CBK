import Image from "next/image";
import { Cards } from "../cards/Cards";
import { Container } from "../container/Container";
import { Typographie } from "@/ui/designsystem/typography/Typographie";
import { useTranslations } from "next-intl";

interface Props {}

export const About = ({}: Props) => {
  const t = useTranslations("About")
  return (
    <Container  className=" translate-y-36">
      <Cards className="mx-auto w-fit grid place-content-center" variant="big">
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
           {t("title")}
          </Typographie>
          <div className="flex items-center gap-2">
            <Typographie component="p">
              {t("subtitle")}
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
           {t("text")}
          </Typographie>
        </div>
      </Cards>
    </Container>
  );
};
