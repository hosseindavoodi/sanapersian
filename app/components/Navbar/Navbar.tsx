"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  {
    href: "/",
    name: "Home page",
  },
  {
    href: "/pages/news",
    name: "News",
  },
  {
    href: "/pages/faq",
    name: "FAQ",
  },
  {
    href: "pages/about-us",
    name: "About US",
  },
  {
    href: "pages/contact-us",
    name: "Contact US",
  },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link: any) => {
        const isActive = pathname === link.href;

        return (
          <Link
            className={isActive ? "text-redPrimary" : "text-black"}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
