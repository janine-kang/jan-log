import { CONFIG } from "site.config"

export function getCollectionKey(): string {
  return CONFIG.notionConfig.collectionId || ""
}

export function getCollectionViewKey(): string {
  return CONFIG.notionConfig.collectionViewId || ""
}
