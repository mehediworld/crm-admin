import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const customers = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, USA',
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // Add more customers as needed
];

export function Customers() {
  return (
    <div className="flex-1 p-8 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Customers</h1>
      <div className="mt-8">
        <div className="overflow-hidden bg-white dark:bg-gray-800 shadow ring-1 ring-black ring-opacity-5 rounded-lg">
          <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Name
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Contact
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Status
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Location
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3">
                    <div className="flex items-center">
                      <img className="h-10 w-10 rounded-full" src={customer.avatar} alt="" />
                      <div className="ml-4">
                        <div className="font-medium text-gray-900 dark:text-white">{customer.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4">
                    <div className="text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        {customer.email}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Phone className="h-4 w-4" />
                        {customer.phone}
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4">
                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800 dark:bg-green-900 dark:text-green-100">
                      {customer.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4">
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                      <MapPin className="h-4 w-4" />
                      {customer.location}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}