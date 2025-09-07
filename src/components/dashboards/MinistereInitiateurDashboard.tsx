
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Plus,
  Send,
  Edit,
  Eye,
  ArrowRight
} from 'lucide-react';
import { mockProjects, getStatusLabel, getStatusColor } from '@/data/mockData';

const MinistereInitiateurDashboard = () => {
  const [projects] = useState(mockProjects.slice(0, 8)); // Limiter pour la démo
  
  const myProjects = projects.filter(p => 
    p.ministry === 'Ministère de l\'Éducation Nationale' || 
    p.ministry === 'Ministère de la Santé'
  );
  
  const stats = {
    total: myProjects.length,
    enAttente: myProjects.filter(p => p.status === 'soumis').length,
    enTraitement: myProjects.filter(p => ['imputation_DLR', 'verification_DLR', 'imputation_DGRI'].includes(p.status)).length,
    renvoyes: myProjects.filter(p => p.status === 'renvoye_initiateur').length,
    valides: myProjects.filter(p => p.status === 'VALIDE_SG-MJDHRI').length,
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Mes Projets de Loi</h1>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Nouveau Projet
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total</CardTitle>
            <FileText className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-xs text-muted-foreground">Projets soumis</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">En Attente</CardTitle>
            <Clock className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{stats.enAttente}</div>
            <p className="text-xs text-muted-foreground">Attente transmission</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">En Traitement</CardTitle>
            <Send className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{stats.enTraitement}</div>
            <p className="text-xs text-muted-foreground">Cours de traitement</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Renvoyés</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{stats.renvoyes}</div>
            <p className="text-xs text-muted-foreground">Corrections requises</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Validés</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.valides}</div>
            <p className="text-xs text-muted-foreground">Transmis avec succès</p>
          </CardContent>
        </Card>
      </div>

      {/* Actions rapides */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Plus className="h-5 w-5" />
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
        
        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Edit className="h-5 w-5" />
              <span>Projets à Corriger</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-orange-100 mb-4">{stats.renvoyes} projet(s) nécessitent des corrections</p>
            <Button variant="secondary" size="sm">
              Voir Détails
            </Button>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Suivi</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-100 mb-4">Suivre l'avancement de vos projets</p>
            <Button variant="secondary" size="sm">
              Consulter
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Projects Table */}
      <Card>
        <CardHeader>
          <CardTitle>Mes Projets de Loi</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Projet</th>
                  <th className="text-left py-3 px-4 font-medium">Statut</th>
                  <th className="text-left py-3 px-4 font-medium">Étape Actuelle</th>
                  <th className="text-left py-3 px-4 font-medium">Date Soumission</th>
                  <th className="text-left py-3 px-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {myProjects.map((project) => (
                  <tr key={project.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div>
                        <div className="font-medium text-sm">{project.title}</div>
                        <div className="text-xs text-gray-500">ID: {project.id}</div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge className={getStatusColor(project.status)}>
                        {getStatusLabel(project.status)}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-sm">{project.currentStep}</td>
                    <td className="py-3 px-4 text-sm">{project.submissionDate}</td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-1">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3 mr-1" />
                          Voir
                        </Button>
                        {project.status === 'renvoye_initiateur' && (
                          <Button variant="outline" size="sm" className="text-orange-600 border-orange-300">
                            <Edit className="h-3 w-3 mr-1" />
                            Corriger
                          </Button>
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

      {/* Workflow Guide */}
      <Card>
        <CardHeader>
          <CardTitle>Processus de Soumission</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center justify-between space-y-2 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <span>Rédaction</span>
            </div>
            <ArrowRight className="h-4 w-4 text-gray-400" />
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <span>Soumission</span>
            </div>
            <ArrowRight className="h-4 w-4 text-gray-400" />
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <span>SGG-CM</span>
            </div>
            <ArrowRight className="h-4 w-4 text-gray-400" />
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <span>MJDHRI</span>
            </div>
            <ArrowRight className="h-4 w-4 text-gray-400" />
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
              <span>Validation</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MinistereInitiateurDashboard;
