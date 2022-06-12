import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  List,
  TwitterLogo,
  UserCircle,
  X,
} from "phosphor-react";

import { Button, Heading, NavLink } from "../../common";

import { useState } from "react";

import { classNames } from "../../../core/utils/classnames";

import Logo from "../../../assets/logo.svg";

import { lockBodyScroll, unlockBodyScroll } from "../../../core/utils/lockBody";
import { scrollToTop } from "../../../core/utils/scrollToTop";

import "./Header.styles.css";

const NavItems = [
  {
    to: "/plans",
    label: "planos e preços",
  },
];

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleOpenNav() {
    scrollToTop();
    lockBodyScroll();
  }

  isNavOpen ? handleOpenNav() : unlockBodyScroll();

  const mobileNavClassName = classNames(
    "translate-x-full z-10 bg-white absolute inset-0 h-screen md:hidden transition-all duration-200",
    isNavOpen && "nav-active"
  );

  function handleBurguerToggle() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <header className="px-6 py-5">
      {/* Content */}
      <div className="mx-auto w-full max-w-6xl flex items-center justify-between h-9">
        <NavLink to="/">
          <img src={Logo} alt="Logo financee" />
        </NavLink>

        {/* Wrapper */}
        <div className="hidden md:flex items-center gap-7">
          {/* Nav */}
          <nav>
            <ul className="list-none flex items-center gap-5">
              {NavItems.map((i) => (
                <li>
                  <NavLink key={i.to} to={i.to}>
                    {i.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button size="small">Cadastre-se</Button>
            <Button variant="link" size="small">
              <UserCircle size={24} weight="duotone" />
              Entrar
            </Button>
          </div>
        </div>

        {/* Burguer */}
        <button
          className="z-50 p-1 w-8 h-8 flex items-center justify-center md:hidden text-brown-500 cursor-pointer"
          onClick={handleBurguerToggle}
          title="Menu button"
        >
          {!isNavOpen ? <List size={24} /> : <X size={24} />}
        </button>

        {/* Mobile */}
        <div className={mobileNavClassName}>
          <div
            className="flex flex-col justify-center items-center px-6 gap-5 h-full"
            style={{
              background:
                "radial-gradient(98.69% 127.54% at 8.02% -15.11%, rgba(242, 55, 100, 0.12) 0.32%, rgba(253, 249, 250, 0.12) 100%)",
            }}
          >
            <nav>
              <ul className="flex flex-col items-center gap-6">
                <li>
                  <NavLink className="text-lg" to="/">
                    início
                  </NavLink>
                </li>
                {NavItems.map((i) => (
                  <li>
                    <NavLink className="text-lg" key={i.to} to={i.to}>
                      {i.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <Button className="mx-auto mt-6" variant="link">
                <UserCircle size={32} weight="duotone" />
                Entrar
              </Button>
            </nav>
            <hr className="w-52 bg-slate-200" />
            <div className="flex flex-col items-center gap-4">
              <Heading
                level={5}
                className="font-normal text-center !text-slate-500"
              >
                Nos siga nas redes sociais
              </Heading>
              <div className="flex gap-3 text-2xl text-slate-500">
                <FacebookLogo weight="duotone" />
                <TwitterLogo weight="duotone" />
                <InstagramLogo weight="duotone" />
                <LinkedinLogo weight="duotone" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
