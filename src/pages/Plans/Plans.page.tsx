import { useState } from "react";

import { Heading, Badge } from "../../components/common";
import {
  Footer,
  Header,
  HeroGradient,
  MaxWidth,
  Section,
} from "../../components/layout";
import { PlanButton } from "./components/PlanButton.component";
import { PlansShelf } from "./components/PlansShelf.component";
import { TestimonialsSection } from "../Home/components/TestimonialsSection.component";

import { Plan } from "./types/Plan.types";

import planLine from "../../assets/planLine.svg";
import { FaqSection } from "./components/FaqSection.component";

const PLANS: Plan[] = [
  {
    name: "Básico",
    description:
      "Gratuito para sempre, feito para ter um gerenciamento mais simples",
    pricePerMonth: 0,
    pricePerYear: 0,
    features: [
      "Lançamentos ilimitados",
      "Até 3 contas",
      "Até 1 cartão",
      "Sicronização entre dispositvos",
    ],
    buttonLabel: "Cadastre-se agora",
  },
  {
    name: "Essencial",
    description:
      "Para usuários que precisam de mais controle de suas vidas financeiras",
    pricePerMonth: 9.9,
    pricePerYear: 99.9,
    features: [
      "Lançamentos ilimitados",
      "Contas ilimitadas",
      "Cartões ilimitados",
      "Relatórios customizáveis",
    ],
    buttonLabel: "Experimente agora",
  },
  {
    name: "Família",
    description:
      "Voltados para famílias que querem ter o controle de multíplos usuários.",
    pricePerMonth: 12.9,
    pricePerYear: 129.9,
    features: [
      "Tudo do plano essencial",
      "Relatórios individuais e gerais",
      "Acessos únicos",
      "Sicronização entre contas",
    ],
    buttonLabel: "Disponível em breve",
    isCommingSoon: true,
  },
];

export function Plans() {
  const [isAnualPlanSelected, setIsAnualPlanSelected] = useState(true);

  function handleAnualPlanClick() {
    setIsAnualPlanSelected(true);
  }

  function handleMonthlyPlanClick() {
    setIsAnualPlanSelected(false);
  }

  return (
    <>
      <HeroGradient className="pb-28">
        <Header />

        <section>
          <MaxWidth>
            <div className="flex flex-col items-center px-6">
              <Badge className="mt-16">💵 Preços e planos</Badge>
              <Heading className="text-center max-w-[622px] mt-9">
                Gerencie seu dinheiro agora!
              </Heading>
              <p className="text-center mt-4 max-w-[622px]">
                Tome controle da sua vida financeira com o plano que se encaixa
                com as suas necessidades!
              </p>

              <div className="relative flex items-center mt-11 rounded-full h-11 bg-slate-100">
                <PlanButton
                  isActive={!isAnualPlanSelected}
                  onClick={handleMonthlyPlanClick}
                >
                  Mensal
                </PlanButton>
                <PlanButton
                  isActive={isAnualPlanSelected}
                  onClick={handleAnualPlanClick}
                >
                  Anual
                </PlanButton>

                <div className="hidden md:flex absolute top-4 left-[calc(100%+1rem)] gap-2 w-max">
                  <img src={planLine} />
                  <p className="text-pink-500 font-semibold text-sm">
                    Economize 15%
                  </p>
                </div>
              </div>

              <PlansShelf
                isAnualPlanSelected={isAnualPlanSelected}
                plans={PLANS}
                className="mt-16"
              />
            </div>
          </MaxWidth>
        </section>
      </HeroGradient>
      <main>
        <TestimonialsSection />

        <Section>
          <div className="flex flex-col items-center max-w-lg mx-auto">
            <Badge>💭 Está com dúvidas?</Badge>
            <Heading className="mt-9" level={2}>
              Perguntas frequentes
            </Heading>
          </div>

          <div className="max-w-3xl mx-auto mt-12">
            <FaqSection />
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
