import { getUserProfile, ProfileConfigType } from "./configs"

export enum TSection {
  tech = "tech",
  books = "books",
  journal = "journal",
  work = "work",
  about = "about",
  all = "",
}

export function toTSection(key: string): TSection {
  switch (key) {
    case "tech":
      return TSection.tech
    case "books":
      return TSection.books
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
  { id: 2, name: "books", to: `/${TSection.books}` },
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
