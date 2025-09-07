
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import AdminDashboard from './dashboards/AdminDashboard';
import MinistereInitiateurDashboard from './dashboards/MinistereInitiateurDashboard';
import SggCmDashboard from './dashboards/SggCmDashboard';
import MjdhriDashboard from './dashboards/MjdhriDashboard';

const DashboardRouter = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Accès non autorisé
          </h2>
          <p className="text-gray-600">
            Veuillez vous connecter pour accéder au système.
          </p>
        </div>
      </div>
    );
  }

  switch (user.structure) {
    case 'administration':
      return <AdminDashboard />;
    case 'ministere_initiateur':
      return <MinistereInitiateurDashboard />;
    case 'sgg_cm':
      return <SggCmDashboard />;
    case 'mjdhri':
      return <MjdhriDashboard />;
    default:
      return (
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Structure non reconnue
            </h2>
            <p className="text-gray-600">
              Votre structure ({user.structure}) n'est pas configurée dans le système.
            </p>
          </div>
        </div>
      );
  }
};

export default DashboardRouter;
