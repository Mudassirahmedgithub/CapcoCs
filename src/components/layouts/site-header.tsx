"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname = usePathname(); // Next.js replacement

  const products = [
    { name: "Product", path: "/products/product" },
    { name: "Product", path: "/products/product" },
    { name: "Product", path: "/products/Produtc" },
  ];

  return (
    <header className="bg-black shadow-md px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-xl font-semibold">
        Capco Consultating Services
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6">
        <Link href="/" className={pathname === "/" ? "font-bold" : ""}>
          Home
        </Link>
        <Link href="/about" className={pathname === "/about" ? "font-bold" : ""}>
          About
        </Link>

        {/* Products Dropdown */}
        <div className="relative group">
          <button className="flex items-center gap-1">
            Products <ChevronDown size={16} />
          </button>

          <div className="absolute left-0 mt-2 bg-black shadow-lg p-3 hidden group-hover:block rounded-lg">
            {products.map((p) => (
              <Link key={p.path} href={p.path} className="block py-1 px-2">
                {p.name}
              </Link>
            ))}
          </div>
        </div>

        <Link href="/contact" className={pathname === "/contact" ? "font-bold" : ""}>
          Contact
        </Link>
      </nav>

      {/* Mobile Menu Icon */}
      <button className="md:hidden" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
        {mobileNavOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}
