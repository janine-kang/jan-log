import { NextPageWithLayout } from "../types"

import MetaConfig from "src/general/components/MetaConfig"
import { queryClient } from "src/libs/react-query"
import { GetStaticProps } from "next"
import { dehydrate } from "@tanstack/react-query"
import {
  BlogConfigType,
  getBlogSettings,
  getRevalidationTime,
  RevalidationConfigType,
} from "src/general"
import { getPosts } from "src/libs/networkService"
import Home from "src/routes/Home"

export const getStaticProps: GetStaticProps = async () => {
  await getPosts()

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: getRevalidationTime(RevalidationConfigType.list),
  }
}

const HomePage: NextPageWithLayout = () => {
  const meta = {
    title: getBlogSettings(BlogConfigType.title),
    description: getBlogSettings(BlogConfigType.description),
    type: "website",
    url: getBlogSettings(BlogConfigType.link),
  }

  return (
    <>
      <MetaConfig {...meta} />
      <Home />
    </>
  )
}

export default HomePage
