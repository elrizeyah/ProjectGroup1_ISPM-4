import { Link, usePage } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import Menu from "@/Components/Menu";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

export default function AuthenticatedLayout({ header, children }) {
  const user = usePage().props.auth.user;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  const sidebarRef = useRef(null);

 useEffect(() => {
  const handleMouseMove = (event) => {
    if (sidebarRef.current) {
      const sidebarRect = sidebarRef.current.getBoundingClientRect();

      const isOutside =
        event.clientX < sidebarRect.left ||
        event.clientX > sidebarRect.right ||
        event.clientY < sidebarRect.top ||
        event.clientY > sidebarRect.bottom;

      if (isOutside) {
        setSidebarOpen(false);
      }
    }
  };

  if (sidebarOpen) {
    document.addEventListener("mousemove", handleMouseMove);
  } else {
    document.removeEventListener("mousemove", handleMouseMove);
  }

  return () => {
    document.removeEventListener("mousemove", handleMouseMove);
  };
}, [sidebarOpen]);


  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* ==================== SIDEBAR ==================== */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full bg-[#4b2e17] text-white w-56 transform transition-transform duration-300 z-40 flex flex-col justify-between ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top section: Logo + Close button + Links */}
        <div>
          {/* Sidebar header */}
          <div className="flex items-center justify-between px-4 py-6 border-b border-[#5c3c21]">
            <img
              src="/images/2.png"
              alt="Logo"
              className="h-20 w-auto mx-auto"
            />
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-1 hover:bg-[#5a3c24] rounded"
            >
              ✕
            </button>
          </div>

          {/* Sidebar links */}
          <nav className="mt-6 space-y-3 text-sm">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-6 py-2 rounded transition-colors duration-200 hover:bg-[#5a3c24] w-full"
            >
              📊 Dashboard
            </Link>
            <Link
              href="/inventory1"
              className="flex items-center gap-3 px-6 py-2 rounded transition-colors duration-200 hover:bg-[#5a3c24] w-full"
            >
              📦 Products
            </Link>
            <Link
              href="/transaction-record"
              className="flex items-center gap-3 px-6 py-2 rounded transition-colors duration-200 hover:bg-[#5a3c24] w-full"
            >
              💰 Transactions
            </Link>
            <Link
              href="/sales-report"
              className="flex items-center gap-3 px-6 py-2 rounded transition-colors duration-200 hover:bg-[#5a3c24] w-full"
            >
              📑 Reports
            </Link>
          </nav>
        </div>

        {/* Bottom section: Logout */}
        <div className="mb-6 px-6">
          <Link
            href={route("logout")}
            method="post"
            as="button"
            className="flex items-center gap-3 px-6 py-2 hover:bg-[#5a3c24] w-full text-left rounded"
          >
            ⏻ Log Out
          </Link>
        </div>
      </aside>


            <div className="flex-1 flex flex-col">
                {/* ==================== HEADER NAVBAR ==================== */}
                <nav className="bg-white border-b border-gray-100" style={{ height: "7rem" }}>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
                        <div className="flex justify-between items-center h-full">
                            {/* Left: Burger Menu + Logo */}
                            <div className="flex items-center space-x-4 h-full">
                                {/* Burger button */}
                                <Menu toggleMenu={() => setSidebarOpen(!sidebarOpen)} />

                                {/* Logo */}
                                <Link href={route('dashboard')}>
                                    <img src="/images/2.png" alt="Logo" style={{ height: "7rem" }} />
                                </Link>
                            </div>

                            {/* Right side: Nav links + Profile */}
                            <div className="flex items-center space-x-6">
                                <div className="hidden sm:flex space-x-8">
                                   <button
    className="text-[#4b2e17] font-medium text-[1.3rem] hover:text-[#916520ff] transition-colors cursor-pointer bg-none border-none p-0"
    onClick={() => {
        // navigate to dashboard
        window.location.href = route('dashboard');
    }}
>
    Dashboard
</button>

                                   <button
    style={{
        fontSize: "1.3rem",
        color: "#4b2e17",
        fontWeight: "500",
        background: "none",
        border: "none",
        cursor: "pointer",
        transition: "color 0.2s", // smooth color change
    }}
    onMouseEnter={(e) => e.currentTarget.style.color = "#916520ff"} // hover color
    onMouseLeave={(e) => e.currentTarget.style.color = "#4b2e17"} // normal color
    onClick={() => {
        const el = document.getElementById("quick-access");
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }}
>
    Quick Access
</button>



                                </div>

                                <Link
                                    href={route("profile.edit")}
                                    className="flex items-center justify-center w-10 h-10"
                                    title="Profile"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="#4b2e17"
                                        className="w-6 h-6"
                                    >
                                        <path d="M12 12c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5z" />
                                        <path d="M4 20c0-3.3 2.7-6 6-6h4c3.3 0 6 2.7 6 6v1H4v-1z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    {showingNavigationDropdown && (
                        <div className="sm:hidden">
                            <div className="space-y-1 pb-3 pt-2">
                                <ResponsiveNavLink
                                    href={route('dashboard')}
                                    active={route().current('dashboard')}
                                >
                                    Dashboard
                                </ResponsiveNavLink>
                            </div>
                            <div className="border-t border-gray-200 pb-1 pt-4">
                                <div className="px-4">
                                    <div className="text-base font-medium text-gray-800">{user.name}</div>
                                    <div className="text-sm font-medium text-gray-500">{user.email}</div>
                                </div>
                                <div className="mt-3 space-y-1">
                                    <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                                    <ResponsiveNavLink method="post" href={route('logout')} as="button">Log Out</ResponsiveNavLink>
                                </div>
                            </div>
                        </div>
                    )}
                </nav>

                {/* Optional page header */}
                {header && (
                    <header className="bg-white shadow">
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}

                {/* Main content */}
                <main className="flex-1 p-6">{children}</main>
            </div>
        </div>
    );
}
