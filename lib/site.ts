export const siteConfig = {
  name: "Arno Body Lab",
  coachName: "Arno Mejlumyan",
  title: "Premium Online Fitness Coaching",
  description:
    "Premium online fitness coaching for fat loss, muscle gain, nutrition and disciplined body transformation.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  instagram: "https://instagram.com/",
  email: process.env.ADMIN_EMAIL ?? "coach@example.com"
};

export const navItems = [
  { href: "/programs", label: "Programs" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];
