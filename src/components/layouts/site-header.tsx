"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import MegaMenu from "../megamenu";
import headerConfig from "../../app/data/header.config.json";
import slugify from "slugify";

export default function Header() {
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [lockedMega, setLockedMega] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    setActiveMega(null);
    setLockedMega(null);
    setMobileOpen(false);
    setOpenSection(null);
    setOpenCategory(null);
  }, [pathname]);

  const openMega = (key: string) => {
    if (!lockedMega) setActiveMega(key);
  };

  const toggleMega = (key: string) => {
    if (lockedMega === key) {
      setActiveMega(null);
      setLockedMega(null);
    } else {
      setActiveMega(key);
      setLockedMega(key);
    }
  };

  const closeMega = () => {
    if (!lockedMega) setActiveMega(null);
  };

  const unlockMega = () => {
    setActiveMega(null);
    setLockedMega(null);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest("header")) {
        unlockMega();
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <header
      className="bg-white text-gray-900 sticky top-0 z-50 border-b w-full"
      onClick={(e) => {
        if (!(e.target as HTMLElement).closest("nav")) {
          unlockMega();
        }
      }}
    >
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between h-24 px-6">
        <Link href="/" className="flex items-center">
          <img
            src="/favicon.svg"
            alt="Capco Consulting Services Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {headerConfig.mainNav.map((item) =>
            item.type === "mega" ? (
              <div
                key={item.label}
                className="relative" // IMPORTANT FIX
                onMouseEnter={() =>
                  openMega(item.key ?? item.label.toLowerCase())
                }
                onMouseLeave={closeMega}
              >
                <button
                  className="flex items-center gap-1 text-lg hover:text-blue-600 transition-colors"
                  onClick={() =>
                    toggleMega(item.key ?? item.label.toLowerCase())
                  }
                >
                  {item.label}
                  <span
                    className={`transition-transform duration-200 ${
                      lockedMega ===
                      (item.key ?? item.label.toLowerCase())
                        ? "rotate-180"
                        : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-lg hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            )
          )}
        </nav>
      </div>

      {/* FULL WIDTH MEGA MENU OUTSIDE CONTAINER */}
      {activeMega && (
        <div
          className="absolute left-0 top-full w-screen bg-white shadow-2xl z-40"
          onMouseEnter={() => setActiveMega(activeMega)}
          onMouseLeave={closeMega}
        >
          <MegaMenu
            products={
              (headerConfig as any)[activeMega]
            }
            menuType={activeMega}
            menuKey={activeMega}
          />
        </div>
      )}

      {/* Click Overlay when locked */}
      {lockedMega && (
        <div
          className="fixed inset-0 z-30"
          onClick={unlockMega}
        />
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-xl max-h-[85vh] overflow-y-auto z-50">
          <nav className="p-4 space-y-4">
            {headerConfig.mainNav.map((item) => {
              if (item.type !== "mega" && item.href) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block text-lg font-medium"
                  >
                    {item.label}
                  </Link>
                );
              }

              const sectionKey =
                item.key ?? item.label.toLowerCase();
              const isOpen = openSection === sectionKey;

              return (
                <div key={sectionKey} className="border rounded">
                  <button
                    onClick={() =>
                      setOpenSection(isOpen ? null : sectionKey)
                    }
                    className="w-full flex justify-between items-center p-4 text-lg font-semibold"
                  >
                    {item.label}
                    <span>{isOpen ? "−" : "+"}</span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 space-y-3">
                      {(headerConfig as any)[sectionKey].map(
                        (group: any) => {
                          const catKey = group.category;
                          const catOpen =
                            openCategory === catKey;

                          return (
                            <div
                              key={catKey}
                              className="border rounded"
                            >
                              <button
                                onClick={() =>
                                  setOpenCategory(
                                    catOpen ? null : catKey
                                  )
                                }
                                className="w-full flex justify-between items-center p-3 font-medium"
                              >
                                {group.category}
                                <span>
                                  {catOpen ? "−" : "+"}
                                </span>
                              </button>

                              {catOpen && (
                                <div className="pl-4 pb-2 space-y-2">
                                  {group.items.map(
                                    (item: any) => (
                                      <Link
                                        key={item.label}
                                        href={`/${sectionKey}/${slugify(
                                          group.base
                                        )}/${slugify(
                                          item.label
                                        )}`}
                                        className="block text-sm text-gray-700"
                                      >
                                        {item.label}
                                      </Link>
                                    )
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        }
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}    