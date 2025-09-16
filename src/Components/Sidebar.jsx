import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FolderOpen,
  Calendar,
  CreditCard,
  BarChart3,
  Settings,
  Building2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const mainItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Clients", url: "/clients", icon: Users },
  { title: "Projects", url: "/projects", icon: FolderOpen },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "Billing", url: "/billing", icon: CreditCard },
];

const supportItems = [
  { title: "Reports", url: "/reports", icon: BarChart3 }
];

const systemItems = [
  { title: "Settings", url: "/settings", icon: Settings },
];

export default function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinkClasses = (active) =>
    `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors
     ${active 
        ? "bg-blue-100 text-blue-600 font-medium" 
        : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
     }`;

  return (
    <div
      className={`h-screen border-r border-gray-200 bg-white flex flex-col transition-all duration-300
        ${collapsed ? "w-16" : "w-64"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-300">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-800">Client Panel</h2>
              <p className="text-xs text-gray-500">Management Panel</p>
            </div>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-md hover:bg-gray-100"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Nav Sections */}
      <div className="flex-1 overflow-y-auto p-3 space-y-6">
        {/* Main */}
        <div>
          {!collapsed && <p className="text-xs font-semibold text-gray-500 mb-2">MAIN</p>}
          <nav className="space-y-1">
            {mainItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.url}
                className={navLinkClasses(isActive(item.url))}
              >
                <item.icon className="w-4 h-4" />
                {!collapsed && <span>{item.title}</span>}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Support */}
        <div>
          {!collapsed && <p className="text-xs font-semibold text-gray-500 mb-2">SUPPORT</p>}
          <nav className="space-y-1">
            {supportItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.url}
                className={navLinkClasses(isActive(item.url))}
              >
                <item.icon className="w-4 h-4" />
                {!collapsed && <span>{item.title}</span>}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* System */}
        <div>
          {!collapsed && <p className="text-xs font-semibold text-gray-500 mb-2">SYSTEM</p>}
          <nav className="space-y-1">
            {systemItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.url}
                className={navLinkClasses(isActive(item.url))}
              >
                <item.icon className="w-4 h-4" />
                {!collapsed && <span>{item.title}</span>}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
