'use client';
import { Menu, X } from 'lucide-react';

import { useState } from 'react';
import Sidebar from './sidebar';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button (in Header) */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed bottom-4 right-4 z-50 bg-primary text-white p-3 rounded-full shadow-lg"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}></div>
          <div className="w-64 bg-sidebar text-white flex flex-col">
            <div className="p-4 border-b border-slate-700 flex justify-between items-center">
              <h1 className="text-xl font-bold">AgencyHub</h1>
              <button onClick={() => setIsOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <Sidebar /> {/* Reuse desktop menu */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}