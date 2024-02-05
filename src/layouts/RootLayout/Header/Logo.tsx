import Link from "next/link"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"

const Logo = () => {
  return (
    <StyledWrapper href="/" aria-label={CONFIG.blog.title}>
      <h1>{CONFIG.blog.title}</h1>
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled(Link)`
  h1 {
    padding: 0.25rem 0;
    font-weight: 600;
  }
`
