import styled from "@emotion/styled"
import Link from "next/link"
import Tag from "src/routes/Tags/Tag"
import { TPost } from "src/types"
import Image from "next/image"

type Props = {
  post: TPost
}

const Headline: React.FC<Props> = ({ post }) => {
  const section = (post.section && post.section?.[0]) || undefined

  return (
    <StyledWrapper href={`/${section}/${post.slug}`}>
      <article>
        <div data-category={!!section} className="content">
          <header className="top">
            <h1>
              <span className="title">{post.title}</span>
            </h1>
          </header>
          <div className="image">
            {post.thumbnail && (
              <Image src={post.thumbnail} fill alt="" fetchPriority="auto" />
            )}
          </div>

          <div className="summary">
            <p>{post.summary}</p>
          </div>
          <div className="tags">
            {post.tags &&
              post.tags.map((tag: string, idx: number) => (
                <Tag key={idx}>{tag}</Tag>
              ))}
          </div>
        </div>
      </article>
    </StyledWrapper>
  )
}

export default Headline

const StyledWrapper = styled(Link)`
  margin: 3px 0px;

  article {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease;
    &:hover {
      transform: translateY(-3px);
    }
  }

  .image {
    margin: 1rem 0;
    border-radius: 25px;

    img {
      width: 100%;
      height: auto;

      position: unset !important;
      border-radius: 25px;
      object-fit: contain;

      @media (min-width: 768px) {
        height: auto;
        width: 80% !important;
      }
    }
  }

  .title {
    width: auto;
    position: relative;
    font-size: 1.8rem;
    transition: color 0.3s ease;
    word-break: keep-all;

    &::after {
      content: "";
      position: absolute;
      left: -5px;
      bottom: -5px;
      height: 21px;
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
