import React from 'react';
function Resume() {
  return (
    <div className="flex flex-col mx-auto my-auto">
      <h2 className="font-serif text-5xl my-5">Resume</h2>
      <a href="./assets/resume/resume.pdf" download="resume.pdf" className="italic font-sans  text-xl mt-2 hover:text-yellow-600">Click here to download my resume!</a>
      <h3 className="font-serif text-3xl text-gray-900 mt-4">Front-End Proficiencies</h3>
      <ul className="font-sans text-lg ml-10">
        <li>JavaScript</li>
        <li>Mobile Responsiveness</li>
        <li>jQuery</li>
        <li>CSS frameworks</li>
        <li>React</li>
      </ul>
      <h3 className="font-serif text-3xl text-gray-900 mt-5">Back-End Proficiencies</h3>
      <ul className="font-sans text-lg mb-10 ml-10">
        <li>Node.js</li>
        <li>MySQL</li>
        <li>MongoDb</li>
        <li>Express.js</li>
        <li>API's</li>
      </ul>
    </div>
  )
}

export default Resume;