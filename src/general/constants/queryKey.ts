import { TSection } from "./categoryKey"

export const queryKey = {
  scheme: () => ["scheme"],
  posts: (section: TSection = TSection.all) => ["posts", section],
  about: () => ["about"],
  tags: () => ["tags"],
  categories: () => ["categories"],
  post: (slug: string) => ["post", slug],
}
