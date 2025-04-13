import React, { useState } from 'react';
import ServiceList from '../services/ServiceList';
import ServiceForm from '../services/ServiceForm';

const AdminDashboard = () => {
  const [showAddService, setShowAddService] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={() => setShowAddService(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add New Service
        </button>
      </div>

      <ServiceList isAdmin={true} />

      {showAddService && (
        <ServiceForm onClose={() => setShowAddService(false)} />
      )}
    </div>
  );
};

export default AdminDashboard;