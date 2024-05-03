import { TCategory, toTCategory } from "src/types"
import PostList from "src/routes/Feed/PostList"
import { useRouter } from "next/router"
import { GetStaticPaths, GetStaticProps } from "next"

const MainPage = ({ page }: { page: TCategory }) => {
  return <PostList category={page} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    { params: { page: TCategory.books } },
    { params: { page: TCategory.journal } },
    { params: { page: TCategory.post } },
    { params: { page: TCategory.work } },
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
