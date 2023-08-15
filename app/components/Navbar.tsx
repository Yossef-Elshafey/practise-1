"use client";
import React from "react";

function Navbar() {
  const links: string[] = [
    "Home",
    "What is GPT?",
    "Open Ai",
    "Case Studies",
    "Library",
  ];
  return (
    <nav className="relative">
      <div className="container mx-auto">
        <div className="wrapper text-white flex items-center py-2">
          <h2 className="font-bold text-2xl">GPT-3</h2>
          <ul className=" ml-8  gap-x-12 hidden xl:flex">
            {links.map((e) => (
              <li
                key={e}
                className="cursor-pointer hover:text-blue-400 transition "
              >
                {e}
              </li>
            ))}
          </ul>
          <div className="button-wrapper ml-auto flex gap-x-4">
            <button>Sign in</button>
            <button className="bg-orange px-6 py-3 rounded-md">Sign up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
