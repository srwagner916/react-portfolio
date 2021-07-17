import React from 'react';

function Project() {
  return (
    <div className="h-96 mx-10 my-20 grid gap-4 grid-flow-col grid-cols-2 text-5xl">
      <div className="flex bg-cover bg-celiac-tackboard-image justify-center items-center">
        <a href="https://github.com/srwagner916" target="_blank" title="github profile" rel="noreferrer" className="align-middle justify-center">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div className="bg-cover bg-food-image"></div>
    </div>
  )
}

export default Project;