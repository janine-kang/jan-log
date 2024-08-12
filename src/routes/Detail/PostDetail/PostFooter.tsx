import styled from "@emotion/styled"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { TSection } from "src/general"
import usePostsQuery from "src/general/hooks/usePostsQuery"
import NextButtonSVG from "src/assets/svgs/nextButton.svg"
import PreviousButtonSVG from "src/assets/svgs/previousButton.svg"
import Category from "../components/Category"
import { capitalizeFirstLetter } from "src/libs/utils"

type Props = {}

const Footer: React.FC<Props> = () => {
  const router = useRouter()
  const { page, slug } = router.query
  const list = usePostsQuery(page as TSection)
  const currentPostIndex = list.findIndex((el) => el.slug === slug)

  if (!list || currentPostIndex < 0) {
    return null
  }

  const previous = currentPostIndex > 0 && list[currentPostIndex - 1]
  const next = currentPostIndex < list.length - 1 && list[currentPostIndex + 1]

  return (
    <StyledWrapper>
      <div className="wrapper">
        {previous && (
          <Link href={`/${page}/${previous.slug}`}>
            <div className="header">
              <PreviousButtonSVG />
              <div className="category">🤔</div>
              <span className="title">{previous.title}</span>
              <span className="mobile">이전글</span>
            </div>
            <p className="summary">{previous.summary}</p>
          </Link>
        )}
      </div>
      <div className="wrapper" data-layout="right">
        {next && (
          <Link href={`/${page}/${next.slug}`}>
            <div className="header" data-layout="right">
              <span className="title">{next.title}</span>
              <span className="mobile">다음글</span>
              <NextButtonSVG />
              <div className="category" data-layout="right">
                🤔
              </div>
            </div>
            <p className="summary">{next.summary}</p>
          </Link>
        )}
      </div>
    </StyledWrapper>
  )
}

export default Footer

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem auto;
  max-width: 56rem;
  color: ${({ theme }) => theme.colors.gray10};

  a {
    width: auto;
    height: auto;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;

    @media (max-width: 768px) {
      width: 1.2rem;
      height: 1.2rem;
    }
  }

  p {
    margin: 0;
  }

  .wrapper {
    padding: 0.5rem 0.7rem;
    width: 48%;
    height: 100px;
    border-radius: 0.6rem;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};

      @media (min-width: 768px) {
        background: white;
        box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.1);
      }

      svg {
        @media (min-width: 768px) {
          display: none;
        }
      }

      .category {
        @media (max-width: 768px) {
          display: none;
        }

        display: flex;
        &[data-layout="right"] {
          transform: scale(-1, 1);
        }
      }
    }

    &[data-layout="right"] {
      text-align: end;
    }

    @media (max-width: 768px) {
      height: auto;
    }
  }

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.3rem;

    &[data-layout="right"] {
      justify-content: flex-end;
    }
  }

  .title {
    font-weight: 600;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .summary {
    font-size: 0.7rem;
    margin: 0 2rem;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .mobile {
    display: none;
    @media (max-width: 768px) {
      display: inline;
      font-size: 0.8rem;

      font-weight: 600;
    }
  }

  .category {
    display: none;
    justify-content: flex-end;
    font-size: 1.3rem;

    @media (max-width: 768px) {
      display: none;
    }
  }
`
