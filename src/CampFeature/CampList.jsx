import React from 'react';
import camps from '../assets/CampData';
import CampCard from './CampCard';

const CampList = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='flex flex-wrap -mx-4'>
        {camps.map((camp) => (
          <div key={camp._id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4'>
            <CampCard camp={camp} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampList;
