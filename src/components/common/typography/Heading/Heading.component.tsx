import { H1 } from "./H1.component";
import { H2 } from "./H2.component";
import { H3 } from "./H3.component";
import { H4 } from "./H4.component";

import { BaseHeadingProps } from "./Heading.types";

interface HeadingProps extends BaseHeadingProps {
  level?: 1 | 2 | 3 | 4;
}

export function Heading({ children, level = 1, ...props }: HeadingProps) {
  const HeadingComponent = {
    1: H1,
    2: H2,
    3: H3,
    4: H4,
  }[level];

  return <HeadingComponent {...props}>{children}</HeadingComponent>;
}
