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
    <nav className="bg-[#2B2B2B] border-b-8 border-[#1A1A1A] sticky top-0 z-50 shadow-[0_8px_0_0_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="group">
            <div className="bg-[#1A1A1A] px-6 py-3 border-4 border-[#000] shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
              <span className="text-[#E8E4DF] tracking-[0.2em] font-black">
                DEV
              </span>
            </div>
          </Link>

          <div className="hidden md:flex gap-2">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="group relative"
              >
                <div
                  className={`px-6 py-3 border-4 transition-all ${isActive(link.path)
                      ? "bg-[#E8E4DF] border-[#000] text-[#1A1A1A] shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
                      : "bg-[#3D3D3D] border-[#2B2B2B] text-[#E8E4DF] hover:bg-[#4D4D4D] shadow-[2px_2px_0_0_rgba(0,0,0,0.5)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.8)]"
                    }`}
                >
                  <span className="tracking-[0.15em] font-black">
                    {link.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden bg-[#3D3D3D] p-3 border-4 border-[#2B2B2B] shadow-[2px_2px_0_0_rgba(0,0,0,0.5)]"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#E8E4DF]" />
            ) : (
              <Menu className="w-6 h-6 text-[#E8E4DF]" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-6 py-3 border-4 transition-all ${isActive(link.path)
                    ? "bg-[#E8E4DF] border-[#000] text-[#1A1A1A] shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
                    : "bg-[#3D3D3D] border-[#2B2B2B] text-[#E8E4DF] shadow-[2px_2px_0_0_rgba(0,0,0,0.5)]"
                  }`}
              >
                <span className="tracking-[0.15em] font-black">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}