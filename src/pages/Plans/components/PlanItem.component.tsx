import { CheckCircle } from "phosphor-react";
import { Badge, Button } from "../../../components/common";
import { Plan } from "../types/Plan.types";

interface PlanItemProps {
  data: Plan;
  isAnualPlanSelected: boolean;
}

export function PlanItem({ data, isAnualPlanSelected }: PlanItemProps) {
  const {
    name,
    description,
    pricePerMonth,
    pricePerYear,
    features,
    buttonLabel,
    isCommingSoon,
  } = data;

  function formatPrice(price: number) {
    return price.toFixed(2).replace(".", ",");
  }

  return (
    <div className="relative flex-1 p-7 bg-white rounded-2xl border border-slate-200">
      <Badge>{name}</Badge>
      {/* Price */}
      <div className="flex items-baseline gap-1 mt-6">
        <span className="text-brown-500 font-semibold">R$</span>
        <strong className="font-display text-5xl font-bold leading-none text-brown-500">
          {formatPrice(isAnualPlanSelected ? pricePerYear : pricePerMonth)}
        </strong>
        <span className="font-semibold">/mês</span>
      </div>

      {/* Text */}
      <p className="mt-3">{description}</p>

      {/* Features */}
      <ul className="mt-6 flex flex-col items-start gap-3">
        {features.map((item) => (
          <li className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={24} />
            <p>{item}</p>
          </li>
        ))}
      </ul>

      {/* Button */}
      <Button className="mt-9" isFullWidth isDisabled={isCommingSoon}>
        {buttonLabel}
      </Button>

      {/* Comming soon */}
      {isCommingSoon && (
        <div className="absolute top-0 right-0 mt-4 mr-4 px-[10px] py-[6px] text-purple-500 bg-purple-200 text-[10px] font-semibold rounded-lg uppercase">
          🚀 Em breve
        </div>
      )}
    </div>
  );
}
