
// Types pour le système de projets de loi
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'ministere' | 'sga_sggcm' | 'dlr_sggcm' | 'sg_mjdhri' | 'dgri_mjdhri' | 'drip_mjdhri' | 'ministre_mjdhri' | 'admin';
  ministry?: string;
}

export interface Project {
  id: string;
  title: string;
  ministry: string;
  initiatorUserId: string;
  status: ProjectStatus;
  currentStep: string;
  submissionDate: string;
  lastUpdateDate: string;
  priority: 'high' | 'medium' | 'low';
  documents: Document[];
  history: StatusHistory[];
  observations?: string;
  rejectionReason?: string;
}

export interface Document {
  id: string;
  name: string;
  type: 'projet_loi' | 'expose_motifs' | 'lettre_transmission' | 'bordereau';
  uploadDate: string;
  size: string;
  url: string;
}

export interface StatusHistory {
  id: string;
  status: ProjectStatus;
  date: string;
  userId: string;
  userName: string;
  userRole: string;
  observations?: string;
}

export type ProjectStatus = 
  | 'soumis'
  | 'imputation_DLR'
  | 'verification_DLR'
  | 'transmission_SG_MJDHRI'
  | 'renvoye_initiateur'
  | 'imputation_DGRI'
  | 'imputation_DRIP'
  | 'VALIDE_DRIP'
  | 'VALIDE_SG-MJDHRI'
  | 'SIGNE_MJDHRI'
  | 'transmis_parlement'
  | 'archive';

// Données utilisateurs mockées
export const mockUsers: User[] = [
  { id: '1', name: 'Ministère de la Santé', email: 'sante@gov.bf', role: 'ministere', ministry: 'Ministère de la Santé' },
  { id: '2', name: 'Ministère de l\'Education', email: 'education@gov.bf', role: 'ministere', ministry: 'Ministère de l\'Education Nationale' },
  { id: '3', name: 'Ministère de la Transition Digitale', email: 'digital@gov.bf', role: 'ministere', ministry: 'Ministère de la Transition Digitale' },
  { id: '4', name: 'SGA SGG-CM', email: 'sga@sggcm.gov.bf', role: 'sga_sggcm' },
  { id: '5', name: 'DLR SGG-CM', email: 'dlr@sggcm.gov.bf', role: 'dlr_sggcm' },
  { id: '6', name: 'SG MJDHRI', email: 'sg@mjdhri.gov.bf', role: 'sg_mjdhri' },
  { id: '7', name: 'DGRI MJDHRI', email: 'dgri@mjdhri.gov.bf', role: 'dgri_mjdhri' },
  { id: '8', name: 'DRIP MJDHRI', email: 'drip@mjdhri.gov.bf', role: 'drip_mjdhri' },
  { id: '9', name: 'Ministre MJDHRI', email: 'ministre@mjdhri.gov.bf', role: 'ministre_mjdhri' }
];

