import { createContext, useContext, useState, type ReactNode } from 'react';

interface SubjectState {
  science: string;
  lal: string;
  ins: string;
}

interface SubjectContextType {
  activeTopics: SubjectState;
  setActiveTopic: (subject: keyof SubjectState, topicId: string) => void;
}

const SubjectContext = createContext<SubjectContextType | undefined>(undefined);

export function SubjectProvider({ children }: { children: ReactNode }) {
  const [activeTopics, setActiveTopics] = useState<SubjectState>({
    science: 'dna',
    lal: 'literary-devices',
    ins: 'ww1-causes'
  });

  const setActiveTopic = (subject: keyof SubjectState, topicId: string) => {
    setActiveTopics(prev => ({
      ...prev,
      [subject]: topicId
    }));
  };

  return (
    <SubjectContext.Provider value={{ activeTopics, setActiveTopic }}>
      {children}
    </SubjectContext.Provider>
  );
}

export function useSubject() {
  const context = useContext(SubjectContext);
  if (context === undefined) {
    throw new Error('useSubject must be used within a SubjectProvider');
  }
  return context;
}
