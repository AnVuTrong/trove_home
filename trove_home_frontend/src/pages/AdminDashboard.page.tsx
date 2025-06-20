import React from 'react';

const AdminDashboardPage: React.FC = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Admin Back Office</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        This back office is reserved for administrators. From here you will be able to manage users, settings, and system data.
      </p>
    </div>
  );
};

export default AdminDashboardPage; 