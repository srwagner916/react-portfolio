import React from 'react';
import Project from '../Project';


function Portfolio() {
  const projects = [
    {
      id: 0,
      name: 'Celiac Tackboard',
      github: 'https://github.com/celiac-tackboard/celiac-tackboard',
      deployed: 'https://polar-brook-06864.herokuapp.com/',
      image: 'celiac-tackboard-image'
    },
    {
      id: 1,
      name: 'On Hand Cooking',
      github: 'https://github.com/cookItAndDontBurnIt/onHandCooking',
      deployed: 'https://cookitanddontburnit.github.io/onHandCooking/',
      image: 'food-image'
    },
    {
      id: 2,
      name: 'Weather Dashboard',
      github: 'https://github.com/srwagner916/weather-dashboard',
      deployed: 'https://srwagner916.github.io/weather-dashboard/',
      image: 'weather-dashboard-image'
    },
    {
      id: 3,
      name: "Shay's Tech Blog",
      github: 'https://github.com/srwagner916/tech-blog',
      deployed: 'https://morning-island-64657.herokuapp.com/',
      image: 'tech-blog-image'
    },
    {
      id: 4,
      name: 'Professional README Generator',
      github: 'https://github.com/srwagner916/professional-README-generator',
      deployed: 'https://github.com/srwagner916/professional-README-generator',
      image: 'readme-generator-image'
    },
    {
      id: 5,
      name: 'Code Quiz',
      github: 'https://github.com/srwagner916/code-quiz',
      deployed: 'https://srwagner916.github.io/code-quiz/',
      image: 'code-quiz-image'
    }
  ]
  return (
    <div className="h-screen mx-10 my-20 grid gap-4 grid-flow-row grid-cols-2 text-5xl">
      {projects.map((project, i ) => (
        <Project projects={projects} key={project.name} index={i} />
      ))}
    </div>
  )
}

export default Portfolio;