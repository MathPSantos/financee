import {
  CaretLeft,
  CaretRight,
  ChartPieSlice,
  ClipboardText,
  GooglePlayLogo,
  Money,
  Star,
  Target,
} from "phosphor-react";

import { Badge, Button, Heading } from "../../components/common";
import {
  Footer,
  Header,
  HeroGradient,
  MaxWidth,
  Section,
} from "../../components/layout";

import { HeroIllustration } from "./components/HeroIllustration.component";
import { HorizontalFeatureItem } from "./components/HorizontalFeatureItem.component";

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

export function Home() {
  return (
    <>
      <HeroGradient className="pb-28">
        <Header />
        <section>
          <MaxWidth>
            <div className="flex flex-col items-center px-6">
              <Heading className="text-center max-w-[622px] mx-auto mt-16">
                A plataforma que simplifica o controle das suas finanças
              </Heading>
              <p className="text-center max-w-lg mt-4">
                Centralize todas as suas contas e transações. Tenha o controle
                de seus custos, receitas, objetivos e cartões de crédito.
              </p>

              <div className="flex items-center gap-8 mt-7">
                <Button>Cadastre-se</Button>
                <Button colorScheme="secondary" variant="ghost">
                  <GooglePlayLogo weight="duotone" /> Baixe o app
                </Button>
              </div>
            </div>

            <HeroIllustration />
          </MaxWidth>
        </section>
      </HeroGradient>
      <main>
        <Section contentClassName="flex justify-between items-stretch gap-15">
          <div className="max-w-lg flex flex-col justify-between">
            <div>
              <Badge>📊 Controle de onde estiver</Badge>
              <Heading className="mt-9" level={2}>
                O financee facilita o seu gerenciamento financeiro!
              </Heading>
              <p className="mt-4">
                Chega de planilhas do excel! Com o app você organiza, acompanha
                e planeja sua vida financeira de onde estiver.
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

        <Section
          className="pb-0 overflow-hidden"
          isContainer
          style={{
            background:
              "linear-gradient(259.37deg, #FAE9ED -15.77%, #FCFCFC 103.65%)",
          }}
        >
          <MaxWidth className="flex items-end justify-between">
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
              <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-pink-500">
                <CaretRight size={20} />
              </button>
            </div>
          </MaxWidth>

          <div className="mt-11 border-t border-t-slate-200">
            <MaxWidth className="flex">
              {[1, 2, 3, 4].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col shrink-0 gap-6 items-start w-96 px-11 pt-12 pb-20 last:pr-0 first:pl-0 border-r border-r-slate-200"
                >
                  <div className="p-3 rounded-full bg-pink-200">
                    <Target className="text-pink-500" size={28} />
                  </div>
                  <Heading level={3}>Lançamentos</Heading>
                  <p>
                    Registre todas as suas receitas, despesas, investimentos e
                    transferências com informações necessárias e saiba o quanto
                    recebe e gasta de verdade.
                  </p>
                </div>
              ))}
            </MaxWidth>
          </div>
        </Section>

        <Section>
          <div className="flex flex-col items-center max-w-lg mx-auto">
            <Badge>📊 Depoimentos dos usuários</Badge>
            <Heading className="mt-9" level={2}>
              O que dizem nossos usuários
            </Heading>
          </div>

          <div className="relative mt-12">
            <div className="grid grid-cols-3 gap-6 overflow-hidden max-h-[33rem]">
              {[1, 2, 3].map((item) => (
                <div className="space-y-8">
                  {[1, 2, 3, 4, 5, 6, 7].map((testimonial) => (
                    <div className="p-6 rounded-xl border border-slate-200 ">
                      <div className="flex items-center gap-4">
                        <img
                          className="w-14 h-14 rounded-full"
                          src="https://github.com/MathPSantos.png"
                          alt="Matheus Santos"
                        />

                        <div>
                          <Heading level={4}>Matheus Santos</Heading>
                          <p className="text-sm">Desenvolvedor Frontend</p>
                        </div>
                      </div>
                      <p className="mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur efficitur ipsum eget neque consectetur, eu
                        cursus mi tincidunt.
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 absolute">
              <Button>Ver mais...</Button>
            </div>
          </div>
        </Section>

        <Section
          className="pb-0"
          isContainer
          style={{
            background:
              "linear-gradient(227.89deg, rgba(215, 106, 233, 0.15) 13.73%, rgba(217, 217, 217, 0) 57.82%)",
          }}
        >
          <MaxWidth>
            <Badge>💰 Recursos que fazem diferença</Badge>
            <div className="mt-9 flex items-end justify-between">
              <Heading className="max-w-lg leading-[40px]" level={2}>
                Conte com diversos recursos feitos para você
              </Heading>

              <p className="max-w-lg text-right">
                Temos diversos recursos disponíveis para você poder organizar e
                planejar a sua vida financeira de forma simples!
              </p>
            </div>
          </MaxWidth>

          <div className="relative mt-12">
            <MaxWidth>
              <div className="space-y-9">
                {[1, 2, 3].map((item) => (
                  <div className="flex items-center gap-9 translate-x-32 first:translate-x-0 last:-translate-x-3">
                    {[1, 2, 3, 4, 5].map((feature) => (
                      <div className="py-3 px-4 rounded-lg border border-slate-2 flex items-center gap-3">
                        <div className="flex items-center justify-center w-9 h-9 bg-pink-200 rounded-lg">
                          <Target className="text-pink-500" size={20} />
                        </div>
                        <p className="font-semibold">Parcelamento</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </MaxWidth>

            <div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 absolute" />
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
