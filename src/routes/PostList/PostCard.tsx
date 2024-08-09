import Link from "next/link"
import { formatDate } from "src/libs/utils"
import Tag from "../Tags/Tag"
import { TPost } from "../../types"
import styled from "@emotion/styled"
import { inter } from "src/assets"
import Image from "next/image"

type Props = {
  data: TPost
}

const PostCard: React.FC<Props> = ({ data }) => {
  const section = (data.section && data.section?.[0]) || undefined
  const date = new Date(data.date.start_date)

  return (
    <Link href={`/${section}/${data.slug}`}>
      <StyledWrapper>
        <article>
          <div data-category={!!section} className="content">
            <header className="top">
              <h2>{data.title}</h2>
            </header>
            {data.thumbnail && (
              <div className="thumbnail">
                <Image
                  src={data.thumbnail}
                  css={{ objectFit: "cover" }}
                  fill
                  alt={data.title}
                />
              </div>
            )}

            <div className="summary">
              <p>{data.summary}</p>
            </div>
            <div className="tags">
              {data.tags &&
                data.tags.map((tag: string, idx: number) => (
                  <Tag key={idx}>{tag}</Tag>
                ))}
            </div>
            <div className="date">
              <div className="content"> — {formatDate(date)}</div>
            </div>
          </div>
        </article>
      </StyledWrapper>
    </Link>
  )
}

export default PostCard

const StyledWrapper = styled.div`
  article {
    overflow: hidden;
    position: relative;
    border-radius: 1rem;
    transition-property: box-shadow;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;

    @media (min-width: 768px) {
      margin-bottom: 2rem;
    }

    h2 {
      width: auto;
      position: relative;
      transition: color 0.3s ease;
      word-break: keep-all;

      &::after {
        content: "";
        position: absolute;
        left: -5px;
        bottom: -5px;
        height: 22px;
        width: 105%;
        background: linear-gradient(to right, #2fdbfaf0, #34c6fda1);
        clip-path: polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
        z-index: -1;
      }
    }

    :hover h2::after {
      transform: scaleX(1);
    }

    .thumbnail {
      overflow: hidden;
      position: relative;
      margin: 1.75rem 0;
      border-radius: 1.5rem;

      width: 100%;
      background-color: ${({ theme }) => theme.colors.gray4};
      padding-bottom: 66%;

      @media (min-width: 1024px) {
        padding-bottom: 50%;
        width: 90%;
      }
    }

    > .content {
      padding: 1rem;

      &[data-thumb="false"] {
      }
      &[data-category="false"] {
        padding-top: 1.5rem;
      }
      > .top {
        display: flex;
        justify-content: space-between;

        @media (min-width: 768px) {
          flex-direction: row;
          align-items: baseline;
        }
        h3 {
          font-size: 1.125rem;
          line-height: 1.75rem;
          font-weight: 500;

          cursor: pointer;

          @media (min-width: 768px) {
            font-size: 1.25rem;
            line-height: 1.75rem;
          }
        }
      }
      > .summary {
        margin-bottom: 1rem;
        p {
          color: ${({ theme }) => theme.colors.gray11};

          @media (min-width: 768px) {
            display: block;
          }
        }
      }
      > .date {
        font-family: ${inter.style.fontFamily};
        font-size: 12px;
        font-weight: 500;
        line-height: 1;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        word-spacing: 3px;
      }
      > .tags {
        display: flex;
        gap: 0.5rem;
        margin: 0.5rem 0 1rem;
      }
    }
  }
`
