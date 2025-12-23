"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/shared/lib/utils";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  className?: string;
}

export function Modal({
  isOpen,
  onClose,
  children,
  title,
  className,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
      <div
        className={cn(
          "bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]",
          className
        )}
      >
        {title && (
          <div className="mb-4 pb-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          </div>
        )}

        {children}

        <div
          className="absolute top-4 right-4 cursor-pointer hover:opacity-70 transition-opacity"
          onClick={onClose}
        >
          <Image src="/close.png" alt="Close" width={14} height={14} />
        </div>
      </div>
    </div>
  );
}

export function ModalHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-4 pb-4 border-b border-gray-200", className)}>
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
  return <div className={cn("py-4", className)}>{children}</div>;
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
        "mt-4 pt-4 border-t border-gray-200 flex justify-end gap-2",
        className
      )}
    >
      {children}
    </div>
  );
}
