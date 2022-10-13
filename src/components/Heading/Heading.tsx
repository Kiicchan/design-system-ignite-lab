import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { PropsWithChildren } from "react";

export interface HeadingProps extends PropsWithChildren {
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export function Heading({ size = "md", asChild, children }: HeadingProps) {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      className={clsx("text-gray-100 font-sans font-bold", {
        "text-lg": size === "sm",
        "text-xl": size === "md",
        "text-2xl": size === "lg",
      })}
    >
      {children}
    </Comp>
  );
}
