import Link from "next/link"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"

const Logo = () => {
  return (
    <StyledWrapper href="/" aria-label={CONFIG.blog.title}>
      <h2>{CONFIG.blog.title}</h2>
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled(Link)`
  h2 {
    padding: 0.5rem 0;
    font-weight: 700;
    background: -webkit-linear-gradient(300deg, #b4d9e7 0%, #93c4d5 10%, #71aec3 20%, #4f98b2 30%, #2d82a0 40%, #0b6c8e 50%, #095b7f 60%, #084a70 70%, #063960 80%, #042851 90%, #021741 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
