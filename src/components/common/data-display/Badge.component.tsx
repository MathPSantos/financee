import { HTMLAttributes, ReactElement } from "react";
import { classNames } from "../../../core/utils/classnames";

interface BadgeProps extends HTMLAttributes<HTMLParagraphElement> {
  children: string;
}

export function Badge({ children, className, ...props }: BadgeProps) {
  const compClassName = classNames(
    "bg-pink-200 text-pink-500 rounded-[30px] py-2 px-3 font-semibold text-xs",
    className
  );

  return (
    <span className={compClassName} {...props}>
      {children}
    </span>
  );
}
