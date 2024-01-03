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
    const escListener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", escListener);
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", escListener);
    };
  }, []);

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-scroll p-4 lg:p-6 backdrop-blur-sm showModalBg">
      <div className="bg-white rounded-lg w-full max-w-lg ml-auto showModal">
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
