import getAllPageIds from "src/libs/networkService/notion/getAllPageIds"

import { TPosts } from "src/types"
import { getBlogData } from "./getBlogData"
import { getCollectionKey } from "src/general"
import getProperties from "../service/getProperties"

/**
 * @param {{ includePages: boolean }} - false: posts only / true: include pages
 */

export const getPostListData = async () => {
  const response = await getBlogData()

  // Construct Data
  const pageIds = getAllPageIds(response)
  const block = response.recordMap.block

  const collection = response.recordMap.collection ?? undefined
  const collectionKey = getCollectionKey()

  const schema = collection ? collection[collectionKey].value.schema : undefined

  let data = []

  for (const id of pageIds) {
    const properties = (await getProperties(id, block, schema)) || null

    // Add fullwidth, createdtime to properties
    properties.createdTime = new Date(block[id].value?.created_time).toString()
    properties.fullWidth =
      (block[id].value?.format as any)?.page_full_width ?? false

    data.push(properties)
  }

  return data as TPosts
}
