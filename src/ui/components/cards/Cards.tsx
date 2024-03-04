import clsx from "clsx";

interface Props {
  variant?: "big" | "medium" | "small";
  className?: string;
  children: React.ReactNode;
  Style?: React.CSSProperties; // Correctif : définir le type de Style
}

export const Cards = ({ className, children, variant = "medium", Style }: Props) => {
  let variantStyles: string = "";

  switch (variant) {
    case "big":
      variantStyles = "bg-white rounded-lg drop-shadow-md px-[80px] py-[80px]";
      break;
    case "medium":
      variantStyles = "bg-white rounded-md px-[32px] py-[32px]";
      break;
    case "small":
      variantStyles = "rounded-lg px-[20px] py-[20px] border border-tercery";
      break;
  }

  return (
    <div
      className={clsx(
        className,
        variantStyles,
        "grid place-content-center w-fit"
      )}
      style={Style} // Correctif : ajouter le style dynamique
    >
      {children}
    </div>
  );
};