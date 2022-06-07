import { classNames } from "../../../../core/utils/classnames";

import { BaseHeadingProps } from "./Heading.types";

export function H4({ children, className, ...props }: BaseHeadingProps) {
  const compClassName = classNames(
    "font-bold text-brown-500 leading-[normal]",
    className
  );

  return (
    <h4 className={compClassName} {...props}>
      {children}
    </h4>
  );
}
