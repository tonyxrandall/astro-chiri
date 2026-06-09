import type { CollectionEntry } from "astro:content";

export type PostEntry = CollectionEntry<"posts">;

export const isPublishedPost = (post: PostEntry) => !post.data.draft;

export const byNewestPubDate = (a: PostEntry, b: PostEntry) =>
  b.data.pubDate.getTime() - a.data.pubDate.getTime();

export const getPostImageAlt = (post: PostEntry) =>
  post.data.image?.alt?.trim() || post.data.title;
