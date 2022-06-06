import { HTMLAttributes, ReactNode } from "react";

interface HeroGradientProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function HeroGradient({ children, ...props }: HeroGradientProps) {
  return (
    <div
      style={{
        background:
          "radial-gradient(98.69% 127.54% at 8.02% -15.11%, rgba(242, 55, 100, 0.12) 0.32%, rgba(253, 249, 250, 0.12) 100%)",
      }}
      {...props}
    >
      {children}
    </div>
  );
}
