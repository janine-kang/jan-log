import React from "react"
import { CONFIG } from "site.config"
import Giscus from "@giscus/react"
import { Repo } from "@giscus/react/dist/types"
import styled from "@emotion/styled"

const GiscusComment = () => {
  const config = CONFIG.giscus.config

  return (
    <StyledWrapper>
      <hr />
      <Giscus
        id="comments"
        repo={config.repo as Repo}
        repoId={config.repoId}
        category={config.category}
        categoryId={config.categoryId}
        mapping="og:title"
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="top"
        theme="light"
        lang="en"
        loading="lazy"
      />
    </StyledWrapper>
  )
}

export default GiscusComment

const StyledWrapper = styled.div`
  hr {
    margin: 3rem 0;
  }
`
