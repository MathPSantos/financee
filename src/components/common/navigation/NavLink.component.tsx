import { ReactNode } from "react";
import {
  NavLink as RouteNavLink,
  NavLinkProps as RouteNavLinkProps,
} from "react-router-dom";

interface NavLinkProps extends RouteNavLinkProps {
  children: ReactNode;
}

export function NavLink({ children, ...props }: NavLinkProps) {
  return (
    <RouteNavLink className="text-sm text-slate-500" {...props}>
      {children}
    </RouteNavLink>
  );
}
