import { TPost } from "src/types"
import React from "react"

export type UIProps = {
  pinned?: TPost
}

const PostListHeader: React.FC<UIProps> = ({ pinned }) => {
  return (
   <div>{pinned?.title}</div>
  )
}

export default PostListHeader
