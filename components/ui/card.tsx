import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded border border-white/10 bg-white/[.035] shadow-hard-panel backdrop-blur",
        className
      )}
      {...props}
    />
  );
}
