
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Users, 
  Shield, 
  CheckCircle, 
  Clock,
  ArrowRight,
  Building,
  Scale
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Scale className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Système de Suivi des Projets de Loi
                </h1>
                <p className="text-sm text-gray-600">
                  Gouvernement du Burkina Faso
                </p>
              </div>
            </div>
            <Link to="/login">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Users className="h-4 w-4 mr-2" />
                Se connecter
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Plateforme de Gestion des Projets de Loi
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Solution numérique intégrée pour le suivi, la vérification et la transmission 
            des projets de loi entre les différentes structures gouvernementales.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/login">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Accéder au système
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Fonctionnalités par Structure
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Shield className="h-8 w-8 text-purple-600" />
                  <Badge className="bg-purple-100 text-purple-800">Administration</Badge>
                </div>
                <CardTitle className="text-lg">Gestion du Système</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Gestion des utilisateurs</li>
                  <li>• Attribution des rôles</li>
                  <li>• Supervision globale</li>
                  <li>• Support technique</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Building className="h-8 w-8 text-blue-600" />
                  <Badge className="bg-blue-100 text-blue-800">Ministères</Badge>
                </div>
                <CardTitle className="text-lg">Soumission</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Soumission des projets</li>
                  <li>• Suivi en temps réel</li>
                  <li>• Gestion des amendements</li>
                  <li>• Notifications automatiques</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Users className="h-8 w-8 text-green-600" />
                  <Badge className="bg-green-100 text-green-800">SGG-CM</Badge>
                </div>
                <CardTitle className="text-lg">Vérification</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Réception et imputation</li>
                  <li>• Vérification des amendements</li>
                  <li>• Transmission ou renvoi</li>
                  <li>• Archivage électronique</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Scale className="h-8 w-8 text-orange-600" />
                  <Badge className="bg-orange-100 text-orange-800">MJDHRI</Badge>
                </div>
                <CardTitle className="text-lg">Validation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Vérification formelle</li>
                  <li>• Validation finale</li>
                  <li>• Signature officielle</li>
                  <li>• Transmission au Parlement</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">Projets Suivis</h4>
              <p className="text-gray-600">Suivi numérique complet</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">Validation</h4>
              <p className="text-gray-600">Processus sécurisé</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">Temps Réel</h4>
              <p className="text-gray-600">Suivi instantané</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Système de Suivi des Projets de Loi - Gouvernement du Burkina Faso
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
