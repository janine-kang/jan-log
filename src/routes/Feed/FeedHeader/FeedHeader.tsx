import React, { useEffect, useState } from "react"
import { formatDate } from "src/libs/utils"
import styled from "@emotion/styled"
import { inter } from "src/assets"
import Link from "next/link"
import Tag from "src/components/Tag"
import usePostsQuery from "src/hooks/usePostsQuery"
import { TPost } from "src/types"

const PostListHeader: React.FC = () => {
  const data = usePostsQuery()
  const [pinnedPost, setPinnedPost] = useState<TPost>()

  useEffect(() => {
    setPinnedPost(() => {
      let [pinned] = data.filter((post) => post.pinned === "Yes")

      return pinned
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, setPinnedPost])

  if (!pinnedPost) return <></>

  const date = new Date(pinnedPost.date.start_date)
  const section = (pinnedPost.section && pinnedPost.section?.[0]) || undefined

  return (
    <StyledWrapper>
      <p className="time">
        <span>pinned — </span>
        {formatDate(date)}
      </p>
      <Link href={`/${section}/${pinnedPost.slug}`}>
        <article>
          <div
            data-thumb={!!pinnedPost.thumbnail}
            data-category={!!section}
            className="content"
          >
            <header className="top">
              <h1>{pinnedPost.title}</h1>
            </header>
            <div className="summary">
              <p>{pinnedPost.summary}</p>
            </div>
            <div className="tags">
              {pinnedPost.tags &&
                pinnedPost.tags.map((tag: string, idx: number) => (
                  <Tag key={idx}>{tag}</Tag>
                ))}
            </div>
          </div>
        </article>
      </Link>
    </StyledWrapper>
  )
}

export default PostListHeader

const StyledWrapper = styled.div`
  .time {
    font-family: ${inter.style.fontFamily};
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    span {
      word-spacing: 3px;
    }
  }

  header {
    font-size: 2.5rem;
  }

  .tags {
    display: flex;
    flex-direction: row;
    gap: 0.6rem;
  }
`
