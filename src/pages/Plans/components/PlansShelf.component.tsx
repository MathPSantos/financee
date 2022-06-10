import { HTMLAttributes } from "react";
import { classNames } from "../../../core/utils/classnames";
import { PlanItem } from "./PlanItem.component";

interface PlansShelfProps extends HTMLAttributes<HTMLDivElement> {}

export function PlansShelf({ className, ...props }: PlansShelfProps) {
  const compClassName = classNames(
    "flex items-stretch gap-5 w-full",
    className
  );

  return (
    <div className={compClassName} {...props}>
      <PlanItem />
      <PlanItem />
      <PlanItem />
    </div>
  );
}
