import { Typographie } from "@/ui/designsystem/typography/Typographie";
import { Container } from "../container/Container";
import { Button } from "@/ui/designsystem/Button";
import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-scroll/modules";

interface Props {}

export const Navigation = ({}: Props) => {
  return (
    <Container className="flex items-center justify-between gap-5 py-6">
      <div className="flex items-center gap-28">
        <h1 className="text-[30px] tracking-wide text-valorant ">CBK</h1>
        <div>
          <Typographie
            variant="link"
            className="flex items-center gap-14 cursor-pointer"
            component="span"
          >
            <Link to="home" smooth={true}>
              <span className="link link-underline link-underline-black">
                Home
              </span>
            </Link>
            <Link to="about" smooth={true}>
              <span className="link link-underline link-underline-black">
                About
              </span>
            </Link>
            <Link to="skills" smooth={true}>
              <span className="link link-underline link-underline-black">
                Skills
              </span>
            </Link>
            <Link to="work" smooth={true}>
              <span className="link link-underline link-underline-black">
                Projects
              </span>
            </Link>
            <Link to="contact" smooth={true}>
              <span className="link link-underline link-underline-black">
                Contact
              </span>
            </Link>
          </Typographie>
        </div>
      </div>
      <Button size="medium" icon={{ icon: IoChevronDown }}>
        <select
          name="language"
          className="w-full bg-transparent appearance-none border-none focus:outline-none cursor-pointer"
        >
          <option className="text-black">Us English</option>
          <option className="text-black">Fr French</option>
        </select>
      </Button>
    </Container>
  );
};
