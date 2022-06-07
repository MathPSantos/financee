import { MaxWidth } from ".";
import { Button, Heading } from "../common";

import Logo from "../../assets/logo.svg";

export function Footer() {
  return (
    <div className="relative mt-56 bg-gradient-to-tr from-[#ED7D98] to-[#D366F6]">
      <MaxWidth>
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
          <div className="grid grid-cols-12 border-b border-b-pink-300 pb-40">
            <div></div>
          </div>
          <div className="flex items-center justify-between mt-5">
            <p className="text-white text-sm">
              © 2022 financee. Todos os direitos reservados.
            </p>

            <img src={Logo} alt="financee" />
          </div>
        </footer>
      </MaxWidth>
    </div>
  );
}