// Données projets mockées
export const mockProjects: Project[] = [
  {
    id: 'PL-001',
    title: 'Projet de loi sur la protection des données personnelles',
    ministry: 'Ministère de la Transition Digitale',
    initiatorUserId: '3',
    status: 'verification_DLR',
    currentStep: 'Vérification DLR/SGG-CM',
    submissionDate: '2024-12-20',
    lastUpdateDate: '2024-12-22',
    priority: 'high',
    documents: [
      { id: 'doc1', name: 'Projet_loi_donnees_personnelles.docx', type: 'projet_loi', uploadDate: '2024-12-20', size: '2.5 MB', url: '#' },
      { id: 'doc2', name: 'Expose_motifs_donnees.docx', type: 'expose_motifs', uploadDate: '2024-12-20', size: '1.8 MB', url: '#' }
    ],
    history: [
      { id: 'h1', status: 'soumis', date: '2024-12-20', userId: '3', userName: 'Ministère de la Transition Digitale', userRole: 'ministere' },
      { id: 'h2', status: 'imputation_DLR', date: '2024-12-21', userId: '4', userName: 'SGA SGG-CM', userRole: 'sga_sggcm' },
      { id: 'h3', status: 'verification_DLR', date: '2024-12-22', userId: '5', userName: 'DLR SGG-CM', userRole: 'dlr_sggcm' }
    ]
  },
  {
    id: 'PL-002',
    title: 'Projet de loi sur l\'éducation numérique',
    ministry: 'Ministère de l\'Education Nationale',
    initiatorUserId: '2',
    status: 'VALIDE_DRIP',
    currentStep: 'Validation DRIP/MJDHRI',
    submissionDate: '2024-12-18',
    lastUpdateDate: '2024-12-23',
    priority: 'medium',
    documents: [
      { id: 'doc3', name: 'Projet_loi_education_numerique.docx', type: 'projet_loi', uploadDate: '2024-12-18', size: '3.1 MB', url: '#' },
      { id: 'doc4', name: 'Expose_motifs_education.docx', type: 'expose_motifs', uploadDate: '2024-12-18', size: '2.2 MB', url: '#' }
    ],
    history: [
      { id: 'h5', status: 'soumis', date: '2024-12-18', userId: '2', userName: 'Ministère de l\'Education', userRole: 'ministere' },
      { id: 'h6', status: 'imputation_DLR', date: '2024-12-19', userId: '4', userName: 'SGA SGG-CM', userRole: 'sga_sggcm' },
      { id: 'h7', status: 'verification_DLR', date: '2024-12-19', userId: '5', userName: 'DLR SGG-CM', userRole: 'dlr_sggcm' },
      { id: 'h8', status: 'transmission_SG_MJDHRI', date: '2024-12-20', userId: '4', userName: 'SGA SGG-CM', userRole: 'sga_sggcm' },
      { id: 'h9', status: 'imputation_DGRI', date: '2024-12-21', userId: '6', userName: 'SG MJDHRI', userRole: 'sg_mjdhri' },
      { id: 'h10', status: 'imputation_DRIP', date: '2024-12-22', userId: '7', userName: 'DGRI MJDHRI', userRole: 'dgri_mjdhri' },
      { id: 'h11', status: 'VALIDE_DRIP', date: '2024-12-23', userId: '8', userName: 'DRIP MJDHRI', userRole: 'drip_mjdhri' }
    ]
  },
  {
    id: 'PL-003',
    title: 'Projet de loi sur la santé publique',
    ministry: 'Ministère de la Santé',
    initiatorUserId: '1',
    status: 'renvoye_initiateur',
    currentStep: 'Amendements requis',
    submissionDate: '2024-12-15',
    lastUpdateDate: '2024-12-21',
    priority: 'high',
    rejectionReason: 'Modifications nécessaires sur les articles 15 et 22 concernant les dispositions financières',
    documents: [
      { id: 'doc5', name: 'Projet_loi_sante_publique.docx', type: 'projet_loi', uploadDate: '2024-12-15', size: '4.2 MB', url: '#' },
      { id: 'doc6', name: 'Expose_motifs_sante.docx', type: 'expose_motifs', uploadDate: '2024-12-15', size: '2.8 MB', url: '#' }
    ],
    history: [
      { id: 'h12', status: 'soumis', date: '2024-12-15', userId: '1', userName: 'Ministère de la Santé', userRole: 'ministere' },
      { id: 'h13', status: 'imputation_DLR', date: '2024-12-16', userId: '4', userName: 'SGA SGG-CM', userRole: 'sga_sggcm' },
      { id: 'h14', status: 'verification_DLR', date: '2024-12-17', userId: '5', userName: 'DLR SGG-CM', userRole: 'dlr_sggcm', observations: 'Amendements nécessaires' },
      { id: 'h15', status: 'renvoye_initiateur', date: '2024-12-21', userId: '4', userName: 'SGA SGG-CM', userRole: 'sga_sggcm', observations: 'Modifications nécessaires sur les articles 15 et 22' }
    ]
  },
  {
    id: 'PL-004',
    title: 'Projet de loi sur la cybersécurité',
    ministry: 'Ministère de la Transition Digitale',
    initiatorUserId: '3',
    status: 'SIGNE_MJDHRI',
    currentStep: 'Signé par le Ministre MJDHRI',
    submissionDate: '2024-12-10',
    lastUpdateDate: '2024-12-24',
    priority: 'high',
    documents: [
      { id: 'doc7', name: 'Projet_loi_cybersecurite.docx', type: 'projet_loi', uploadDate: '2024-12-10', size: '3.8 MB', url: '#' },
      { id: 'doc8', name: 'Expose_motifs_cybersecurite.docx', type: 'expose_motifs', uploadDate: '2024-12-10', size: '2.1 MB', url: '#' },
      { id: 'doc9', name: 'Lettre_transmission_cybersecurite.pdf', type: 'lettre_transmission', uploadDate: '2024-12-24', size: '450 KB', url: '#' }
    ],
    history: [
      { id: 'h16', status: 'soumis', date: '2024-12-10', userId: '3', userName: 'Ministère de la Transition Digitale', userRole: 'ministere' },
      { id: 'h17', status: 'imputation_DLR', date: '2024-12-11', userId: '4', userName: 'SGA SGG-CM', userRole: 'sga_sggcm' },
      { id: 'h18', status: 'verification_DLR', date: '2024-12-12', userId: '5', userName: 'DLR SGG-CM', userRole: 'dlr_sggcm' },
      { id: 'h19', status: 'transmission_SG_MJDHRI', date: '2024-12-13', userId: '4', userName: 'SGA SGG-CM', userRole: 'sga_sggcm' },
      { id: 'h20', status: 'imputation_DGRI', date: '2024-12-14', userId: '6', userName: 'SG MJDHRI', userRole: 'sg_mjdhri' },
      { id: 'h21', status: 'imputation_DRIP', date: '2024-12-15', userId: '7', userName: 'DGRI MJDHRI', userRole: 'dgri_mjdhri' },
      { id: 'h22', status: 'VALIDE_DRIP', date: '2024-12-16', userId: '8', userName: 'DRIP MJDHRI', userRole: 'drip_mjdhri' },
      { id: 'h23', status: 'VALIDE_SG-MJDHRI', date: '2024-12-17', userId: '6', userName: 'SG MJDHRI', userRole: 'sg_mjdhri' },
      { id: 'h24', status: 'SIGNE_MJDHRI', date: '2024-12-24', userId: '9', userName: 'Ministre MJDHRI', userRole: 'ministre_mjdhri' }
    ]
  },
  {
    id: 'PL-005',
    title: 'Projet de loi sur l\'environnement',
    ministry: 'Ministère de l\'Education Nationale',
    initiatorUserId: '2',
    status: 'soumis',
    currentStep: 'Soumis - En attente d\'imputation',
    submissionDate: '2024-12-25',
    lastUpdateDate: '2024-12-25',
    priority: 'medium',
    documents: [
      { id: 'doc10', name: 'Projet_loi_environnement.docx', type: 'projet_loi', uploadDate: '2024-12-25', size: '2.8 MB', url: '#' }
    ],
    history: [
      { id: 'h25', status: 'soumis', date: '2024-12-25', userId: '2', userName: 'Ministère de l\'Education', userRole: 'ministere' }
    ]
  },
  {
    id: 'PL-006',
    title: 'Projet de loi sur la digitalisation',
    ministry: 'Ministère de la Santé',
    initiatorUserId: '1',
    status: 'transmission_SG_MJDHRI',
    currentStep: 'Transmis au SG/MJDHRI',
    submissionDate: '2024-12-22',
    lastUpdateDate: '2024-12-25',
    priority: 'low',
    documents: [
      { id: 'doc11', name: 'Projet_loi_digitalisation.docx', type: 'projet_loi', uploadDate: '2024-12-22', size: '3.2 MB', url: '#' }
    ],
    history: [
      { id: 'h26', status: 'soumis', date: '2024-12-22', userId: '1', userName: 'Ministère de la Santé', userRole: 'ministere' },
      { id: 'h27', status: 'imputation_DLR', date: '2024-12-23', userId: '4', userName: 'SGA SGG-CM', userRole: 'sga_sggcm' },
      { id: 'h28', status: 'verification_DLR', date: '2024-12-24', userId: '5', userName: 'DLR SGG-CM', userRole: 'dlr_sggcm' },
      { id: 'h29', status: 'transmission_SG_MJDHRI', date: '2024-12-25', userId: '4', userName: 'SGA SGG-CM', userRole: 'sga_sggcm' }
    ]
  }
];

