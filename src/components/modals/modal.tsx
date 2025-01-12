import { ReactNode } from "react";

type ModalProps = {
  className?: string;
  children: ReactNode;
};

export default function Modal({ className, children }: ModalProps) {
  return (
    <div
      className={`z-10 fixed left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 rounded-xl border-4 border-dark-orange bg-jet p-5 text-lg text-white ${className}`}
    >
      {children}
    </div>
  );
}
