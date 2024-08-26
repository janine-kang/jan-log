import { CONFIG } from "site.config"
import dynamic from "next/dynamic"

const GiscusComponent = dynamic(
  () => {
    return import("./GiscusComment")
  },
  { ssr: false }
)

type Props = {
  // data: TPost
}

const CommentBox: React.FC<Props> = () => {
  return <div>{CONFIG.giscus.enable && <GiscusComponent />}</div>
}

export default CommentBox
