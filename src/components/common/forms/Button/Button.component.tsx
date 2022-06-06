import { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "../../../../core/utils/classnames";

import "./Button.styles.css";

type ButtonColorScheme = "primary" | "secondary";

type ButtonVariants = "default" | "ghost" | "link";

type ButtonSizes = "small" | "medium";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  // TODO: Specify the type of colorScheme and variant props
  colorScheme?: ButtonColorScheme;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  isDisabled?: boolean;
}

const COLOR_SCHEME_MAPS = {
  primary: "btn-primary",
  secondary: "btn-secondary",
};

const VARIANT_MAPS = {
  default: "",
  ghost: "btn-ghost",
  link: "btn-link",
};

const SIZE_MAPS = {
  small: "btn-small",
  medium: "btn-medium",
};

export function Button({
  children,
  colorScheme = "primary",
  variant = "default",
  size = "medium",
  isDisabled,
  className,
  ...props
}: ButtonProps) {
  const compClassName = classNames(
    "btn",
    VARIANT_MAPS[variant],
    COLOR_SCHEME_MAPS[colorScheme],
    SIZE_MAPS[size],
    className
  );

  return (
    <button className={compClassName} {...props}>
      {children}
    </button>
  );
}