// Utilitaires pour les données
export const getStatusLabel = (status: ProjectStatus): string => {
  const statusLabels: Record<ProjectStatus, string> = {
    'soumis': 'Soumis',
    'imputation_DLR': 'Imputation DLR',
    'verification_DLR': 'Vérification DLR',
    'transmission_SG_MJDHRI': 'Transmis SG/MJDHRI',
    'renvoye_initiateur': 'Renvoyé à l\'initiateur',
    'imputation_DGRI': 'Imputation DGRI',
    'imputation_DRIP': 'Imputation DRIP',
    'VALIDE_DRIP': 'Validé DRIP',
    'VALIDE_SG-MJDHRI': 'Validé SG/MJDHRI',
    'SIGNE_MJDHRI': 'Signé MJDHRI',
    'transmis_parlement': 'Transmis au Parlement',
    'archive': 'Archivé'
  };
  return statusLabels[status] || status;
};

export const getStatusColor = (status: ProjectStatus): string => {
  if (status.includes('renvoye')) return 'bg-red-100 text-red-800';
  if (status.includes('VALIDE') || status.includes('SIGNE')) return 'bg-green-100 text-green-800';
  if (status.includes('verification')) return 'bg-yellow-100 text-yellow-800';
  if (status.includes('imputation') || status.includes('transmission')) return 'bg-blue-100 text-blue-800';
  if (status === 'soumis') return 'bg-orange-100 text-orange-800';
  return 'bg-gray-100 text-gray-800';
};

export const getPriorityColor = (priority: string): string => {
  switch (priority) {
    case 'high': return 'bg-red-100 text-red-800';
    case 'medium': return 'bg-yellow-100 text-yellow-800';
    case 'low': return 'bg-green-100 text-green-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

// Statistiques calculées
export const getProjectStats = () => {
  const total = mockProjects.length;
  const inProgress = mockProjects.filter(p => 
    !['transmis_parlement', 'archive', 'renvoye_initiateur'].includes(p.status)
  ).length;
  const validated = mockProjects.filter(p => 
    p.status.includes('VALIDE') || p.status.includes('SIGNE')
  ).length;
  const rejected = mockProjects.filter(p => 
    p.status.includes('renvoye')
  ).length;

  return { total, inProgress, validated, rejected };
};
