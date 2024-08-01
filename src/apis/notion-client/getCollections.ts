import { CONFIG } from "site.config"
import { NotionAPI } from "notion-client"

export const getCollections = async () => {
  const collectionId = CONFIG.notionConfig.collectionId || ""
  const collectionViewId = CONFIG.notionConfig.collectionViewId || ""

  const api = new NotionAPI()
  const response = await api.getCollectionData(
    collectionId,
    collectionViewId,
    collectionViewId
  )
  return response
}
