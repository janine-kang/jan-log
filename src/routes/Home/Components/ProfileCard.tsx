import Image from "next/image"
import React from "react"
import styled from "@emotion/styled"
import { inter } from "src/assets"
import { permanentMarker } from "src/assets/fonts/permanentMarker"
import ContactCard from "./ContactCard"
import { getUserProfile, ProfileConfigType } from "src/general"

type Props = {}

const ProfileCard: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="content">
        <div className="title">about me</div>
        <div className="top">
          <Image
            src={getUserProfile(ProfileConfigType.image)}
            fill
            alt=""
            fetchPriority="auto"
          />
        </div>
        <div className="mid">
          <div className="wrapper">
            <div className="profile">
              <Image
                src={getUserProfile(ProfileConfigType.profileImage)}
                fill
                alt=""
                fetchPriority="auto"
              />
            </div>
            <div className="info">
              <div className="name">
                {getUserProfile(ProfileConfigType.name)}
              </div>
              <div className="position">
                {getUserProfile(ProfileConfigType.position)}
              </div>
              <div className="bio">{getUserProfile(ProfileConfigType.bio)}</div>
            </div>
          </div>
          <div className="desc">{getUserProfile(ProfileConfigType.about)}</div>
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
    color: #ff3000;

    @media (max-width: 768px) {
      display: none;
    }
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

      @media (max-width: 1024px) {
        align-items: flex-start;
        padding: 1rem 1rem 0.5rem;
        max-width: 720px;
      }

      .wrapper {
        @media (max-width: 1024px) {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          width: 100%;
          gap: 10px;
        }
      }

      .profile {
        display: block;
        position: relative;
        aspect-ratio: 1 / 1;
        height: 3rem;
        border-radius: 50%;
        overflow: hidden;

        @media (min-width: 768px) {
          display: none;
        }
      }

      .info {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (max-width: 1024px) {
          display: inline-flex;
          align-items: flex-start;
        }
      }

      .name {
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-family: ${inter.style.fontFamily};
        font-weight: 700;

        @media (max-width: 1024px) {
          line-height: 1.25rem;
        }
      }

      .position {
        margin-bottom: 1rem;
        font-size: 0.75rem;
        line-height: 1.25rem;
        color: ${({ theme }) => theme.colors.gray11};
        font-family: ${inter.style.fontFamily};

        @media (max-width: 1024px) {
          margin-bottom: 0.5rem;
        }
      }
      .bio {
        margin-bottom: 0.5rem;
        font-size: 0.875rem;
        line-height: 0.875rem;
        word-break: keep-all;
        text-align: center;

        @media (max-width: 1024px) {
          color: #ff3000;
          text-align: start;
          font-weight: 600;
        }
      }
      .desc {
        display: none;
        margin: 1.5rem 0 0.5rem;
        font-size: 1rem;
        line-height: 1.8rem;
        word-break: keep-all;
        text-align: start;
        white-space: pre-line;

        @media (max-width: 1024px) {
          display: block;
        }
      }
    }
  }
`
