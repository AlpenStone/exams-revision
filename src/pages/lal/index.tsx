import { useSubject } from '../../context/SubjectContext';
import { LiteraryDevices } from './LiteraryDevices';

export default function LALIndex() {
  const { activeTopics } = useSubject();
  const topic = activeTopics.lal;

  return (
    <div className="pb-16">
      {topic === 'literary-devices' && <LiteraryDevices />}
    </div>
  );
}
