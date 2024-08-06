import { TPosts, TSection } from "src/types"
import { GetStaticProps } from "next"
import styled from "@emotion/styled"
import { permanentMarker } from "src/assets"
import { queryClient } from "src/libs/react-query"
import { queryKey } from "src/general/constants/queryKey"
import { getRevalidationTime, RevalidationConfigType } from "src/general"
import { getPosts } from "src/libs/networkService"
import PostList from "src/routes/PostList"
import TagList from "src/routes/Tags/TagList"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import filterByTags from "src/libs/networkService/notion/filterByTags"

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
  let posts = queryClient.getQueryData(queryKey.posts(section))

  if (!posts) {
    await getPosts()
    posts = queryClient.getQueryData(queryKey.posts(section))
  }

  return {
    props: {
      section,
      posts,
    },
    revalidate: getRevalidationTime(RevalidationConfigType.list),
  }
}

type Props = {
  section: TSection
  posts: TPosts
}

const MainPage: React.FC<Props> = ({ section, posts }) => {
  const [postList, setPostList] = useState(posts)
  const params = useRouter().asPath.split("?tag=")[1]
  const tags = filterByTags(posts)
  const tagList = tags && Object.keys(tags)

  useEffect(() => {
    if (params && tags) {
      const filtered = tags[params]
      setPostList(filtered)
    } else {
      setPostList(posts)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, posts])

  return (
    <StyledWrapper>
      <div className="topic">
        <Link href={`/${section}`} className="title">
          {section}
        </Link>
        {tagList && <TagList tagList={tagList} />}
      </div>
      <div className="list">
        <PostList posts={postList} />
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
  grid-template-columns: repeat(9, minmax(0, 1fr));
  gap: 2rem;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }

  .list {
    grid-column: span 7 / span 7;
    display: flex;
    flex-direction: column;
  }

  .topic {
    grid-column: span 2 / span 2;

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

      @media (max-width: 767px) {
        text-align: start;
        background: blue;
        color: white;
        padding: 15px;
      }
    }

    .desc {
      font-size: 0.5rem;
    }
  }
`
