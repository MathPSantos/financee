import { classNames } from "../../../../core/utils/classnames";

import { BaseHeadingProps } from "./Heading.types";

export function H4({ children, className, ...props }: BaseHeadingProps) {
  const compClassName = classNames(
    "font-semibold text-brown-500 text-xl leading-[32px]",
    className
  );

  return (
    <h5 className={compClassName} {...props}>
      {children}
    </h5>
  );
}
