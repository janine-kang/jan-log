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
  }
`
