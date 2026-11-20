"use client";

import { useRouter } from "next/navigation";
import { BackButtonProps } from "../lib/definitions";

export default function BackButton({
  fallbackHref = "/",
  children = "Back",
  className = "",
}: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className={`inline-flex cursor-pointer items-center self-start font-medium text-white before:mr-1 before:font-[Material_Symbols_Outlined] before:text-2xl before:leading-0 ${String.raw`before:content-['chevron\_left']`} hover:text-orange-400 hover:before:mr-2 ${className}`.trim()}
    >
      {children}
    </button>
  );
}
