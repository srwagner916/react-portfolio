import React from 'react';
import Project from '../Project';


function Portfolio() {
  const projects = [
    {
      id: 0,
      name: 'Celiac Tackboard',
      github: 'https://github.com/celiac-tackboard/celiac-tackboard',
      deployed: 'https://polar-brook-06864.herokuapp.com/',
      image: 'bg-celiac-tackboard-image',
      topic: 'Interactive full-stack project',
      textColor: 'text-gray-200',
    },
    {
      id: 1,
      name: 'On Hand Cooking',
      github: 'https://github.com/cookItAndDontBurnIt/onHandCooking',
      deployed: 'https://cookitanddontburnit.github.io/onHandCooking/',
      image: 'bg-on-hand-cooking-image',
      topic: 'Interactive front-end project',
      
    },
    {
      id: 2,
      name: 'Weather Dashboard',
      github: 'https://github.com/srwagner916/weather-dashboard',
      deployed: 'https://srwagner916.github.io/weather-dashboard/',
      image: 'bg-weather-dashboard-image',
      topic: "Server-side API's",
     
    },
    {
      id: 3,
      name: "Shay's Tech Blog",
      github: 'https://github.com/srwagner916/tech-blog',
      deployed: 'https://morning-island-64657.herokuapp.com/',
      image: 'bg-tech-blog-image',
      topic: 'Model-View-Controller',
    },
    {
      id: 4,
      name: 'README Generator',
      github: 'https://github.com/srwagner916/professional-README-generator',
      deployed: 'https://github.com/srwagner916/professional-README-generator',
      image: 'bg-readme-generator-image',
      topic: 'Node.js',
    },
    {
      id: 5,
      name: 'Code Quiz',
      github: 'https://github.com/srwagner916/code-quiz',
      deployed: 'https://srwagner916.github.io/code-quiz/',
      image: 'bg-code-quiz-image',
      topic: 'JavaScript',
    }
  ]
  return (
    <div className="h-screen overflow-y-auto mx-10 py-20 grid gap-10 grid-flow-row xs:grid-cols-1 lg:grid-cols-2 text-5xl">
      {projects.map((project, i ) => (
        <Project projects={projects} key={project.name} index={i} />
      ))}
    </div>
  )
}

export default Portfolio;