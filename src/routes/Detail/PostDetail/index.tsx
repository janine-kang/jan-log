import React from "react"
import PostHeader from "./PostHeader"

import CommentBox from "./CommentBox"
import styled from "@emotion/styled"
import NotionRenderer from "../components/NotionRenderer"
import usePostQuery from "src/general/hooks/usePostQuery"
import { capitalizeFirstLetter } from "src/libs/utils"
import Category from "src/routes/Detail/components/Category"
import { colors } from "src/styles"
import { inter } from "src/assets"
import Link from "next/link"
import BackButtonSVG from "src/assets/svgs/backButton.svg"

type Props = {}

const PostDetail: React.FC<Props> = () => {
  const data = usePostQuery()

  if (!data) return null

  const section = data.section && data.section?.[0]

  return (
    <StyledWrapper>
      <Link href={`/${section}`} className="buttonWrapper">
        <BackButtonSVG />
        <span className="backButton">목록으로</span>
      </Link>

      <article>
        <div css={{ marginBottom: "0.5rem" }}>
          <Category>{capitalizeFirstLetter(section)}</Category>
        </div>
        <PostHeader data={data} />
        <div className="recordWrapper">
          <NotionRenderer recordMap={data.block} />
        </div>
        <CommentBox data={data} />
      </article>
    </StyledWrapper>
  )
}

export default PostDetail

const StyledWrapper = styled.div`
  padding: 2.2rem;
  max-width: 56rem;
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4};

  margin: 1rem auto 0;

  .buttonWrapper {
    display: none;
  }

  > article {
    margin: 0 auto;
    max-width: 42rem;

    @media (min-width: 768px) {
      padding-top: 3rem;
    }
  }

  @media (min-width: 768px) {
    border-radius: 1.5rem;
    padding: 0 1.5rem 3rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);

    .buttonWrapper {
      display: flex;
      gap: 0.5rem;
      padding: 1.5rem 1rem 0;
      svg {
        width: 1.2rem;
        color: ${colors.light.gray11};
      }

      .backButton {
        display: block;

        font-family: ${inter.style.fontFamily};
        font-weight: 900;
        font-size: 1rem;
        color: ${colors.light.gray11};
      }
    }
  }

  .recordWrapper {
    .notion-text {
      font-size: 1rem;
      line-height: 1.4;
      font-family: ${inter.style.fontFamily};
      padding: 0px 2px !important;
      margin: 8px 0 !important;
      word-break: keep-all !important;
      white-space: normal !important;

      @media (max-width: 767px) {
        line-height: 1.4;
        letter-spacing: -0.2px;
        word-break: break-all !important;
      }
    }
  }
`
