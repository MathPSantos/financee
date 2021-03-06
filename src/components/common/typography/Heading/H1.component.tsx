import { classNames } from "../../../../core/utils/classnames";

import { BaseHeadingProps } from "./Heading.types";

export function H1({ children, className, ...props }: BaseHeadingProps) {
  const compClassName = classNames(
    "text-[32px] md:text-[40px] font-bold text-brown-500 leading-[normal]",
    className
  );

  return (
    <h1 className={compClassName} {...props}>
      {children}
    </h1>
  );
}
