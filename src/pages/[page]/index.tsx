import { TPosts, TSection } from "src/types"
import { toTSection } from "src/libs/utils"
import PostList from "src/routes/Feed/PostList"
import { GetStaticProps } from "next"
import styled from "@emotion/styled"
import { permanentMarker } from "src/assets"
import { getPosts } from "src/apis"
import { filterPosts } from "src/libs/utils/notion"
import { queryClient } from "src/libs/react-query"
import { queryKey } from "src/constants/queryKey"
import { filterSection } from "src/libs/utils/notion/filterPosts"
import { CONFIG } from "site.config"

export async function getStaticPaths() {
  const sections = Object.values(TSection).filter(
    (section) => section !== TSection.about && section !== TSection.all
  )
  const paths = sections.map((section) => ({
    params: { page: section },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { page } = context.params!
  const section = page ? toTSection(page as string) : TSection.all
  let posts = queryClient.getQueryData(queryKey.posts())
  if (!posts) {
    posts = filterPosts(await getPosts())
    await queryClient.prefetchQuery(queryKey.posts(), () => posts)
  }

  if (section !== TSection.all) {
    posts = filterSection(posts as TPosts, section)
    await queryClient.prefetchQuery(queryKey.posts(section), () => posts)
  }

  return {
    props: {
      posts,
      section,
    },
    revalidate: CONFIG.revalidateListTime,
  }
}

type Props = {
  posts: TPosts
  section: TSection
}

const MainPage: React.FC<Props> = ({ section, posts }) => {
  return (
    <StyledWrapper>
      <div className="topic">
        <p className="title">{section}</p>
      </div>
      <div className="list">
        <PostList section={section} posts={posts} />
      </div>
    </StyledWrapper>
  )
}

export default MainPage

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 2rem 0;

  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  gap: 2rem;

  .list {
    grid-column: span 7 / span 7;
    display: flex;
    flex-direction: column;
  }

  .topic {
    grid-column: span 1 / span 1;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;

    .title {
      text-transform: uppercase;
      font-family: ${permanentMarker.style.fontFamily};
      font-size: 1.5rem;
      margin: 1rem 0;
      text-align: end;
      text-decoration: underline;
    }

    .desc {
      font-size: 0.5rem;
    }
  }
`
