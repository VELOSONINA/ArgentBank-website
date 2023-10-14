import React from 'react';
import Features from '../Components/Features/Features';
import Hero from '../Components/Features/Hero';
import Layout from '../Components/Layouts/layout';

const Home = () => {
  return (
    <Layout title="Argent Bank - Home page">
      <main>
        <Hero/>
        <Features/>
      </main>
    </Layout>
  );
};

export default Home;
