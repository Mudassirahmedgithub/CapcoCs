"use client";
import { useState } from "react";
import MegaMenu from "../megamenu";
import headerConfig from "../../app/data/header.config.json";

export default function Header() {
  const [showMega, setShowMega] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="flex items-center h-20 px-8 gap-10">

        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          CCS
        </a>

        {/* LEFT ALIGNED NAV */}
        <nav className="flex items-center gap-6 relative">
          {headerConfig.mainNav.map((item) =>
            item.type === "mega" ? (
              <button
                key={item.label}
                onMouseEnter={() => setShowMega(true)}
                onMouseLeave={() => setShowMega(false)}
                className="text-lg hover:text-blue-400"
              >
                Products
                {showMega && (
                  <MegaMenu products={headerConfig.products} />
                )}
              </button>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-lg hover:text-blue-400"
              >
                {item.label}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
