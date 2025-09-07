
import React from 'react';
import { Home, FileText, BarChart3, Settings, Users, Bell, Briefcase } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const getMenuItemsByStructure = (structure: string) => {
  const baseItems = [
    {
      title: "Accueil",
      url: "/",
      icon: Home,
    },
    {
      title: "Tableau de Bord",
      url: "/dashboard",
      icon: BarChart3,
    },
  ];

  const structureSpecificItems = {
    administration: [
      {
        title: "Gestion Utilisateurs",
        url: "/users",
        icon: Users,
      },
      {
        title: "Notifications",
        url: "/notifications",
        icon: Bell,
      },
      {
        title: "Paramètres Système",
        url: "/settings",
        icon: Settings,
      },
    ],
    ministere_initiateur: [
      {
        title: "Soumettre Projet",
        url: "/submit",
        icon: FileText,
      },
      {
        title: "Mes Projets",
        url: "/mes-projets",
        icon: FileText,
      },
    ],
    sgg_cm: [
      {
        title: "Projets Reçus",
        url: "/projets-recus",
        icon: FileText,
      },
      {
        title: "DLR - Traitement",
        url: "/dlr-traitement",
        icon: FileText,
      },
    ],
    mjdhri: [
      {
        title: "Projets MJDHRI",
        url: "/projets-mjdhri",
        icon: FileText,
      },
      {
        title: "Signature",
        url: "/signature",
        icon: FileText,
      },
    ],
  };

  return [
    ...baseItems,
    ...(structureSpecificItems[structure as keyof typeof structureSpecificItems] || [])
  ];
};

export function AppSidebar() {
  const location = useLocation();
  const { user } = useAuth();

  const menuItems = user ? getMenuItemsByStructure(user.structure) : [
    {
      title: "Accueil",
      url: "/",
      icon: Home,
    }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const getStructureTitle = (structure: string) => {
    const titles = {
      administration: 'Administration Système',
      ministere_initiateur: 'Ministère Initiateur',
      sgg_cm: 'SGG-CM',
      mjdhri: 'MJDHRI'
    };
    return titles[structure as keyof typeof titles] || 'LOI-FLOW';
  };

  return (
    <Sidebar className="bg-gradient-to-b from-blue-900 to-blue-800 border-r-0">
      <SidebarHeader className="border-b border-blue-700/30 p-6 bg-blue-900/50">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-600 rounded-xl shadow-lg">
            <Briefcase className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">LOI-FLOW</h2>
            <p className="text-xs text-blue-200">
              {user ? getStructureTitle(user.structure) : 'Système Législatif'}
            </p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="bg-gradient-to-b from-blue-900 to-blue-800">
        <SidebarGroup>
          <SidebarGroupLabel className="text-blue-200 font-semibold uppercase text-xs tracking-wider mb-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={isActive(item.url)}
                    className={`
                      ${isActive(item.url) 
                        ? 'bg-blue-600 text-white shadow-lg' 
                        : 'text-blue-100 hover:bg-blue-700/50 hover:text-white'
                      }
                      mb-1 rounded-lg transition-all duration-200
                    `}
                  >
                    <Link to={item.url}>
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-blue-700/30 p-4 bg-blue-900/50">
        <div className="text-xs text-blue-200">
          <p className="font-medium">© 2024 Gouvernement BF</p>
          <p className="text-blue-300">Version 1.0</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
