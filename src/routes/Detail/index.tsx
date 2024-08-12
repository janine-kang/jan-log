import PostDetail from "./PostDetail"
import styled from "@emotion/styled"
import Footer from "./PostDetail/PostFooter"

type Props = {}

const Detail: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <PostDetail />
      <Footer />
    </StyledWrapper>
  )
}

export default Detail

const StyledWrapper = styled.div`
  @media (min-width: 768px) {
    padding: 2rem 0;
  }
`
