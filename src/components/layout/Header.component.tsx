import { UserCircle } from "phosphor-react";

import { Button, NavLink } from "../common";

import Logo from "../../assets/logo.svg";

const NavItems = [
  {
    to: "/plans",
    label: "planos e preços",
  },
];

export function Header() {
  return (
    <header className="px-6 py-5">
      {/* Content */}
      <div className="mx-auto w-full max-w-6xl flex items-center justify-between">
        <NavLink to="/">
          <img src={Logo} alt="Logo financee" />
        </NavLink>

        {/* Wrapper */}
        <div className="flex items-center gap-7">
          {/* Nav */}
          <nav>
            <ul className="list-none flex items-center gap-5">
              {NavItems.map((i) => (
                <NavLink key={i.to} to={i.to}>
                  {i.label}
                </NavLink>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button size="small">Cadastre-se</Button>
            <Button variant="link" size="small">
              <UserCircle weight="duotone" />
              Entrar
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
