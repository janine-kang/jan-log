import Link from "next/link"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"

const Logo = () => {
  return (
    <StyledWrapper href="/" aria-label={CONFIG.blog.title}>
      <h1>{CONFIG.blog.description}</h1>
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled(Link)`
  h1 {
    font-size: 2.3rem;
    padding: 0.75rem 0;
    font-weight: 600;
    white-space: nowrap;
  }
`
