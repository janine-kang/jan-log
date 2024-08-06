import styled from "@emotion/styled"
import { GetStaticProps } from "next"

import { permanentMarker } from "src/assets/fonts"
import {
  getAboutPageKey,
  getRevalidationTime,
  RevalidationConfigType,
} from "src/general"
import { getBlockData } from "src/libs/networkService"

import NotionRenderer from "src/routes/Detail/components/NotionRenderer"

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
      <div className="title">about</div>
      <NotionRenderer recordMap={recordMap} />
    </StyledWrapper>
  )
}

export default About

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1200px;

  @media (max-width: 767px) {
    max-width: 767px;
  }

  .notion-collection-page-properties {
    display: none !important;
  }

  .notion-page {
    padding: 0;
  }

  .title {
    width: 720px;
    margin: 0 auto;
    font-family: ${permanentMarker.style.fontFamily};
    font-size: 2.4rem;
    color: hsl(0deg 66.67% 58.38%);

    @media (max-width: 767px) {
      width: 100%;
      display: none;
    }
  }

  .notion-text {
    font-size: 1.1rem;
    word-break: keep-all !important;
    line-height: 1.2;
    letter-spacing: -0.2px;
    padding: 0px 2px !important;
    margin: 2px 0 !important;

    @media (max-width: 767px) {
      padding: 0px 1.3rem !important;
      line-height: 1.4;
      letter-spacing: -0.2px;
      word-break: keep-all !important;
    }
  }

  .notion-link {
    font-family: ${permanentMarker.style.fontFamily};
    border-bottom: none !important;
  }
`
