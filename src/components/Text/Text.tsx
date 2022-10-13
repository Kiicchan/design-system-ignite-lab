import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { PropsWithChildren } from "react";

export interface TextProps extends PropsWithChildren {
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export function Text({ size = "md", asChild, children }: TextProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={clsx("text-gray-100 font-sans", {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-md": size === "lg",
      })}
    >
      {children}
    </Comp>
  );
}
