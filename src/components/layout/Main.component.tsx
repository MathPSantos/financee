import { ReactNode } from "react";
import { MaxWidth } from "./MaxWidth.component";

interface MainProps {
  children: ReactNode;
}

export function Main({ children }: MainProps) {
  return (
    <main className="px-6 py-5">
      {/* Content */}
      <MaxWidth>{children}</MaxWidth>
    </main>
  );
}
