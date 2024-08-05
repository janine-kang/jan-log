import { useQuery } from "@tanstack/react-query"
import { queryKey } from "src/general/constants/queryKey"
import { TPost, TSection } from "src/types"

const usePostsQuery = (section: TSection = TSection.all) => {
  const { data } = useQuery({
    queryKey: queryKey.posts(section),
    initialData: [] as TPost[],
    enabled: false,
  })

  if (!data) throw new Error("Posts data is not found")

  return data
}

export default usePostsQuery
