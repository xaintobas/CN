import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { HeaderLogo } from "../assets/Assets";
import { NavLink } from "react-router-dom";

function Header() {
  const navItems = [
    { name: "Welcome", path: "/welcome" },
    { name: "Who We Are", path: "/who-we-are" },
    { name: "What We Do", path: "/what-we-do" },
    { name: "Learn", path: "/not-found" },
    { name: "Connect", path: "/connect" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md py-3">
      <div className="container mx-auto px-4 md:px-6 items-center flex justify-between">
        {/* Logo */}
        <HeaderLogo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              className="uppercase text-sm font-medium tracking-wide transition-colors duration-200 hover:text-primary-600"
              to={item.path}
              key={item.name}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-700 cursor-pointer"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <nav className="md:hidden  absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              className="text-left uppercase text-sm font-medium text-gray-700 hover:text-primary-600 py-2 border-b border-gray-50 last:border-none"
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
export default Header;
