import { queryKey } from "src/general"
import { queryClient } from "src/libs/react-query"
import { filterPosts } from "src/libs/utils/notion"
import { getPostsData } from "src/libs/networkService"
import { TPost, TSection } from "src/types"

export const getPosts = async () => {
  let sections: { [key in TSection]: any[] } = {
    [TSection.archive]: [],
    [TSection.books]: [],
    [TSection.journal]: [],
    [TSection.work]: [],
    [TSection.about]: [],
    [TSection.all]: [],
  }

  const posts = filterPosts(await getPostsData())
  sections[TSection.all] = posts

  for (const post of posts) {
    const section = post.section
    sections[section as TSection].push(post)
  }

  for (const section in sections) {
    const target = section as TSection
    const posts = sections[target]

    await queryClient.prefetchQuery(queryKey.posts(target), () => posts)
  }

  return posts
}
