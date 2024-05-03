import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import PostCard from "src/routes/Feed/PostList/PostCard"
import usePostsQuery from "src/hooks/usePostsQuery"
import { TSection, TPost, toTSection } from "src/types"
import PostListHeader from "./PostListHeader"

type Props = {
  section?: TSection
}

const PostList: React.FC<Props> = ({ section }) => {
  const router = useRouter()
  const data = usePostsQuery()

  const [filteredPosts, setFilteredPosts] = useState(data)

  const currentTag = `${router.query.tag || ``}` || undefined

  useEffect(() => {
    setFilteredPosts(() => {
      let newFilteredPosts = data
      if (section) {
        newFilteredPosts = newFilteredPosts.filter(
          (post) => toTSection(post.section[0]) === section
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
  }, [section, currentTag, setFilteredPosts])

  return (
    <>
      <div className="my-2">
        {!filteredPosts.length && (
          <p className="text-gray-500 dark:text-gray-300">
            등록된 글이 없습니다.
          </p>
        )}

        {!section && (
          <PostListHeader
            pinned={data.filter((post) => post.pinned === "Yes")[0]}
          />
        )}
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
