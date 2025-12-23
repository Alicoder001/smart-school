"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/shared/lib/utils";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

interface ModalSubComponents {
  Header: typeof ModalHeader;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
}

export const Modal: React.FC<ModalProps> & ModalSubComponents = ({
  isOpen,
  onClose,
  children,
  className,
}) => {
  if (!isOpen) return null;

  return (
    <div className="w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
      <div
        className={cn(
          "bg-white p-6 rounded-xl relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] shadow-2xl animate-in fade-in zoom-in duration-200",
          className
        )}
      >
        {children}
        <button
          className="absolute top-4 right-4 cursor-pointer hover:bg-gray-100 p-1 rounded-full transition-all"
          onClick={onClose}
          aria-label="Close modal"
        >
          <Image src="/close.png" alt="Close" width={14} height={14} />
        </button>
      </div>
    </div>
  );
};

export function ModalHeader({
  title,
  children,
  className,
}: {
  title?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-6 pb-4 border-b border-gray-100 pr-8", className)}>
      {title && <h2 className="text-xl font-bold text-gray-800">{title}</h2>}
      {children}
    </div>
  );
}

export function ModalBody({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("py-2", className)}>{children}</div>;
}

export function ModalFooter({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mt-6 pt-4 border-t border-gray-100 flex justify-end gap-3",
        className
      )}
    >
      {children}
    </div>
  );
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
