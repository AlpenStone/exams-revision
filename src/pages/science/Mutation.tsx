import { Card } from '../../components/Card';
import { Callout } from '../../components/Callout';

export function Mutation() {
  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Mutation</h1>
        <p className="text-slate-600">Changes in the DNA sequence and their effects.</p>
      </header>

      <Callout type="info">
        A mutation is a change in the DNA sequence. It can have a neutral (no harm) effect, harmful (disrupts protein function or disease) effect, or beneficial (new advantageous trait) effect.
      </Callout>

      <Card title="Types of DNA Mutations">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
            <h4 className="font-bold text-orange-800 mb-2">1. Substitution</h4>
            <p className="text-sm text-orange-900">A nucleotide is replaced by another nucleotide.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-xl border border-green-100">
            <h4 className="font-bold text-green-800 mb-2">2. Insertion</h4>
            <p className="text-sm text-green-900">An extra nucleotide is added into the DNA sequence.</p>
          </div>
          <div className="p-4 bg-red-50 rounded-xl border border-red-100">
            <h4 className="font-bold text-red-800 mb-2">3. Deletion</h4>
            <p className="text-sm text-red-900">A nucleotide is removed from the DNA sequence.</p>
          </div>
        </div>
      </Card>

      <Card title="Outcomes of a Mutation">
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold shrink-0 mt-0.5">1</div>
            <div>
              <span className="font-semibold text-slate-800 block">No effect (silent)</span>
              <span className="text-sm text-slate-600">Normal protein function.</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold shrink-0 mt-0.5">2</div>
            <div>
              <span className="font-semibold text-slate-800 block">Altered protein</span>
              <span className="text-sm text-slate-600">Protein structure changes; protein function may be changed.</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold shrink-0 mt-0.5">3</div>
            <div>
              <span className="font-semibold text-slate-800 block">Non-functional protein</span>
              <span className="text-sm text-slate-600">Protein cannot work properly; protein function lost.</span>
            </div>
          </li>
        </ul>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Somatic vs Germline">
          <div className="space-y-4">
            <div className="pb-4 border-b border-slate-100">
              <h4 className="font-semibold text-blue-700">Somatic Mutations</h4>
              <p className="text-sm text-slate-600">Occur in body cells; cannot be passed to offspring.</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700">Germline Mutations</h4>
              <p className="text-sm text-slate-600">Occur in gametes; can be passed to offspring.</p>
            </div>
          </div>
        </Card>

        <Callout type="tip" title="Evolutionary Impact">
          Mutations can create new alleles and increase genetic variation in a population.
        </Callout>
      </div>
    </div>
  );
}
