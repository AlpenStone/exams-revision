import { useSubject } from '../../context/SubjectContext';
import { WWI } from './WWI';

export default function INSIndex() {
  const { activeTopics } = useSubject();
  const topic = activeTopics.ins;

  return (
    <div className="pb-16">
      {topic === 'ww1-causes' && <WWI />}
    </div>
  );
}
