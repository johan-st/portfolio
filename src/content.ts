import * as me_md from './md/me.md'
import * as content_md from './md/content.md'
import * as react_md from './md/react.md'
import * as node_md from './md/node.md'
import * as docker_md from './md/docker.md'
import * as heroku_md from './md/heroku.md'
import * as other_md from './md/other.md'

const defaultContent = {
  title: 'default',
  markdown: me_md,
  path: '/'
}

const content: Content[] = [
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
    title: 'docker',
    markdown: docker_md,
    path: '/docker'
  },
  {
    title: 'Heroku',
    markdown: heroku_md,
    path: '/heroku'
  },
  {
    title: 'other tech',
    markdown: other_md,
    path: '/other'
  }
]
export { content, defaultContent }