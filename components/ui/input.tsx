import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-sm border border-white/10 bg-white/[.04] px-4 text-sm text-bone outline-none transition placeholder:text-white/35 focus:border-ember/70",
        className
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-sm border border-white/10 bg-white/[.04] px-4 py-3 text-sm text-bone outline-none transition placeholder:text-white/35 focus:border-ember/70",
        className
      )}
      {...props}
    />
  );
}
