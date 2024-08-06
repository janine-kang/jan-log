import Link from "next/link"
import styled from "@emotion/styled"
import {
  BlogConfigType,
  getBlogSettings,
  getUserProfile,
  ProfileConfigType,
} from "src/general"
import Image from "next/image"

const Logo = () => {
  return (
    <StyledWrapper href="/" aria-label={getBlogSettings(BlogConfigType.title)}>
      <h1 className="logo">{getBlogSettings(BlogConfigType.description)}</h1>
      <h1 className="title">
        {/* {getBlogSettings(BlogConfigType.title)} */}
        <div className="imageWrapper">
          <Image
            src={getUserProfile(ProfileConfigType.image)}
            fill
            css={{ objectFit: "cover" }}
            alt=""
            fetchPriority="auto"
          />
        </div>
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

  .imageWrapper {
    overflow: hidden;
    position: relative;
    height: 5.5rem;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
  }
`
