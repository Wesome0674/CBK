import clsx from "clsx";

interface Props {
  variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "body-base"
    | "body-bold"
    | "body-sm"
    | "pre-title"
    | "button-text"
    | "link";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p" | "a" | "div";
  weight?: "regular" | "medium";
  className?: string;
  theme?:
    | "primary"
    | "secondary"
    | "tercery"
    | "success"
    | "error"
    | "light"
    | "linear";
  children: React.ReactNode;
}

export const Typographie = ({
  variant = "body-base",
  component: Component = "div",
  weight = "regular",
  theme = "secondary",
  className,
  children,
}: Props) => {
  let variantStyles: string = "",
    colorStyles: string = "";

  switch (theme) {
    case "primary":
      colorStyles = "text-primary";
      break;
    case "secondary":
      colorStyles = "text-secondary";
      break;
    case "tercery":
      colorStyles = "text-tercery";
      break;
    case "success":
      colorStyles = "text-success";
      break;
    case "error":
      colorStyles = "text-red";
      break;
    case "light":
      colorStyles = "text-light";
      break;
    case "linear":
      colorStyles = "bg-linear text-transparent bg-clip-text";
      break;
  }

  switch (variant) {
    case "display":
      variantStyles = "text-4xl";
      break;
    case "h1":
      variantStyles = "text-3xl";
      break;
    case "h2":
      variantStyles = "text-2xl";
      break;
    case "h3":
      variantStyles = "text-xl";
      break;
    case "body-base":
      variantStyles = "text-base";
      break;
    case "body-bold":
      variantStyles = "text-bold";
      break;
    case "body-sm":
      variantStyles = "text-sm";
      break;
    case "pre-title":
      variantStyles = "text-pre";
      break;
    case "button-text":
      variantStyles = "text-button";
      break;
    case "link":
      variantStyles = "text-link";
      break;
  }

  return (
    <Component
      className={clsx(
        variantStyles,
        colorStyles,
        weight === "medium" && "font-medium",
        className
      )}
    >
      {children}
    </Component>
  );
};
