import clsx from "clsx";

interface containerProps {
  children: React.ReactNode;
  WrapperClassName?: string;
  className?: string;
}

export default function Container({
  children,
  WrapperClassName,
  className,
}: containerProps) {
  return (
    <div className={WrapperClassName}>
      <div className={clsx("max-w-[1200px] m-auto md:px-2 sm:px-2", className)}>
        {children}
      </div>
    </div>
  );
}
