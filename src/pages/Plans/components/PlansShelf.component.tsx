import { HTMLAttributes } from "react";
import { classNames } from "../../../core/utils/classnames";
import { Plan } from "../types/Plan.types";
import { PlanItem } from "./PlanItem.component";

interface PlansShelfProps extends HTMLAttributes<HTMLDivElement> {
  plans: Plan[];
  isAnualPlanSelected: boolean;
}

export function PlansShelf({
  plans,
  isAnualPlanSelected,
  className,
  ...props
}: PlansShelfProps) {
  const compClassName = classNames(
    "flex flex-col justify-center items-start gap-5 w-full md:flex-row",
    className
  );

  return (
    <div className={compClassName} {...props}>
      {plans.map((plan) => (
        <PlanItem
          isAnualPlanSelected={isAnualPlanSelected}
          key={plan.name}
          data={plan}
        />
      ))}
    </div>
  );
}
