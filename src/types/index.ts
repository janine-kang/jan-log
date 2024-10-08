import { NextPage } from "next"
import { AppProps } from "next/app"
import { ExtendedRecordMap } from "notion-types"
import { ReactElement, ReactNode } from "react"
import { TSection } from "src/general"

// TODO: refactor types
export type NextPageWithLayout<PageProps = {}> = NextPage<PageProps> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export type TPost = {
  id: string
  date: { start_date: string }
  type: TSection
  slug: string
  tags?: string[]
  section: string
  summary?: string
  author?: {
    id: string
    name: string
    profile_photo?: string
  }[]
  title: string
  published: "Yes" | "No" | undefined
  pinned: "Yes" | "No" | undefined
  createdTime: string
  fullWidth: boolean
  thumbnail?: string
}

export type PostDetailType = TPost & {
  block: ExtendedRecordMap
}

export type TPosts = TPost[]

export type TTags = {
  [tagName: string]: number
}
export type TCategories = {
  [category: string]: number
}

export type ThemeType = "dark" | "light"
