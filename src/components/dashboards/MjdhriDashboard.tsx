
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
  ArrowLeft,
  PenTool,
  Archive
} from 'lucide-react';
import { mockProjects, getStatusLabel, getStatusColor } from '@/data/mockData';

const MjdhriDashboard = () => {
  const [projects] = useState(mockProjects);
  
  // Projets relevant du MJDHRI
  const mjdhriProjects = projects.filter(p => 
    ['transmission_SG_MJDHRI', 'imputation_DGRI', 'imputation_DRIP', 'VALIDE_DRIP', 'VALIDE_SG-MJDHRI', 'SIGNE_MJDHRI'].includes(p.status)
  );
  
  const stats = {
    reception: mjdhriProjects.filter(p => p.status === 'transmission_SG_MJDHRI').length,
    dgriTraitement: mjdhriProjects.filter(p => p.status === 'imputation_DGRI').length,
    dripTraitement: mjdhriProjects.filter(p => p.status === 'imputation_DRIP').length,
    validesDrip: mjdhriProjects.filter(p => p.status === 'VALIDE_DRIP').length,
    validesSg: mjdhriProjects.filter(p => p.status === 'VALIDE_SG-MJDHRI').length,
    signes: mjdhriProjects.filter(p => p.status === 'SIGNE_MJDHRI').length,
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Tableau de Bord - MJDHRI</h1>
        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
          {mjdhriProjects.length} Projets en cours
        </Badge>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Réception</CardTitle>
            <FileText className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{stats.reception}</div>
            <p className="text-xs text-muted-foreground">SG/MJDHRI</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">DGRI</CardTitle>
            <Clock className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{stats.dgriTraitement}</div>
            <p className="text-xs text-muted-foreground">En traitement</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">DRIP</CardTitle>
            <FileCheck className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{stats.dripTraitement}</div>
            <p className="text-xs text-muted-foreground">Vérification forme</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Validés DRIP</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.validesDrip}</div>
            <p className="text-xs text-muted-foreground">Vers DGRI</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Validés SG</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-700" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700">{stats.validesSg}</div>
            <p className="text-xs text-muted-foreground">Vers Ministre</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Signés</CardTitle>
            <PenTool className="h-4 w-4 text-indigo-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-indigo-600">{stats.signes}</div>
            <p className="text-xs text-muted-foreground">Finalisés</p>
          </CardContent>
        </Card>
      </div>

      {/* Workflow MJDHRI */}
      <Card>
        <CardHeader>
          <CardTitle>Processus MJDHRI</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center justify-between space-y-2 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <span>SG/MJDHRI</span>
            </div>
            <ArrowRight className="h-4 w-4 text-gray-400" />
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <span>DGRI</span>
            </div>
            <ArrowRight className="h-4 w-4 text-gray-400" />
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <span>DRIP</span>
            </div>
            <ArrowRight className="h-4 w-4 text-gray-400" />
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <span>Validation</span>
            </div>
            <ArrowRight className="h-4 w-4 text-gray-400" />
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
              <span>Signature</span>
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
                {mjdhriProjects.slice(0, 10).map((project) => (
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
                      {project.status === 'transmission_SG_MJDHRI' ? 'SG/MJDHRI' : 
                       project.status === 'imputation_DGRI' ? 'DGRI/MJDHRI' :
                       project.status === 'imputation_DRIP' ? 'DRIP/MJDHRI' :
                       project.status === 'VALIDE_DRIP' ? 'DGRI/MJDHRI' :
                       project.status === 'VALIDE_SG-MJDHRI' ? 'Ministre' : 'Archivé'}
                    </td>
                    <td className="py-3 px-4 text-sm">{project.lastUpdateDate}</td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-1">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3 mr-1" />
                          Voir
                        </Button>
                        {project.status === 'transmission_SG_MJDHRI' && (
                          <Button variant="outline" size="sm" className="text-blue-600 border-blue-300">
                            <Send className="h-3 w-3 mr-1" />
                            Imputer
                          </Button>
                        )}
                        {project.status === 'imputation_DRIP' && (
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
                        {project.status === 'VALIDE_SG-MJDHRI' && (
                          <Button variant="outline" size="sm" className="text-indigo-600 border-indigo-300">
                            <PenTool className="h-3 w-3 mr-1" />
                            Signer
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

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>Réception</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-100 mb-4">{stats.reception} projet(s) reçus du SGG-CM</p>
            <Button variant="secondary" size="sm">
              Traiter
            </Button>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileCheck className="h-5 w-5" />
              <span>Vérification</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-purple-100 mb-4">{stats.dripTraitement} projet(s) en vérification DRIP</p>
            <Button variant="secondary" size="sm">
              Examiner
            </Button>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Validation</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-100 mb-4">{stats.validesSg} projet(s) prêts pour signature</p>
            <Button variant="secondary" size="sm">
              Consulter
            </Button>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Archive className="h-5 w-5" />
              <span>Archivage</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-indigo-100 mb-4">{stats.signes} projet(s) finalisés et archivés</p>
            <Button variant="secondary" size="sm">
              Consulter
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MjdhriDashboard;
