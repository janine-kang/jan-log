import { TSection, toTSection } from "src/types"
import PostList from "src/routes/Feed/PostList"
import { useRouter } from "next/router"
import { GetStaticPaths, GetStaticProps } from "next"

const MainPage = ({ page }: { page: TSection }) => {
  return <PostList section={page} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    { params: { page: TSection.books } },
    { params: { page: TSection.journal } },
    { params: { page: TSection.post } },
    { params: { page: TSection.work } },
  ]

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { page } = context.params!

  return {
    props: { page },
  }
}

export default MainPage
