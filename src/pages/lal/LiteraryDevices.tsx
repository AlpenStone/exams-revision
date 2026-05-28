import { Card } from '../../components/Card';
import { Callout } from '../../components/Callout';

export function LiteraryDevices() {
  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Literary Devices</h1>
        <p className="text-slate-600">Common techniques used in Language and Literature.</p>
      </header>

      <Callout type="info">
        This section is a placeholder for Language and Literature notes. Content will be added later.
      </Callout>

      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Metaphor">
          <p className="text-slate-700">
            A figure of speech that describes an object or action in a way that isn't literally true, but helps explain an idea or make a comparison.
          </p>
        </Card>

        <Card title="Simile">
          <p className="text-slate-700">
            A figure of speech involving the comparison of one thing with another thing of a different kind, used to make a description more emphatic or vivid (e.g., as brave as a lion, crazy like a fox).
          </p>
        </Card>
      </div>
    </div>
  );
}
