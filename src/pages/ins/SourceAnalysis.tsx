import { Card } from '../../components/Card';
import { Callout } from '../../components/Callout';

export function SourceAnalysis() {
  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Source Analysis (OPVL & 2Cs)</h1>
        <p className="text-slate-600">Frameworks for analysing written and visual historical sources for the EOY Exam.</p>
      </header>

      <Callout type="info" title="Note">
        The guiding questions below are <strong>NOT EXHAUSTIVE</strong> but serve as a strong foundation for your analysis.
      </Callout>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800">For Written Sources: OPVL</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Origin">
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> What type of source is it?</li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> Who created it?</li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> Where is it from?</li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> When was it created/published?</li>
            </ul>
          </Card>
          
          <Card title="Purpose">
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> Who was the source intended for? (intended audience)</li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> What is the objective of the source? (to persuade, to inform etc.)</li>
            </ul>
          </Card>

          <Card title="Value">
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> How useful is the source for a particular study?</li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> Can the content of the source be verified elsewhere?</li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> Is it peer reviewed?</li>
            </ul>
          </Card>

          <Card title="Limitation">
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> How useful is the source for a particular study?</li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> Is it a reliable/trustworthy source?</li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> Is it objective or subjective?</li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> Is there any evidence of bias?</li>
            </ul>
          </Card>
        </div>
      </div>

      <div className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800">For Visual Sources: 2Cs</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Context">
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span>What type of source is it?</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span>What is the source about? What is it representing?</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span>Place the source in its historical context: What was happening at the time? (use dates, people, events as clues/indicators)</span>
              </li>
            </ul>
          </Card>

          <Card title="Comment">
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span>What is the overall message/meaning of the cartoon or image?</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span>What are we learning from this source about this event or time period?</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
