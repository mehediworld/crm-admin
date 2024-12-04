import React from 'react';
import { Building2, Users, Globe, Phone } from 'lucide-react';

const companies = [
  {
    id: 1,
    name: 'Acme Corp',
    website: 'www.acmecorp.com',
    employees: '250+',
    phone: '+1 (555) 123-4567',
    status: 'Active',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64&q=80',
  },
  // Add more companies as needed
];

export function Companies() {
  return (
    <div className="flex-1 p-8 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Companies</h1>
      <div className="mt-8">
        <div className="overflow-hidden bg-white dark:bg-gray-800 shadow ring-1 ring-black ring-opacity-5 rounded-lg">
          <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Company
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Details
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {companies.map((company) => (
                <tr key={company.id}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3">
                    <div className="flex items-center">
                      <img className="h-10 w-10 rounded-lg" src={company.logo} alt="" />
                      <div className="ml-4">
                        <div className="font-medium text-gray-900 dark:text-white">{company.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4">
                    <div className="text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Globe className="h-4 w-4" />
                        {company.website}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Users className="h-4 w-4" />
                        {company.employees} employees
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Phone className="h-4 w-4" />
                        {company.phone}
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4">
                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800 dark:bg-green-900 dark:text-green-100">
                      {company.status}
                    </span>
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