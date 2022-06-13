import { classNames } from "../../../../core/utils/classnames";

import { BaseHeadingProps } from "./Heading.types";

export function H6({ children, className, ...props }: BaseHeadingProps) {
  const compClassName = classNames(
    "font-bold text-brown-500 text-sm leading-[22px]",
    className
  );

  return (
    <h5 className={compClassName} {...props}>
      {children}
    </h5>
  );
}
