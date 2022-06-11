import { classNames } from "../../../../core/utils/classnames";

import { BaseHeadingProps } from "./Heading.types";

export function H3({ children, className, ...props }: BaseHeadingProps) {
  const compClassName = classNames(
    "text-2xl md:text-[28px] font-bold text-brown-500 leading-[normal]",
    className
  );

  return (
    <h3 className={compClassName} {...props}>
      {children}
    </h3>
  );
}
