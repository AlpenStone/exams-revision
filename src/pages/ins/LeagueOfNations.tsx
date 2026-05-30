import { Card } from '../../components/Card';
import { Callout } from '../../components/Callout';

export function LeagueOfNations() {
  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">League of Nations</h1>
        <p className="text-slate-600">The first worldwide intergovernmental organisation whose principal mission was to maintain world peace.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Overview & Aims">
          <ul className="space-y-2 text-slate-700 mb-4 text-sm">
            <li>• Founded in Geneva, Switzerland in 1920.</li>
            <li>• Brainchild of Woodrow Wilson, though the USA did not join.</li>
            <li>• Open to any nation except for Germany and USSR.</li>
            <li>• 48 members joined in 1920, 54 by 1929.</li>
          </ul>
          <h4 className="font-semibold text-blue-700 mb-2 mt-4 border-t border-slate-100 pt-3">Key Aims:</h4>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Prevent War</span>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Disarmament</span>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Diplomacy</span>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Global Welfare</span>
          </div>
        </Card>

        <Card title="Limitations of the League">
          <ul className="space-y-3 text-slate-700 text-sm">
            <li className="flex gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span><strong>Lack of military power:</strong> No army of its own, so it depended on member states to enforce decisions.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span><strong>Self-interest of major powers:</strong> Britain and France were often more concerned about their own national interests.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span><strong>Unanimous voting:</strong> Required all decisions in the Assembly to be unanimous, meaning any nation involved could block action.</span>
            </li>
          </ul>
        </Card>
      </div>

      <div className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800">Structure of the League</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold text-slate-800 mb-2">Council</h3>
            <p className="text-slate-600 text-sm">4 permanent members (5 after 1926). Dealt with problems when the assembly wasn't in session. Could use sanctions, but required unanimous decisions making it slow.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold text-slate-800 mb-2">Assembly</h3>
            <p className="text-slate-600 text-sm">The debating chamber. Met once a year and required unanimous decisions.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold text-slate-800 mb-2">Secretariat</h3>
            <p className="text-slate-600 text-sm">The administration based in Geneva. Prepared reports as an International Civil Service.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold text-slate-800 mb-2">Int. Labour Organisation</h3>
            <p className="text-slate-600 text-sm">Dedicated to improving global working conditions.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm md:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-slate-800 mb-2">Permanent Court of Justice</h3>
            <p className="text-slate-600 text-sm">15 judges based in Hague. Made decisions when cases referred to it by assembly or member countries.</p>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800">Failures & Crises</h2>
        <Callout type="warning" title="The Collapse of Authority">
          These crises destroyed the authority of the League, and it was powerless to stop Germany after 1935.
        </Callout>
        
        <div className="space-y-4 mt-6">
          <Card title="Manchurian Crisis (1931-1933)">
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>• Japan's silk exports suffered during the Great Depression.</li>
              <li>• Japanese troops invaded Manchuria in 1931 due to an incident at the Mukden railway.</li>
              <li>• The League condemned the actions but could do nothing to remove troops.</li>
              <li>• Result: Japan left the League in 1933.</li>
            </ul>
          </Card>
          
          <Card title="Abyssinia Crisis (1935)">
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>• Italy invaded Abyssinia after the Wal-Wal border clash.</li>
              <li>• Captured Addis-Ababa and forced Emperor Haile Selassie into exile.</li>
              <li>• League imposed sanctions, but excluded key items like oil or coal. France and Britain secretly agreed to give Abyssinia to Italy.</li>
              <li>• Result: Italy left the League in 1937.</li>
            </ul>
          </Card>

          <Card title="Rise of Nazism">
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>• Germany suffered huge economic difficulties exacerbated by the Great Depression.</li>
              <li>• In 1935, Hitler announced rearmament.</li>
              <li>• League condemned actions but took no serious military response. Britain and France feared another major war, allowing Germany to continue expansion.</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
