import Link from "next/link"
import styled from "@emotion/styled"
import { BlogConfigType, getBlogSettings } from "src/general"
import Image from "next/image"

const Logo = () => {
  return (
    <StyledWrapper href="/" aria-label={getBlogSettings(BlogConfigType.title)}>
      <div className="imageWrapper">
        <Image
          src={getBlogSettings(BlogConfigType.logo)}
          fill
          css={{ objectFit: "cover" }}
          alt=""
          fetchPriority="auto"
        />
      </div>
      <h1 className="title">{getBlogSettings(BlogConfigType.title)}</h1>
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: 10px;

  .imageWrapper {
    overflow: hidden;
    position: relative;
    height: 3.3rem;
    aspect-ratio: 1 / 1;
    border-radius: 50%;

    @media (max-width: 768px) {
      height: 5.5rem;
      margin: 0.5rem 0;
    }
  }

  .title {
    font-size: 1.3rem;
    padding: 0.75rem 0;
    font-weight: 600;
    white-space: nowrap;

    @media (max-width: 768px) {
      display: none;
    }
  }
`
