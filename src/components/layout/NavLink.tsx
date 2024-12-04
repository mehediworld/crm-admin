import React from 'react';
import { LucideIcon } from 'lucide-react';
import { NavLink as RouterNavLink } from 'react-router-dom';

interface NavLinkProps {
  item: {
    name: string;
    icon: LucideIcon;
    href: string;
  };
}

export function NavLink({ item }: NavLinkProps) {
  return (
    <RouterNavLink
      to={item.href}
      className={({ isActive }) =>
        `flex items-center gap-2 rounded-md px-2 py-2 text-sm text-gray-300 hover:bg-gray-800 ${
          isActive ? 'bg-gray-800 text-white' : ''
        }`
      }
    >
      <item.icon className="h-5 w-5" />
      <span>{item.name}</span>
    </RouterNavLink>
  );
}