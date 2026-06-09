import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { byNewestPubDate, isPublishedPost } from '../utils/posts';

export async function GET(context) {
  const posts = (await getCollection('posts', isPublishedPost)).sort(byNewestPubDate);
  return rss({
    title: 'The B-Side Blog',
    description: 'Linkbuilding insights, strategy and ideas.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
  });
}
