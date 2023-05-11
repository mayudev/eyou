"use client";

import NavEntry from "../../components/nav/NavEntry";
import rb from "mutant_svg/emoji/red_book.svg";
import laptop from "mutant_svg/emoji/laptop.svg";
import fed from "mutant_svg/emoji/earth_emea.svg";
import pref from "mutant_svg/emoji/wrench.svg";
import { usePathname } from "next/navigation";

const pages = [
  {
    title: "feed",
    href: "/home",
    icon: rb,
  },
  {
    title: "local",
    href: "/local",
    icon: laptop,
  },
  {
    title: "federated",
    href: "/global",
    icon: fed,
  },
  {
    title: "preferences",
    href: "/settings",
    icon: pref,
  },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {pages.map((page, i) => (
        <NavEntry
          key={i}
          title={page.title}
          icon={page.icon}
          href={page.href}
          active={pathname.startsWith(page.href)}
        />
      ))}
    </>
  );
}
