import React from "react"
import PostCard from "src/routes/Home/PostList/PostCard"
import { TPosts } from "src/types"

type Props = {
  posts: TPosts
}

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <div className="my-2">
        {!posts.length ? (
          <p>등록된 글이 없습니다.</p>
        ) : (
          posts.map((post) => <PostCard key={post.id} data={post} />)
        )}
      </div>
    </>
  )
}

export default PostList
