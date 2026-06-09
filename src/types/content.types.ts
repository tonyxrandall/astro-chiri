import type { CollectionEntry } from 'astro:content'

export interface ReadingTime {
  text: string
  minutes: number
  time: number
  words: number
}

export interface TOCItem {
  level: number
  text: string
  id: string
  index: number
}

export interface ContentFeatures {
  hasCodeBlock?: boolean
  hasContentImage?: boolean
  hasFootnotes?: boolean
  hasGithubCard?: boolean
  hasLinkCard?: boolean
  hasNeoDBCard?: boolean
  hasXPost?: boolean
}

export interface PostListProps {
  posts: CollectionEntry<'posts'>[]
}
