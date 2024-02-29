import clsx from "clsx";

interface Props {
  size?: "small" | "medium" | "large";
  variant?: "accent" | "outline" | "insta" | "dribble" | "git" | "icon";
  icon?: { icon: React.ElementType };
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
      variantStyles =
        "bg-light border-2 border-primary hover:bg-white/70 text-primary rounded";
      break;
    case "insta":
      variantStyles = "bg-bleu hover:bg-bleu/85 text-white rounded";
      break;
    case "git":
      variantStyles =
        "bg-white border-2 border-black/90 hover:bg-grey/85 text-black rounded";
      break;
    case "dribble":
      variantStyles = "bg-pink hover:bg-pink/85 text-white rounded";
      break;
    case "icon":
      if (iconTheme === "accent") {
        variantStyles =
          "bg-linear border border-secondary hover:opacity-85 rounded-full";
      }
      if (iconTheme === "secondary") {
        variantStyles =
          "bg-light border-primary border hover:bg-white/70 rounded-full";
      }
      break;
  }

  switch (size) {
    case "small":
      sizeStyles = `text-sm  ${
        variant === "icon"
          ? " flex items-center justify-center w-[40px] h-[40px]"
          : "py-[5px] px-[10px]"
      }`;
      iconSize = 18;
      break;
    case "medium":
      sizeStyles = `text-base  ${
        variant === "icon"
          ? " flex items-center justify-center w-[50px] h-[50px]"
          : "py-[10px] px-[15px]"
      }`;
      iconSize = 20;
      break;
    case "large":
      sizeStyles = `text-xl ${
        variant === "icon"
          ? " flex items-center justify-center w-[60px] h-[60px]"
          : "py-[10px] px-[25px]"
      }`;
      iconSize = 24;
      break;
  }

  return (
    <>
      <button
        type="button"
        className={clsx(variantStyles, sizeStyles, iconSize)}
      >
        {icon && variant === "icon" ? (
          <icon.icon size={iconSize} />
        ) : (
          <>
            <div className={clsx(icon &&"flex items-center gap-2")}>
              {icon && iconPosition === "left" && <icon.icon size={iconSize} />}
              {children}
              {icon && iconPosition === "right" && (
                <icon.icon size={iconSize} />
              )}
            </div>
          </>
        )}
      </button>
    </>
  );
};
