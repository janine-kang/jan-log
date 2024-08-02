import styled from "@emotion/styled"
import { GetStaticProps } from "next"

import { CONFIG } from "site.config"
import { getRecordMap } from "src/apis"
import { permanentMarker } from "src/assets/fonts"
import NotionRenderer from "src/routes/Detail/components/NotionRenderer"

type Props = {
  recordMap: any
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const id = CONFIG.notionConfig.aboutId as string
  const recordMap = await getRecordMap(id)

  return {
    props: {
      recordMap,
    },
    revalidate: CONFIG.revalidatePostTime,
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
  }

  .notion-text {
    font-size: 1.1rem;
    word-break: keep-all !important;
    line-height: 1.2;
    letter-spacing: -0.2px;
    padding: 0px 2px !important;
    margin: 2px 0 !important;
  }

  .notion-link {
    font-family: ${permanentMarker.style.fontFamily};
    border-bottom: none !important;
  }
`
