import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
