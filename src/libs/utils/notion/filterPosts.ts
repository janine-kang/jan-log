import { TPosts, TCategory } from "src/types"

const current = new Date()
const tomorrow = new Date(current)
tomorrow.setDate(tomorrow.getDate() + 1)
tomorrow.setHours(0, 0, 0, 0)

export function filterPosts(posts: TPosts, category?: TCategory) {
  return (
    posts
      // filter data
      .filter((post) => {
        const postDate = new Date(post?.date?.start_date || post.createdTime)
        if (!post.title || !post.slug || !post.category || postDate > tomorrow)
          return false
        return true
      })
      // filter status
      .filter((post) => post.published)
      // filter category
      .filter((post) => {
        if (!category) {
          return true
        }
        return post.category === category
      })
  )
}
