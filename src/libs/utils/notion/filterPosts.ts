import { TPosts, TSection, toTSection } from "src/types"

const current = new Date()
const tomorrow = new Date(current)
tomorrow.setDate(tomorrow.getDate() + 1)
tomorrow.setHours(0, 0, 0, 0)

export function filterPosts(posts: TPosts, section?: TSection) {
  return (
    posts
      // filter data
      .filter((post) => {
        const postDate = new Date(post?.date?.start_date || post.createdTime)
        if (!post.title || !post.slug || !post.section || postDate > tomorrow)
          return false
        return true
      })
      // filter status
      .filter((post) => post.published === "Yes")
      // filter section
      .filter((post) => {
        if (!section) {
          return true
        }
        return toTSection(post.section) === section
      })
  )
}
