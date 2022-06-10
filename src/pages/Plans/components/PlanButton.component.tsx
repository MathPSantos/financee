import { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "../../../core/utils/classnames";

interface PlanButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  children: ReactNode;
}

export function PlanButton({
  isActive,
  children,
  className,
  ...props
}: PlanButtonProps) {
  const compClassName = classNames(
    "rounded-full h-full px-5 font-semibold text-brown-200 hover:bg-slate-200 cursor-pointer transition-all",
    className,
    isActive && "bg-pink-200 text-pink-500"
  );

  return (
    <button className={compClassName} {...props}>
      {children}
    </button>
  );
}
