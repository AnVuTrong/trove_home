import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Welcome to your dashboard! This section will soon show your personal overview, statistics, and quick actions.
      </p>
    </div>
  );
};

export default DashboardPage; 