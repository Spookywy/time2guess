import { ReactNode } from "react";

type ModalProps = {
  className?: string;
  children: ReactNode;
};

export default function Modal({ className, children }: ModalProps) {
  return (
    <>
      <div className="z-20 w-screen h-screen bg-black absolute top-0 left-0 opacity-75" />
      <div
        className={`z-20 fixed left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 border shadow-sm rounded-xl shadow-dark-orange border-dark-orange bg-jet p-5 text-lg text-white ${className}`}
      >
        {children}
      </div>
    </>
  );
}
