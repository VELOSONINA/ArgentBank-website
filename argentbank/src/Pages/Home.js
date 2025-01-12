import React from 'react';
import FeaturesBody from '../Components/Utils/Features/FeaturesBody';
import FeaturesHeader from '../Components/Utils/Features/FeaturesHeader';
import GetTitle from '../Components/Layouts/GetTitle';

const Home = () => {

  return (
    
      <main>
        <GetTitle title="Home page"/>
        <FeaturesHeader/>
        <FeaturesBody/>
      </main>
  );
};

export default Home;
