import Footer from "./Components/Footer"
import styled from "@emotion/styled"
import MobileProfileCard from "./Components/MobileProfileCard"
import ProfileCard from "./Components/ProfileCard"
import PostList from "../PostList"

import { inter } from "src/assets"
import HomeHeader from "./Header/HomeHeader"
import usePostsQuery from "src/general/hooks/usePostsQuery"
import { TPosts } from "src/types"

const HEADER_HEIGHT = 73

type Props = {}

const Home: React.FC<Props> = () => {
  const list = usePostsQuery()

  let hasPinned = true
  let pinnedPosts: TPosts = []
  let posts: TPosts = []

  list.forEach((post) => {
    if (!post.pinned || post.pinned === "No") {
      posts.push(post)
    } else {
      pinnedPosts.push(post)
    }
  })

  if (pinnedPosts.length === 0) {
    hasPinned = false
    pinnedPosts = posts.slice(0, 2)
    posts = posts.slice(2)
  }

  return (
    <StyledWrapper>
      <div className="mid">
        <HomeHeader
          headlines={pinnedPosts}
          type={hasPinned ? "pinned" : "latest"}
        />
        <div className="contents">
          <p className="time">more issues</p>
          <PostList posts={posts} />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
      <div
        className="rt"
        css={{
          height: `calc(100vh - ${HEADER_HEIGHT}px)`,
        }}
      >
        <ProfileCard />
        <div className="footer">
          <Footer />
        </div>
      </div>
    </StyledWrapper>
  )
}

export default Home

const StyledWrapper = styled.div`
  grid-template-columns: repeat(12, minmax(0, 1fr));

  padding: 2rem 0;
  display: grid;
  gap: 2rem;

  @media (max-width: 768px) {
    display: block;
    padding: 0.5rem 0;
  }

  > .lt {
    display: none;
    overflow: scroll;
    position: sticky;
    grid-column: span 2 / span 2;
    top: ${HEADER_HEIGHT - 10}px;

    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    @media (min-width: 1024px) {
      display: block;
    }
  }

  > .mid {
    grid-column: span 12 / span 12;

    @media (min-width: 1024px) {
      grid-column: span 9 / span 9;
    }

    .contents {
      .time {
        display: flex;
        align-items: center;
        padding: 0 1rem;
        font-family: ${inter.style.fontFamily};
        font-size: 12px;
        font-weight: 500;
        line-height: 1;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }
      .time:after {
        content: "";
        flex-grow: 1;
        height: 1px;
        margin: 0 1rem;
        background: black;
      }
    }

    > .tags {
      display: block;

      @media (min-width: 1024px) {
        display: none;
      }
    }

    > .footer {
      padding-bottom: 2rem;
      @media (min-width: 1024px) {
        display: none;
      }
    }
  }

  > .rt {
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    display: none;
    overflow: scroll;
    position: sticky;
    top: ${HEADER_HEIGHT - 10}px;

    @media (min-width: 1024px) {
      display: block;
      grid-column: span 3 / span 3;
    }

    .footer {
      padding-top: 1rem;
    }
  }
`
