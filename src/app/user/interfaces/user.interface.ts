export interface User {
  id: string;
  createdTime: string; // ISO date string
  fields: {
    'Nombre completo': string;
    'Proyecto Activo': string[]; // IDs de proyectos
    'Fecha de alta': string; // ISO date string (YYYY-MM-DD)
    'Fecha de nacimiento': string; // ISO date string (YYYY-MM-DD)
    'Correo Moby': string;
    'Nombre - Proyecto Activo': string[]; // Nombres de proyectos
    'Referente Activo'?: string[]; // IDs de referentes (opcional)
    'Nombre completo - Referente Activo'?: string[]; // Nombres de referentes (opcional)
    'Personas a cargo'?: string[]; // IDs de personas a cargo (solo si es referente)
    'Nombre completo - Personas a cargo'?: string[]; // Nombres de personas a cargo (opcional)
  };
}