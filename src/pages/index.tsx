import Feed from "src/routes/Feed"
import { CONFIG } from "../../site.config"
import { NextPageWithLayout } from "../types"

import MetaConfig from "src/general/components/MetaConfig"
import { queryClient } from "src/libs/react-query"
import { GetStaticProps } from "next"
import { dehydrate } from "@tanstack/react-query"
import { getRevalidationTime, RevalidationType } from "src/general"
import { getPosts } from "src/libs/networkService"

export const getStaticProps: GetStaticProps = async () => {
  await getPosts()

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: getRevalidationTime(RevalidationType.list),
  }
}

const FeedPage: NextPageWithLayout = () => {
  const meta = {
    title: CONFIG.blog.title,
    description: CONFIG.blog.description,
    type: "website",
    url: CONFIG.link,
  }

  return (
    <>
      <MetaConfig {...meta} />
      <Feed />
    </>
  )
}

export default FeedPage
