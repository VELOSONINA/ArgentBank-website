import React from 'react';
import Features from '../Components/Features/Features';
import Hero from '../Components/Features/Hero';
import Title from '../Components/Title';

const Home = () => {
  return (
    <Title title="Argent Bank - Home page">
      <main>
        <Hero/>
        <Features/>
      </main>
    </Title>
  );
};

export default Home;
