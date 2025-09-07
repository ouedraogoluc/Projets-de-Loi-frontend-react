
import React from 'react';
import { FileText } from 'lucide-react';

export function AppFooter() {
  return (
    <footer className="border-t bg-gray-50 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FileText className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-bold">LOI-FLOW DIGITAL</span>
            </div>
            <p className="text-sm text-gray-600">
              Système de transmission numérique des projets de loi du Burkina Faso
            </p>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4 text-gray-900">Liens Rapides</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Guide Utilisateur</a></li>
              <li><a href="#" className="hover:text-blue-600">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-600">Support</a></li>
              <li><a href="#" className="hover:text-blue-600">Formations</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4 text-gray-900">Contact</h5>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Direction des Systèmes d'Information</p>
              <p>Ministère de la Justice et des Droits Humains</p>
              <p>Email: support@loi-flow.gov.bf</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-6 pt-6 text-center text-sm text-gray-500">
          <p>&copy; 2024 Gouvernement du Burkina Faso. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
