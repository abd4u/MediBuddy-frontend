import React from 'react';

const CampCard = ({ camp }) => (
  <div className='camp-card bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg rounded-xl p-6 mb-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto transition-transform transform hover:scale-105'>
    <h3 className='text-2xl font-bold text-white mb-4'>{camp.title}</h3>
    <p className='text-white mb-4'>{camp.description}</p>
    <p className='text-white mb-2'>
      <span className='font-semibold'>Date:</span>{' '}
      {new Date(camp.date).toLocaleDateString()}
    </p>
    <p className='text-white mb-2'>
      <span className='font-semibold'>Location:</span> {camp.location}
    </p>
    <p className='text-white'>
      <span className='font-semibold'>Organizer:</span> Med-Help
    </p>
  </div>
);

export default CampCard;
