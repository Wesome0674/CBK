import clsx from "clsx";

interface Props {
  variant?: "big" | "medium" | "small";
  className?: string;
  children: React.ReactNode;
}

export const Cards = ({ className, children, variant = "medium" }: Props) => {
  let varianStyles: string = "";

  switch (variant) {
    case "big":
      varianStyles = "rounded-lg drop-shadow-md  px-[80px] py-[80px]";
      break;
    case "medium":
      varianStyles = "rounded-md px-[32px] py-[32px]";
      break;
    case "small":
      varianStyles = "rounded-lg px-[20px] py-[20px] border border-tercery";
      break;
  }

  return (
    <div
      className={clsx(
        className,
        varianStyles,
        "grid place-content-center bg-white w-fit"
      )}
    >
      {children}
    </div>
  );
};
