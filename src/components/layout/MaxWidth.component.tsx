import { HTMLAttributes, ReactNode } from "react";
import { classNames } from "../../core/utils/classnames";

interface MaxWidthProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function MaxWidth({ children, className, ...props }: MaxWidthProps) {
  const compClassName = classNames("mx-auto w-full max-w-6xl", className);

  return (
    <div className={compClassName} {...props}>
      {children}
    </div>
  );
}
