import styled from "@emotion/styled"
import React from "react"
import PostCard from "src/routes/PostList/PostCard"
import { TPosts } from "src/types"

type Props = {
  posts: TPosts
}

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <StyledWrapper className="my-2">
      {!posts || !posts.length ? (
        <p>등록된 글이 없습니다.</p>
      ) : (
        posts.map((post, idx) => {
          return (
            <>
              {idx !== 0 && <hr />}
              <PostCard key={post.id} data={post} />
            </>
          )
        })
      )}
    </StyledWrapper>
  )
}

export default PostList

const StyledWrapper = styled.div`
  hr {
    display: none;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;

    hr {
      display: block;
      margin: 1rem 0;
    }
  }
`
