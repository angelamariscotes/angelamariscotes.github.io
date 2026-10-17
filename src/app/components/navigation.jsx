import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { path: "/", label: "HOME" },
    { path: "/contact", label: "CONTACT" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    
       <header className="grid h-[72px] grid-cols-[1fr_auto] items-center border-b border-line px-6 md:h-[76px] md:grid-cols-[1fr_auto_1fr] md:px-10 lg:px-14">
        <a
          className={`font-mono text-[10px] uppercase tracking-[0.08em] flex items-center gap-3 font-medium`}
          href="/#top"
          aria-label="sidequests/, home"
        >

          <span className="uppercase">sidequests</span>
        </a>

        <nav
          className="flex gap-[18px] text-[13px] font-medium md:gap-7"
          aria-label="Main navigation"
        >
          <a
            className="hidden border-b border-transparent py-2 transition-colors hover:border-ink sm:block"
            href="/#expertise"
          >
            Expertise
          </a>
          <a
            className="hidden border-b border-transparent py-2 transition-colors hover:border-ink sm:block"
            href="/#how-i-work"
          >
            How I work
          </a>
          <a
            className="border-b border-transparent py-2 transition-colors hover:border-ink"
            href="/contact"
          >
            Contact
          </a>
        </nav>

        <div
          className={`font-mono text-[10px] uppercase tracking-[0.08em] hidden justify-self-end text-right leading-[1.35] md:flex md:flex-col md:gap-[3px]`}
        >
          <span>Based in Manila</span>
          <span className="text-muted">Philippines</span>
        </div>
      </header>

  );
}