"use client";
import { useState } from "react";
import Link from "next/link";
function slugify(text?: string) {
  if (!text) return "";
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
export default function MegaMenu({ products, menuType, menuKey }: any) {
  const [activeCategory, setActiveCategory] = useState(products?.[0]);
  return (
    <div className="absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-2xl">
      <div className="max-w-7xl mx-auto px-10 py-10 flex h-[85vh]">
        {/* LEFT: Categories */}
        <div className="w-1/4 border-r border-gray-800 pr-6 overflow-y-auto">
          <ul className="space-y-3">
            {products.map((group: any) => (
              <li
                key={group.category}
                onMouseEnter={() => setActiveCategory(group)}
                className={`cursor-pointer p-3 rounded transition ${activeCategory.category === group.category
                    ? "bg-blue-50 text-blue-600"
                    : "hover:bg-gray-50 text-gray-700"
                  }`}
              >
                <div className="flex gap-3 items-start text-left">
                  <span className="text-xl">{group.icon}</span>
                  <div>
                    <p className="font-medium leading-tight text-left">
                      {group.category}
                    </p>
                    <p className="text-xs text-gray-500 leading-snug text-left">
                      {group.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* RIGHT: Items */}
        <div className="w-3/4 pl-10 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-blue-400">
              {activeCategory.category}
            </h3>

            <span className="text-xs uppercase tracking-wider text-gray-400 font-medium">
              {menuType}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 items-start">
            {activeCategory.items.map((item: any) => (
              <Link
                key={item.label}
                href={`/${menuKey}/${slugify(activeCategory.base)}/${slugify(item.label)}`}
                className="flex items-start gap-3 p-3 rounded hover:bg-gray-50 text-left"
              >
                <span className="text-lg">{item.icon}</span>
                <div>
                  <p className="text-sm font-medium text-gray-800 leading-tight text-left">
                    {item.label}
                  </p>
                  <p className="text-xs text-gray-500 leading-snug text-left">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
