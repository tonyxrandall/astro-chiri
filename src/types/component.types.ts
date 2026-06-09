import type { TOCItem, ReadingTime, ContentFeatures } from './content.types'

export interface TOCProps {
  toc?: TOCItem[]
}

export interface PostLayoutProps {
  title: string
  pubDate: Date
  image?: string | { url: string; alt?: string }
  readingTime?: ReadingTime
  toc?: TOCItem[]
  contentFeatures?: ContentFeatures
}

export interface TransitionProps {
  type: 'post' | 'page'
  class?: string
}

export interface LayoutProps extends TransitionProps {
  title?: string
  description?: string
}

export interface BaseHeadProps {
  title: string
  description: string
  ogImage?: string
}

export interface ImageOptimizerProps {
  src: string | ImageMetadata
  alt: string
  width?: number
  height?: number
  quality?: number
  format?: 'avif' | 'webp' | 'jpeg' | 'png'
  loading?: 'lazy' | 'eager'
  decoding?: 'async' | 'sync' | 'auto'
  class?: string
  caption?: string
  priority?: boolean
}

export interface FormattedDateProps {
  date: Date
  format?: string
  context?: 'list' | 'post' | 'default'
}

export interface GitHubRepoData {
  owner?: {
    avatar_url: string
  }
  description?: string
  stargazers_count?: number
  forks_count?: number
  license?: {
    spdx_id: string
  }
}

export interface CardElements {
  avatar: HTMLElement | null
  desc: HTMLElement | null
  stars: HTMLElement | null
  forks: HTMLElement | null
  license: HTMLElement | null
}
