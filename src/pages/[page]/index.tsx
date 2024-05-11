import { TSection, toTSection } from "src/types"
import PostList from "src/routes/Feed/PostList"
import { GetServerSideProps } from "next"
import styled from "@emotion/styled"
import { permanentMarker } from "src/assets"
import { getPosts } from "src/apis"
import { filterPosts } from "src/libs/utils/notion"

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page } = context.params!
  const section = page ? toTSection(page as string) : undefined
  let posts = filterPosts(await getPosts(), section)
  return {
    props: {
      posts,
      section,
    },
  }
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = [
//     {
//       params: {
//         page: TSection.books,
//         description: "읽은 책들을 포스팅 하는 공간입니다.",
//       },
//     },
//     {
//       params: {
//         page: TSection.journal,
//         description: "가끔 드는 생각들을 나열하는 공간입니다.",
//       },
//     },
//     {
//       params: {
//         page: TSection.archive,
//         description: "직무에 관련된 지식을 쌓아두는 공간입니다.",
//       },
//     },
//     {
//       params: {
//         page: TSection.work,
//         description: "지금까지의 작업물을 정리한 공간입니다.",
//       },
//     },
//   ]

//   return { paths, fallback: false }
// }

type Props = {
  posts: any[]
  section: TSection
}

const MainPage: React.FC<Props> = ({ posts, section }) => {
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
