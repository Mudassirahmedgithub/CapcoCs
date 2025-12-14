"use client";

import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]/g, "-")
    .trim();
}

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const digitalTransformation = [
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
      <button className="flex items-center gap-1 py-2 px-3 rounded-md hover:bg-gray-800 transition-all duration-200">
        <span>{title}</span>
        <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />
      </button>

      <div className="absolute left-0 top-full mt-1 z-50 bg-gray-900 shadow-2xl rounded-lg w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-700 overflow-hidden">
        <div className="py-2">
          {items.map((item: string) => (
            <a
              key={item}
              href={`/${base}/${slugify(item)}`}
              className="block py-2.5 px-4 hover:bg-gray-800 transition-colors duration-150 text-gray-200 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header className="bg-black text-white shadow-lg sticky top-0 z-40 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="text-lg sm:text-xl font-bold tracking-tight hover:text-gray-300 transition-colors">
              Capco Consulting Services
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <a
                href="/about"
                className="py-2 px-3 rounded-md hover:bg-gray-800 transition-all duration-200"
              >
                About
              </a>

              <Dropdown title="Digital Transformation" items={digitalTransformation} base="digitalTransformation" />
              <Dropdown title="Products" items={products} base="products" />
              <Dropdown title="Services" items={services} base="services" />

              <a
                href="/contact"
                className="ml-2 py-2 px-4 rounded-md bg-blue-600 hover:bg-blue-700 transition-all duration-200 font-medium"
              >
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-800 transition-colors"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              aria-label="Toggle menu"
            >
              {mobileNavOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-opacity duration-300 ${
          mobileNavOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setMobileNavOpen(false)}
        />

        {/* Slide-in Menu */}
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-gray-900 shadow-2xl transform transition-transform duration-300 ${
            mobileNavOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <span className="font-bold text-lg">Menu</span>
              <button
                onClick={() => setMobileNavOpen(false)}
                className="p-2 rounded-md hover:bg-gray-800 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <nav className="flex-1 overflow-y-auto p-4">
              <div className="flex flex-col gap-1">
                <a
                  href="/about"
                  className="py-3 px-4 rounded-md hover:bg-gray-800 transition-colors"
                  onClick={() => setMobileNavOpen(false)}
                >
                  About
                </a>

                {/* Mobile Dropdown - Digital Transformation */}
                <div className="border border-gray-700 rounded-md overflow-hidden">
                  <button
                    className="flex items-center justify-between w-full py-3 px-4 hover:bg-gray-800 transition-colors"
                    onClick={() =>
                      setOpenDropdown(openDropdown === "digitalTransformation" ? null : "digitalTransformation")
                    }
                  >
                    <span>Digital Transformation</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        openDropdown === "digitalTransformation" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openDropdown === "digitalTransformation" ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="bg-gray-800 bg-opacity-50">
                      {digitalTransformation.map((item) => (
                        <a
                          key={item}
                          href={`/digitalTransformation/${slugify(item)}`}
                          className="block py-2.5 px-6 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                          onClick={() => setMobileNavOpen(false)}
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Dropdown - Products */}
                <div className="border border-gray-700 rounded-md overflow-hidden">
                  <button
                    className="flex items-center justify-between w-full py-3 px-4 hover:bg-gray-800 transition-colors"
                    onClick={() =>
                      setOpenDropdown(openDropdown === "products" ? null : "products")
                    }
                  >
                    <span>Products</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        openDropdown === "products" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openDropdown === "products" ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="bg-gray-800 bg-opacity-50">
                      {products.map((item) => (
                        <a
                          key={item}
                          href={`/products/${slugify(item)}`}
                          className="block py-2.5 px-6 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                          onClick={() => setMobileNavOpen(false)}
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Dropdown - Services */}
                <div className="border border-gray-700 rounded-md overflow-hidden">
                  <button
                    className="flex items-center justify-between w-full py-3 px-4 hover:bg-gray-800 transition-colors"
                    onClick={() =>
                      setOpenDropdown(openDropdown === "services" ? null : "services")
                    }
                  >
                    <span>Services</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        openDropdown === "services" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openDropdown === "services" ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="bg-gray-800 bg-opacity-50">
                      {services.map((item) => (
                        <a
                          key={item}
                          href={`/services/${slugify(item)}`}
                          className="block py-2.5 px-6 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                          onClick={() => setMobileNavOpen(false)}
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href="/contact"
                  className="mt-2 py-3 px-4 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors text-center font-medium"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}