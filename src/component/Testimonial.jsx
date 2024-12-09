import React from 'react';
import { Link } from 'react-router-dom';

import avatarAnisha from '../assets/images/avatar-anisha.png';
import avatarAli from '../assets/images/avatar-ali.png';
import avatarRichard from '../assets/images/avatar-richard.png';

const Testimonial = () => {
  return (
    <section id='testimonials' className='py-12 bg-gray-50'>
      {/* Container to heading and testm blocks */}
      <div className='max-w-6xl px-5 mx-auto text-center'>
        {/* Heading */}
        <h2 className='text-4xl font-bold'>
          What's Different About Us From Our Rival Practo and Others?
        </h2>
        {/* Testimonials Container */}
        <div className='flex flex-col mt-16 space-y-12 md:flex-row md:space-x-6 md:space-y-0'>
          {/* Testimonial 1 */}
          <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-white shadow-md md:w-1/3'>
            <img
              src={avatarAnisha}
              className='w-16 -mt-14 rounded-full border-4 border-white'
              alt='Atif Beg'
            />
            <h5 className='text-lg font-bold'>Atif Beg</h5>
            <p className='text-sm text-gray-600'>
              “Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-white shadow-md md:w-1/3'>
            <img
              src={avatarAli}
              className='w-16 -mt-14 rounded-full border-4 border-white'
              alt='ABD'
            />
            <h5 className='text-lg font-bold'>ABD</h5>
            <p className='text-sm text-gray-600'>
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-white shadow-md md:w-1/3'>
            <img
              src={avatarRichard}
              className='w-16 -mt-14 rounded-full border-4 border-white'
              alt='Rishabh Dwevedi'
            />
            <h5 className='text-lg font-bold'>Rishabh Dwevedi</h5>
            <p className='text-sm text-gray-600'>
              “Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
        </div>

        {/* Testimonial 4 (Only visible on larger screens) */}
        <div className='mt-12 flex flex-col items-center p-6 space-y-6 rounded-lg bg-white shadow-md md:hidden lg:flex lg:w-1/3'>
          <img
            src={avatarAli}
            className='w-16 -mt-14 rounded-full border-4 border-white'
            alt='Ayush Shukla'
          />
          <h5 className='text-lg font-bold'>Ayush Shukla</h5>
          <p className='text-sm text-gray-600'>
            “We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is
            much more focused.”
          </p>
        </div>

        {/* Button */}
        <div className='mt-16'>
          <Link
            to='#'
            className='inline-block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
