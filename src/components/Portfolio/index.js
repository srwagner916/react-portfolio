import React from 'react';
import Project from '../Project';


function Portfolio() {
  const projects = [
    {
      id: 1,
      name: 'Celiac Tackboard',
      github: 'https://github.com/celiac-tackboard/celiac-tackboard',
      deployed: 'https://polar-brook-06864.herokuapp.com/',
      image: 'celiac-tackboard-image'
    },
    {
      id: 2,
      name: 'On Hand Cooking',
      github: 'https://github.com/cookItAndDontBurnIt/onHandCooking',
      deployed: 'https://cookitanddontburnit.github.io/onHandCooking/',
      image: 'food-image'
    }
  ]
  return (
    <div className="h-96 mx-10 my-20 grid gap-4 grid-flow-col grid-cols-2 text-5xl">
      {projects.map((project, i ) => (
        <Project projects={projects} key={project.name} index={i} />
      ))}
    </div>
  )
}

export default Portfolio;