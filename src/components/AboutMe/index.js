import React from 'react';

function AboutMe() {
  return(
    <main className="text-gray-800 flex-grow my-6 mx-10 px-10">
      <h2 className="font-serif text-5xl">About Me</h2>
      <div>
        <img className="xs:w-56 sm:w-96 my-6 border-2 border-yellow-600" src="../../../public/assets/images/shay.jpg"></img>
      </div>
      <div className="my-4">
        <p className="font-sans xs:text-xl m:text-lg">
          Hello there!  I would like to Thank you for taking the time to view my portfolio.  Through this page I hope to show you the kind of work I am capable
          of producing. My name is Shay Wagner and I'm 27 years old.  I am from and currently residing in a small town called Cambrdige located just outside of
          Madison, Wisconsin.  Currently, I am enrolled in the full stack web development coding bootcamp.  I am in the process of learning many skills including MERN 
          stack technologies and much more to come.  But most importantly, I'm learning how to learn in the world of web development.  I will update this
          portfolio continually with more examples of my work.  Once again. I would like to offer many thank you's for taking the time to look through my portfolio.
        </p>
      </div>
    </main>
  )
}

export default AboutMe;