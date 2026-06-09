import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'

const parseScalar = (value: string) => {
  const trimmed = value.trim()

  if (trimmed === 'true') return true
  if (trimmed === 'false') return false
  if (trimmed === 'null' || trimmed === '~') return null

  const quoted = trimmed.match(/^(["'])(.*)\1$/)
  if (quoted) return quoted[2]

  return trimmed
}

const parseListString = (value: string) => {
  const trimmed = value.trim()
  if (!trimmed) return []

  try {
    return JSON.parse(trimmed)
  } catch {
    // Pages CMS can save nested list fields as YAML-formatted strings.
  }

  const items: Record<string, unknown>[] = []
  let current: Record<string, unknown> | undefined

  for (const line of trimmed.split(/\r?\n/)) {
    const normalized = line.trim()
    if (!normalized) continue

    const itemMatch = normalized.match(/^-\s+([^:]+):\s*(.*)$/)
    if (itemMatch) {
      current = {}
      current[itemMatch[1].trim()] = parseScalar(itemMatch[2])
      items.push(current)
      continue
    }

    const propertyMatch = normalized.match(/^([^:]+):\s*(.*)$/)
    if (propertyMatch && current) {
      current[propertyMatch[1].trim()] = parseScalar(propertyMatch[2])
    }
  }

  return items.length > 0 ? items : value
}

const listField = <Schema extends z.ZodTypeAny>(schema: Schema) =>
  z.preprocess((value) => {
    if (value == null) return []
    if (typeof value === 'string') return parseListString(value)
    return value
  }, z.array(schema))

const imageSchema = z.union([
  z.string(),
  z.object({
    url: z.string(),
    alt: z.string().optional()
  })
])

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/[^_]*.{md,mdx}' }),
  schema: () =>
    z.object({
      title: z.string(),
      pubDate: z.coerce.date(),
      description: z.string().optional(),
      author: z.string().optional(),
      image: imageSchema.optional(),
      draft: z.boolean().default(false),
      tags: z.preprocess((value) => {
        if (value == null) return []
        if (typeof value === 'string') return value.split(',').map((tag) => tag.trim()).filter(Boolean)
        if (Array.isArray(value)) {
          return value
            .map((item) => (typeof item === 'string' ? item : item?.tag))
            .filter((item): item is string => typeof item === 'string')
            .map((item) => item.trim())
            .filter(Boolean)
        }
        return []
      }, z.array(z.string()))
    })
})

const about = defineCollection({
  loader: glob({ base: './src/content/about', pattern: '**/*.md' }),
  schema: z.object({})
})

const featureSplitSchema = z.object({
  eyebrow: z.string().optional(),
  heading: z.string(),
  subtext: z.string(),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  imagePlaceholderText: z.string().optional(),
  reverse: z.boolean().default(false)
})

const serviceItemSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string().optional()
})

const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/[^_]*.{md,mdx}' }),
  schema: z.object({
    siteTitle: z.string().optional(),
    siteTagline: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    hero: z.object({
      heading: z.string(),
      subtext: z.string().optional(),
      body: z.string().optional(),
      eyebrow: z.string().optional(),
      primaryButtonText: z.string().optional(),
      primaryButtonLink: z.string().optional(),
      secondaryButtonText: z.string().optional(),
      secondaryButtonLink: z.string().optional(),
      image: z.string().optional(),
      imageAlt: z.string().optional()
    }).optional(),
    featureSplits: listField(featureSplitSchema).optional(),
    services: z.object({
      eyebrow: z.string().optional(),
      heading: z.string(),
      subtext: z.string(),
      items: listField(serviceItemSchema)
    }).optional(),
    cta: z.object({
      heading: z.string(),
      subtext: z.string(),
      primaryButtonText: z.string().optional(),
      primaryButtonLink: z.string().optional(),
      secondaryButtonText: z.string().optional(),
      secondaryButtonLink: z.string().optional()
    }).optional(),
    ethos: z.object({
      heading: z.string(),
      body: z.string()
    }).optional(),
    contact: z.object({
      heading: z.string(),
      subtext: z.string()
    }).optional()
  })
})

const settings = defineCollection({
  loader: glob({ base: './src/content/settings', pattern: '**/[^_]*.{md,mdx}' }),
  schema: z.object({
    siteName: z.string().optional(),
    navLinks: z.array(z.object({ label: z.string(), url: z.string() })).optional(),
    socialLinks: z.array(z.object({ label: z.string(), url: z.string(), icon: z.string().optional() })).optional(),
    ctaText: z.string().optional(),
    ctaUrl: z.string().optional(),
    companyName: z.string().optional(),
    tagline: z.string().optional(),
    copyright: z.string().optional(),
    links: z.array(z.object({ label: z.string(), url: z.string() })).optional()
  })
})

export const collections = { posts, about, pages, settings }
