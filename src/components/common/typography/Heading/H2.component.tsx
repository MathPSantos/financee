import { classNames } from "../../../../core/utils/classnames";

import { BaseHeadingProps } from "./Heading.types";

export function H2({ children, className, ...props }: BaseHeadingProps) {
  const compClassName = classNames(
    "text-[28px] md:text-[32px] font-bold leading-[normal]",
    className
  );

  return (
    <h2 className={compClassName} {...props}>
      {children}
    </h2>
  );
}
