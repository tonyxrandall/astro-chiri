---
title: Blocking LLMs to Prove a Point
pubDate: 2026-01-10
draft: false
description: This is not an SEO test.
author: Anthony Palomarez
image:
  url: /images/sorted-image (1).png
  alt: Illustration for Blocking LLMs to Prove a Point
---
These days it seems like most of the conversations in SEO revolve around improving AI visibility. This can lead to a lot of client confusion and can give site owners the impression that they need to make sweeping changes to their SEO strategy, even if what they’ve been doing has been working for years and continues to do so.

Personally, because I have no intention to deceive or use these circumstances to upsell unnecessary services, it’s sometimes a bit of a challenge for me to answer these concerns in a way that feels like it would be satisfying to them. Because when clients read sensationalist takes about AI optimization, it feels a lot like a cop out to say “I’m already doing it” without making any huge flashy change from the way I’ve been operating even if that’s the honest truth.

If you’re a client and you read nearly anything about AEO/GEO/whatever these days, that’s probably going to be your takeaway. We need to do more. But what? Who even knows, just… something… more!

However, I started thinking about some ways to more tangibly illustrate my overall stance which is that most of this work ultimately boils down to crawlability (tech) and discoverability (I’m lumping content, brand, social, etc under this word. Further, when these things are done to their potential they *all* end up being to the aid of links anyways 🙂), and links. In short: make sure the bots can access your site and build authority.

When I was a teenager my grandpa started a home and auto glass repair business in a small Idaho town. I worked there for a couple summers. Because their shop is right in the middle of the town and there was really only one other place that offered similar service, they never built a website and never really needed one. Mostly they’ve relied on foot traffic and eventually a Facebook page. My cousin owns the shop now and still has never built a website for the business. They still don’t need one in my opinion.

As expected, they are the shop that chatgpt recommends. No surprise here, they’re the most established business in town at this point. Although there are more competitors now that the town has more than doubled in size since this business was established, this was still nice to see.

![](/images/1.png)

I followed up to see if chatgpt could find a website. I knew it wouldn’t, I just asked this because I knew I’d need it for this post.

![](/images/2.png)

Yep, no website. Cool.

These circumstances present a nice little opportunity to run a quick test. Most of the time the site comes first and the brand gets built along side it.

So I built two identical websites for this shop with two nearly identical domains. Two branded domains with a slight variation (one single character in the domain is different). On one I blocked all robots besides googlebot in robots.txt and Cloudflare’s AI crawl control settings and the other blocked google but allowed LLMs.

About a month later I started to build slightly different backlink profiles for each site. There was probably no need to wait but I wanted to see if either of these domains would be discovered on their own, which they weren’t. Initially I thought about building backlinks from entirely the same websites for each domain but decided against it because I want to do a few other experiments with these sites in the future.

For the site that I planned to let google index, I built a couple links from popular home repair (niche specific) sites that I could create business profiles on, just to see how quickly the site would get indexed from these links alone. For the other site I built them a couple dozen regular business directory links. I assumed Google would have no problem finding the site I wanted it to with a couple citations from the more “authoritative” and relevant sites and the LLMs would be more likely to discover the site I wanted them to with a larger amount of links. This ended up being true in this case pretty quickly. I did basically zero other “SEO”. Actually, other than doing the bare minimum to make sure the sites would be discovered, I’ve pretty much done the opposite of what nearly anyone would consider “best practices”.

The site essentially contains zero information about the business other than their name, logo, phone number and partial address (street name and number but no city or state mentioned anywhere on the site, I kept these details to a minimum just because again I plan to do some other tests with it eventually. However, this is relevant here because when we ask “what’s the best __ in [city]” they have no problem correlating the website with the business location at least partially because the city is listed in the directory links I’ve built). The site also doesn’t list any services other than what essentially says “we fix windows”. I wanted the site content to influence things as little as possible in order to get a more accurate idea of what these backlinks are actually doing here. This is the entire site:

![Article content](https://media.licdn.com/dms/image/v2/D5612AQGTB5mOm5ltaA/article-inline_image-shrink_1500_2232/B56Z5CUwVEGsAQ-/0/1779229200371?e=1781136000&v=beta&t=Zz312OZhyPfhwKLz1SwxuHT-g7MSmNWmRAI3i9SKHZg)

Google indexed the site I wanted it to pretty quickly (within a few days of building those few links to it) and, no surprise, does not return the blocked site in a site: search (note: this **[does not](https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site)** mean google hasn’t indexed it).

![](/images/3.png)

![](/images/4.png)

It was also quickly ranking for its brand name. Nice, things are working more or less as expected:

![](/images/5.png)

A week or two later, I checked to see how things had changed in chatgpt:

![](/images/6.png)

Now if we click on the business name, it gives us additional information including a website. No surprise it’s the one I didn’t block LLMs on.

![](/images/7.png)

And a query from today (taken from a separate chatgpt account) as I write this post, just to see how things are still looking:

![](/images/8.png)

![](/images/9.png)

And from Claude?

![](/images/10.png)

### **So what do we learn from this?**

Honestly? Literally nothing haha. Someone insinuated that LLMs aren't able to use links in this way so that was the main inspiration behind this and then this pretty much all worked out exactly as I expected it to. I also needed to do it to lay the foundation for some future experiments. It was fairly surprising to me how quickly things moved though! Especially with these particular links which I think most people, including myself at times, would write off as ineffective.

I will say, however, that I’m pretty sure if I give it some more time and build more higher quality links to the one that the LLMs are blocked from eventually they will start recommending that website instead of the one they're allowed to access. We'll see what happens as I run through some other link experiments with these.