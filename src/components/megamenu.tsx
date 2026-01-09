"use client";

import { useState } from "react";
import Link from "next/link";

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export default function MegaMenu({ products }: any) {
  const [activeCategory, setActiveCategory] = useState(products[0]);

  return (
    <div className="absolute left-0 top-full w-screen bg-black border-t border-gray-800 shadow-2xl">
      <div className="max-w-7xl mx-auto px-10 py-10 flex max-h-[85vh]">
        {/* LEFT: Categories */}
        <div className="w-1/4 border-r border-gray-800 pr-6">
          <ul className="space-y-3">
            {products.map((group: any) => (
              <li
                key={group.category}
                onMouseEnter={() => setActiveCategory(group)}
                className={`cursor-pointer text-sm font-medium transition ${
                  activeCategory.category === group.category
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {group.category}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: Items */}
        <div className="w-3/4 pl-10 overflow-y-auto">
          <h3 className="text-lg font-semibold mb-6 text-blue-400">
            {activeCategory.category}
          </h3>

          <div className="grid grid-cols-2 gap-3">
            {activeCategory.items.map((item: string) => (
              <Link
                key={item}
                href={`/${activeCategory.base}/${slugify(item)}`}
                className="text-gray-300 hover:text-white hover:underline"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
