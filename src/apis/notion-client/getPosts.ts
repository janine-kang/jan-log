import getAllPageIds from "src/libs/utils/notion/getAllPageIds"
import getPageProperties from "src/libs/utils/notion/getPageProperties"
import { TPosts } from "src/types"
import { getCollectionData } from "./getCollectionData"
import { getCollectionKey } from "./getCollectionConfigs"

/**
 * @param {{ includePages: boolean }} - false: posts only / true: include pages
 */

export const getPosts = async () => {
  const response = await getCollectionData()

  // Construct Data
  const pageIds = getAllPageIds(response)
  const block = response.recordMap.block

  const collection = response.recordMap.collection ?? undefined
  const collectionKey = getCollectionKey()

  const schema = collection ? collection[collectionKey].value.schema : undefined

  let data = []

  for (const id of pageIds) {
    const properties = (await getPageProperties(id, block, schema)) || null

    // Add fullwidth, createdtime to properties
    properties.createdTime = new Date(block[id].value?.created_time).toString()
    properties.fullWidth =
      (block[id].value?.format as any)?.page_full_width ?? false

    data.push(properties)
  }

  // Sort by date
  data.sort((a: any, b: any) => {
    const dateA: any = new Date(a?.date?.start_date || a.createdTime)
    const dateB: any = new Date(b?.date?.start_date || b.createdTime)
    return dateB - dateA
  })

  const posts = data as TPosts
  return posts
}
