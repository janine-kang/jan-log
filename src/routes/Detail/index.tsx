import useMermaidEffect from "./hooks/useMermaidEffect"
import PostDetail from "./PostDetail"
import styled from "@emotion/styled"
import usePostQuery from "src/general/hooks/usePostQuery"

type Props = {}

const Detail: React.FC<Props> = () => {
  useMermaidEffect()

  return (
    <StyledWrapper>
      <PostDetail />
    </StyledWrapper>
  )
}

export default Detail

const StyledWrapper = styled.div`
  padding: 2rem 0;
`
