import { useSubject } from '../../context/SubjectContext';
import { CausesWW1 } from './CausesWW1';
import { JulyCrisis } from './JulyCrisis';
import { EndWW1 } from './EndWW1';
import { LeagueOfNations } from './LeagueOfNations';

export default function INSIndex() {
  const { activeTopics } = useSubject();
  const topic = activeTopics.ins;

  return (
    <div className="pb-16">
      {topic === 'ww1-causes' && <CausesWW1 />}
      {topic === 'july-crisis' && <JulyCrisis />}
      {topic === 'ww1-end' && <EndWW1 />}
      {topic === 'league-of-nations' && <LeagueOfNations />}
    </div>
  );
}
