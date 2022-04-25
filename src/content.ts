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
import * as portfolio_overview_md from './md/portfolio/overview.md'
import * as portfolio_digitalOcean_md from './md/portfolio/digitalOcean.md'
import * as soon_overview_md from './md/soon/overview.md'
import * as soon_unsplash_md from './md/soon/unsplash.md'
import * as soon_hackday_md from './md/soon/hackday.md'
import * as soon_amity_md from './md/soon/amity.md'
import * as noodle_api_md from './md/noodle/api.md'
import * as noodle_css_md from './md/noodle/css.md'
import * as noodle_docker_md from './md/noodle/docker.md'
import * as noodle_elm_md from './md/noodle/elm.md'
import * as noodle_heroku_md from './md/noodle/heroku.md'
import * as noodle_node_md from './md/noodle/node.md'
import * as noodle_overview_md from './md/noodle/overview.md'
import * as contact_md from './md/contact.md'
import * as go_overview_md from './md/go/overview.md'
import * as go_warmer_md from './md/go/warmer.md'
import * as go_HitomezashiStiches_md from './md/go/HitomezashiStiches.md'
import * as go_goImageServer_md from './md/go/go-image-server.md'
import * as go_goSPA_md from './md/go/go-spa-server.md'
import * as go_logHub_md from './md/go/logHub.md'
import * as go_projectMimer_md from './md/go/project-mimer.md'
import portfolio_thumb from './thumbs/portfolio.png'
import noodle_thumb from './thumbs/noodle.png'
import placeholder_thumb from './thumbs/placeholder.png'

const content: ContentModel =
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
      path: "/overview"
    },
    stack: [
      {
        title: 'Languages',
        markdown: stack_languages_md,
        path: '/languages'
      },
      {
        title: 'Front-End',
        markdown: stack_frontend_md,
        path: '/frontend'
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
  contact: {
    title: 'contact',
    path: '/contact',
    markdown: contact_md,
  },
  projects: [
    {
      title: "portfolio",
      path: '/portfolio',
      short: "Here I endeavour to showcase my abilities and thought-process. Both in regards to previous project and current",
      thumb: portfolio_thumb,
      overview:
      {
        title: 'Overview',
        markdown: portfolio_overview_md,
        path: '/overview'
      },
      stack: [
        {
          title: 'React',
          markdown: portfolio_react_md,
          path: '/react'
        },
        {
          title: 'Content',
          markdown: portfolio_content_md,
          path: '/content'
        },
        {
          title: 'Digital Ocean',
          markdown: portfolio_digitalOcean_md,
          path: '/digitalOcean'
        }

      ]
    }, {
      title: "salty noodles",
      path: '/noodle',
      short: "a side-project from my training at </salt>",
      thumb: noodle_thumb,
      overview:
      {
        title: 'overview',
        markdown: noodle_overview_md,
        path: '/overview'
      },
      stack: [{
        title: 'elm',
        markdown: noodle_elm_md,
        path: '/elm'
      }, {
        title: 'css',
        markdown: noodle_css_md,
        path: '/css'
      }, {
        title: 'unsplash',
        markdown: noodle_api_md,
        path: '/api'
      }, {
        title: 'node',
        markdown: noodle_node_md,
        path: '/node'
      }, {
        title: 'docker',
        markdown: noodle_docker_md,
        path: '/docker'
      }, {
        title: 'heroku',
        markdown: noodle_heroku_md,
        path: '/heroku'
      }
      ]
    },
    {
      title: "go projects",
      path: '/go_projects',
      short: "A collection of tools and toys built in go",
      thumb: placeholder_thumb,
      overview:
      {
        title: 'Overview',
        markdown: go_overview_md,
        path: '/overview'
      },
      stack: [
        {
          title: 'hitomezashi',
          markdown: go_HitomezashiStiches_md,
          path: '/hitomezashi'
        },
        {
          title: 'cache warmer',
          markdown: go_warmer_md,
          path: '/warmer'
        },
        {
          title: 'image-server',
          markdown: go_goImageServer_md,
          path: '/image-server'
        },
        {
          title: 'SPA-server',
          markdown: go_goSPA_md,
          path: '/SPA-server'
        },
        {
          title: 'log hub',
          markdown: go_logHub_md,
          path: '/log-hub'
        },
        {
          title: 'project Mimer',
          markdown: go_projectMimer_md,
          path: '/project-mimer'
        },
      ]
    }]
}
export { content }