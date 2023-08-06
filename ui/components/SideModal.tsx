"use client";
import { PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";
import { ButtonIcon, Typography } from "../atoms";
import { useRouter } from "next/navigation";
import { IconClose } from "../atoms/icons";

type SideModalProps = PropsWithChildren<{
  title: string;
}>;

export function SideModal(props: SideModalProps) {
  const { children, title } = props;
  const router = useRouter();

  const onClose = () => {
    router.back();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-scroll p-4 lg:p-8 backdrop-blur-sm">
      <div className="bg-white rounded-lg w-full max-w-lg ml-auto">
        <header className="flex items-center justify-between p-8 lg:p-10 sticky top-0 bg-lk-turquoise rounded-lg">
          <Typography variant="h2">{title}</Typography>
          <ButtonIcon icon={<IconClose />} onClick={onClose} />
        </header>
        <section className="px-8 lg:px-10 py-16 pr-16">{children}</section>
      </div>
    </div>,
    document.body
  );
}
