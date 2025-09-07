
import React from 'react';
import { Bell, Search, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useAuth } from '@/contexts/AuthContext';
import { Badge } from '@/components/ui/badge';

export function AppHeader() {
  const { user, logout } = useAuth();

  const getStructureLabel = (structure: string) => {
    const labels = {
      administration: 'Administration',
      ministere_initiateur: 'Ministère Initiateur',
      sgg_cm: 'SGG-CM',
      mjdhri: 'MJDHRI'
    };
    return labels[structure as keyof typeof labels] || structure;
  };

  const getStructureColor = (structure: string) => {
    const colors = {
      administration: 'bg-blue-100 text-blue-800',
      ministere_initiateur: 'bg-green-100 text-green-800',
      sgg_cm: 'bg-orange-100 text-orange-800',
      mjdhri: 'bg-purple-100 text-purple-800'
    };
    return colors[structure as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-4">
      <div className="flex items-center space-x-4">
        <SidebarTrigger />
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Rechercher un projet de loi..."
            className="pl-10 w-64"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
        
        {user && (
          <>
            <div className="flex items-center space-x-3">
              <Badge className={getStructureColor(user.structure)}>
                {getStructureLabel(user.structure)}
              </Badge>
              <div className="text-right">
                <p className="text-sm font-medium">{user.prenom} {user.nom}</p>
                <p className="text-xs text-gray-500">
                  {user.ministere || user.service}
                </p>
              </div>
              <Button variant="ghost" size="icon">
                <User className="h-4 w-4" />
              </Button>
            </div>
            
            <Button 
              variant="ghost" 
              size="icon"
              onClick={logout}
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>
    </header>
  );
}
