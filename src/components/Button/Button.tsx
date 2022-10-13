import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export function Button({ size = "md", asChild, children }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-white"
      )}
    >
      {children}
    </Comp>
  );
}
