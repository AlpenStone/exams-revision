import { Card } from '../../components/Card';
import { Callout } from '../../components/Callout';

export function CausesWW1() {
  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Causes & Road to WW1</h1>
        <p className="text-slate-600">The M.A.I.N. long-term causes and the growing tensions leading to the outbreak of the war.</p>
      </header>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800">Long-term Causes of WW1 (M.A.I.N.)</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Militarism">
            <p className="text-slate-700">
              Countries built up large armies and navies, believing they needed strong military power to protect themselves or look powerful.
            </p>
          </Card>
          <Card title="Alliances">
            <p className="text-slate-700">
              Countries formed partnerships to protect each other. This meant if one country went to war, its allies could be pulled in too.
            </p>
          </Card>
          <Card title="Imperialism">
            <p className="text-slate-700">
              European countries competed to build large empires, especially in Africa and Asia. This created tension and rivalry.
            </p>
          </Card>
          <Card title="Nationalism">
            <p className="text-slate-700">
              Strong pride in one's nation or ethnic group. Sometimes this turned aggressive.
            </p>
          </Card>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800">The Road to WW1</h2>
        <Card title="Growing Tensions in Europe">
          <ul className="space-y-3 text-slate-700">
            <li className="flex gap-2">
              <span className="text-blue-500 font-bold">1.</span>
              <span>France wanted <strong>Alsace-Lorraine</strong> back from Germany, which they lost during the Franco-Prussian war. This region is rich in coal and iron.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500 font-bold">2.</span>
              <span>Anglo-German rivalry: Germany kept building dreadnoughts which antagonised Britain.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500 font-bold">3.</span>
              <span>Annexation of Bosnia-Herzegovina by Austria-Hungary, which angered Serbia (Slavic nationalism).</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500 font-bold">4.</span>
              <span>Competition for colonies (imperial expansion).</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500 font-bold">5.</span>
              <span>All nations increased their spending on militaries - distrust despite the alliance system.</span>
            </li>
          </ul>
        </Card>
      </div>

      <Callout type="info" title="The Trigger for WW1">
        Assassination of Archduke Franz Ferdinand in Sarajevo, Bosnia on <strong>June 28, 1914</strong> by Gavrilo Princip, a member of the Black Hand, a Serbian nationalist group.
      </Callout>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <Card title="Otto Von Bismarck">
          <p className="text-slate-700 text-sm mb-3">
            First Chancellor of the German Empire (1871–1890).
          </p>
          <p className="text-slate-700">
            A key figure in the unification of Germany, he used <strong>Realpolitik</strong> (practical, power-based politics - not focused on ideologies or morals) and strengthened Prussia as the dominant German power. He created a strong, centralised German Empire under Kaiser rule and maintained peace in Europe afterward through alliances.
          </p>
        </Card>

        <Card title="The Alliance System (by 1914)">
          <div className="space-y-4 mt-2">
            <div>
              <h4 className="font-semibold text-blue-700">The Triple Entente</h4>
              <p className="text-slate-600">France, Britain, and Russia.</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700">The Triple Alliance</h4>
              <p className="text-slate-600">Germany, Austria-Hungary, and Italy.</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
