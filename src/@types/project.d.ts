export interface ProjectTypes {
  name: string
  slug: string
  preview: string
  isGithub?: boolean
  isGithubAPI?: string
  description: string
  categories: string[],
  techs: string[],
  languages: string[]
}