import React from 'react';
import ServiceList from '../services/ServiceList';

const UserDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Service Status</h1>
        <p className="text-gray-600 mt-2">
          Monitor the current status of our services
        </p>
      </div>

      <ServiceList isAdmin={false} />
    </div>
  );
};

export default UserDashboard;