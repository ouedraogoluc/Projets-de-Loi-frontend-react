
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Users, 
  TrendingUp,
  Search,
  Filter,
  Eye,
  History,
  Download
} from 'lucide-react';
import { mockProjects, getStatusLabel, getStatusColor, getPriorityColor, getProjectStats } from '@/data/mockData';

const Dashboard = () => {
  const [projects] = useState(mockProjects);
  const stats = getProjectStats();

  const handleViewProject = (projectId: string) => {
    console.log('Voir projet:', projectId);
    // Navigation vers la page de détail du projet
  };

  const handleDownloadDocument = (projectId: string) => {
    console.log('Télécharger documents du projet:', projectId);
    // Logique de téléchargement
  };

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Projets</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-xs text-muted-foreground">Projets soumis</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">En Traitement</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.inProgress}</div>
            <p className="text-xs text-muted-foreground">En cours de traitement</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Validés</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.validated}</div>
            <p className="text-xs text-muted-foreground">Projets validés</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Renvoyés</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.rejected}</div>
            <p className="text-xs text-muted-foreground">Nécessitent amendements</p>
          </CardContent>
        </Card>
      </div>

      {/* Projects Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Projets de Loi Récents</CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Rechercher
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filtrer
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">ID</th>
                  <th className="text-left py-3 px-4 font-medium">Titre du Projet</th>
                  <th className="text-left py-3 px-4 font-medium">Ministère</th>
                  <th className="text-left py-3 px-4 font-medium">Statut</th>
                  <th className="text-left py-3 px-4 font-medium">Priorité</th>
                  <th className="text-left py-3 px-4 font-medium">Date</th>
                  <th className="text-left py-3 px-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-mono text-sm">{project.id}</td>
                    <td className="py-3 px-4">
                      <div>
                        <div className="font-medium text-sm">{project.title}</div>
                        <div className="text-xs text-gray-500">{project.currentStep}</div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm">{project.ministry}</td>
                    <td className="py-3 px-4">
                      <Badge className={getStatusColor(project.status)}>
                        {getStatusLabel(project.status)}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Badge className={getPriorityColor(project.priority)}>
                        {project.priority.toUpperCase()}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <div>
                        <div>Soumis: {project.submissionDate}</div>
                        <div className="text-xs text-gray-500">MAJ: {project.lastUpdateDate}</div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-1">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleViewProject(project.id)}
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          Voir
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleDownloadDocument(project.id)}
                        >
                          <Download className="h-3 w-3 mr-1" />
                          Docs
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

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <History className="h-5 w-5 mr-2" />
            Activités Récentes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {projects.slice(0, 5).map((project) => {
              const lastHistory = project.history[project.history.length - 1];
              return (
                <div key={project.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <FileText className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {project.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {lastHistory.userName} - {getStatusLabel(project.status)}
                    </p>
                  </div>
                  <div className="text-sm text-gray-500">
                    {lastHistory.date}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>Nouveau Projet</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-100 mb-4">Soumettre un nouveau projet de loi</p>
            <Button variant="secondary" size="sm">
              Commencer
            </Button>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Statistiques</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-100 mb-4">Voir les rapports détaillés</p>
            <Button variant="secondary" size="sm">
              Consulter
            </Button>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Support</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-purple-100 mb-4">Assistance et formation</p>
            <Button variant="secondary" size="sm">
              Contacter
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
