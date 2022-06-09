import { CaretLeft, CaretRight, Icon, Target } from "phosphor-react";
import { useRef } from "react";
import { Badge, Heading } from "../../../components/common";
import { MaxWidth, Section } from "../../../components/layout";

type Solution = {
  Icon: Icon;
  title: string;
  content: string;
};

const SolutionsList: Solution[] = [
  {
    Icon: Target,
    title: "Lançamentos",
    content:
      "Registre todas as suas receitas, despesas, investimentos e transferências com informações necessárias e saiba o quanto recebe e gasta de verdade.",
  },
  {
    Icon: Target,
    title: "Contas",
    content:
      "Nós sabemos que a maioria de nós tem mais de uma conta, dessa forma tenha o controle e o resumo de todas as suas contas em um só lugar.",
  },
  {
    Icon: Target,
    title: "Cartões de crédito",
    content:
      "Nosso objetivo é fazer com que você não esqueça de nenhuma parcela do seu cartão, além de saber o quanto do limite foi utilizado.",
  },
  {
    Icon: Target,
    title: "Planejamento",
    content:
      "Por aqui você vai poder colocar planos de gastos máximos por categoria e ter uma lista de desejos e saber o quanto falta juntar para cada objetivo.",
  },
];

export function SolutionsSection() {
  const carrouselContainerRef = useRef<HTMLDivElement>(null);

  function handleNextButton() {
    if (carrouselContainerRef.current) {
      console.log(carrouselContainerRef.current.children[0].clientWidth);
    }
  }

  return (
    <Section
      className="pb-0 overflow-hidden"
      isContainer
      style={{
        background:
          "linear-gradient(259.37deg, #FAE9ED -15.77%, #FCFCFC 103.65%)",
      }}
    >
      <div className="px-6">
        <MaxWidth className="flex items-end justify-between ">
          <div className="max-w-lg">
            <Badge>📱 Soluções pensadas para você!</Badge>
            <Heading className="mt-9" level={2}>
              Te ajudamos a organizar e planejar sua vida financeira
            </Heading>
            <p className="mt-4">
              Pensamos em um processo simples e intuitivo para te ajudar de
              verdade no seu planejamento financeiro
            </p>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-pink-500">
              <CaretLeft size={20} />
            </button>
            <button
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-pink-500"
              onClick={handleNextButton}
            >
              <CaretRight size={20} />
            </button>
          </div>
        </MaxWidth>
      </div>

      <div className="mt-11 border-t border-t-slate-200 px-6">
        <MaxWidth>
          <div className="flex" ref={carrouselContainerRef}>
            {SolutionsList.map(({ title, content, Icon }) => (
              <div
                key={title}
                className="flex flex-col shrink-0 gap-6 items-start w-96 px-11 pt-12 pb-20 last:pr-0 first:pl-0 border-r border-r-slate-200"
              >
                <div className="p-3 rounded-full bg-pink-200">
                  <Icon className="text-pink-500" size={28} />
                </div>
                <Heading level={3}>{title}</Heading>
                <p>{content}</p>
              </div>
            ))}
          </div>
        </MaxWidth>
      </div>
    </Section>
  );
}
