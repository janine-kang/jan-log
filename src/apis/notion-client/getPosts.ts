import getAllPageIds from "src/libs/utils/notion/getAllPageIds"
import getPageProperties from "src/libs/utils/notion/getPageProperties"
import { TPosts } from "src/types"
import { getCollections } from "./getCollections"

/**
 * @param {{ includePages: boolean }} - false: posts only / true: include pages
 */

// TODO: react query를 사용해서 처음 불러온 뒤로는 해당데이터만 사용하도록 수정
export const getPosts = async () => {
  const response = await getCollections()

  // Construct Data
  const pageIds = getAllPageIds(response)
  const block = response.recordMap.block

  const collection = response.recordMap.collection ?? undefined

  const collectionKey = collection ? Object.keys(collection)[0] : undefined

  const schema =
    collection && collectionKey
      ? collection[collectionKey].value.schema
      : undefined

  console.log("🐢 pageIds: ", pageIds)
  // console.log("🐢 schema: ", schema)

  let data = []

  for (let i = 0; i < pageIds.length; i++) {
    const id = pageIds[i]

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
