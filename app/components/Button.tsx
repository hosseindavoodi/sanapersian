import { ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";

interface ButtonProps {
  text: string;
  icon?: ReactNode;
  className?: string;
  iconPosition?: "right" | "left";
  href?: string;
}

export default function Button({
  text,
  className,
  icon,
  iconPosition,
  href,
}: ButtonProps) {
  const renderClassName = () => {
    return clsx(
      "cursor-pointer px-4 py-2",
      icon && "flex items-center",
      className
    );
  };

  return (
    <>
      {href ? (
        <Link href={href}>
          <div className={renderClassName()}>{text}</div>
        </Link>
      ) : (
        <button className={renderClassName()}>
          {icon && (iconPosition === "left" || !iconPosition) && (
            <span className="mr-2">{icon}</span>
          )}
          <span>{text}</span>
          {icon && iconPosition === "right" && (
            <span className="ml-2">{icon}</span>
          )}
        </button>
      )}
    </>
  );
}
