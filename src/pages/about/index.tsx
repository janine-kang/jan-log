import styled from "@emotion/styled"
import { GetServerSideProps } from "next"

import { CONFIG } from "site.config"
import { getRecordMap } from "src/apis"
import { noto, permanentMarker } from "src/assets/fonts"
import NotionRenderer from "src/routes/Detail/components/NotionRenderer"

type Props = {
  recordMap: any // Adjust the type according to your data structure
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const id = CONFIG.notionConfig.aboutId as string
  const recordMap = await getRecordMap(id)

  return {
    props: {
      recordMap,
    },
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
    line-height: 1.5;
    letter-spacing: -0.2px;
    padding: 5px 2px !important;
    margin: 4px 0 !important;
  }

  .notion-link {
    font-family: ${permanentMarker.style.fontFamily};
    border-bottom: none !important;
  }
`
