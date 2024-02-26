import {create} from 'zustand'
import { Projects } from '@/context/projects';

interface RProject  {
        id: number;
        name: string;
        description: string;
        image: string;
        designSistemLink: string;
        websiteLink: string;
        codeLink: string;
        technologiesUsed: {
            id: string,
            technologieName: string;
            tecnologieImage: string;
                }[]; 
}

export interface RealProjectProp {

realProjects: RProject[] 

    
}




export const useProjects = create<RealProjectProp>()(() => ({
    realProjects: Projects
    })
   
)
