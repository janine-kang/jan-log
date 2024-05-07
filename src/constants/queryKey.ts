export const queryKey = {
  scheme: () => ["scheme"],
  posts: () => ["posts"],
  about: () => ["about"],
  tags: () => ["tags"],
  categories: () => ["categories"],
  post: (slug: string) => ["post", slug],
}
