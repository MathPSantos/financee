import {
  ArrowDownLeft,
  ArrowUpRight,
  Bank,
  Calculator,
  Cards,
  ChartLine,
  ChartPieSlice,
  Clipboard,
  Compass,
  Gauge,
  Icon,
  Table,
  Tabs,
  Tag,
  Target,
  TrendUp,
  Wallet,
} from "phosphor-react";

import { Badge, Heading } from "../../../components/common";
import { MaxWidth, Section } from "../../../components/layout";

import { splitArrayIntoChunksOfLen } from "../../../core/utils/array";

interface IFeature {
  Icon: Icon;
  label: string;
}

const FEATURES: IFeature[] = [
  {
    Icon: Bank,
    label: "Contas",
  },
  {
    Icon: Calculator,
    label: "Simuladores",
  },
  {
    Icon: ArrowUpRight,
    label: "Receitas",
  },
  {
    Icon: Cards,
    label: "Cartões de crédito",
  },
  {
    Icon: ArrowDownLeft,
    label: "Despesas",
  },
  {
    Icon: Tabs,
    label: "Parcelamento",
  },
  {
    Icon: Clipboard,
    label: "Extrato",
  },
  {
    Icon: Wallet,
    label: "Economias",
  },
  {
    Icon: Compass,
    label: "Planejamentos",
  },
  {
    Icon: Tag,
    label: "Categorias",
  },
  {
    Icon: Table,
    label: "Investimentos",
  },
  {
    Icon: ChartLine,
    label: "Rendimentos",
  },
  {
    Icon: TrendUp,
    label: "Dividendos",
  },
  {
    Icon: Gauge,
    label: "Indicadores",
  },
  {
    Icon: ChartPieSlice,
    label: "Gráficos",
  },
];

export function FeatureCloudSection() {
  const featuresList = splitArrayIntoChunksOfLen(FEATURES, 5);

  return (
    <Section
      className="pb-0"
      isContainer
      style={{
        background:
          "linear-gradient(227.89deg, rgba(215, 106, 233, 0.15) 13.73%, rgba(217, 217, 217, 0) 57.82%)",
      }}
    >
      <MaxWidth className="px-6">
        <Badge>💰 Recursos que fazem diferença</Badge>
        <div className="mt-6 md:mt-9 flex flex-col gap-4 md:flex-row items-start md:items-end md:justify-between">
          <Heading className="md:max-w-lg leading-[40px]" level={2}>
            Conte com diversos recursos feitos para você
          </Heading>

          <p className="md:max-w-lg md:text-right">
            Temos diversos recursos disponíveis para você poder organizar e
            planejar a sua vida financeira de forma simples!
          </p>
        </div>
      </MaxWidth>

      <div className="relative mt-12 overflow-hidden">
        <div className="flex flex-col items-center gap-7">
          {featuresList.map((line) => (
            <div className="flex items-center gap-9 first:-translate-x-8 last:-translate-x-8">
              {line.map(({ Icon, label }) => (
                <div className="py-3 px-4 shrink-0 rounded-lg border border-slate-2 flex items-center gap-3">
                  <div className="flex items-center justify-center w-9 h-9 bg-pink-200 rounded-lg">
                    <Icon className="text-pink-500" size={20} />
                  </div>

                  <p className="font-medium">{label}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 absolute" />
      </div>
    </Section>
  );
}
