import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Dna, Users, GitMerge, Fingerprint, Bug, Zap,
  Menu, ChevronLeft, BookOpen, Globe, ChevronUp
} from 'lucide-react';
import { useSubject } from '../context/SubjectContext';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

type SubjectConfig = {
  id: 'science' | 'lal' | 'ins';
  title: string;
  items: { id: string; label: string; icon: React.ReactNode }[];
};

const subjects: Record<string, SubjectConfig> = {
  science: {
    id: 'science',
    title: 'Science Notes',
    items: [
      { id: 'dna', label: 'DNA Structure', icon: <Dna className="w-5 h-5" /> },
      { id: 'reproduction', label: 'Reproduction', icon: <Users className="w-5 h-5" /> },
      { id: 'cell-replication', label: 'Cell Replication', icon: <GitMerge className="w-5 h-5" /> },
      { id: 'alleles', label: 'Alleles & Variation', icon: <Fingerprint className="w-5 h-5" /> },
      { id: 'mutation', label: 'Mutation', icon: <Bug className="w-5 h-5" /> },
      { id: 'radiation', label: 'Radiation', icon: <Zap className="w-5 h-5" /> },
    ]
  },
  lal: {
    id: 'lal',
    title: 'LAL Notes',
    items: [
      { id: 'literary-devices', label: 'Literary Devices', icon: <BookOpen className="w-5 h-5" /> }
    ]
  },
  ins: {
    id: 'ins',
    title: 'INS Notes',
    items: [
      { id: 'ww1-causes', label: 'Causes & Road to WW1', icon: <Globe className="w-5 h-5" /> },
      { id: 'july-crisis', label: 'The July Crisis', icon: <Zap className="w-5 h-5" /> },
      { id: 'ww1-end', label: 'End of WW1', icon: <Users className="w-5 h-5" /> },
      { id: 'league-of-nations', label: 'League of Nations', icon: <BookOpen className="w-5 h-5" /> }
    ]
  }
};

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { activeTopics, setActiveTopic } = useSubject();

  const pathParts = location.pathname.split('/').filter(Boolean);
  const activeSubjectId = (pathParts[0] as 'science' | 'lal' | 'ins') || 'science';
  const activeSubject = subjects[activeSubjectId] || subjects['science'];

  const currentTopicId = activeTopics[activeSubjectId];

  // For the pop-out subject menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubjectChange = (subjectId: string) => {
    setIsMenuOpen(false);
    navigate(`/${subjectId}`);
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 bg-white border-r border-slate-200 transition-all duration-300 ease-in-out flex flex-col ${isOpen ? 'w-64' : 'w-20'
        }`}
    >
      <div className="h-16 flex items-center justify-between px-4 border-b border-slate-100 shrink-0">
        {isOpen && (
          <span className="font-bold text-lg text-slate-800 whitespace-nowrap overflow-hidden">
            {activeSubject.title}
          </span>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-2 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors ${!isOpen ? 'mx-auto' : ''}`}
          aria-label={isOpen ? "Collapse Sidebar" : "Expand Sidebar"}
        >
          {isOpen ? <ChevronLeft className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-2 relative">
        {activeSubject.items.map((item) => {
          const isActive = currentTopicId === item.id;

          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTopic(activeSubjectId, item.id);
                // Also ensures we are on the base subject route if we somehow weren't
                if (location.pathname !== `/${activeSubjectId}`) {
                  navigate(`/${activeSubjectId}`);
                }
              }}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group relative ${isActive
                ? 'bg-blue-50 text-blue-700 font-medium'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                } ${!isOpen ? 'justify-center px-1' : ''}`}
              title={!isOpen ? item.label : undefined}
            >
              <div className={`flex items-center justify-center shrink-0 w-6 h-6 transition-colors ${isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'
                }`}>
                {item.icon}
              </div>

              {isOpen && (
                <span className="truncate text-left flex-1 text-sm">
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Subject Switcher Area */}
      <div className="relative p-4 border-t border-slate-100 shrink-0" ref={menuRef}>
        {/* Pop-out Menu */}
        {isMenuOpen && (
          <div className={`absolute bottom-full mb-2 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-50 transition-all ${isOpen ? 'left-4 right-4' : 'left-4 w-48'}`}>
            <p className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Switch Subject</p>
            <div className="flex flex-col space-y-1 px-2">
              {Object.values(subjects).map((subject) => {
                const isSubjectActive = activeSubjectId === subject.id;
                return (
                  <button
                    key={subject.id}
                    onClick={() => handleSubjectChange(subject.id)}
                    className={`flex items-center gap-3 p-2 rounded-lg transition-colors w-full text-left ${isSubjectActive ? 'bg-indigo-50 text-indigo-700 font-medium' : 'hover:bg-slate-50 text-slate-600'
                      }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 text-xs ${isSubjectActive ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-500'
                      }`}>
                      {subject.id.substring(0, 3).toUpperCase()}
                    </div>
                    <span className="text-sm truncate">{subject.title.replace(' Notes', '')}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Active Subject Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`w-full flex items-center gap-3 p-2 rounded-xl transition-colors hover:bg-slate-50 border border-transparent hover:border-slate-200 ${!isOpen && 'justify-center'}`}
          title={!isOpen ? "Switch Subject" : undefined}
        >
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold shrink-0 text-sm">
            {activeSubjectId.substring(0, 3).toUpperCase()}
          </div>
          {isOpen && (
            <div className="text-left flex-1 min-w-0">
              <p className="font-medium text-slate-800 text-sm truncate">{activeSubject.title.replace(' Notes', '')}</p>
              <p className="text-slate-500 text-xs">Switch subject</p>
            </div>
          )}
          {isOpen && (
            <ChevronUp className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
          )}
        </button>
      </div>
    </aside>
  );
}
