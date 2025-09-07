
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  ArrowRight,
  Eye,
  FileCheck,
  Send,
  ArrowLeft
} from 'lucide-react';
import { mockProjects, getStatusLabel, getStatusColor } from '@/data/mockData';

const SggCmDashboard = () => {
  const [projects] = useState(mockProjects);
  
  // Projets relevant du SGG-CM
  const sggProjects = projects.filter(p => 
    ['soumis', 'imputation_DLR', 'verification_DLR', 'transmission_SG_MJDHRI', 'renvoye_initiateur'].includes(p.status)
  );
  
  const stats = {
    enAttente: sggProjects.filter(p => p.status === 'soumis').length,
    dlrTraitement: sggProjects.filter(p => p.status === 'imputation_DLR').length,
    verification: sggProjects.filter(p => p.status === 'verification_DLR').length,
    transmis: sggProjects.filter(p => p.status === 'transmission_SG_MJDHRI').length,
    renvoyes: sggProjects.filter(p => p.status === 'renvoye_initiateur').length,
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Tableau de Bord - SGG-CM</h1>
        <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
          {sggProjects.length} Projets en cours
        </Badge>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Réception</CardTitle>
            <FileText className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{stats.enAttente}</div>
            <p className="text-xs text-muted-foreground">À imputer</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">DLR</CardTitle>
            <Clock className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{stats.dlrTraitement}</div>
            <p className="text-xs text-muted-foreground">En traitement DLR</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vérification</CardTitle>
            <FileCheck className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{stats.verification}</div>
            <p className="text-xs text-muted-foreground">En vérification</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Transmis</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.transmis}</div>
            <p className="text-xs text-muted-foreground">Vers MJDHRI</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Renvoyés</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{stats.renvoyes}</div>
            <p className="text-xs text-muted-foreground">Non-conformes</p>
          </CardContent>
        </Card>
      </div>

      {/* Workflow SGG-CM */}
      <Card>
        <CardHeader>
          <CardTitle>Processus SGG-CM</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center justify-between space-y-2 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <span>Réception SGA</span>
            </div>
            <ArrowRight className="h-4 w-4 text-gray-400" />
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <span>Imputation DLR</span>
            </div>
            <ArrowRight className="h-4 w-4 text-gray-400" />
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <span>Vérification DLR</span>
            </div>
            <ArrowRight className="h-4 w-4 text-gray-400" />
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <span>Transmission MJDHRI</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projects Table */}
      <Card>
        <CardHeader>
          <CardTitle>Projets en Traitement</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Projet</th>
                  <th className="text-left py-3 px-4 font-medium">Ministère</th>
                  <th className="text-left py-3 px-4 font-medium">Statut</th>
                  <th className="text-left py-3 px-4 font-medium">Service</th>
                  <th className="text-left py-3 px-4 font-medium">Date</th>
                  <th className="text-left py-3 px-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sggProjects.slice(0, 10).map((project) => (
                  <tr key={project.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div>
                        <div className="font-medium text-sm">{project.title}</div>
                        <div className="text-xs text-gray-500">ID: {project.id}</div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm">{project.ministry}</td>
                    <td className="py-3 px-4">
                      <Badge className={getStatusColor(project.status)}>
                        {getStatusLabel(project.status)}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-sm">
                      {project.status === 'soumis' ? 'SGA/SGG-CM' : 
                       project.status === 'imputation_DLR' ? 'DLR/SGG-CM' :
                       project.status === 'verification_DLR' ? 'DLR/SGG-CM' : 'SGA/SGG-CM'}
                    </td>
                    <td className="py-3 px-4 text-sm">{project.lastUpdateDate}</td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-1">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3 mr-1" />
                          Voir
                        </Button>
                        {project.status === 'soumis' && (
                          <Button variant="outline" size="sm" className="text-blue-600 border-blue-300">
                            <Send className="h-3 w-3 mr-1" />
                            Imputer
                          </Button>
                        )}
                        {project.status === 'verification_DLR' && (
                          <>
                            <Button variant="outline" size="sm" className="text-green-600 border-green-300">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Valider
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-600 border-red-300">
                              <ArrowLeft className="h-3 w-3 mr-1" />
                              Renvoyer
                            </Button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>Réception</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-100 mb-4">{stats.enAttente} projet(s) en attente d'imputation</p>
            <Button variant="secondary" size="sm">
              Traiter
            </Button>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileCheck className="h-5 w-5" />
              <span>Vérification</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-orange-100 mb-4">{stats.verification} projet(s) en vérification DLR</p>
            <Button variant="secondary" size="sm">
              Examiner
            </Button>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Send className="h-5 w-5" />
              <span>Transmission</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-100 mb-4">Projets prêts pour transmission</p>
            <Button variant="secondary" size="sm">
              Consulter
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SggCmDashboard;
