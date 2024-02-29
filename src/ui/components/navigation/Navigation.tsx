import { Typographie } from "@/ui/designsystem/typography/Typographie";
import { Container } from "../container/Container";
import { Button } from "@/ui/designsystem/Button";
import { IoChevronDown } from "react-icons/io5";

interface Props {}

export const Navigation = ({}: Props) => {
  return (
    <Container className="flex items-center justify-between gap-5 py-3">
      <div className="flex items-center gap-28">
        <h1 className="text-[30px] tracking-wide text-valorant ">CBK</h1>
        <div>
          <Typographie
            variant="link"
            className="flex items-center gap-14 "
            component="span"
          >
            <span>Home</span>
            <span>About</span>
            <span>Skills</span>
            <span>Projects</span>
            <span>Contact</span>
          </Typographie>
        </div>
      </div>
      <Button size="medium" icon={{ icon: IoChevronDown }}>
        <select
          name="language"
          className="bg-transparent appearance-none border-none focus:outline-none cursor-pointer"
        >
          <option className="text-black">Us English</option>
          <option className="text-black">Fr French</option>
        </select>
      </Button>
    </Container>
  );
};
