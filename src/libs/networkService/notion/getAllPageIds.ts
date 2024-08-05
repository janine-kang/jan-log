import { CollectionInstance, ID } from "notion-types"

export interface ExtendedCollectionInstance extends CollectionInstance {
  reducerResults: {
    collection_group_results?: {
      type: string
      blockIds: ID[]
      hasMore: boolean
    }
  }
}

export default function getAllPageIds(response: CollectionInstance) {
  const result = response.result as unknown as ExtendedCollectionInstance
  const reducer = result["reducerResults"]
  const blockIds = reducer.collection_group_results?.blockIds

  return blockIds ?? []
}
