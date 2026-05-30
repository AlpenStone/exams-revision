import { Card } from '../../components/Card';
import { Callout } from '../../components/Callout';

export function EndWW1() {
  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">End of WW1</h1>
        <p className="text-slate-600">The conclusion of the Great War and the controversial Treaty of Versailles.</p>
      </header>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800">How Wars Could End</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card title="Surrender">
            <p className="text-slate-600 text-sm">One side surrenders after suffering significant losses or realising they cannot win.</p>
          </Card>
          <Card title="Negotiated Settlement">
            <p className="text-slate-600 text-sm">Warring parties negotiate a peace agreement outlining transfer of territory, reparations, etc.</p>
          </Card>
          <Card title="Ceasefire">
            <p className="text-slate-600 text-sm">Temporary halt to fighting, often to negotiate a permanent settlement.</p>
          </Card>
          <Card title="3rd Party Intervention">
            <p className="text-slate-600 text-sm">Outside actors intervene in a conflict to help bring it to an end.</p>
          </Card>
          <Card title="Exhaustion">
            <p className="text-slate-600 text-sm">Both sides become exhausted and choose to end the conflict with no clear winner.</p>
          </Card>
          <Card title="Decisive Action">
            <p className="text-slate-600 text-sm">One side achieves a clear military victory, forcing the defeated party to accept terms.</p>
          </Card>
        </div>
      </div>

      <div className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800">Paris Peace Conference</h2>
        <Callout type="info" title="The Context">
          Germany surrendered on <strong>11/11/1918</strong>. Leaders from 32 countries met in Versailles in January 1919 to talk peace, signing the Treaty of Versailles on <strong>28th June 1919</strong>. Nobody from Germany was allowed to attend.
        </Callout>

        <h3 className="text-xl font-semibold text-slate-700 mt-6 mb-3">The Big Three</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Woodrow Wilson (USA)">
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>• Did not want to damage Germany too much.</li>
              <li>• Made up the <strong>14 points</strong> for lasting peace.</li>
              <li>• Wanted to set up a League of Nations.</li>
            </ul>
          </Card>
          <Card title="David Lloyd George (UK)">
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>• Didn't want Germany treated too badly, fearing another war.</li>
              <li>• However, most British people wanted the Germans dealt with very harshly.</li>
            </ul>
          </Card>
          <Card title="Georges Clemenceau (France)">
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>• Wanted to totally destroy Germany and remove all its power.</li>
              <li>• Wanted Alsace-Lorraine back.</li>
              <li>• Wanted Germany to pay for all damages caused.</li>
            </ul>
          </Card>
        </div>
      </div>

      <div className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800">What Actually Happened?</h2>
        <Card title="Key Outcomes of the Treaty of Versailles">
          <ol className="list-decimal pl-5 space-y-2 text-slate-700 marker:text-blue-500 marker:font-bold">
            <li>Germany lost Alsace-Lorraine.</li>
            <li>Germany had to demilitarise the Rhineland (the border region with France).</li>
            <li>Let the League of Nations run the Saarland for 15 years and give France all its coal.</li>
            <li>Lost the Polish corridor to Poland.</li>
            <li>Germany and Austria forbidden from joining together.</li>
            <li>Germany had to drastically cut down on her armed forces (limited to 100,000 men).</li>
            <li>The League of Nations ran the German colonies.</li>
            <li>Germany had to pay 6 billion pounds in reparations.</li>
            <li>Germany signed a war guilt clause accepting all blame for starting the war.</li>
            <li>Germany cannot join the League of Nations until they were proven to be peaceful.</li>
          </ol>
        </Card>
      </div>
    </div>
  );
}
