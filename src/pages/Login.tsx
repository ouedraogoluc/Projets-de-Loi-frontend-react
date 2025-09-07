
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { mockUsers } from '@/data/mockUsers';
import { User, Shield, Building, Scale } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const success = await login(email, password);
      if (success) {
        navigate('/dashboard');
      } else {
        setError('Email ou mot de passe incorrect');
      }
    } catch (err) {
      setError('Erreur de connexion');
    } finally {
      setLoading(false);
    }
  };

  const handleTestLogin = (testEmail: string) => {
    setEmail(testEmail);
    setPassword('test123');
  };

  const getStructureIcon = (structure: string) => {
    switch (structure) {
      case 'administration':
        return <Shield className="h-4 w-4" />;
      case 'ministere_initiateur':
        return <Building className="h-4 w-4" />;
      case 'sgg_cm':
        return <User className="h-4 w-4" />;
      case 'mjdhri':
        return <Scale className="h-4 w-4" />;
      default:
        return <User className="h-4 w-4" />;
    }
  };

  const getStructureLabel = (structure: string) => {
    const labels = {
      administration: 'Administration',
      ministere_initiateur: 'Ministère Initiateur',
      sgg_cm: 'SGG-CM',
      mjdhri: 'MJDHRI'
    };
    return labels[structure as keyof typeof labels] || structure;
  };

  const getStructureColor = (structure: string) => {
    const colors = {
      administration: 'bg-purple-100 text-purple-800',
      ministere_initiateur: 'bg-blue-100 text-blue-800',
      sgg_cm: 'bg-green-100 text-green-800',
      mjdhri: 'bg-orange-100 text-orange-800'
    };
    return colors[structure as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formulaire de connexion */}
        <Card className="w-full max-w-md mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Connexion
            </CardTitle>
            <p className="text-gray-600">
              Système de suivi des projets de loi
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre.email@gouv.bf"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mot de passe"
                  required
                />
              </div>
              {error && (
                <div className="text-red-600 text-sm bg-red-50 p-2 rounded">
                  {error}
                </div>
              )}
              <Button 
                type="submit" 
                className="w-full"
                disabled={loading}
              >
                {loading ? 'Connexion...' : 'Se connecter'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Comptes de test */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">
              Comptes de Test Disponibles
            </CardTitle>
            <p className="text-gray-600">
              Cliquez sur un compte pour l'utiliser (mot de passe: test123)
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockUsers.map((user) => (
                <div
                  key={user.id}
                  className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => handleTestLogin(user.email)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {getStructureIcon(user.structure)}
                      <span className="font-medium">
                        {user.prenom} {user.nom}
                      </span>
                    </div>
                    <Badge className={getStructureColor(user.structure)}>
                      {getStructureLabel(user.structure)}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-600 mb-1">
                    {user.email}
                  </div>
                  <div className="text-sm text-gray-500">
                    Service: {user.service}
                    {user.ministere && (
                      <span className="block">Ministère: {user.ministere}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Guide d'utilisation:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• <strong>Administration:</strong> Gestion des utilisateurs et supervision</li>
                <li>• <strong>Ministère Initiateur:</strong> Soumission et suivi des projets</li>
                <li>• <strong>SGG-CM:</strong> Vérification et transmission</li>
                <li>• <strong>MJDHRI:</strong> Validation finale et signature</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
