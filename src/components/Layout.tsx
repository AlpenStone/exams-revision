import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { ScrollToTop } from './ScrollToTop';

export function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <ScrollToTop />
      <Sidebar 
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      <main 
        className={`flex-1 transition-all duration-300 ease-in-out p-6 md:p-10 ${
          isSidebarOpen ? 'ml-64' : 'ml-20'
        }`}
      >
        <div className="max-w-4xl mx-auto w-full animate-in fade-in duration-500">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
