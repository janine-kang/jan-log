import { TPosts, TSection } from "src/types"
import { toTSection } from "src/libs/utils"

const current = new Date()
const tomorrow = new Date(current)
tomorrow.setDate(tomorrow.getDate() + 1)
tomorrow.setHours(0, 0, 0, 0)

export function filterPosts(posts: TPosts) {
  return (
    posts
      // filter data
      .filter((post) => {
        const postDate = new Date(post?.date?.start_date || post.createdTime)
        return !(
          !post.title ||
          !post.slug ||
          !post.section ||
          postDate > tomorrow
        )
      })
      // filter status
      .filter((post) => post.published === "Yes")
  )
}

export function filterSection(posts: TPosts, section: TSection) {
  return posts.filter((post) => toTSection(post.section[0]) === section)
}
