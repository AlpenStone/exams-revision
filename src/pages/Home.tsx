import { Link } from 'react-router-dom';
import { BookOpen, Globe, Atom } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="w-20 h-20 mx-auto bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-2xl mb-6 shadow-sm border border-indigo-200">
          MYP
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Year 5 Revision Hub
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Welcome to your central study platform. Select a subject below to access your structured, interactive revision notes.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl w-full px-4">
        {/* Science Card */}
        <Link 
          to="/science" 
          className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100"
        >
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Atom className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Sciences</h2>
          <p className="text-slate-500">Biology, genetics, radiation, and cell structure.</p>
        </Link>

        {/* LAL Card */}
        <Link 
          to="/lal" 
          className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
        >
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <BookOpen className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">LAL</h2>
          <p className="text-slate-500">Language and Literature: literary devices and analysis.</p>
        </Link>

        {/* INS Card */}
        <Link 
          to="/ins" 
          className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300"
        >
          <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Globe className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">INS</h2>
          <p className="text-slate-500">Individuals and Societies: historical events and causes.</p>
        </Link>
      </div>
    </div>
  );
}
