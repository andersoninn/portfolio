import { create } from 'zustand';
import { DataRealProjects } from '@/context/DataRealProjects';

interface DataProjectProps {
  id: number;
  name: string;
  description: string;
  image: string;
  designSistemLink: string;
  oficialWebsiteLink: string;
  codeLink: string;
  codeType: string;
  technologiesUsed: {
    id: string;
    technologieName: string;
    tecnologieImage: string;
  }[];
}

export interface ProjectProp {
  realProjects: DataProjectProps[];
  activeRealProjects: number;
  setActiveRealProjects: (id: number) => void;
}

export const useProjects = create<ProjectProp>()((set) => ({
  realProjects: DataRealProjects,
  activeRealProjects: 0,
  setActiveRealProjects: (id: number) => {
    set({ activeRealProjects: id });
  },
}));
