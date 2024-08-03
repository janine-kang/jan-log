import React, { useEffect, useState } from "react"
import { formatDate } from "src/libs/utils"
import styled from "@emotion/styled"
import { inter } from "src/assets"
import Link from "next/link"
import Tag from "src/general/components/Tag"
import usePostsQuery from "src/general/hooks/usePostsQuery"
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
          <div data-category={!!section} className="content">
            <header className="top">
              <h1>
                <span className="title">{pinnedPost.title}</span>
              </h1>
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

const wavePath = encodeURIComponent(
  `<svg width="100%" height="4" xmlns="http://www.w3.org/2000/svg"><path d="M0 3 C20 0 40 6 60 3 S100 6 120 3" stroke="black" fill="transparent"/></svg>`
)

const StyledWrapper = styled.div`
  margin-bottom: 2.5rem;
  padding: 1rem;

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
  article {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease;
    &:hover {
      transform: translateY(-3px);
    }
  }

  .title {
    width: auto;
    position: relative;
    font-size: 2.5rem;
    transition: color 0.3s ease;

    &::after {
      content: "";
      position: absolute;
      left: -5px;
      bottom: -5px;
      height: 32px;
      width: 105%;
      background: linear-gradient(to right, #fdf434f0, #fdf434a1);
      clip-path: polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
      z-index: -1;
    }
  }

  article:hover .title::after {
    transform: scaleX(1);
  }

  .tags {
    display: flex;
    flex-direction: row;
    gap: 0.6rem;
  }
`
