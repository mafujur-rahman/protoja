'use client';
import { Home, Users, FolderOpen, BarChart3, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/admin-dashboard' },
  { icon: Users, label: 'Clients', href: '/admin-dashboard/clients' },
  { icon: FolderOpen, label: 'Projects', href: '/admin-dashboard/projects' },
  { icon: Users, label: 'Team', href: '/admin-dashboard/team' },
  { icon: BarChart3, label: 'Analytics', href: '/admin-dashboard/analytics' },
];

export default function Sidebar() {
  const pathname = usePathname();
  

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 min-h-screen bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg">
        {/* Logo */}
        <div className="p-6 border-b border-white/20">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <div className="w-8 h-8 bg-white/20 rounded-lg backdrop-blur-md"></div>
            Protoja
          </h1>
        </div>

        {/* Nav Menu */}
        <nav className="flex-1 p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all duration-300 ${
                  isActive
                    ? 'bg-white/25 text-white shadow-md'
                    : 'text-white/80 hover:bg-white/15 hover:text-white'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Settings */}
        <div className="p-4 border-t border-white/20">
          <Link
            href="/admin-dashboard/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/80 hover:bg-white/15 hover:text-white transition-all duration-300"
          >
            <Settings size={20} />
            <span className="font-medium">Settings</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
