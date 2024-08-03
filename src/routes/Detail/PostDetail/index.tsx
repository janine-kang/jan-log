import React from "react"
import PostHeader from "./PostHeader"
import Footer from "./PostFooter"
import CommentBox from "./CommentBox"
import Category from "src/general/components/Category"
import styled from "@emotion/styled"
import NotionRenderer from "../components/NotionRenderer"
import usePostQuery from "src/general/hooks/usePostQuery"
import { capitalizeFirstLetter } from "src/libs/utils"

type Props = {}

const PostDetail: React.FC<Props> = () => {
  const data = usePostQuery()

  if (!data) return null

  const section =
    capitalizeFirstLetter(data.section && data.section?.[0]) || undefined

  return (
    <StyledWrapper>
      <article>
        {section && (
          <div css={{ marginBottom: "0.5rem" }}>
            {/* <Category>{section}</Category> */}
          </div>
        )}
        <PostHeader data={data} />
        <div>
          <NotionRenderer recordMap={data.recordMap} />
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
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-radius: 1.5rem;
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
`
