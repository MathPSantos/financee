import { HTMLAttributes, ReactNode } from "react";

export interface BaseHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}
