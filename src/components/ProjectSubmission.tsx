
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Upload, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  Info,
  Download
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ProjectSubmission = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: '',
    ministry: '',
    category: '',
    priority: '',
    description: '',
    motivationExpose: '',
    amendments: '',
    contactPerson: '',
    contactEmail: '',
    contactPhone: ''
  });

  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles(prev => [...prev, ...selectedFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Projet soumis avec succès",
      description: "Votre projet de loi a été enregistré et transmis au SGG-CM.",
    });

    // Reset form
    setFormData({
      title: '',
      ministry: '',
      category: '',
      priority: '',
      description: '',
      motivationExpose: '',
      amendments: '',
      contactPerson: '',
      contactEmail: '',
      contactPhone: ''
    });
    setFiles([]);
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-blue-900">
            <FileText className="h-6 w-6" />
            <span>Soumission d'un Projet de Loi</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              Veuillez remplir tous les champs obligatoires et joindre la version électronique modifiable du projet de loi.
              Le projet sera automatiquement transmis au SGG-CM après validation.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Informations Générales</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Titre du Projet de Loi *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="Ex: Projet de loi sur..."
                  required
                />
              </div>
              <div>
                <Label htmlFor="ministry">Ministère Initiateur *</Label>
                <Select value={formData.ministry} onValueChange={(value) => handleInputChange('ministry', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner le ministère" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="transition-digitale">Ministère de la Transition Digitale</SelectItem>
                    <SelectItem value="education">Ministère de l'Education Nationale</SelectItem>
                    <SelectItem value="sante">Ministère de la Santé</SelectItem>
                    <SelectItem value="justice">Ministère de la Justice</SelectItem>
                    <SelectItem value="economie">Ministère de l'Économie</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="category">Catégorie *</Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner la catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="economique">Économique et Financière</SelectItem>
                    <SelectItem value="sociale">Sociale et Culturelle</SelectItem>
                    <SelectItem value="securite">Sécurité et Défense</SelectItem>
                    <SelectItem value="institutionnelle">Institutionnelle</SelectItem>
                    <SelectItem value="environnement">Environnement</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="priority">Priorité *</Label>
                <Select value={formData.priority} onValueChange={(value) => handleInputChange('priority', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner la priorité" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">Haute</SelectItem>
                    <SelectItem value="medium">Moyenne</SelectItem>
                    <SelectItem value="low">Basse</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="description">Description du Projet *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Décrivez brièvement l'objet et les objectifs du projet de loi..."
                rows={4}
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Detailed Content */}
        <Card>
          <CardHeader>
            <CardTitle>Contenu Détaillé</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="motivationExpose">Exposé des Motifs *</Label>
              <Textarea
                id="motivationExpose"
                value={formData.motivationExpose}
                onChange={(e) => handleInputChange('motivationExpose', e.target.value)}
                placeholder="Exposé détaillé des motifs justifiant le projet de loi..."
                rows={6}
                required
              />
            </div>

            <div>
              <Label htmlFor="amendments">Amendements du Conseil des Ministres</Label>
              <Textarea
                id="amendments"
                value={formData.amendments}
                onChange={(e) => handleInputChange('amendments', e.target.value)}
                placeholder="Décrivez les amendements apportés suite au Conseil des Ministres (si applicable)..."
                rows={4}
              />
            </div>
          </CardContent>
        </Card>

        {/* File Upload */}
        <Card>
          <CardHeader>
            <CardTitle>Documents Joints</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="mt-4">
                <Label htmlFor="file-upload" className="cursor-pointer">
                  <span className="text-sm font-medium text-blue-600 hover:text-blue-500">
                    Cliquez pour télécharger
                  </span>
                  <span className="text-sm text-gray-500"> ou glissez-déposez vos fichiers</span>
                </Label>
                <Input
                  id="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={handleFileUpload}
                  multiple
                  accept=".pdf,.doc,.docx"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Formats acceptés: PDF, DOC, DOCX (Max 10MB par fichier)
              </p>
            </div>

            {files.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium">Fichiers sélectionnés:</h4>
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{file.name}</span>
                      <span className="text-xs text-gray-500">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                    </div>
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={() => removeFile(index)}
                    >
                      Supprimer
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Personne de Contact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="contactPerson">Nom Complet *</Label>
                <Input
                  id="contactPerson"
                  value={formData.contactPerson}
                  onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                  placeholder="Nom et prénom"
                  required
                />
              </div>
              <div>
                <Label htmlFor="contactEmail">Email Professionnel *</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  value={formData.contactEmail}
                  onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                  placeholder="email@ministere.gov.bf"
                  required
                />
              </div>
              <div>
                <Label htmlFor="contactPhone">Téléphone</Label>
                <Input
                  id="contactPhone"
                  value={formData.contactPhone}
                  onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                  placeholder="+226 XX XX XX XX"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <CheckCircle className="h-4 w-4" />
                <span>Tous les champs obligatoires (*) doivent être remplis</span>
              </div>
              <div className="flex space-x-4">
                <Button type="button" variant="outline">
                  Sauvegarder Brouillon
                </Button>
                <Button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700">
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Soumission en cours...
                    </>
                  ) : (
                    <>
                      <Upload className="h-4 w-4 mr-2" />
                      Soumettre le Projet
                    </>
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default ProjectSubmission;
