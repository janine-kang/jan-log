import { TSection } from "src/types"
import { getUserProfile, ProfileConfigType } from "./configs"

const links = [
  { id: 1, name: "archive", to: `/${TSection.archive}` },
  { id: 2, name: "books", to: `/${TSection.books}` },
  { id: 3, name: "journal", to: `/${TSection.journal}` },
]

const introduce = [
  { id: 4, name: "about", to: `/${TSection.about}` },
  {
    id: 5,
    name: getUserProfile(ProfileConfigType.name),
    to: `/${TSection.work}`,
  },
]

export const categoryKey = {
  links: links,
  introduce: introduce,
}
