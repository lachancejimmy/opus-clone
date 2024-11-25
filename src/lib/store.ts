import { create } from 'zustand';

export interface Caption {
  id: string;
  startTime: number;
  endTime: number;
  text: string;
  style?: 'default' | 'highlight' | 'emphasis';
}

export interface Clip {
  id: string;
  startTime: number;
  endTime: number;
  type: 'video' | 'audio' | 'caption';
  content: string;
}

export interface Project {
  id: string;
  name: string;
  thumbnail?: string;
  createdAt: Date;
  clips: Clip[];
  duration: number;
  videoUrl?: string;
  captions: Caption[];
}

interface EditorState {
  projects: Project[];
  currentProject?: Project;
  isProcessing: boolean;
  addProject: (project: Project) => void;
  setCurrentProject: (project: Project) => void;
  addCaptions: (projectId: string, captions: Caption[]) => void;
  setIsProcessing: (isProcessing: boolean) => void;
}

export const useEditorStore = create<EditorState>((set, get) => ({
  projects: [],
  currentProject: undefined,
  isProcessing: false,

  addProject: (project) => {
    set((state) => ({
      projects: [...state.projects, project],
    }));
  },

  setCurrentProject: (project) => {
    set({ currentProject: project });
  },

  addCaptions: (projectId, captions) => {
    const state = get();
    const project = state.projects.find((p) => p.id === projectId);

    if (!project) {
      console.error(`Erreur : Projet avec ID ${projectId} introuvable.`);
      return;
    }

    const updatedProject = {
      ...project,
      captions: [...project.captions, ...captions],
    };

    set((state) => ({
      projects: state.projects.map((p) =>
        p.id === projectId ? updatedProject : p
      ),
    }));
  },

  setIsProcessing: (isProcessing) => {
    set({ isProcessing });
  },
}));
