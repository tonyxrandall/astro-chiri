import type { CollectionEntry } from 'astro:content'

export const isPublishedPost = (post: CollectionEntry<'posts'>) => !post.id.startsWith('_') && !post.data.draft

export const byNewestPubDate = (a: CollectionEntry<'posts'>, b: CollectionEntry<'posts'>) =>
  b.data.pubDate.valueOf() - a.data.pubDate.valueOf()

export const normalizeTags = (tags: CollectionEntry<'posts'>['data']['tags'] = []) => tags.filter(Boolean)

export const getPostImageUrl = (post: CollectionEntry<'posts'>) => {
  const image = post.data.image
  return typeof image === 'string' ? image : image?.url
}

export const getPostImageAlt = (post: CollectionEntry<'posts'>) => {
  const image = post.data.image
  return typeof image === 'string' ? post.data.title : (image?.alt ?? post.data.title)
}
