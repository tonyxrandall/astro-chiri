import type { ThemeConfig } from './types'

export const themeConfig: ThemeConfig = {
  site: {
    website: 'https://the-b-side.co/',
    title: 'The B-Side',
    author: 'The B-Side',
    description: 'Link growth for competitive brands.',
    language: 'en-US'
  },
  general: {
    contentWidth: '42rem',
    centeredLayout: true,
    themeToggle: true,
    postListDottedDivider: true,
    footer: true,
    fadeAnimation: true
  },
  date: {
    dateFormat: 'YYYY-MM-DD',
    dateSeparator: '.',
    dateOnRight: true
  },
  post: {
    readingTime: false,
    toc: true,
    imageViewer: true,
    copyCode: true,
    linkCard: true,
    katex: true
  }
}
