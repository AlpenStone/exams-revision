import { Card } from '../../components/Card';
import { Callout } from '../../components/Callout';

export function JulyCrisis() {
  const timelineEvents = [
    {
      date: "July 5th 1914",
      description: 'Germany gave Austria-Hungary a "blank cheque" - promising unconditional support in case of war.'
    },
    {
      date: "July 23rd 1914",
      description: "Austria-Hungary delivers its ultimatum to Serbia."
    },
    {
      date: "July 28th 1914",
      description: "Austria-Hungary mobilises its army and declares war on Serbia."
    },
    {
      date: "August 1st 1914",
      description: "Germany mobilises its army, and declares war on Russia."
    },
    {
      date: "August 3rd 1914",
      description: "Germany declares war on France and invades Belgium."
    },
    {
      date: "August 5th 1914",
      description: "Britain declares war on Germany."
    }
  ];

  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">The July Crisis & Schlieffen Plan</h1>
        <p className="text-slate-600">A tense period where political and military decisions led to the outbreak of WW1.</p>
      </header>

      <Callout type="info" title="What was the July Crisis?">
        It began with the assassination of Archduke Franz Ferdinand. In response, Austria-Hungary sent an ultimatum to Serbia. When they didn't comply, Austria-Hungary declared war, triggering a massive chain reaction via the alliance system.
      </Callout>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800">Sequence of Events</h2>
        <div className="relative border-l border-slate-200 ml-3 md:ml-6 mt-6 space-y-8">
          {timelineEvents.map((event, index) => (
            <div key={index} className="mb-8 ml-6 relative group">
              <span className="absolute -left-[35px] flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-4 ring-white group-hover:bg-blue-500 transition-colors duration-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:bg-white transition-colors duration-300"></div>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-slate-900">{event.date}</h3>
              <p className="text-base font-normal text-slate-600 bg-white border border-slate-100 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800">The Schlieffen Plan</h2>
        <Card title="Strategy (Designed in 1905)">
          <p className="text-slate-700 mb-4">
            Designed by <strong>Alfred von Schlieffen</strong>. Its objective was to avoid a 2-front war with France and Russia. The strategy was to quickly defeat France, then move troops east to fight Russia.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">Key Points</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Invade France through Belgium.</li>
                <li>• Sweep around Paris and force a French surrender.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">Outcomes</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Invading Belgium dragged the UK into the war.</li>
                <li>• Belgians resisted long enough to give France & Russia time to mobilise.</li>
                <li>• Western front created - Germans and French 'dug-in' (trenches).</li>
                <li>• Germany ended up fighting on 2 fronts anyway.</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
