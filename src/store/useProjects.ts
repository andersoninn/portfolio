import {create} from 'zustand'
import { Projects } from '@/context/Projects';

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
    active: number
    realProjects: RealProject[]
    setActive: (id: number)=> void
}


export const useProjects = create<ProjectProp>()((set) => ({
    active: 0,
    realProjects: Projects,
    setActive: (id:number)=> {
        set({active:id})
        }
    })
)

