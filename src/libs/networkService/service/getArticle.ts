import { TPost } from "src/types"
import { getBlockData } from "../network"
import { queryClient } from "src/libs/react-query"
import { queryKey } from "src/general"

export const getArticle = async (target?: TPost) => {
  if (!target) {
    return
  }

  const block = await getBlockData(target.id)
  await queryClient.prefetchQuery(queryKey.post(`${target.slug}`), () => ({
    ...target,
    block,
  }))
}
