import { CONFIG } from "site.config"

export function getCollectionKey(): string {
  return CONFIG.notionConfig.collectionId as string
}

export function getCollectionViewKey(): string {
  return CONFIG.notionConfig.collectionViewId as string
}

export function getAboutPageKey(): string {
  return CONFIG.notionConfig.aboutId as string
}

export function getRevalidationTime(): number {
  return CONFIG.revalidatePostTime as number
}
