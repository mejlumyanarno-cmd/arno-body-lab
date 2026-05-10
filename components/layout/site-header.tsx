"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LinkButton } from "@/components/ui/button";
import { navItems, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-abyss/82 backdrop-blur-xl">
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-9 place-items-center rounded-sm bg-ember text-sm font-black text-white shadow-luxury-red">
            ARN
          </span>
          <span className="font-display text-lg uppercase leading-none text-bone">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-xs font-bold uppercase tracking-[.22em] text-white/55 transition hover:text-bone",
                pathname === item.href && "text-bone"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login" className="text-xs font-bold uppercase tracking-[.22em] text-white/55">
            Log in
          </Link>
          <LinkButton href="/pricing" size="sm" variant="danger">
            Start now
          </LinkButton>
        </div>

        <button
          className="grid size-10 place-items-center rounded-sm border border-white/10 text-bone md:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-abyss md:hidden">
          <nav className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-4 text-sm font-bold uppercase tracking-[.18em] text-bone"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <LinkButton href="/login" variant="secondary" onClick={() => setOpen(false)}>
                Log in
              </LinkButton>
              <LinkButton href="/pricing" variant="danger" onClick={() => setOpen(false)}>
                Start
              </LinkButton>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
