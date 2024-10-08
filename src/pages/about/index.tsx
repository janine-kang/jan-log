import styled from "@emotion/styled"
import { GetStaticProps } from "next"

import { inter, permanentMarker } from "src/assets/fonts"
import {
  getAboutPageKey,
  getRevalidationTime,
  RevalidationConfigType,
} from "src/general"
import { getBlockData } from "src/libs/networkService"

import NotionRenderer from "src/routes/Detail/components/NotionRenderer"
import ProfileCard from "src/routes/Home/Components/ProfileCard"

type Props = {
  recordMap: any
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const id = getAboutPageKey()
  const recordMap = await getBlockData(id)

  return {
    props: {
      recordMap,
    },
    revalidate: getRevalidationTime(RevalidationConfigType.post),
  }
}

const About: React.FC<Props> = ({ recordMap }) => {
  return (
    <StyledWrapper>
      <div className="mobile">
        <ProfileCard />
      </div>
      <div className="desktop">
        <NotionRenderer recordMap={recordMap} />
      </div>
    </StyledWrapper>
  )
}

export default About

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1200px;

  .mobile {
    display: none;
  }

  @media (max-width: 1024px) {
    max-width: 767px;
    margin: 0 auto;

    .mobile {
      display: block;
    }

    .desktop {
      display: none;
    }
  }

  .notion-collection-page-properties {
    display: none !important;
  }

  .notion-page {
    padding: 0;
  }

  .notion-text {
    font-size: 1rem;
    word-break: keep-all !important;
    line-height: 1.4;
    font-family: ${inter.style.fontFamily};
    padding: 0px 2px !important;
    margin: 2px 0 !important;
  }

  .notion-link {
    font-family: ${permanentMarker.style.fontFamily};
    border-bottom: none !important;
  }

  .notion-asset-wrapper-image {
    div {
      height: 100% !important;
    }
  }
`
