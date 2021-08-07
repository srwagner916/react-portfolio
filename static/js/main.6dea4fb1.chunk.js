(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var r=a(1),s=a.n(r),c=a(6),n=a.n(c),l=(a(11),a(2)),o=a(0);var i=function(e){var t=e.tabs,a=void 0===t?[]:t,r=e.setCurrentTab,s=e.currentTab;return Object(o.jsx)("nav",{className:"inline-flex",children:Object(o.jsx)("ul",{className:"xs:text-2xl xs:flex xs:flex-col md:flex-row lg:text-3xl text-gray-800 inline-block",children:a.map((function(e){return Object(o.jsx)("li",{className:"xs:my-1 cursor-pointer inline mx-10 ".concat(s.name===e.name&&"text-yellow-600"),children:Object(o.jsx)("span",{onClick:function(){r(e)},children:e.name})},e.name)}))})})};var m=function(e){var t=e.tabs,a=void 0===t?[]:t,r=e.setCurrentTab,s=e.currentTab;return Object(o.jsxs)("header",{className:"flex xl:flex-row md:flex-col xs:flex-col sm:flex-col font-serif h-60 flex justify-evenly items-center bg-hero-image",children:[Object(o.jsx)("a",{href:"/",children:Object(o.jsx)("h1",{className:"xs:text-5xl md:text-8xl text-8xl text-gray-800 inline-block",children:"Shay Wagner"})}),Object(o.jsx)(i,{tabs:a,setCurrentTab:r,currentTab:s})]})};var d=function(){return Object(o.jsx)("footer",{className:"flex xs:static xs:bottom-0 sm:static h-40 w-full justify-center items-center bg-gray-300 text-gray-800",children:Object(o.jsxs)("div",{className:"text-5xl",children:[Object(o.jsx)("a",{href:"https://github.com/srwagner916",target:"_blank",title:"github profile",rel:"noreferrer",className:"mx-4",children:Object(o.jsx)("i",{className:"fab fa-github"})}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/shay-wagner-067416206/",target:"_blank",title:"linkedIn profile",rel:"noreferrer",className:"mx-4",children:Object(o.jsx)("i",{className:"fab fa-linkedin"})}),Object(o.jsx)("a",{href:"https://stackoverflow.com/users/15186060/srwagner916",target:"_blank",title:"Stack Overflow profile",rel:"noreferrer",className:"mx-4",children:Object(o.jsx)("i",{className:"fab fa-stack-overflow"})})]})})},b=a.p+"static/media/shay.24b7af6d.jpg";var x=function(){return Object(o.jsxs)("main",{className:"text-gray-800 flex-grow my-6 mx-10 px-10",children:[Object(o.jsx)("h2",{className:"font-serif text-5xl",children:"About Me"}),Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"xs:w-56 sm:w-96 my-6 border-2 border-yellow-600",src:b,alt:"A headshot of Shay."})}),Object(o.jsx)("div",{className:"my-4",children:Object(o.jsx)("p",{className:"font-sans xs:text-xl m:text-lg",children:"Hello there!  I would like to Thank you for taking the time to view my portfolio.  Through this page I hope to show you the kind of work I am capable of producing. My name is Shay Wagner and I'm 27 years old.  I am from and currently residing in a small town called Cambrdige located just outside of Madison, Wisconsin.  Currently, I am enrolled in the full stack web development coding bootcamp.  I am in the process of learning many skills including MERN stack technologies and much more to come.  But most importantly, I'm learning how to learn in the world of web development.  I will update this portfolio continually with more examples of my work.  Once again. I would like to offer many thank you's for taking the time to look through my portfolio."})})]})};var h=function(e){var t=e.projects,a=e.index;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"grid\n           grid-cols-3 \n           bg-cover \n           ".concat(t[a].image,"\n           place-items-start\n           text-gray-800\n           text-opacity-0\n           font-serif\n           hover:bg-yellow-500\n           hover:text-opacity-100\n           duration-500\n           bg-blend-soft-light\n           border-4\n           border-yellow-600"),children:[Object(o.jsx)("a",{className:"mx-10 mt-5 col-span-2 transform duration-100 hover:scale-110",target:"_blank",rel:"noreferrer",href:"".concat(t[a].deployed),children:Object(o.jsx)("h3",{children:"".concat(t[a].name)})}),Object(o.jsx)("a",{className:"mx-10 mt-5 transform duration-300 hover:scale-110",href:"".concat(t[a].github),target:"_blank",title:"Link to GitHub repo",rel:"noreferrer",children:Object(o.jsx)("i",{className:"fab fa-github"})}),Object(o.jsx)("span",{className:"col-span-2 text-3xl mx-10",children:"".concat(t[a].topic)})]})})};var j=function(){var e=[{id:0,name:"Stack Tracker",github:"https://github.com/stack-tracker/stack-tracker",deployed:"https://sleepy-thicket-12395.herokuapp.com/",image:"bg-stack-tracker-image",topic:"MERN SPA"},{id:1,name:"Celiac Tackboard",github:"https://github.com/celiac-tackboard/celiac-tackboard",deployed:"https://polar-brook-06864.herokuapp.com/",image:"bg-celiac-tackboard-image",topic:"Interactive full-stack project",textColor:"text-gray-200"},{id:2,name:"On Hand Cooking",github:"https://github.com/cookItAndDontBurnIt/onHandCooking",deployed:"https://cookitanddontburnit.github.io/onHandCooking/",image:"bg-on-hand-cooking-image",topic:"Interactive front-end project"},{id:3,name:"Weather Dashboard",github:"https://github.com/srwagner916/weather-dashboard",deployed:"https://srwagner916.github.io/weather-dashboard/",image:"bg-weather-dashboard-image",topic:"Server-side API's"},{id:4,name:"Shay's Tech Blog",github:"https://github.com/srwagner916/tech-blog",deployed:"https://morning-island-64657.herokuapp.com/",image:"bg-tech-blog-image",topic:"Model-View-Controller"},{id:5,name:"README Generator",github:"https://github.com/srwagner916/professional-README-generator",deployed:"https://github.com/srwagner916/professional-README-generator",image:"bg-readme-generator-image",topic:"Node.js"},{id:6,name:"Code Quiz",github:"https://github.com/srwagner916/code-quiz",deployed:"https://srwagner916.github.io/code-quiz/",image:"bg-code-quiz-image",topic:"JavaScript"}];return Object(o.jsx)("div",{className:"h-screen overflow-y-auto mx-10 py-20 grid gap-10 grid-flow-row xs:grid-cols-1 lg:grid-cols-2 text-5xl",children:e.map((function(t,a){return Object(o.jsx)(h,{projects:e,index:a},t.name)}))})},u=a(3),g=a(5);var f=function(){var e=Object(r.useState)({name:"",email:"",message:""}),t=Object(l.a)(e,2),a=t[0],s=t[1],c=a.name,n=a.email,i=a.message,m=Object(r.useState)(""),d=Object(l.a)(m,2),b=d[0],x=d[1];function h(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);x(t?"":"Email is invalid.")}else e.target.value.length?x(""):x("".concat(e.target.name," is required."));b||s(Object(g.a)(Object(g.a)({},a),{},Object(u.a)({},e.target.name,e.target.value)))}return Object(o.jsxs)("section",{className:"flex flex-col my-auto",children:[Object(o.jsx)("h2",{className:"font-serif mx-auto mt-10 text-5xl",children:"Contact Me"}),Object(o.jsxs)("form",{className:"font-sans mx-auto w-96",onSubmit:function(e){e.preventDefault(),console.log(a)},children:[Object(o.jsxs)("div",{className:"grid grid-cols-1 my-5",children:[Object(o.jsx)("label",{className:"text-2xl",children:"Name:"}),Object(o.jsx)("input",{className:"bg-blue-50 border-gray-400 focus:ring-yellow-600 focus:border-yellow-600",type:"text",name:"name",defaultValue:c,onBlur:h})]}),Object(o.jsxs)("div",{className:"grid grid-cols-1 my-5",children:[Object(o.jsx)("label",{className:"text-2xl",htmlFor:"email",children:"Email address:"}),Object(o.jsx)("input",{className:"bg-blue-50 border-gray-400 focus:ring-yellow-600 focus:border-yellow-600",type:"email",name:"email",defaultValue:n,onBlur:h})]}),Object(o.jsxs)("div",{className:"grid grid-cols-1 my-5",children:[Object(o.jsx)("label",{className:"text-2xl",htmlFor:"message",children:"Message:"}),Object(o.jsx)("textarea",{className:"bg-blue-50 border-gray-400 focus:ring-yellow-600 focus:border-yellow-600",name:"message",defaultValue:i,onBlur:h})]}),b&&Object(o.jsx)("div",{className:"mb-5",children:Object(o.jsx)("span",{className:"text-2xl",children:b})}),Object(o.jsx)("button",{className:"font-sans text-gray-800 text-2xl bg-gray-300 w-2/6 border-2 border-yellow-600 hover:bg-yellow-600 hover:border-gray-400 duration-300",type:"submit",children:"Submit"})]})]})};var p=function(){return Object(o.jsxs)("div",{className:"flex flex-col mx-auto my-auto",children:[Object(o.jsx)("h2",{className:"font-serif text-5xl my-5",children:"Resume"}),Object(o.jsx)("a",{href:"./assets/resume/resume.pdf",download:"resume.pdf",className:"italic font-sans  text-xl mt-2 hover:text-yellow-600",children:"Click here to download my resume!"}),Object(o.jsx)("h3",{className:"font-serif text-3xl text-gray-900 mt-4",children:"Front-End Proficiencies"}),Object(o.jsxs)("ul",{className:"font-sans text-lg ml-10",children:[Object(o.jsx)("li",{children:"JavaScript"}),Object(o.jsx)("li",{children:"Mobile Responsiveness"}),Object(o.jsx)("li",{children:"jQuery"}),Object(o.jsx)("li",{children:"CSS frameworks"}),Object(o.jsx)("li",{children:"React"})]}),Object(o.jsx)("h3",{className:"font-serif text-3xl text-gray-900 mt-5",children:"Back-End Proficiencies"}),Object(o.jsxs)("ul",{className:"font-sans text-lg mb-10 ml-10",children:[Object(o.jsx)("li",{children:"Node.js"}),Object(o.jsx)("li",{children:"MySQL"}),Object(o.jsx)("li",{children:"MongoDb"}),Object(o.jsx)("li",{children:"Express.js"}),Object(o.jsx)("li",{children:"API's"})]})]})};var O=function(){var e=Object(r.useState)([{name:"About Me"},{name:"Portfolio"},{name:"Contact Me"},{name:"Resume"}]),t=Object(l.a)(e,1)[0];Object(r.useEffect)((function(){document.title="".concat(c.name)}));var a=Object(r.useState)(t[0]),s=Object(l.a)(a,2),c=s[0],n=s[1];return Object(o.jsxs)("div",{className:"bg-gray-50 flex flex-col min-h-screen",children:[Object(o.jsx)(m,{tabs:t,setCurrentTab:n,currentTab:c}),function(){switch(c.name){case"About Me":return Object(o.jsx)(x,{});case"Portfolio":return Object(o.jsx)(j,{});case"Contact Me":return Object(o.jsx)(f,{});case"Resume":return Object(o.jsx)(p,{});default:return Object(o.jsx)(x,{})}}(),Object(o.jsx)(d,{})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),r(e),s(e),c(e),n(e)}))};n.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),y()}},[[13,1,2]]]);
//# sourceMappingURL=main.6dea4fb1.chunk.js.map