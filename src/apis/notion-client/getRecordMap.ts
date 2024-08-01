import { NotionAPI } from "notion-client"

export const getRecordMap = async (pageId: string) => {
  const api = new NotionAPI()
  const recordMap = await api.getPage(pageId)

  console.log("getRecordMap 🐧 => getPage")
  console.log("🐧 log: ", recordMap)

  return recordMap
}
