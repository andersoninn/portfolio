import {create} from 'zustand'
import { DataRealProjects } from '@/context/DataRealProjects';
import { DataStudyProjects } from '@/context/DataStudyProjects';

interface DataProjectProps {
        id: number;
        name: string;
        description: string;
        image: string;
        designSistemLink: string;
        oficialWebsiteLink: string;
        codeLink: string;
        technologiesUsed: {
            id: string,
            technologieName: string;
            tecnologieImage: string;
                }[]; 
}

export interface ProjectProp {
    realProjects: DataProjectProps[]
    activeRealProjects: number
    setActiveRealProjects: (id: number)=> void

    studyProjects: DataProjectProps[]
    activeStudyProjects: number
    setActiveStudyProjects: (id: number)=> void
}

export const useProjects = create<ProjectProp>()((set) => ({
    realProjects: DataRealProjects,
    activeRealProjects: 0,
    setActiveRealProjects: (id:number)=> {
        set({activeRealProjects:id})
        },

    studyProjects: DataStudyProjects,
    activeStudyProjects: 0,
    setActiveStudyProjects: (id:number)=> {
        set({activeStudyProjects:id})
        }
    })
    
)

