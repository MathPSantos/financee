import { Disclosure, Transition } from "@headlessui/react";
import { CaretDown } from "phosphor-react";
import { ReactNode } from "react";
import { Heading } from "../../../components/common";

interface IFaq {
  title: string;
  content: ReactNode;
}

const FAQS: IFaq[] = [
  {
    title: "Qual é a melhor coisa do mundo?",
    content: "A melhor coisa do mundo é a melhor coisa do mundo.",
  },
  {
    title: "Como se faz água benta?",
    content: "Eu acho que eu não sei, de verdade, desculpa!",
  },
  {
    title: "Como você chama alguém sem corpo e sem nariz?",
    content: "Existe gente assim?",
  },
  {
    title: "Você já viu elefantes escondidos em uma árvore?",
    content:
      "Não, eu não vi nenhum. Se eu visse, eles não estariam mais escondidos né?",
  },
  {
    title: "Porque você não conseque escutar um pterodátilo no banheiro?",
    content: "Tá, agora nem a dúvida faz sentido!",
  },
];

export function FaqSection() {
  return (
    <div className="w-full flex flex-col items-start">
      {FAQS.map(({ title, content }) => (
        <Disclosure>
          {({ open: isOpen }) => (
            <>
              <Disclosure.Button className="w-full flex items-center justify-between gap-4 py-6 border-b border-b-slate-200 text-left">
                <Heading level={4}>{title}</Heading>

                <CaretDown
                  size={24}
                  className={`transition-all text-slate-400 ${
                    isOpen ? "transform rotate-180" : ""
                  }`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform opacity-0"
                enterTo="transform opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform opacity-100"
                leaveTo="transform opacity-0"
              >
                <Disclosure.Panel className="w-full py-4">
                  {content}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
