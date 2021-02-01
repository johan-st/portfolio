import * as me_md from './md/me.md'
import * as content_md from './md/portfolio/content.md'
import * as react_md from './md/portfolio/react.md'
import * as node_md from './md/portfolio/node.md'
import * as typescript_md from './md/portfolio/typescript.md'
import * as docker_md from './md/portfolio/docker.md'
import * as heroku_md from './md/portfolio/heroku.md'
import * as overview_md from './md/portfolio/overview.md'
import * as contact_md from './md/contact.md'
import portfolio_thumb from './thumbs/portfolio.png'
import placeholder_thumb from './thumbs/placeholder.png'

const content:ContentModel =
  {
  about:
    {
      title: 'about',
      markdown: me_md,
      path: '/'
    },
  contact:{
      title: 'contact',
      markdown: contact_md,
      path: '/contact'
    },
    projects:[
      {
        title:"portfolio",
        path: '/portfolio',
        short:"Here I endeavour to showcase my abilities and thought-process. Both in regards to previous project and current",
        thumb: portfolio_thumb,
        overview:
          {
            title: 'overview',
            markdown: overview_md,
            path: '/overview'
        },
        content:[
        {
          title: 'Content',
          markdown: content_md,
          path: '/content'
        },
        {
          title: 'React',
          markdown: react_md,
          path: '/react'
        },
        {
          title: 'node',
          markdown: node_md,
          path: '/node'
        },
          {
          title: 'typescript',
          markdown: typescript_md,
          path: '/typescript'
        },
        {
          title: 'docker',
          markdown: docker_md,
          path: '/docker'
        },
        {
          title: 'Heroku',
          markdown: heroku_md,
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
            markdown: overview_md,
            path: '/overview'
        },
        content:[
        {
          title: 'Content',
          markdown: content_md,
          path: '/content'
        },
        {
          title: 'Heroku',
          markdown: heroku_md,
          path: '/heroku'
        }]
      }]
}
export { content }