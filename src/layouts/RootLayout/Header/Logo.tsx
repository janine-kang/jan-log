import Link from "next/link"
import styled from "@emotion/styled"
import { BlogConfigType, getBlogSettings } from "src/general"

type Props = {
  fullWidth: Boolean
}

const Logo: React.FC<Props> = ({ fullWidth }) => {
  return (
    <StyledWrapper href="/" aria-label={getBlogSettings(BlogConfigType.title)}>
      <h1 className="logo">{getBlogSettings(BlogConfigType.description)}</h1>
      <h1 className="title">
        {getBlogSettings(BlogConfigType.title)}
      </h1>
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

  .title {
    display: none;
    text-transform: lowercase;

    @media (max-width: 767px) {
      display: block;
      text-decoration-line: underline;
    }
  }

  .logo {
    @media (max-width: 767px) {
      display: none;
    }
  }
`
