import { Badge, Button, Heading } from "../../../components/common";
import { Section } from "../../../components/layout";

export function TestimonialsSection() {
  return (
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
                    Curabitur efficitur ipsum eget neque consectetur, eu cursus
                    mi tincidunt.
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
  );
}
