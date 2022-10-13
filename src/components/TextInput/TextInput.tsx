import { InputHTMLAttributes, PropsWithChildren } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps extends PropsWithChildren {}
function Root(props: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300">
      {props.children}
    </div>
  );
}
Root.displayName = "TextInput.Root";

export interface TextInputIconProps extends PropsWithChildren {}
function Icon(props: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}
Icon.displayName = "TextInput.Icon";

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}
function Input(props: TextInputInputProps) {
  return (
    <input
      type="text"
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
}
Input.displayName = "TextInput.Input";

export const TextInput = {
  Root,
  Input,
  Icon,
};
