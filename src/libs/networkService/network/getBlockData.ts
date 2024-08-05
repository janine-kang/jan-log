import { NotionAPI } from "notion-client"

export const getBlockData = async (pageId: string) => {
  const api = new NotionAPI()
  const recordMap = await api.getPage(pageId)

  return recordMap
}
