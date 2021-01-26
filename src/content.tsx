
const content: Content[] = [
  {
    title: 'React',
    markdown: `This app is built using react. As one of the frameworks I am most familiar with this was an easy choice for a single developer project.
  
  However I always strive to write reusable code and expect parts of this portfolio can be repurposed in future projects the same way some code in this project is based on a previous todo-app I've been developing for personal use. 
  
  link:[__ti-do__](https://tido.herokuapp.com)`,
    path: '/react'
  },
  {
    title: 'content',
    markdown: `This page is generated from content in json and markdown format. I've found this to be a fast and simple way to manage content and it is but one small step away from fetching the content through an api. Good practice and in my opinion, easy to use.

To illustrate, here is an _example json-object._

\`\`\`bash
{
  title: "content",
  markdown: "This page is...",
  path: '/content'
}
\`\`\`
    `,
    path: '/content'
  },
  {
    title: 'node',
    markdown: `Yes, this page is served by a express.js server. A very simplistic one at that. I am serving the react build as static content.`,
    path: '/node'
  },
  {
    title: 'docker',
    markdown: `This project contains a Dockerfile describing how to containerize this app. This app is hosted in a single container. 
    
Why? force of habit __AND__ the promise of it behaving identically on any compatible container runtime.`,
    path: '/docker'
  },
  {
    title: 'Heroku',
    markdown: `This app is deployed as a container through heroku. As a developer it is as easy as running three commands:
    

- __npm run build__    

- __heroku container:push web -a johan-st__

- __heroku container:release web -a johan-st__

In this case I have chosen to priotitize speed and easy of use over other considerations such as enforced tests.  
`,
    path: '/heroku'
  },
  {
    title: 'other tech',
    markdown: `I am familiar with technologies other than these few. I have experience running instances on AWS, Digital, Ocean and Azure. Here my experience with AWS is the most prominent`,
    path: '/other'
  }
]
const defaultContent = {
  title: 'Hello',
  markdown:
    `As a Full Stack Engineer I've found a place where my love for tech and need for creativity can both live under the same roof. My maxim is to always develop my skills and I love trying new things. 
    Although the tech I'm most familiar with is is React, HTML, CSS, JavaScript and Elm on the frontend and Express.js, MongoDB, Docker and AWS on the backend I have been dipping my toes in a few other ponds and I am confident in my ability to quickly get up to speed on most common technologies.`,
  path: '/'
}
export { content, defaultContent }