import {
  Calendar,
  Home,
  Inbox,
  LogOutIcon,
  Search,
  Settings,
} from "lucide-react";

import {
  Sidebar as CnSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Inventory",
    url: "/service",
    icon: Inbox,
  },
  {
    title: "Supply",
    url: "/booking",
    icon: Calendar,
  },
  {
    title: "Events",
    url: "/profile/general",
    icon: Search,
  },
  {
    title: "Reports",
    url: "/profile/general",
    icon: Search,
  },
];

export function Sidebar() {
  const { pathname } = useLocation();

  return (
    <CnSidebar>
      {/* Sidebar Header */}
      <SidebarHeader className="px-6 pt-10 pb-2">
        <div className="w-full mx-auto flex justify-center">
          <img
            src={logo}
            alt="Relaxa Logo"
            className="w-[80%] text-center flex justify-center items-center h-full "
          />
        </div>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent className="px-6">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="gap-4 p-2 border-b">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={cn("h-10 rounded px-3", {
                      "bg-gradient-to-r from-[#0D00FF] to-[#8894FF] text-primary-foreground hover:text-primary-foreground":
                        item.url === pathname,
                    })}
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Additional Menu: Settings & Logout */}
        <SidebarGroup className="p-0 mt-4">
          <SidebarGroupContent>
            <SidebarMenu className="gap-4 p-2">
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="h-10 rounded px-3">
                  <Link to="/settings">
                    <Settings />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild className="h-10 rounded px-3">
                  <Link to="/logout">
                    <LogOutIcon />
                    <span>Logout</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Sidebar Footer (Optional) */}
      {/* <SidebarFooter className="p-6">
        <Button
          variant="secondary"
          className="h-14 rounded-[20px] p-[18px] border border-[#EFEFF4] text-muted-foreground justify-start gap-[18px]"
        >
          <LogOutIcon className="size-5" />
          Logout
        </Button>
      </SidebarFooter> */}
    </CnSidebar>
  );
}
