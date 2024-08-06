import React from "react"
import styled from "@emotion/styled"
import { inter } from "src/assets"
import {
  BlogConfigType,
  getBlogSettings,
  getUserProfile,
  ProfileConfigType,
} from "src/general"

const d = new Date()
const y = d.getFullYear()
const from = +getBlogSettings(BlogConfigType.since)

type Props = {
  className?: string
}

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <a
        href={`https://github.com/${getUserProfile(ProfileConfigType.github)}`}
        target="_blank"
        rel="noreferrer"
      >
        © {getUserProfile(ProfileConfigType.name)}{" "}
        {from === y || !from ? y : `${from} - ${y}`}
      </a>
    </StyledWrapper>
  )
}

export default Footer

const StyledWrapper = styled.div`
  @media (max-width: 767px) {
    padding: 1.2rem 1rem;
    background: black;
  }

  a {
    text-transform: uppercase;
    margin-top: 0.75rem;
    font-size: 0.75rem;
    line-height: 1.25rem;
    font-family: ${inter.style.fontFamily};
    color: ${({ theme }) => theme.colors.gray10};

    @media (max-width: 767px) {
      color: white;
    }
  }
`
