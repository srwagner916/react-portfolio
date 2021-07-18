import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

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
  
  //conditionally render components based on current tab
  const renderPage = () => {
    switch (currentTab.name) {
      case 'About Me':
        return <AboutMe/>;
      case 'Portfolio':
        return <Portfolio/>;
      case 'Contact Me':
        return <Contact />
      case 'Resume':
        return <Resume />
      default:
        return <AboutMe/>;
    }
  }

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  console.log(currentTab);

  return (
    <div className="bg-gray-50 flex flex-col min-h-screen">
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
