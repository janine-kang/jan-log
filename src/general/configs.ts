import { CONFIG } from "site.config"

export enum RevalidationType {
  post = "post",
  list = "list",
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

export function getRevalidationTime(type: RevalidationType): number {
  switch (type) {
    case RevalidationType.post:
      return CONFIG.revalidatePostTime as number
    case RevalidationType.list:
      return CONFIG.revalidateListTime as number
  }
}
