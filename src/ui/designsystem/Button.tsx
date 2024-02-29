import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  size?: "small" | "medium" | "large";
  variant?:
    | "accent"
    | "outline"
    | "insta"
    | "dribble"
    | "git"
    | "icon";
  icon?: any;
  iconTheme?: "accent" | "secondary";
  iconPosition?: "left" | "right";
  children?: React.ReactNode;
}

export const Button = ({
  size = "medium",
  variant = "accent",
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  children,
}: Props) => {
  let variantStyles: string = "",
    sizeStyles: string = "",
    iconSize: number = 0;

  switch (variant) {
    case "accent":
      variantStyles = "bg-primary hover:bg-primary/85 text-white rounded";
      break;
    case "outline":
      variantStyles = "bg-white2 border-2 border-primary hover:bg-grey/85 text-primary rounded";
      break;
    case "insta":
      variantStyles = "bg-bleu hover:bg-bleu/85 text-white rounded";
      break;
    case "git":
      variantStyles = "bg-white border-2 border-grey hover:bg-grey/85 text-black rounded";
      break;
    case "dribble":
      variantStyles = "bg-pink hover:bg-pink/85 text-white rounded";
      break;
    case "icon":
      variantStyles = "bg-linear hover:bg-primary/85 rounded-full";
      break;
  }

  switch (size) {
    case "small":
      sizeStyles = "";
      break;
    case "medium":
      sizeStyles = "";
      break;
    case "large":
      sizeStyles = "";
      break;
  }

  return (
    <>
      <button
        type="button"
        className={clsx(variantStyles, sizeStyles, iconSize)}
      >
        {children}
      </button>
    </>
  );
};
