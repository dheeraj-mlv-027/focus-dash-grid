import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BarChart3, Users, Search, LayoutDashboard, Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navItems = [
    { name: "Overview", path: "/", icon: LayoutDashboard },
    { name: "At-Risk Students", path: "/at-risk", icon: Users },
    { name: "Analytics", path: "/analytics", icon: BarChart3 },
    { name: "Student Search", path: "/search", icon: Search },
  ];

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col`}
      >
        <div className="p-4 flex items-center justify-between border-b border-sidebar-border">
          {sidebarOpen ? (
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-danger" />
              <span className="font-semibold text-sidebar-foreground">Dashboard</span>
            </div>
          ) : (
            <GraduationCap className="h-6 w-6 text-danger mx-auto" />
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-sidebar-foreground hover:bg-sidebar-accent"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <div className="p-4 border-b border-sidebar-border">
          <p className="text-xs text-muted-foreground">
            {sidebarOpen ? "Logged in as: abcd" : "abcd"}
          </p>
        </div>

        <nav className="flex-1 p-4">
          <p className="text-xs font-semibold text-muted-foreground mb-3">
            {sidebarOpen && "Select Page:"}
          </p>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                      isActive
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                    }`
                  }
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {sidebarOpen && <span>{item.name}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <Button
            variant="ghost"
            className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent"
          >
            {sidebarOpen ? "Logout" : "Out"}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
