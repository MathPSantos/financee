import {
  ChartPieSlice,
  ClipboardText,
  Money,
  Star,
  Target,
} from "phosphor-react";
import { HTMLAttributes } from "react";
import { Badge, Button, Heading } from "../../../components/common";
import { Section } from "../../../components/layout";
import { classNames } from "../../../core/utils/classnames";
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

interface MiniCtaProps extends HTMLAttributes<HTMLDivElement> {
  isButtonFullWidth?: boolean;
}

function MiniCta({
  isButtonFullWidth = false,
  className,
  ...props
}: MiniCtaProps) {
  const compClassName = classNames(
    "flex flex-col items-center md:items-start",
    className
  );

  return (
    <div className={compClassName} {...props}>
      <div className="w-min mt-auto p-3 rounded-xl border border-slate-200">
        <Money className="text-pink-500" size={32} weight="duotone" />
      </div>
      <p className="text-center md:text-left mt-5 max-w-[170px] font-semibold">
        Vamos gerenciar sua vida financeira?
      </p>
      <Button className="mt-4" isFullWidth={isButtonFullWidth}>
        Cadastre-se
      </Button>
    </div>
  );
}

export function StepsSection({...props}: HTMLAttributes<HTMLDivElement>) {
  return (
    <Section contentClassName="flex flex-col md:flex-row justify-between items-stretch md:gap-15" {...props}>
      <div className="md:max-w-lg md:flex-1 flex flex-col justify-between">
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

        <MiniCta className="hidden md:block" />
      </div>

      <div className="flex flex-col gap-11 flex-1 md:max-w-[550px] mt-[68px]">
        {HorizontalFeatureList.map((feature, index) => (
          <HorizontalFeatureItem key={index} {...feature} />
        ))}
      </div>

      <MiniCta className="mt-8 md:hidden" isButtonFullWidth />
    </Section>
  );
}
