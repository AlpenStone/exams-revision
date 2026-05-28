import { Card } from '../../components/Card';
import { Callout } from '../../components/Callout';

export function Radiation() {
  return (
    <div className="space-y-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Radiation</h1>
        <p className="text-slate-600">Types, properties, and risks of radiation.</p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Types of Radiation</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          <Card title="Alpha (⍺)">
            <ul className="space-y-2 text-sm text-slate-600 mb-4">
              <li>• Made of 2 protons and neutrons (Helium nucleus).</li>
              <li>• Emitted by: Uranium, Thorium, Radium, Polonium.</li>
              <li>• Charge: +2</li>
            </ul>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 mb-4">
              <p><strong>Penetration:</strong> Low (stopped by paper/skin)</p>
              <p><strong>Ionising power:</strong> Very high</p>
            </div>
            <h5 className="font-semibold text-slate-800 text-sm">Uses / Case Study</h5>
            <p className="text-sm text-slate-600 mt-1">
              <strong>Smoke detectors:</strong> Americium-241 ionises air to complete a circuit; smoke breaks it.
              <br/><br/>
              <strong>Radon:</strong> Natural radioactive gas; inhaling it can cause serious lung damage.
            </p>
          </Card>

          <Card title="Beta (ß)">
            <ul className="space-y-2 text-sm text-slate-600 mb-4">
              <li>• Fast moving electrons.</li>
              <li>• Emitted from unstable nuclei.</li>
              <li>• Charge: -1</li>
            </ul>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 mb-4">
              <p><strong>Penetration:</strong> Medium (stopped by Al)</p>
              <p><strong>Ionising power:</strong> Medium</p>
            </div>
            <h5 className="font-semibold text-slate-800 text-sm">Uses / Case Study</h5>
            <p className="text-sm text-slate-600 mt-1">
              <strong>Medical:</strong> Doctors use Iodine-131 to treat overactive thyroid or thyroid cancer.
              <br/><br/>
              <strong>Chernobyl:</strong> Released 131I, increasing thyroid cancer in children.
            </p>
          </Card>

          <Card title="Gamma (γ)">
            <ul className="space-y-2 text-sm text-slate-600 mb-4">
              <li>• High energy electromagnetic waves.</li>
              <li>• No mass.</li>
              <li>• Charge: 0</li>
            </ul>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 mb-4">
              <p><strong>Penetration:</strong> Very high (stopped by thick lead/concrete)</p>
              <p><strong>Ionising power:</strong> Low</p>
            </div>
            <h5 className="font-semibold text-slate-800 text-sm">Uses / Case Study</h5>
            <p className="text-sm text-slate-600 mt-1">
              <strong>Food irradiation:</strong> Kills harmful microorganisms without making food radioactive.
              <br/><br/>
              <strong>Hiroshima/Nagasaki:</strong> Caused severe radiation sickness and long-term cancers.
            </p>
          </Card>
        </div>
      </section>

      <section className="pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Radiation Dose & Risk</h2>
        <Callout type="info" className="mb-6">
          Radioactive does not always mean dangerous. Risk depends on <strong>dose</strong>, <strong>exposure time</strong>, and <strong>radiation type</strong>.
        </Callout>

        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Dose Levels">
            <ul className="space-y-3">
              <li className="flex justify-between border-b pb-2">
                <span className="text-slate-600">Low dose</span>
                <span className="font-semibold text-slate-800">Natural background</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span className="text-slate-600">Medium dose</span>
                <span className="font-semibold text-slate-800">Medical X-ray</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span className="text-slate-600">High dose</span>
                <span className="font-semibold text-slate-800">Radiation therapy</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-600">Very high dose</span>
                <span className="font-semibold text-slate-800">Nuclear accident</span>
              </li>
            </ul>
          </Card>

          <Card title="How it Causes DNA Damage">
            <p className="text-sm text-slate-700 mb-3">
              Ionising radiation has enough energy to remove electrons from atoms and chemical bonds in DNA.
            </p>
            <ol className="list-decimal pl-5 text-sm text-slate-600 space-y-1 mb-4">
              <li>Radiation approaches (e.g. beta particle).</li>
              <li>Ionisation occurs, knocking out an electron.</li>
              <li>A chemical bond is broken, damaging DNA.</li>
            </ol>
            <div className="bg-red-50 p-3 rounded border border-red-100">
              <p className="text-sm font-semibold text-red-800 mb-1">Damage can lead to:</p>
              <ul className="text-xs text-red-700 space-y-1 pl-3 list-disc">
                <li>Cell malfunction</li>
                <li>Uncontrolled cell growth (cancer)</li>
                <li>Mutation passed to daughter cells</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
