
import React from 'react';
import { FileText, Users, Settings, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-yellow-400" />
              <div>
                <h1 className="text-xl font-bold">LOI-FLOW</h1>
                <p className="text-xs text-blue-200">Système de Transmission des Projets de Loi</p>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                isActive('/') ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-800'
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Accueil</span>
            </Link>
            
            <Link 
              to="/dashboard" 
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                isActive('/dashboard') ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-800'
              }`}
            >
              <FileText className="h-4 w-4" />
              <span>Tableau de Bord</span>
            </Link>
            
            <Link 
              to="/submit" 
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                isActive('/submit') ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-800'
              }`}
            >
              <FileText className="h-4 w-4" />
              <span>Soumettre</span>
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span className="text-sm">Ministère Utilisateur</span>
            </div>
            <button className="p-2 rounded-full hover:bg-blue-800 transition-colors">
              <Settings className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
