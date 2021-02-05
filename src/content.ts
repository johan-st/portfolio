import * as about_overview_md from './md/about/overview.md'
import * as about_frameworks_md from './md/about/frameworks.md'
import * as about_extras_md from './md/about/extras.md'
import * as about_languages_md from './md/about/languages.md'
import * as about_tools_md from './md/about/tools.md'
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
      title: 'about',
      path: '/about',
      short: "a summary of me and my abilities",
      thumb: placeholder_thumb,
      overview:
        {
          title: 'Johan Strand',
          markdown: about_overview_md,
          path:"/overview"
        },
      stack:[
        {
          title: 'Frameworks',
          markdown: about_frameworks_md,
          path: '/frameworks'
        },
      {
        title: 'Languages',
        markdown: about_languages_md,
        path: '/languages'
      },
      {
        title: 'Tools',
        markdown: about_tools_md,
        path: '/tools'
      },
      {
        title: 'Extras',
        markdown: about_extras_md,
        path: '/extras'
      }]
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