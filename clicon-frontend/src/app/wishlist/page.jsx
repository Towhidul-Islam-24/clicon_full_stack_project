"use client";
import React, { useState } from 'react';

const page = () => {
  const [price, setPrice] = useState({ min: 0, max: 1000 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPrice((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Filter by Price</h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="min" className="block text-sm font-medium text-gray-700 mb-1">
            Minimum Price (৳)
          </label>
          <input
            type="number"
            name="min"
            id="min"
            min="0"
            max={price.max}
            value={price.min}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="max" className="block text-sm font-medium text-gray-700 mb-1">
            Maximum Price (৳)
          </label>
          <input
            type="number"
            name="max"
            id="max"
            min={price.min}
            max="10000"
            value={price.max}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
