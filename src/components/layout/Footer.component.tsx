import { MaxWidth } from ".";
import { Button, Heading, NavLink } from "../common";

import whiteLogo from "/whiteLogo.svg";
import {
  CaretDoubleUp,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "phosphor-react";

export function Footer() {
  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="mt-56 bg-gradient-to-tr from-[#ED7D98] to-[#D366F6] px-6">
      <MaxWidth className="relative">
        {/* Scroll top Button */}
        <button
          className="absolute top-0 right-0 flex items-center justify-center bg-white rounded-full w-16 h-16 -mt-8"
          onClick={handleScrollToTop}
          aria-label="Ir para o topo da página"
        >
          <CaretDoubleUp size={28} />
        </button>

        {/* CTA */}
        <div className="flex flex-col items-center py-28 border-b border-b-pink-300">
          <Heading level={2} className="text-white text-center">
            Tome controle das suas finanças.
          </Heading>
          <p className="text-center text-slate-100 mt-4">
            Tudo seu em apenas um lugar.
          </p>
          <Button className="mt-8" colorScheme="secondary">
            Cadastre-se agora
          </Button>
        </div>

        <footer className="pt-8 pb-11">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 border-b border-b-pink-300 pb-40">
            <div className="md:col-span-3">
              <img src={whiteLogo} alt="financee. logo" />
              <p className="md:max-w-sm text-white mt-4">
                Uma plataforma para quem quer controlar suas finanças.
              </p>
            </div>

            <div className="md:col-start-7 md:col-span-2">
              <Heading className="!text-white" level={6}>
                Páginas
              </Heading>
              <ul className="flex flex-col items-start mt-3 gap-1">
                <li>
                  <NavLink className="text-white" to="/">
                    Preços e planos
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-white" to="/">
                    Simuladores
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <Heading className="!text-white" level={6}>
                Privacidade & Termos
              </Heading>
              <ul className="flex flex-col items-start mt-3 gap-1">
                <li>
                  <NavLink className="text-white" to="/">
                    Termos de uso
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-white" to="/">
                    Políticas de privacidade
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-white" to="/">
                    Política de reembolso
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <Heading className="!text-white" level={6}>
                Redes sociais
              </Heading>
              <div className="flex items-center mt-3 gap-3 text-white">
                <FacebookLogo weight="duotone" size={24} />
                <TwitterLogo weight="duotone" size={24} />
                <InstagramLogo weight="duotone" size={24} />
                <LinkedinLogo weight="duotone" size={24} />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between mt-5">
            <p className="text-white text-sm">
              © 2022 financee. Todos os direitos reservados.
            </p>

            <img className="opacity-60" src={whiteLogo} alt="financee" />
          </div>
        </footer>
      </MaxWidth>
    </div>
  );
}
