import Detail from "src/routes/Detail"
import { CONFIG } from "site.config"
import { NextPageWithLayout, TPosts } from "../../../types"
import { toTSection } from "src/libs/utils"
import CustomError from "src/routes/Error"

import MetaConfig from "src/general/components/MetaConfig"
import { GetStaticProps } from "next"
import { queryClient } from "src/libs/react-query"
import { queryKey } from "src/general/constants/queryKey"
import { dehydrate } from "@tanstack/react-query"
import usePostQuery from "src/general/hooks/usePostQuery"
import { getPosts, getRecordMap } from "src/libs/networkService"

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
  const slug = context.params?.slug
  let posts = queryClient.getQueryData(queryKey.posts()) as TPosts

  if (!posts) {
    await getPosts()
    posts = queryClient.getQueryData(queryKey.posts()) as TPosts
  }

  const postDetail = posts.find((t: any) => t.slug === slug)
  // TODO: - 통신 줄이기
  const recordMap = await getRecordMap(postDetail?.id!)

  await queryClient.prefetchQuery(queryKey.post(`${slug}`), () => ({
    ...postDetail,
    recordMap,
  }))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: CONFIG.revalidatePostTime,
  }
}

const DetailPage: NextPageWithLayout = () => {
  const post = usePostQuery()

  if (!post) return <CustomError />

  const image =
    post.thumbnail ??
    CONFIG.ogImageGenerateURL ??
    `${CONFIG.ogImageGenerateURL}/${encodeURIComponent(post.title)}.png`

  const date = post.date?.start_date || post.createdTime || ""
  const section = post.section[0]

  const meta = {
    title: post.title,
    date: new Date(date).toISOString(),
    image: image,
    description: post.summary || "",
    section: toTSection(section),
    url: `${CONFIG.link}/${section}/${post.slug}`,
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
