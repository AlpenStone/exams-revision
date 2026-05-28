import { useSubject } from '../../context/SubjectContext';
import { DNA } from './DNA';
import { Reproduction } from './Reproduction';
import { CellReplication } from './CellReplication';
import { Alleles } from './Alleles';
import { Mutation } from './Mutation';
import { Radiation } from './Radiation';

export default function ScienceIndex() {
  const { activeTopics } = useSubject();
  const topic = activeTopics.science;

  return (
    <div className="pb-16">
      {topic === 'dna' && <DNA />}
      {topic === 'reproduction' && <Reproduction />}
      {topic === 'cell-replication' && <CellReplication />}
      {topic === 'alleles' && <Alleles />}
      {topic === 'mutation' && <Mutation />}
      {topic === 'radiation' && <Radiation />}
    </div>
  );
}
