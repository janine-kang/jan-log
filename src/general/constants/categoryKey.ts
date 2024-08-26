import { getUserProfile, ProfileConfigType } from "./configs"

export enum TSection {
  tech = "tech",
  articles = "articles",
  journal = "journal",
  work = "work",
  about = "about",
  all = "",
}

export function toTSection(key: string): TSection {
  switch (key) {
    case "tech":
      return TSection.tech
    case "articles":
      return TSection.articles
    case "journal":
      return TSection.journal
    case "work":
      return TSection.work
    default:
      return TSection.all
  }
}

const links = [
  { id: 1, name: "tech", to: `/${TSection.tech}` },
  { id: 2, name: "articles", to: `/${TSection.articles}` },
  { id: 3, name: "journal", to: `/${TSection.journal}` },
]

const introduce = [
  { id: 4, name: "about", to: `/${TSection.work}` },
  {
    id: 5,
    name: getUserProfile(ProfileConfigType.nickname),
    to: `/${TSection.about}`,
  },
]

export const categoryKey = {
  links: links,
  introduce: introduce,
}
