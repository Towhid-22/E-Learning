"use client";

import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Courses", href: "#" },
    { id: 3, name: "Careers", href: "#" },
    { id: 4, name: "Blog", href: "/blog" },
    { id: 5, name: "About Us", href: "#" },
  ];

  return (
    <div className="bg-bgColor py-4 sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          </Link>
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-12">
            <ul className="flex items-center gap-10">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-gray-300 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <Link href="/login">
                <button className="rounded-full bg-white px-6 py-2 font-semibold text-textPrimaryColor cursor-pointer">
                  Login
                </button>
              </Link>

              <Link href="/signup">
                <button className="rounded-full bg-white/20 px-6 py-2 font-semibold text-white border border-white cursor-pointer">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            open ? "max-h-96 mt-5" : "max-h-0"
          }`}
        >
          <ul className="space-y-4 rounded-lg bg-white p-5 shadow-lg">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-gray-700 font-medium hover:text-bgColor"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <Link href="#">
                <button className="w-full rounded-full bg-bgColor py-3 text-white font-semibold">
                  Login
                </button>
              </Link>

              <Link href="#">
                <button className="w-full rounded-full border border-bgColor py-3 text-bgColor font-semibold">
                  Sign Up
                </button>
              </Link>
            </div>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
