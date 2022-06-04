import { HTMLAttributes, ReactNode } from "react";
import { classNames } from "../../../../core/utils/classnames";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export function Heading({ children, className, ...props }: HeadingProps) {
  const compClassName = classNames(
    "text-[40px] font-bold text-brown-500",
    className
  );

  return (
    <h1 className={compClassName} {...props}>
      {children}
    </h1>
  );
}
