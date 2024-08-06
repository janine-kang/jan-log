import React from "react"
import PostHeader from "./PostHeader"
import Footer from "./PostFooter"
import CommentBox from "./CommentBox"
import styled from "@emotion/styled"
import NotionRenderer from "../components/NotionRenderer"
import usePostQuery from "src/general/hooks/usePostQuery"
import { capitalizeFirstLetter } from "src/libs/utils"
import Category from "src/routes/Detail/components/Category"

type Props = {}

const PostDetail: React.FC<Props> = () => {
  const data = usePostQuery()

  if (!data) return null

  const section = capitalizeFirstLetter(data.section && data.section?.[0])

  return (
    <StyledWrapper>
      <article>
        <div css={{ marginBottom: "0.5rem" }}>
          <Category>{section}</Category>
        </div>
        <PostHeader data={data} />
        <div>
          <NotionRenderer recordMap={data.block} />
        </div>
        <>
          <Footer />
          <CommentBox data={data} />
        </>
      </article>
    </StyledWrapper>
  )
}

export default PostDetail

const StyledWrapper = styled.div`
  padding: 3rem 2.5rem;
  max-width: 56rem;
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin: 0 auto;
  > article {
    margin: 0 auto;
    max-width: 42rem;
  }

  @media (min-width: 768px) {
    border-radius: 1.5rem;
    padding: 3rem 1.5rem;
  }
`
