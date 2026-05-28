import { Card } from '../../components/Card';
import { Callout } from '../../components/Callout';

export function DNA() {
  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">DNA Structure & Inheritance</h1>
        <p className="text-slate-600">The fundamental building blocks of life and genetic inheritance.</p>
      </header>

      <Callout type="info" title="What is DNA?">
        DNA stands for <span className="font-semibold">deoxyribonucleic acid</span>. It was discovered by James Watson & Francis Crick using crucial data from Rosalind Franklin.
      </Callout>

      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Structure of DNA">
          <ul className="space-y-3 text-slate-700">
            <li className="flex gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>Has a distinctive <strong>double helix</strong> shape.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>Made up of individual <strong>nucleotides</strong>.</span>
            </li>
          </ul>
        </Card>

        <Card title="Nucleotides">
          <p className="text-sm text-slate-600 mb-3">Each nucleotide consists of three parts:</p>
          <ul className="space-y-2 text-slate-700 bg-slate-50 p-4 rounded-lg border border-slate-100">
            <li>1. A phosphate group</li>
            <li>2. A deoxyribose sugar unit</li>
            <li>3. A nitrogenous base: 
              <span className="font-semibold text-blue-600 ml-1">Adenine, Thymine, Guanine, Cytosine</span>
            </li>
          </ul>
        </Card>
      </div>

      <Card title="Chromosomes & Genes">
        <div className="space-y-4">
          <p className="text-slate-700">
            DNA is divided into several lengths called <strong>chromosomes</strong>. Humans have 23 pairs.
          </p>
          <div className="pl-4 border-l-2 border-blue-200">
            <h4 className="font-semibold text-slate-800 mb-1">Genes</h4>
            <p className="text-slate-600">
              Each chromosome contains lengths of code that determine different characteristics called genes.
            </p>
            <Callout type="tip" className="mt-3">
              A gene is a unit of inheritance, passed from one generation to the next.
            </Callout>
          </div>
        </div>
      </Card>
    </div>
  );
}
