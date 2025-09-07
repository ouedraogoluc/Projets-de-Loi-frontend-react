
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Shield, 
  Activity, 
  AlertCircle, 
  UserCheck, 
  UserX,
  Settings,
  Database,
  TrendingUp,
  Eye
} from 'lucide-react';
import { mockUsers } from '@/data/mockUsers';
import { mockProjects } from '@/data/mockData';

const AdminDashboard = () => {
  const [users] = useState(mockUsers);
  const [projects] = useState(mockProjects);
  
  const activeUsers = users.filter(u => u.actif).length;
  const inactiveUsers = users.filter(u => !u.actif).length;
  const totalProjects = projects.length;
  const systemHealth = 98.5;

  const usersByStructure = {
    administration: users.filter(u => u.structure === 'administration').length,
    ministere_initiateur: users.filter(u => u.structure === 'ministere_initiateur').length,
    sgg_cm: users.filter(u => u.structure === 'sgg_cm').length,
    mjdhri: users.filter(u => u.structure === 'mjdhri').length,
  };

  const getStructureLabel = (structure: string) => {
    const labels = {
      administration: 'Administration',
      ministere_initiateur: 'Ministères Initiateurs',  
      sgg_cm: 'SGG-CM',
      mjdhri: 'MJDHRI'
    };
    return labels[structure as keyof typeof labels] || structure;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Tableau de Bord - Administration</h1>
        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
          Système Opérationnel
        </Badge>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Utilisateurs Actifs</CardTitle>
            <UserCheck className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{activeUsers}</div>
            <p className="text-xs text-muted-foreground">Connectés dans les 7 derniers jours</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Projets</CardTitle>
            <Database className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{totalProjects}</div>
            <p className="text-xs text-muted-foreground">Projets dans le système</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Santé Système</CardTitle>
            <Activity className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{systemHealth}%</div>
            <p className="text-xs text-muted-foreground">Performance globale</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Comptes Inactifs</CardTitle>
            <UserX className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{inactiveUsers}</div>
            <p className="text-xs text-muted-foreground">Nécessitent attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Users by Structure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="h-5 w-5 mr-2" />
            Répartition par Structure
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(usersByStructure).map(([structure, count]) => (
              <div key={structure} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">{count}</div>
                <div className="text-sm text-gray-600">{getStructureLabel(structure)}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Users Management Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Gestion des Utilisateurs</CardTitle>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Users className="h-4 w-4 mr-2" />
              Nouvel Utilisateur
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Utilisateur</th>
                  <th className="text-left py-3 px-4 font-medium">Structure</th>
                  <th className="text-left py-3 px-4 font-medium">Service</th>
                  <th className="text-left py-3 px-4 font-medium">Statut</th>
                  <th className="text-left py-3 px-4 font-medium">Dernière Connexion</th>
                  <th className="text-left py-3 px-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.slice(0, 10).map((user) => (
                  <tr key={user.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div>
                        <div className="font-medium text-sm">{user.prenom} {user.nom}</div>
                        <div className="text-xs text-gray-500">{user.email}</div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm">{getStructureLabel(user.structure)}</td>
                    <td className="py-3 px-4 text-sm">{user.service}</td>
                    <td className="py-3 px-4">
                      <Badge className={user.actif ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                        {user.actif ? 'Actif' : 'Inactif'}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-sm">
                      {user.dernierConnexion ? 
                        new Date(user.dernierConnexion).toLocaleDateString('fr-FR') : 
                        'Jamais connecté'
                      }
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-1">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3 mr-1" />
                          Voir
                        </Button>
                        <Button variant="outline" size="sm">
                          <Settings className="h-3 w-3 mr-1" />
                          Modifier
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* System Monitoring */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Sécurité</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-100 mb-4">Surveillance des accès et authentifications</p>
            <Button variant="secondary" size="sm">
              Consulter les Logs
            </Button>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-100 mb-4">Métriques et performances système</p>
            <Button variant="secondary" size="sm">
              Voir Statistiques
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
