import Link from "next/link";
import { Dumbbell, Instagram, Mail } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-abyss">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-12 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-sm bg-ember">
              <Dumbbell size={18} />
            </span>
            <span className="font-display text-xl uppercase">{siteConfig.name}</span>
          </div>
          <p className="max-w-md text-sm leading-6 text-white/55">
            Premium online coaching for disciplined body transformation, built around training,
            nutrition and weekly accountability.
          </p>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[.24em] text-white/35">Platform</p>
          <div className="grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/62 hover:text-bone">
                {item.label}
              </Link>
            ))}
            <Link href="/dashboard" className="text-sm text-white/62 hover:text-bone">
              Client Dashboard
            </Link>
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[.24em] text-white/35">Contact</p>
          <div className="grid gap-3 text-sm text-white/62">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-bone">
              <Mail size={16} /> {siteConfig.email}
            </a>
            <a href={siteConfig.instagram} className="flex items-center gap-2 hover:text-bone">
              <Instagram size={16} /> Instagram
            </a>
            <div className="pt-3 text-xs text-white/35">
              <Link href="/terms" className="hover:text-bone">
                Terms
              </Link>
              <span className="mx-2">/</span>
              <Link href="/privacy" className="hover:text-bone">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
