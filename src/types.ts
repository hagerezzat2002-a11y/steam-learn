
export type Language = 'en' | 'ar';

export interface QuizQuestion {
  id: string;
  question: {
    en: string;
    ar: string;
  };
  options: {
    en: string[];
    ar: string[];
  };
  correctAnswer: number;
}

export interface Lesson {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  content: {
    en: string;
    ar: string;
  };
  imageUrl?: string;
}

export interface Level {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  type: 'arduino' | 'circuit';
  lessons: Lesson[];
  quiz: QuizQuestion[];
}

export interface SteamProject {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  difficulty: 'easy' | 'medium' | 'hard';
  materials: {
    en: string[];
    ar: string[];
  };
  steps: {
    en: string[];
    ar: string[];
  };
  imageUrl: string;
}

export interface UserProgress {
  completedLevels: string[];
  currentLevelId: string;
  points: number;
}
