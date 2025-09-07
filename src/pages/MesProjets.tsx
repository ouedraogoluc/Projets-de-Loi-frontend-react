import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Clock, CheckCircle, AlertTriangle } from "lucide-react";
import { mockProjects, getStatusLabel, getStatusColor, getPriorityColor } from "@/data/mockData";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";

const MesProjets = () => {
  const { user } = useAuth();
  
  // Filtrer les projets de l'utilisateur connecté
  const userProjects = mockProjects.filter(project => 
    project.initiatorUserId === user?.id
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Mes Projets</h1>
          <p className="text-gray-600 mt-2">
            Suivi de vos projets de loi soumis
          </p>
        </div>
        <Link to="/submit">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <FileText className="h-4 w-4 mr-2" />
            Nouveau Projet
          </Button>
        </Link>
      </div>

      <div className="grid gap-6">
        {userProjects.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <FileText className="h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Aucun projet soumis
              </h3>
              <p className="text-gray-500 text-center mb-4">
                Vous n'avez encore soumis aucun projet de loi.
              </p>
              <Link to="/submit">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Soumettre un projet
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          userProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>ID: {project.id}</span>
                      <span>Soumis le: {new Date(project.submissionDate).toLocaleDateString('fr-FR')}</span>
                      <span>Mis à jour: {new Date(project.lastUpdateDate).toLocaleDateString('fr-FR')}</span>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Badge className={getStatusColor(project.status)}>
                      {getStatusLabel(project.status)}
                    </Badge>
                    <Badge className={getPriorityColor(project.priority)}>
                      {project.priority === 'high' ? 'Haute' : project.priority === 'medium' ? 'Moyenne' : 'Basse'}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Étape actuelle</h4>
                    <div className="flex items-center space-x-2">
                      {project.status === 'renvoye_initiateur' ? (
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                      ) : project.status.includes('VALIDE') || project.status.includes('SIGNE') ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <Clock className="h-4 w-4 text-blue-500" />
                      )}
                      <span className="text-sm">{project.currentStep}</span>
                    </div>
                  </div>

                  {project.rejectionReason && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <h5 className="font-medium text-red-900 mb-1">Motif de renvoi</h5>
                      <p className="text-sm text-red-700">{project.rejectionReason}</p>
                    </div>
                  )}

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Documents</h4>
                    <div className="space-y-1">
                      {project.documents.map((doc) => (
                        <div key={doc.id} className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2">
                            <FileText className="h-4 w-4 text-gray-400" />
                            <span>{doc.name}</span>
                            <span className="text-gray-500">({doc.size})</span>
                          </div>
                          <Button variant="outline" size="sm">
                            Télécharger
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <Button variant="outline">
                      Voir détails
                    </Button>
                    {project.status === 'renvoye_initiateur' && (
                      <Link to="/submit">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          Corriger et soumettre
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default MesProjets;