"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const navLinks = [
  {
    href: "/pages/news",
    name: "NEWS",
  },
  {
    href: "/pages/faq",
    name: "FAQ",
  },
  {
    href: "pages/about-us",
    name: "ABOUT US",
  },
  {
    href: "pages/contact-us",
    name: "CONTACT US",
  },
  {
    href: "pages/contact-us",
    name: "TRAVELL ITINERY",
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
            className={clsx(
              "lg:mr-10 md:mr-8 font-semibold text-base hover:text-redPrimary",
              isActive ? "text-redPrimary" : "text-black"
            )}
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
