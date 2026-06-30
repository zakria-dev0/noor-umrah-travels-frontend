import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Dashboard",  path: "/admin/dashboard" },
  // { label: "Contacts",   path: "/admin/contacts" },
  // { label: "Inquiries",  path: "/admin/inquiries" },
  { label: "Customers",  path: "/admin/customers" },
  { label: "Payments",   path: "/admin/Payments" },
  { label: "Quotes",     path: "/admin/Quotes" },
  { label: "Profile",    path: "/admin/profile" },
];

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar = ({ onClose }: SidebarProps) => {
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  };

  return (
    <div className="flex flex-col h-full w-full">

      {/* Brand */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 flex-shrink-0">
        <h2 className="font-bold text-lg text-gray-900 tracking-tight">Noor Admin</h2>
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden p-1 rounded-md hover:bg-gray-100 transition-colors"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Nav links */}
      <nav className="flex-1 px-3 py-3 space-y-0.5 overflow-y-auto">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={onClose}
            className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              location.pathname === link.path
                ? "bg-black text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="px-3 py-3 border-t border-gray-200 flex-shrink-0">
        <button
          onClick={logout}
          className="w-full bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2.5 rounded-lg transition-colors"
        >
          Logout
        </button>
      </div>

    </div>
  );
};

export default Sidebar;
