import Detail from "src/routes/Detail"
import { NextPageWithLayout, TPosts, TSection } from "../../../types"
import { toTSection } from "src/libs/utils"
import CustomError from "src/routes/Error"

import MetaConfig from "src/general/components/MetaConfig"
import { GetStaticProps } from "next"
import { queryClient } from "src/libs/react-query"
import { queryKey } from "src/general/constants/queryKey"
import { dehydrate } from "@tanstack/react-query"
import usePostQuery from "src/general/hooks/usePostQuery"
import { getPosts } from "src/libs/networkService"
import {
  getRevalidationTime,
  RevalidationConfigType,
  getBlogSettings,
  BlogConfigType,
} from "src/general"
import { getArticle } from "src/libs/networkService/service/getArticle"

export const getStaticPaths = async () => {
  let posts = queryClient.getQueryData(queryKey.posts()) as TPosts

  if (!posts) {
    await getPosts()
    posts = queryClient.getQueryData(queryKey.posts()) as TPosts
  }

  return {
    paths: posts.map((post) => `/${post.section}/${post.slug}`),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const section = context.params?.page as TSection
  const slug = context.params?.slug

  let posts = queryClient.getQueryData(queryKey.posts(section)) as TPosts

  if (!posts) {
    await getPosts()
    posts = queryClient.getQueryData(queryKey.posts(section)) as TPosts
  }

  const target = posts.find((t: any) => t.slug === slug)
  await getArticle(target)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: getRevalidationTime(RevalidationConfigType.post),
  }
}

const DetailPage: NextPageWithLayout = () => {
  const post = usePostQuery()

  if (!post) return <CustomError />

  const image =
    post.thumbnail ??
    getBlogSettings(BlogConfigType.ogImageGen) ??
    `${getBlogSettings(BlogConfigType.ogImageGen)}/${encodeURIComponent(
      post.title
    )}.png`

  const date = post.date?.start_date || post.createdTime || ""
  const section = post.section[0]

  const meta = {
    title: post.title,
    date: new Date(date).toISOString(),
    image: image,
    description: post.summary || "",
    section: toTSection(section),
    url: `${getBlogSettings(BlogConfigType.link)}/${section}/${post.slug}`,
  }

  return (
    <>
      <MetaConfig {...meta} />
      <Detail />
    </>
  )
}

DetailPage.getLayout = (page) => {
  return <>{page}</>
}

export default DetailPage
