"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]/g, "-")
    .trim();
}

export default function Header() {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const solutions = [
    "Digital Transformation",
    "ERP & CRM",
    "Procurement Solutions",
    "Data & AI",
    "Robotics Process Automation",
    "Enterprise Warehouse Management",
  ];

  const products = [
    "Vertex HCM",
    "Campus Management",
    "Mobile Device Management",
    "Customized Manufacturing ERP",
    "Customized Procurement ERP",
    "Customized HRMS",
    "Retail Solution",
  ];

  const services = [
    "Web Development",
    "Software Development",
    "Mobile App Development",
    "Cloud Services",
    "Data Governance & AI",
    "IT Consulting Support",
  ];

  const Dropdown = ({ title, items, base }: any) => (
    <div className="relative group">
      <button className="flex items-center gap-1">
        {title} <ChevronDown size={16} />
      </button>

      <div className="absolute left-0 mt-2 z-50 bg-black shadow-xl p-3 hidden group-hover:block rounded-lg w-64 transition-all duration-200">
        {items.map((item: string) => (
          <Link
            key={item}
            href={`/${base}/${slugify(item)}`}
            className="block py-1 px-2 hover:bg-gray-800 rounded"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <header className="bg-black text-white shadow-md px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-xl font-semibold">
        Capco Consulting Services
      </Link>

      {/* DESKTOP NAV */}
      <nav className="hidden md:flex gap-8 items-center">

        <Link
          href="/about"
          className={pathname === "/about" ? "font-bold" : ""}
        >
          About
        </Link>

        <Dropdown title="Solutions" items={solutions} base="solutions" />
        <Dropdown title="Products" items={products} base="products" />
        <Dropdown title="Services" items={services} base="services" />

        <Link
          href="/contact"
          className={pathname === "/contact" ? "font-bold" : ""}
        >
          Contact
        </Link>
      </nav>

      {/* MOBILE MENU BTN */}
      <button
        className="md:hidden"
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        {mobileNavOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* MOBILE NAV */}
      {mobileNavOpen && (
        <div className="absolute left-0 top-full w-full bg-black text-white px-6 py-4 md:hidden shadow-xl border-t border-gray-700">
          <div className="flex flex-col gap-4">

            <Link href="/about">About</Link>

            {/* Mobile Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full"
                onClick={() =>
                  setOpenDropdown(openDropdown === "solutions" ? null : "solutions")
                }
              >
                Solutions <ChevronDown size={16} />
              </button>

              {openDropdown === "solutions" && (
                <div className="mt-2 ml-4 flex flex-col gap-2">
                  {solutions.map((item) => (
                    <Link
                      key={item}
                      href={`/solutions/${slugify(item)}`}
                      className="text-gray-300"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                className="flex items-center justify-between w-full"
                onClick={() =>
                  setOpenDropdown(openDropdown === "products" ? null : "products")
                }
              >
                Products <ChevronDown size={16} />
              </button>

              {openDropdown === "products" && (
                <div className="mt-2 ml-4 flex flex-col gap-2">
                  {products.map((item) => (
                    <Link
                      key={item}
                      href={`/products/${slugify(item)}`}
                      className="text-gray-300"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                className="flex items-center justify-between w-full"
                onClick={() =>
                  setOpenDropdown(openDropdown === "services" ? null : "services")
                }
              >
                Services <ChevronDown size={16} />
              </button>

              {openDropdown === "services" && (
                <div className="mt-2 ml-4 flex flex-col gap-2">
                  {services.map((item) => (
                    <Link
                      key={item}
                      href={`/services/${slugify(item)}`}
                      className="text-gray-300"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
