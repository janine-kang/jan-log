import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import PostCard from "src/routes/Feed/PostList/PostCard"
import { TSection, TPosts } from "src/types"

type Props = {
  posts: TPosts
  section?: TSection
}

const PostList: React.FC<Props> = ({ posts, section }) => {
  const router = useRouter()
  const [filteredPosts, setFilteredPosts] = useState(posts)

  const currentTag = `${router.query.tag || ``}` || undefined

  useEffect(() => {
    setFilteredPosts(() => {
      let newFilteredPosts = posts

      // tag
      if (currentTag) {
        newFilteredPosts = newFilteredPosts.filter(
          (post) => post && post.tags && post.tags.includes(currentTag)
        )
      }

      return newFilteredPosts
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section, currentTag, setFilteredPosts])

  return (
    <>
      <div className="my-2">
        {!filteredPosts.length && <p>등록된 글이 없습니다.</p>}
        {!section &&
          filteredPosts
            .filter((post) => !post.pinned || post.pinned === "No")
            .map((post) => <PostCard key={post.id} data={post} />)}

        {section &&
          filteredPosts.map((post) => <PostCard key={post.id} data={post} />)}
      </div>
    </>
  )
}

export default PostList
