import { CONFIG } from "site.config"
import React from "react"
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineMail,
  AiFillLinkedin,
} from "react-icons/ai"
import styled from "@emotion/styled"
import { permanentMarker } from "src/assets"

const ContactCard: React.FC = () => {
  return (
    <StyledWrapper>
      {CONFIG.profile.github && (
        <a
          href={`https://github.com/${CONFIG.profile.github}`}
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineGithub className="icon" />
        </a>
      )}
      {CONFIG.profile.instagram && (
        <a
          href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineInstagram className="icon" />
        </a>
      )}
      {CONFIG.profile.email && (
        <a
          href={`mailto:${CONFIG.profile.email}`}
          rel="noreferrer"
          target="_blank"
          css={{ overflow: "hidden" }}
        >
          <AiOutlineMail className="icon" />
        </a>
      )}
      {CONFIG.profile.linkedin && (
        <a
          href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
          rel="noreferrer"
          target="_blank"
        >
          <AiFillLinkedin className="icon" />
        </a>
      )}
    </StyledWrapper>
  )
}

export default ContactCard

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0.25rem;

  a {
    display: flex;
    padding: 0.75rem;
    gap: 0.75rem;
    align-items: center;

    border-radius: 50%;
    color: ${({ theme }) => theme.colors.gray11};
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
      background-color: ${({ theme }) => theme.colors.gray5};
    }
    .icon {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .name {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`
