import {create} from 'zustand'
import { Projects } from '@/context/DataRealProjects';

interface RealProject {
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
    realProjects: RealProject[]
    activeRealProjects: number
    setActiveRealProjects: (id: number)=> void

    activeStudyProjects: number
    setActiveStudyProjects: (id: number)=> void
}


export const useProjects = create<ProjectProp>()((set) => ({
    realProjects: Projects,
    activeRealProjects: 0,
    setActiveRealProjects: (id:number)=> {
        set({activeRealProjects:id})
        },

    activeStudyProjects: 0,
    setActiveStudyProjects: (id:number)=> {
        set({activeStudyProjects:id})
        }
    })
    
)

