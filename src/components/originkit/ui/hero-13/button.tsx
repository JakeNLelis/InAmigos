import React from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: ReactNode;
};

const BASE_CLASS =
  "inline-flex h-11 w-fit shrink-0 touch-manipulation items-center justify-center rounded-[8px] font-['Manrope'] text-sm font-bold tracking-[0.05em] uppercase whitespace-nowrap transition-all duration-200 ease [-webkit-tap-highlight-color:transparent] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006c49] active:scale-[0.97] motion-reduce:active:scale-100 cursor-pointer shadow-xs";

export const Button = ({
  variant = "primary",
  children,
  className = "",
  type = "button",
  ...props
}: ButtonProps) => {
  if (variant === "secondary") {
    return (
      <button
        type={type}
        className={`${BASE_CLASS} border border-[#006c49] bg-transparent hover:bg-[#006c49] hover:text-white text-[#006c49] px-6 transition-colors duration-200 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type={type}
      className={`${BASE_CLASS} bg-[#006c49] hover:bg-[#005a3c] text-white px-7 border border-[#005a3c]/30 shadow-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
