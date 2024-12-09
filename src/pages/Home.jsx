import React from 'react';
import Hero from '../component/Hero';
import Features from '../component/Features';
import Testimonial from '../component/Testimonial';
import CallToAction from '../component/CallToAction';
import CampList from '../CampFeature/CampList';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonial />
      <CampList />
      <CallToAction />
    </div>
  );
};

export default Home;
