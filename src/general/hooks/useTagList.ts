import { TPosts } from "src/types"

const useTagList = (posts: TPosts) => {
  let list: { [key: string]: TPosts } = {}

  for (const post of posts) {
    const tags = post.tags

    if (tags) {
      tags.forEach((tag) => {
        if (!list[tag]) {
          list[tag] = []
        }
        list[tag].push(post)
      })
    }
  }

  return list
}

export default useTagList
