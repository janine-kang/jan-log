import { NextPage } from "next"
import { AppProps } from "next/app"
import { ExtendedRecordMap } from "notion-types"
import { ReactElement, ReactNode } from "react"

// TODO: refactor types
export type NextPageWithLayout<PageProps = {}> = NextPage<PageProps> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export enum TCategory {
  post = "post",
  books = "books",
  journal = "journal",
  work = "work",
  none = "",
}

export function toTCategory(key: string): TCategory {
  switch (key) {
    case "post":
      return TCategory.post
    case "books":
      return TCategory.books
    case "journal":
      return TCategory.journal
    case "work":
      return TCategory.work
    default:
      return TCategory.none
  }
}

export type TPost = {
  id: string
  date: { start_date: string }
  type: TCategory
  slug: string
  tags?: string[]
  category: string
  summary?: string
  author?: {
    id: string
    name: string
    profile_photo?: string
  }[]
  title: string
  published: "Yes" | undefined
  createdTime: string
  fullWidth: boolean
  thumbnail?: string
}

export type PostDetail = TPost & {
  recordMap: ExtendedRecordMap
}

export type TPosts = TPost[]

export type TTags = {
  [tagName: string]: number
}
export type TCategories = {
  [category: string]: number
}

export type ThemeType = "dark" | "light"
