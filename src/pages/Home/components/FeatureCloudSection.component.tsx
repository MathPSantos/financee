import { Target } from "phosphor-react";
import { Badge, Heading } from "../../../components/common";
import { MaxWidth, Section } from "../../../components/layout";

export function FeatureCloudSection() {
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
          {[1, 2, 3].map((item) => (
            <div className="flex items-center gap-9 first:translate-x-12 last:translate-x-12">
              {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((feature) => (
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

        <div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 absolute" />
      </div>
    </Section>
  );
}
