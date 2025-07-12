import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const links = user
    ? [
        { to: "/items", label: "Browse" },
        { to: "/items/new", label: "List Item" },
        { to: "/dashboard", label: "Dashboard" },
      ]
    : [
        { to: "/", label: "Home" },
        { to: "/login", label: "Login" },
        { to: "/register", label: "Register" },
        { to: "/admin", label: "Admin" },
      ];

  return (
    <nav className="bg-maroon text-cream">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="font-bold text-xl">
          ReWear
        </Link>
        <button
          className="sm:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul className={`sm:flex sm:items-center ${open ? "block" : "hidden"}`}>
          {links.map(({ to, label }) => (
            <li key={to} className="sm:ml-6 py-2 sm:py-0">
              <Link to={to} className="hover:underline">
                {label}
              </Link>
            </li>
          ))}
          {user && (
            <li className="sm:ml-6 py-2 sm:py-0">
              <button onClick={logout} className="hover:underline">
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
