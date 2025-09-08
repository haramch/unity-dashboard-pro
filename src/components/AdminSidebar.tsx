import { useState } from "react";
import { 
  Home, 
  Package, 
  FileText, 
  ShoppingCart, 
  Users, 
  Tag, 
  BookOpen, 
  Calculator, 
  Settings,
  BarChart3,
  Import,
  Truck,
  Menu,
  X
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigationItems = [
  { title: "HOME", icon: Home, href: "/" },
  { title: "PRODUCT MANAGEMENT", icon: Package, href: "/products" },
  { title: "REQUESTS", icon: FileText, href: "/requests" },
  { title: "ORDERS", icon: ShoppingCart, href: "/orders" },
  { title: "USERS", icon: Users, href: "/users" },
  { title: "PROMOTIONS", icon: Tag, href: "/promotions" },
  { title: "BLOG", icon: BookOpen, href: "/blog" },
  { title: "TAX", icon: Calculator, href: "/tax" },
  { title: "CMS", icon: FileText, href: "/cms" },
  { title: "REPORTS", icon: BarChart3, href: "/reports" },
  { title: "IMPORT/EXPORT", icon: Import, href: "/import-export" },
  { title: "SHIPPING/PICKUP", icon: Truck, href: "/shipping" },
  { title: "SETTINGS", icon: Settings, href: "/settings" },
];

interface AdminSidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export function AdminSidebar({ isCollapsed, onToggle }: AdminSidebarProps) {
  return (
    <div className={cn(
      "bg-sidebar text-sidebar-foreground transition-all duration-300 ease-in-out flex flex-col fixed left-0 top-0 h-screen z-50",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-sidebar-foreground rounded flex items-center justify-center">
              <span className="text-sidebar-background font-bold text-sm">Y</span>
            </div>
            <span className="font-bold text-lg">YolKart</span>
          </div>
        )}
        <button
          onClick={onToggle}
          className="p-2 hover:bg-sidebar-accent rounded-lg transition-colors"
        >
          {isCollapsed ? <Menu size={20} /> : <X size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                "hover:bg-sidebar-accent text-sidebar-foreground",
                isActive && "bg-sidebar-accent font-medium",
                isCollapsed && "justify-center"
              )
            }
          >
            <item.icon size={20} className="flex-shrink-0" />
            {!isCollapsed && (
              <span className="text-sm font-medium">{item.title}</span>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}