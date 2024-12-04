import React from 'react';
import { Users, Building2, Calendar, MessageSquare, BarChart3, Settings, LogOut } from 'lucide-react';
import { NavLink } from './NavLink';
import { useSidebar } from '../../context/SidebarContext';

export function Sidebar() {
  const { isOpen } = useSidebar();
  
  const navigation = [
    { name: 'Customers', icon: Users, href: '/customers' },
    { name: 'Companies', icon: Building2, href: '/companies' },
    { name: 'Calendar', icon: Calendar, href: '/calendar' },
    { name: 'Messages', icon: MessageSquare, href: '/messages' },
    { name: 'Analytics', icon: BarChart3, href: '/analytics' },
    { name: 'Settings', icon: Settings, href: '/settings' },
  ];

  return (
    <aside 
      className={`
        fixed top-0 left-0 z-40 h-screen
        transition-all duration-300 ease-in-out
        bg-gray-900
        ${isOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full'}
      `}
    >
      <div className="flex h-16 items-center justify-center border-b border-gray-700">
        <h1 className="text-xl font-bold text-white">
          CRM Dashboard
        </h1>
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => (
          <NavLink key={item.name} item={item} />
        ))}
      </nav>
      <div className="border-t border-gray-700 p-4">
        <button className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm text-gray-300 hover:bg-gray-800">
          <LogOut className="h-5 w-5" />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
}