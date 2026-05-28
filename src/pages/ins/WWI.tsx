import { Card } from '../../components/Card';
import { Callout } from '../../components/Callout';

export function WWI() {
  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Causes of the First World War</h1>
        <p className="text-slate-600">Exploring the origins of WWI.</p>
      </header>

      <Callout type="info">
        This section is a placeholder for Individuals and Societies notes. Content will be added later.
      </Callout>

      <div className="grid md:grid-cols-2 gap-6">
        <Card title="M.A.I.N. Causes">
          <ul className="space-y-2 text-slate-700">
            <li><strong>Militarism:</strong> The belief that a country should maintain a strong military.</li>
            <li><strong>Alliances:</strong> Secret networks of treaties between nations.</li>
            <li><strong>Imperialism:</strong> Competition for colonies and resources.</li>
            <li><strong>Nationalism:</strong> Extreme pride in one's country or ethnic group.</li>
          </ul>
        </Card>

        <Card title="The Spark">
          <p className="text-slate-700">
            The assassination of Archduke Franz Ferdinand of Austria-Hungary in Sarajevo in June 1914 by Gavrilo Princip.
          </p>
        </Card>
      </div>
    </div>
  );
}
