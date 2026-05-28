import { Card } from '../../components/Card';
import { Callout } from '../../components/Callout';

export function Reproduction() {
  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Reproduction</h1>
        <p className="text-slate-600">Ensuring the continuity of organisms across generations.</p>
      </header>

      <Callout type="info">
        Reproduction enables parents to pass their genetic material to their offspring. There are two main types: <strong>asexual</strong> and <strong>sexual</strong> reproduction.
      </Callout>

      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Sexual Reproduction">
          <p className="text-slate-700 mb-4">
            Involves two parents and the fusion of gametes.
          </p>
          <ul className="space-y-2 text-slate-600 text-sm">
            <li>• Consists of haploid sex cells (gametes).</li>
            <li>• They fuse (fertilisation) to form a zygote.</li>
            <li>• The zygote then undergoes division.</li>
          </ul>
        </Card>

        <Card title="Asexual Reproduction">
          <p className="text-slate-700 mb-4">
            Involves a single parent organism.
          </p>
          <ul className="space-y-2 text-slate-600 text-sm">
            <li>• Does not require gametes (sex cells).</li>
            <li>• Produces offspring that are genetically identical to itself (clones).</li>
          </ul>
        </Card>
      </div>

      <Card title="Summary Comparison">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="py-3 px-4 font-semibold text-slate-800">Asexual Reproduction</th>
                <th className="py-3 px-4 font-semibold text-slate-800">Sexual Reproduction</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 text-slate-600">One parent</td>
                <td className="py-3 px-4 text-slate-600">Two parents</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 text-slate-600">No variation (offspring the same) - like a clone</td>
                <td className="py-3 px-4 text-slate-600">Genetic variation - offspring different but similar</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 text-slate-600">Adapting to environment is hard</td>
                <td className="py-3 px-4 text-slate-600">Allows organisms to adapt</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 text-slate-600">Chromosomes are from one parent</td>
                <td className="py-3 px-4 text-slate-600">Chromosomes: 1/2 mother, 1/2 father</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 text-slate-600">Can reproduce quickly: Binary fission, budding, fragmentation, parthenogenesis</td>
                <td className="py-3 px-4 text-slate-600">Slower process: pollination, fertilisation</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 text-slate-600"></td>
                <td className="py-3 px-4 text-slate-600">Consists of haploid gametes to form a zygote.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
