
import { User } from '@/types/auth';

export const mockUsers: User[] = [
  // Administration
  {
    id: 'admin_001',
    email: 'admin@gouv.bf',
    nom: 'OUEDRAOGO',
    prenom: 'Aminata',
    role: 'admin',
    structure: 'administration',
    service: 'Direction Technique',
    dateCreation: '2024-01-15',
    dernierConnexion: '2024-12-26T10:30:00Z',
    actif: true
  },
  
  // Ministères initiateurs
  {
    id: 'min_001',
    email: 'education@gouv.bf',
    nom: 'SAWADOGO',
    prenom: 'Jean-Baptiste',
    role: 'ministere_initiateur',
    structure: 'ministere_initiateur',
    ministere: 'Ministère de l\'Éducation Nationale',
    service: 'Secrétariat Général',
    dateCreation: '2024-02-01',
    dernierConnexion: '2024-12-25T16:45:00Z',
    actif: true
  },
  {
    id: 'min_002',
    email: 'sante@gouv.bf',
    nom: 'KABORE',
    prenom: 'Marie',
    role: 'ministere_initiateur',
    structure: 'ministere_initiateur',
    ministere: 'Ministère de la Santé',
    service: 'Direction des Affaires Juridiques',
    dateCreation: '2024-02-05',
    dernierConnexion: '2024-12-24T14:20:00Z',
    actif: true
  },
  
  // SGG-CM
  {
    id: 'sgg_001',
    email: 'sga.sggcm@gouv.bf',
    nom: 'ZOUNGRANA',
    prenom: 'Paul',
    role: 'sgg_cm',
    structure: 'sgg_cm',
    service: 'SGA/SGG-CM',
    dateCreation: '2024-01-20',
    dernierConnexion: '2024-12-26T09:15:00Z',
    actif: true
  },
  {
    id: 'sgg_002',
    email: 'dlr.sggcm@gouv.bf',
    nom: 'TIENDREBEOGO',
    prenom: 'Fatimata',
    role: 'sgg_cm',
    structure: 'sgg_cm',
    service: 'DLR/SGG-CM',
    dateCreation: '2024-01-22',
    dernierConnexion: '2024-12-25T11:30:00Z',
    actif: true
  },
  
  // MJDHRI
  {
    id: 'mjd_001',
    email: 'sg.mjdhri@gouv.bf',
    nom: 'COMPAORE',
    prenom: 'Michel',
    role: 'mjdhri',
    structure: 'mjdhri',
    service: 'SG/MJDHRI',
    dateCreation: '2024-01-25',
    dernierConnexion: '2024-12-26T08:45:00Z',
    actif: true
  },
  {
    id: 'mjd_002',
    email: 'dgri.mjdhri@gouv.bf',
    nom: 'SANKARA',
    prenom: 'Aïssata',
    role: 'mjdhri',
    structure: 'mjdhri',
    service: 'DGRI/MJDHRI',
    dateCreation: '2024-01-28',
    dernierConnexion: '2024-12-25T15:20:00Z',
    actif: true
  },
  {
    id: 'mjd_003',
    email: 'drip.mjdhri@gouv.bf',
    nom: 'TAPSOBA',
    prenom: 'Abdoulaye',
    role: 'mjdhri',
    structure: 'mjdhri',
    service: 'DRIP/MJDHRI',
    dateCreation: '2024-02-02',
    dernierConnexion: '2024-12-24T13:10:00Z',
    actif: true
  }
];
