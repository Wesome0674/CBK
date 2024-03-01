import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: Props) => {
  return (
    <div className={clsx(className, "w-full max-w-[1320px] mx-auto px-5")}>
      {children}
    </div>
  );
};
