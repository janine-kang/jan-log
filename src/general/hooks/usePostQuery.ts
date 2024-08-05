import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { queryKey } from "src/general/constants/queryKey"
import { PostDetailType } from "src/types"

const usePostQuery = () => {
  const router = useRouter()
  const { slug } = router.query
  const { data } = useQuery<PostDetailType>({
    queryKey: queryKey.post(`${slug}`),
    enabled: false,
  })

  return data
}

export default usePostQuery
