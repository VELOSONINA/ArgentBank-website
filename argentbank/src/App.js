import React from 'react';
import Header from './Components/Layouts/Header';
import RoutesTree from './Components/Layouts/RoutesTree';
import './App.scss';
import Footer from './Components/Layouts/Footer';

function App() {
  
  return (
    <div>
      <Header />
      <RoutesTree />
      <Footer />
    </div>
  );
}

export default App;
