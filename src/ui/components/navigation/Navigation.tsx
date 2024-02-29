import { Typographie } from "@/ui/designsystem/typography/Typographie";
import { Container } from "../container/Container";

interface Props {}

export const Navigation = ({}: Props) => {
  return (
    <Container>
      <nav>
        <div>
          <h1 className="text-[30px] tracking-wide text-valorant ">CBK</h1>
        </div>
        <div></div>
      </nav>
    </Container>
  );
};
