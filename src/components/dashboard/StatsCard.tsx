import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend: number;
}

export function StatsCard({ title, value, icon: Icon, trend }: StatsCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-200">{title}</p>
          <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
        </div>
        <div className="rounded-full bg-blue-50 p-3 dark:bg-blue-900/20">
          <Icon className="h-6 w-6 text-blue-600 dark:text-blue-300" />
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <span 
          className={`text-sm font-semibold ${
            trend >= 0 
              ? 'text-green-600 dark:text-green-300' 
              : 'text-red-600 dark:text-red-300'
          }`}
        >
          {trend >= 0 ? '+' : ''}{trend}%
        </span>
        <span className="ml-1.5 text-sm text-gray-600 dark:text-gray-300">
          vs last month
        </span>
      </div>
    </div>
  );
}