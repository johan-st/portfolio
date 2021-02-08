import * as stack_backend_md from './md/stack/backend.md'
import * as stack_design_md from './md/stack/design.md'
import * as stack_extras_md from './md/stack/extras.md'
import * as stack_frontend_md from './md/stack/frontend.md'
import * as stack_languages_md from './md/stack/languages.md'
import * as stack_deployment_md from './md/stack/deployment.md'
import * as stack_overview_md from './md/stack/overview.md'
import * as stack_testing_md from './md/stack/testing.md'
import * as portfolio_content_md from './md/portfolio/content.md'
import * as portfolio_react_md from './md/portfolio/react.md'
import * as portfolio_node_md from './md/portfolio/node.md'
import * as portfolio_docker_md from './md/portfolio/docker.md'
import * as portfolio_heroku_md from './md/portfolio/heroku.md'
import * as portfolio_overview_md from './md/portfolio/overview.md'
import * as contact_md from './md/contact.md'
import portfolio_thumb from './thumbs/portfolio.png'
import placeholder_thumb from './thumbs/placeholder.png'

const content:ContentModel =
  {
  about:
    {
      title: 'tech-stack',
      path: '/stack',
      short: "a summary of me and my abilities",
      thumb: placeholder_thumb,
      overview:
      {
        title: 'overview',
        markdown: stack_overview_md,
        path:"/overview"
      },
      stack:[
      {
        title: 'Languages',
        markdown: stack_languages_md,
        path: '/languages'
      },
      {
        title: 'Front-End',
        markdown:stack_frontend_md,
        path:'/frontend'
      },
      {
        title: 'Back-End',
        markdown: stack_backend_md,
        path: '/backend'
      },
      {
        title: 'Testing',
        markdown: stack_testing_md,
        path: '/testing'
      },
      {
        title: 'Deployment',
        markdown: stack_deployment_md,
        path: '/deployment'
      },
      {
        title: 'Design',
        markdown: stack_design_md,
        path: '/design'
      },
      {
        title: 'Extras',
        markdown: stack_extras_md,
        path: '/extras'
      }
    ]
    },
  contact:{
      title: 'contact',
      path: '/contact',
      markdown: contact_md,
    },
    projects:[
      {
        title:"portfolio",
        path: '/portfolio',
        short:"Here I endeavour to showcase my abilities and thought-process. Both in regards to previous project and current",
        thumb: portfolio_thumb,
        overview:
          {
            title: 'Overview',
            markdown: portfolio_overview_md,
            path: '/overview'
        },
        stack:[
        {
          title: 'Content',
          markdown: portfolio_content_md,
          path: '/content'
        },
        {
          title: 'React',
          markdown: portfolio_react_md,
          path: '/react'
        },
        {
          title: 'node',
          markdown: portfolio_node_md,
          path: '/node'
        },
        {
          title: 'docker',
          markdown: portfolio_docker_md,
          path: '/docker'
        },
        {
          title: 'Heroku',
          markdown: portfolio_heroku_md,
          path: '/heroku'
        }]
      },  
      {
        title:"placeholder project",
        path: '/notolio',
        short:"NOT the personal portfolio of Johan Strand",
        thumb: placeholder_thumb,
        overview:
          {
            title: 'overview',
            markdown: portfolio_overview_md,
            path: '/overview'
        },
        stack:[
        {
          title: 'Content',
          markdown: portfolio_content_md,
          path: '/content'
        },
        {
          title: 'Heroku',
          markdown: portfolio_heroku_md,
          path: '/heroku'
        }]
      }]
}
export { content }