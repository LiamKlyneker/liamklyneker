import { ComponentPropsWithoutRef } from "react";

type ButtonIconProps = ComponentPropsWithoutRef<"button"> & {
  icon: React.ReactNode;
};

export function ButtonIcon(props: ButtonIconProps) {
  const { icon, onClick } = props;
  return (
    <button
      className="text-black hover:bg-slate-200 rounded-full"
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
