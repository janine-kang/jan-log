import { TSection } from "src/types"

const links = [
  { id: 1, name: "ARCHIVE", to: `/${TSection.archive}` },
  { id: 2, name: "BOOKS", to: `/${TSection.books}` },
  { id: 3, name: "JOURNAL", to: `/${TSection.journal}` },
]

const introduce = [
  { id: 4, name: "ABOUT", to: `/${TSection.about}` },
  { id: 5, name: "JANINE", to: `/${TSection.work}` },
]

export const categoryKey = {
  links: links,
  introduce: introduce,
}
