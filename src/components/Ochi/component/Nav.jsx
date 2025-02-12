import React from "react";

export default function Nav() {
  const navItems = [
    { href: "/", label: "Ochi" },
    { href: "1", label: "Page 1" },
    { href: "2", label: "Page 2" },
    { href: "paralux-scroll", label: "Paralux Scroll" },
    { href: "locomotive-gsap", label: "Locomotive GSAP" },
  ];

  return (
    <div className="flex justify-between fixed z-10 w-full px-20 py-8 font-oswald ">
      <div className="logo">Timber</div>
      <nav>
        <ul className="flex gap-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
