import { HTMLAttributes, ReactNode } from "react";
import { classNames } from "../../core/utils/classnames";
import { MaxWidth } from "./MaxWidth.component";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isContainer?: boolean;
  contentClassName?: string;
}

export function Section({
  children,
  isContainer = false,
  className,
  contentClassName,
  ...props
}: SectionProps) {
  if (!isContainer) {
    return (
      <section className={classNames("px-6 py-20 my-20", className)} {...props}>
        <MaxWidth className={contentClassName}>{children}</MaxWidth>
      </section>
    );
  }

  return (
    <section className={classNames("w-full py-20 my-20", className)} {...props}>
      {children}
    </section>
  );
}
