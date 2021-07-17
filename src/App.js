import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Project from './components/Project';

function App() {
  const [tabs] = useState([
    {
      name: 'About Me'
    }, 
    {
      name: 'Portfolio'
    },
    {
      name: 'Contact Me'
    },
    {
      name: 'Resume'
    }
  ]);
  
  const renderPage = () => {
    switch (currentTab.name) {
      case 'About Me':
        return <AboutMe/>;
      case 'Portfolio':
        return <Project/>;
      default:
        return <AboutMe/>;
    }
  }

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  console.log(currentTab);

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        tabs={tabs}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
      >
      </Header>
      {renderPage(currentTab)}
      <Footer />
    </div>
  );
}

export default App;
