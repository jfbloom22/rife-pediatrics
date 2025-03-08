import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <>
      {/* Desktop Header */}
      <div className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center">
            <img
              src="/src/assets/images/rifelogov2.png"
              alt="Rife Pediatrics"
              className="h-10"
            />
          </Link>

          <nav className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-dark-slate-grey hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-dark-slate-grey hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/our-team"
              className="text-dark-slate-grey hover:text-primary transition-colors"
            >
              Our Team
            </Link>
            <Link
              to="/register"
              className="text-dark-slate-grey hover:text-primary transition-colors"
            >
              Membership & Pricing
            </Link>
            <Link
              to="/faq"
              className="text-dark-slate-grey hover:text-primary transition-colors"
            >
              FAQ
            </Link>
            <a
              href="#contact"
              className="text-dark-slate-grey hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center">
            <a
              href="https://www.facebook.com/RifePediatrics/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white hover:bg-secondary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center">
            <img
              src="/src/assets/images/rifelogov2.png"
              alt="Rife Pediatrics"
              className="h-8"
            />
          </Link>

          <button className="text-dark-slate-grey p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
