import clsx from "clsx";

interface containerProps {
  children: React.ReactNode;
  wrapperClassName?: string;
  className?: string;
}

export default function Container({
  children,
  wrapperClassName,
  className,
}: containerProps) {
  return (
    <div className={wrapperClassName}>
      <div className={clsx("max-w-[1200px] m-auto md:px-2 sm:px-2", className)}>
        {children}
      </div>
    </div>
  );
}
