import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSubject } from '../context/SubjectContext';

export function ScrollToTop() {
  const { pathname } = useLocation();
  const { activeTopics } = useSubject();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, activeTopics]);

  return null;
}
