import { ComponentPropsWithoutRef } from "react";

export function Button(props: ComponentPropsWithoutRef<"button">) {
  const { type = "button", children, ...rest } = props;
  return (
    <button className="w-fit" type={type} {...rest}>
      {children}
    </button>
  );
}
