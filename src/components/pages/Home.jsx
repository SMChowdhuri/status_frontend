import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto mt-20 text-center">
      <h1 className="text-4xl font-bold mb-6">
        Monitor your services in real-time
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Stay informed about the status of all your services. Get real-time
        updates and notifications when services go down or experience issues.
      </p>
      <div className="space-x-4">
        <button
          onClick={() => navigate('/register')}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Get Started
        </button>
        <button
          onClick={() => navigate('/login')}
          className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;