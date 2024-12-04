import React from 'react';
import { Users, Building2, DollarSign, TrendingUp } from 'lucide-react';
import { StatsCard } from '../components/dashboard/StatsCard';
import { RecentCustomers } from '../components/dashboard/RecentCustomers';

export function Dashboard() {
  const stats = [
    { title: 'Total Customers', value: '2,543', icon: Users, trend: 12 },
    { title: 'Active Companies', value: '485', icon: Building2, trend: 8 },
    { title: 'Total Revenue', value: '$67,234', icon: DollarSign, trend: 24 },
    { title: 'Growth Rate', value: '18.2%', icon: TrendingUp, trend: -3 },
  ];

  return (
    <div className="flex-1 bg-gray-50 p-8 dark:bg-gray-900">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>
      <div className="mt-8">
        <RecentCustomers />
      </div>
    </div>
  );
}