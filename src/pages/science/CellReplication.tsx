import { Card } from '../../components/Card';
import { Callout } from '../../components/Callout';

export function CellReplication() {
  return (
    <div className="space-y-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Cell Replication</h1>
        <p className="text-slate-600">The processes of Mitosis and Meiosis.</p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-sm">1</span>
          Mitosis
        </h2>
        <Callout type="info" className="mb-4">
          Mitosis is the process of cell division that leads to <strong>two identical cells</strong>. Our cells undergo this process for growth, repair, and to replace worn out cells.
        </Callout>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { step: '1. Interphase', desc: 'Cell spends most of its time here; it grows, carries out normal functions, and DNA replication takes place.' },
            { step: '2. Prophase', desc: 'DNA condenses into visible chromosomes. Nuclear membrane breaks down. Spindle fibers begin to form.' },
            { step: '3. Metaphase', desc: 'Chromosomes line up in the middle of the cell. Spindle fibers attach to centrosomes.' },
            { step: '4. Anaphase', desc: 'Spindle fibers shorten, pulling chromatids to opposite poles. Each separated chromatid is now one chromosome.' },
            { step: '5. Telophase', desc: 'Chromosomes arrive at poles, uncoil into chromatin. Nuclear membrane reforms. Spindle fibers break down.' },
            { step: '6. Cytokinesis', desc: 'Cytoplasm divides, forming 2 separate daughter cells.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow transition-shadow">
              <h4 className="font-semibold text-blue-700 mb-2">{item.step}</h4>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <Callout type="warning" className="mt-4">
          Please note that <em>Interphase</em> and <em>Cytokinesis</em> are not technically a part of mitosis.
        </Callout>
      </section>

      <div className="border-t border-slate-200 my-8"></div>

      <section>
        <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center text-sm">2</span>
          Meiosis
        </h2>
        <Callout type="info" className="mb-4">
          Meiosis has 2 stages that produces <strong>four, genetically varied daughter cells</strong>. This process is used to make gametes for sexual reproduction.
        </Callout>

        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Meiosis I">
            <ul className="space-y-4">
              <li className="text-sm">
                <span className="font-semibold text-indigo-700 block mb-1">1. Interphase</span>
                <span className="text-slate-600">DNA replicates in the cell.</span>
              </li>
              <li className="text-sm">
                <span className="font-semibold text-indigo-700 block mb-1">2. Prophase I</span>
                <span className="text-slate-600">Chromosomes pair with homologues. Crossing-over occurs (recombination).</span>
              </li>
              <li className="text-sm">
                <span className="font-semibold text-indigo-700 block mb-1">3. Metaphase I</span>
                <span className="text-slate-600">Chromosomes align in the middle.</span>
              </li>
              <li className="text-sm">
                <span className="font-semibold text-indigo-700 block mb-1">4. Anaphase I</span>
                <span className="text-slate-600">Spindle fibers pull chromosomes apart to opposite poles.</span>
              </li>
              <li className="text-sm">
                <span className="font-semibold text-indigo-700 block mb-1">5. Telophase I & Cytokinesis</span>
                <span className="text-slate-600">Cell pinches apart. Nuclear membrane reforms around the 2 new cells.</span>
              </li>
            </ul>
          </Card>

          <Card title="Meiosis II">
            <ul className="space-y-4">
              <li className="text-sm">
                <span className="font-semibold text-indigo-700 block mb-1">6. Prophase II</span>
                <span className="text-slate-600">Chromatin clumps to form chromosomes again in both cells.</span>
              </li>
              <li className="text-sm">
                <span className="font-semibold text-indigo-700 block mb-1">7. Metaphase II</span>
                <span className="text-slate-600">Chromosomes line up in the middle of both cells.</span>
              </li>
              <li className="text-sm">
                <span className="font-semibold text-indigo-700 block mb-1">8. Anaphase II</span>
                <span className="text-slate-600">Chromatids pulled apart to opposite poles.</span>
              </li>
              <li className="text-sm">
                <span className="font-semibold text-indigo-700 block mb-1">9. Telophase II & Cytokinesis</span>
                <span className="text-slate-600">Cells pinch in the middle, forming 4 daughter cells.</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>
    </div>
  );
}
