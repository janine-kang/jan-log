import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import PostCard from "src/routes/Feed/PostList/PostCard"
import usePostsQuery from "src/hooks/usePostsQuery"
import { TCategory, toTCategory } from "src/types"

type Props = {
  category?: TCategory
}

const PostList: React.FC<Props> = ({ category }) => {
  const router = useRouter()
  const data = usePostsQuery()
  const [filteredPosts, setFilteredPosts] = useState(data)

  const currentTag = `${router.query.tag || ``}` || undefined

  useEffect(() => {
    setFilteredPosts(() => {
      let newFilteredPosts = data

      if (category) {
        newFilteredPosts = newFilteredPosts.filter(
          (post) => toTCategory(post.category[0]) === category
        )
      }

      // tag
      if (currentTag) {
        newFilteredPosts = newFilteredPosts.filter(
          (post) => post && post.tags && post.tags.includes(currentTag)
        )
      }
      return newFilteredPosts
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, currentTag, setFilteredPosts])

  return (
    <>
      <div className="my-2">
        {!filteredPosts.length && (
          <p className="text-gray-500 dark:text-gray-300">Nothing! 😺</p>
        )}
        {filteredPosts.map((post) => (
          <PostCard key={post.id} data={post} />
        ))}
      </div>
    </>
  )
}

export default PostList
