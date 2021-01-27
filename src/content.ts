import * as test from './md/test.md'
console.log(test);

const content: Content[] = [
  {
    title: 'Content',
    markdown: `# Content Management 
This page has no need of advanced content management but is generated from content in json and markdown format. I've found this to be a fast and simple way to manage content.

The changes needed to have the content be fetched through an external api is minimal. Good practice and in my opinion, easy to use.

To illustrate, here is an _example json-object._

\`\`\`bash
{
  title: "content",
  markdown: "# Content... ",
  path: '/content'
}
\`\`\`
    `,
    path: '/content'
  },
  {
    title: 'React',
    markdown: `# React
This app is built using react. As one of the frameworks I am most familiar with this was an easy choice for a single developer project.

However I always strive to write reusable code and expect parts of this portfolio can be repurposed in future projects the same way some code in this project is based on a previous todo-app I've been developing for personal use. 

~~link:[__ti-do__](https://tido.herokuapp.com)~~ _(currently not live)_`,
    path: '/react'
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
  title: 'default',
  markdown: test,
  path: '/'
}
export { content, defaultContent }