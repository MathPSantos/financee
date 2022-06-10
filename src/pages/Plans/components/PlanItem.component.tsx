import { CheckCircle } from "phosphor-react";
import { Badge, Button } from "../../../components/common";

export function PlanItem() {
  return (
    <div className="flex-1 p-7 bg-white rounded-2xl border border-slate-200">
      <Badge>Básico</Badge>
      {/* Price */}
      <div className="flex items-baseline gap-1 mt-6">
        <span className="text-brown-500 font-semibold">R$</span>
        <strong className="font-display text-5xl font-bold leading-none text-brown-500">
          0,00
        </strong>
        <span className="font-semibold">/mês</span>
      </div>

      {/* Text */}
      <p className="mt-3">
        Gratuito para sempre, feito para quem quer ter um gerenciamento mais
        simples.
      </p>

      {/* Features */}
      <ul className="mt-6 flex flex-col items-start gap-3">
        {[1, 2, 3, 4].map(() => (
          <li className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={24} />
            <p>Lançamentos ilimitados</p>
          </li>
        ))}
      </ul>

      {/* Button */}
      <Button className="mt-9" isFullWidth>
        Cadastre-se agora
      </Button>
    </div>
  );
}
