import { TPosts, TSection } from "src/types"
import { GetStaticProps } from "next"
import styled from "@emotion/styled"
import { permanentMarker } from "src/assets"
import { queryClient } from "src/libs/react-query"
import { queryKey } from "src/general/constants/queryKey"
import { getRevalidationTime, RevalidationConfigType } from "src/general"
import { getPosts } from "src/libs/networkService"
import PostList from "src/routes/Home/PostList"

export async function getStaticPaths() {
  const sections = Object.values(TSection).filter(
    (section) => section !== TSection.about && section !== TSection.all
  )
  const paths = sections.map((section) => ({
    params: { page: section },
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const section = context.params?.page as TSection
  const posts = queryClient.getQueryData(queryKey.posts(section))

  if (!posts) {
    await getPosts()
  }

  return {
    props: {
      section,
    },
    revalidate: getRevalidationTime(RevalidationConfigType.list),
  }
}

type Props = {
  section: TSection
}

const MainPage: React.FC<Props> = ({ section }) => {
  const posts = queryClient.getQueryData(queryKey.posts(section)) as TPosts

  return (
    <StyledWrapper>
      <div className="topic">
        <p className="title">{section}</p>
      </div>
      <div className="list">
        <PostList posts={posts} />
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
