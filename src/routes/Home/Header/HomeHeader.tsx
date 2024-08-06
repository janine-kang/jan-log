import React from "react"
import { formatDate } from "src/libs/utils"
import styled from "@emotion/styled"
import { inter } from "src/assets"
import { TPost } from "src/types"
import Headline from "./Headline"

type Props = {
  headlines: TPost[]
  type: "pinned" | "latest"
}

const HomeHeader: React.FC<Props> = ({ headlines, type }) => {
  if (headlines.length === 0) {
    return <></>
  }

  const date = new Date(headlines[0].date.start_date)
  return (
    <StyledWrapper>
      <p className="time">
        <span>{type} — </span>
        <span>{formatDate(date)}</span>
      </p>
      <div className="list">
        {headlines.map((post) => (
          <Headline key={post.id} post={post} />
        ))}
      </div>
    </StyledWrapper>
  )
}

export default HomeHeader

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

    @media (max-width: 767px) {
      font-size: 14px;
      font-weight: 600;
      padding: 5px 0;

      span {
        background: yellow;
      }

      &::before {
        content: "📌  ";
        left: 0;
        fint-size: 1rem;
        background: yellow;
      }
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`
