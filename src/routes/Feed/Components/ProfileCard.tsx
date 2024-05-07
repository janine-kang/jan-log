import { CONFIG } from "site.config"
import Image from "next/image"
import React from "react"
import styled from "@emotion/styled"
import { inter } from "src/assets"
import { permanentMarker } from "src/assets/fonts/permanentMarker"
import ContactCard from "./ContactCard"

type Props = {}

const ProfileCard: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      {/* <div className="title">about me</div> */}
      <div className="content">
        <div className="title">about me</div>
        <div className="top">
          <Image src={CONFIG.profile.image} fill alt="" />
        </div>
        <div className="mid">
          <div className="name">{CONFIG.profile.name}</div>
          <div className="role">{CONFIG.profile.role}</div>
          <div className="bio">{CONFIG.profile.bio}</div>
        </div>
        <ContactCard />
      </div>
    </StyledWrapper>
  )
}

export default ProfileCard

const StyledWrapper = styled.div`
  .title {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    letter-spacing: -1.5px;
    text-transform: uppercase;
    font-family: ${permanentMarker.style.fontFamily};
  }

  .content {
    width: 100%;
    background: white;
    border-radius: 10px;

    @media (min-width: 768px) {
      padding: 0.5rem 0.8rem;
    }
    @media (min-width: 1024px) {
      padding: 0.5rem 0.8rem;
    }
    .top {
      position: relative;
      width: 100%;
      border-radius: 100px;
      &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
      }
    }
    .mid {
      display: flex;
      padding: 0.5rem;
      flex-direction: column;
      align-items: center;
      .name {
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-family: ${inter.style.fontFamily};
        font-weight: 700;
      }
      .role {
        margin-bottom: 1rem;
        font-size: 0.75rem;
        line-height: 1.25rem;
        color: ${({ theme }) => theme.colors.gray11};
      }
      .bio {
        margin-bottom: 0.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        word-break: keep-all;
        text-align: center;
        letter-spacing: 0.6px;
      }
    }
  }
`
