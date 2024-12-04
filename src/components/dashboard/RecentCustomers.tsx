import React from 'react';

const customers = [
  {
    name: 'John Smith',
    email: 'john.smith@example.com',
    status: 'Active',
    lastActive: '2 hours ago',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    status: 'Inactive',
    lastActive: '1 day ago',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Michael Brown',
    email: 'm.brown@example.com',
    status: 'Active',
    lastActive: '5 mins ago',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export function RecentCustomers() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Customers</h2>
      <div className="mt-6 flow-root">
        <div className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
          {customers.map((customer) => (
            <div key={customer.email} className="flex py-5">
              <img className="h-10 w-10 rounded-full" src={customer.avatar} alt="" />
              <div className="ml-3 flex flex-1 flex-col justify-center">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{customer.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{customer.email}</p>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                    customer.status === 'Active'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                  }`}
                >
                  {customer.status}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{customer.lastActive}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}