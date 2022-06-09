import {
  ChartPieSlice,
  ClipboardText,
  Money,
  Star,
  Target,
} from "phosphor-react";
import { Badge, Button, Heading } from "../../../components/common";
import { Section } from "../../../components/layout";
import { HorizontalFeatureItem } from "./HorizontalFeatureItem.component";

const HorizontalFeatureList = [
  {
    Icon: ClipboardText,
    title: "Organize",
    description:
      "Consiga ter todas as suas contas, cartões, dispesas, receitas e transações em um único lugar.",
  },
  {
    Icon: ChartPieSlice,
    title: "Acompanhe",
    description:
      "Acompanhe seus gastos por categoria, as parcelas dos cartões de crédito e investimentos.",
  },
  {
    Icon: Target,
    title: "Planeje",
    description:
      "Defina objetivos de gastos por categorias, investimentos e economias para comprar aquilo que precisa.",
  },
  {
    Icon: Star,
    title: "Conquiste",
    description:
      "Com tudo isso, conquiste o controle da sua vida finançeira e veja seus objetivos de forma clara.",
  },
];

export function StepsSection() {
  return (
    <Section contentClassName="flex justify-between items-stretch gap-15">
      <div className="max-w-lg flex flex-col justify-between">
        <div>
          <Badge>📊 Controle de onde estiver</Badge>
          <Heading className="mt-9" level={2}>
            O financee facilita o seu gerenciamento financeiro!
          </Heading>
          <p className="mt-4">
            Chega de planilhas do excel! Com o app você organiza, acompanha e
            planeja sua vida financeira de onde estiver.
          </p>
        </div>

        <div>
          <div className="w-min mt-auto p-3 rounded-xl border border-slate-200">
            <Money className="text-pink-500" size={32} weight="duotone" />
          </div>
          <p className="mt-5 max-w-[170px] font-semibold">
            Vamos gerenciar sua vida financeira?
          </p>
          <Button className="mt-4">Cadastre-se</Button>
        </div>
      </div>

      <div className="flex flex-col gap-11 flex-1 max-w-[550px] mt-[68px]">
        {HorizontalFeatureList.map((feature, index) => (
          <HorizontalFeatureItem key={index} {...feature} />
        ))}
      </div>
    </Section>
  );
}