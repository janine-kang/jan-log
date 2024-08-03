import { NotionAPI } from "notion-client"
import { getCollectionKey, getCollectionViewKey } from "src/general"

export const getCollectionData = async () => {
  const collectionId = getCollectionKey()
  const collectionViewId = getCollectionViewKey()

  const api = new NotionAPI()
  const response = await api.getCollectionData(
    collectionId,
    collectionViewId,
    collectionViewId
  )
  return response
}
