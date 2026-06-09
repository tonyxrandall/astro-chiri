export type DateFormat = 'YYYY-MM-DD' | 'MM-DD-YYYY' | 'DD-MM-YYYY' | 'MONTH DAY YYYY' | 'DAY MONTH YYYY'

export interface SiteInfo {
  website: string
  title: string
  author: string
  description: string
  language: string
}

export interface GeneralSettings {
  contentWidth: string
  centeredLayout: boolean
  themeToggle: boolean
  postListDottedDivider: boolean
  footer: boolean
  fadeAnimation: boolean
}

export interface DateSettings {
  dateFormat: DateFormat
  dateSeparator: string
  dateOnRight: boolean
}

export interface PostSettings {
  readingTime: boolean
  toc: boolean
  imageViewer: boolean
  copyCode: boolean
  katex: boolean
  linkCard: boolean
}

export interface ThemeConfig {
  site: SiteInfo
  general: GeneralSettings
  date: DateSettings
  post: PostSettings
}
