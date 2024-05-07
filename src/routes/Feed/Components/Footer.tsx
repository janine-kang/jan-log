import { CONFIG } from "site.config"
import React from "react"
import styled from "@emotion/styled"
import { inter } from "src/assets"

const d = new Date()
const y = d.getFullYear()
const from = +CONFIG.since

type Props = {
  className?: string
}

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <a
        href={`https://github.com/${CONFIG.profile.github}`}
        target="_blank"
        rel="noreferrer"
      >
        © {CONFIG.profile.name} {from === y || !from ? y : `${from} - ${y}`}
      </a>
    </StyledWrapper>
  )
}

export default Footer

const StyledWrapper = styled.div`
  a {
    text-transform: uppercase;
    margin-top: 0.75rem;
    font-size: 0.75rem;
    line-height: 1.25rem;
    font-family: ${inter.style.fontFamily};
    color: ${({ theme }) => theme.colors.gray10};
  }
`
