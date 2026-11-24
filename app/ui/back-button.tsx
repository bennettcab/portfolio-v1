"use client";

import { useRouter } from "next/navigation";
import { BackButtonProps } from "../lib/definitions";
import { LinkStyles } from "../lib/constants";

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
      className={`group ${LinkStyles} ${className}`.trim()}
    >
      <span
        className={`relative inline-flex items-center before:mr-1 before:font-[Material_Symbols_Outlined] before:text-2xl before:leading-0 ${String.raw`before:content-['chevron\_left']`} group-hover:before:mr-2`}
      >
        {children}
      </span>
    </button>
  );
}
