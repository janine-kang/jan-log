import { CONFIG } from "site.config"

export enum RevalidationConfigType {
  post = "post",
  list = "list",
}

export enum OtherConfigType {
  mode = "isProd",
}

export enum SettingsType {
  blog = "blog",
  profile = "profile",
}

export enum ProfileConfigType {
  name = "name",
  nickname = "nickname",
  image = "image",
  profileImage = "profileImage",
  position = "position",
  bio = "bio",
  email = "email",
  about = "about",
  linkedin = "linkedin",
  github = "github",
  instagram = "instagram",
}

export enum BlogConfigType {
  title = "title",
  description = "description",
  logo = "logo",
  link = "link",
  language = "lang",
  since = "since",
  ogImageGen = "ogImageGenerateURL",
}

export function getCollectionKey(): string {
  return CONFIG.notionConfig.collectionId as string
}

export function getCollectionViewKey(): string {
  return CONFIG.notionConfig.collectionViewId as string
}

export function getAboutPageKey(): string {
  return CONFIG.notionConfig.aboutId as string
}

export function getRevalidationTime(type: RevalidationConfigType): number {
  switch (type) {
    case RevalidationConfigType.post:
      return CONFIG.revalidatePostTime as number
    case RevalidationConfigType.list:
      return CONFIG.revalidateListTime as number
  }
}

export function getUserProfile(type: ProfileConfigType) {
  return CONFIG.profile[type]
}

export function getBlogSettings(type: BlogConfigType) {
  return CONFIG.blog[type] as string
}
