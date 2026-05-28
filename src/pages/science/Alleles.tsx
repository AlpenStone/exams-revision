import { Card } from '../../components/Card';
import { Callout } from '../../components/Callout';

export function Alleles() {
  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Alleles & Variation</h1>
        <p className="text-slate-600">Understanding traits, genetic variation, and inheritance.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Alleles">
          <ul className="space-y-3 text-slate-700">
            <li>• Different variations of the same gene.</li>
            <li>• Lead to different versions of characteristics, called traits.</li>
            <li>• Can be <strong>dominant</strong> (always expressed) or <strong>recessive</strong> (needs 2 of the same to be expressed).</li>
          </ul>
        </Card>

        <Card title="Key Terms">
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-blue-700">Genotype</h4>
              <p className="text-sm text-slate-600">The unobservable genetic blueprint of an individual.</p>
            </div>
            <div>
              <h4 className="font-bold text-green-700">Phenotype</h4>
              <p className="text-sm text-slate-600">The observable, physical traits/characteristics that result from genetic code, influenced by the environment.</p>
            </div>
          </div>
        </Card>
      </div>

      <Card title="Genetic Variation">
        <p className="text-slate-700 mb-4">
          Sexual reproduction mixes genetic information in 3 main ways:
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h4 className="font-semibold text-slate-800 mb-1">1. Crossing over</h4>
            <p className="text-sm text-slate-600">During meiosis I, homologous chromosomes exchange segments of DNA.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h4 className="font-semibold text-slate-800 mb-1">2. Independent Assortment</h4>
            <p className="text-sm text-slate-600">Homologous pairs line up randomly during metaphase I.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h4 className="font-semibold text-slate-800 mb-1">3. Random Fertilisation</h4>
            <p className="text-sm text-slate-600">Any sperm can fuse with any egg.</p>
          </div>
        </div>

        <Callout type="tip" title="Why is variation important?">
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Increases differences between individuals</li>
            <li>Allows populations to adapt to new environments</li>
            <li>Reduces risk that one disease or threat will affect everyone</li>
            <li>Provides raw material for evolution</li>
          </ul>
        </Callout>
        
        <Callout type="warning" className="mt-4">
          Without variation, species are more vulnerable to extinction.
        </Callout>
      </Card>

      <Card title="Inherited Disorders (e.g., Cystic Fibrosis)">
        <p className="text-slate-700 mb-4">
          A genetic disorder is an inherited medical condition. Parents who are heterozygous for these conditions are called <strong>carriers</strong>. If both parents are carriers, there is a 1 in 4 chance that their child will inherit the disorder.
        </p>

        <div className="border-l-4 border-indigo-300 pl-4 bg-indigo-50/50 p-4 rounded-r-lg">
          <h4 className="font-bold text-indigo-900 mb-2">Case Study: Cystic Fibrosis</h4>
          <ul className="space-y-2 text-sm text-indigo-800">
            <li>• The CFTR gene provides instructions to make a protein that forms a chloride channel in cell membranes.</li>
            <li>• A mutation in the CFTR gene causes the body to produce thick, sticky mucus.</li>
            <li>• Mucus builds up in the lungs, leading to breathing problems and increasing infections.</li>
          </ul>
        </div>
      </Card>
    </div>
  );
}
