import { GooglePlayLogo } from "phosphor-react";

import { Button, Heading } from "../../components/common";
import {
  Footer,
  Header,
  HeroGradient,
  MaxWidth,
} from "../../components/layout";
import { FeatureCloudSection } from "./components/FeatureCloudSection.component";

import { HeroIllustration } from "./components/HeroIllustration.component";
import { SolutionsSection } from "./components/SolutionsSection.component";
import { StepsSection } from "./components/StepsSection.component";
import { TestimonialsSection } from "./components/TestimonialsSection.component";

export function Home() {
  return (
    <>
      <HeroGradient className="md:pb-28">
        <Header />
        <section>
          <MaxWidth>
            <div className="flex flex-col items-center px-6">
              <Heading className="text-center max-w-[622px] mx-auto mt-6 md:mt-16">
                A plataforma que simplifica o controle das suas finanças
              </Heading>
              <p className="text-center max-w-lg mt-4">
                Centralize todas as suas contas e transações. Tenha o controle
                de seus custos, receitas, objetivos e cartões de crédito.
              </p>

              <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8 mt-7">
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
        <StepsSection />

        <SolutionsSection />

        <TestimonialsSection />

        <FeatureCloudSection />
      </main>

      <Footer />
    </>
  );
}
