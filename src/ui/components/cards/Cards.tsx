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
      variantStyles = "bg-white rounded-lg drop-shadow-md lg:px-[80px] lg:py-[80px] px-[20px] py-[20px]";
      break;
    case "medium":
      variantStyles = "bg-white rounded-md md:p-[32px] p-[20px]";
      break;
    case "small":
      variantStyles = "rounded-lg p-[20px]  border border-tercery";
      break;
  }

  return (
    <div
      className={clsx(
        className,
        variantStyles,
      )}
      style={Style} // Correctif : ajouter le style dynamique
    >
      {children}
    </div>
  );
};