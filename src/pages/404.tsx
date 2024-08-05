import { NextPageWithLayout, TPosts, TTags } from "../types"
import CustomError from "../routes/Error"
import MetaConfig from "src/general/components/MetaConfig"
import { BlogConfigType, getBlogSettings } from "src/general"

type Props = {
  tags: TTags
  posts: TPosts
}

const NotFoundPage: NextPageWithLayout<Props> = () => {
  return <CustomError />
}

NotFoundPage.getLayout = (page) => {
  return (
    <>
      <MetaConfig
        {...{
          title: getBlogSettings(BlogConfigType.title),
          description: getBlogSettings(BlogConfigType.description),
          type: "website",
          url: getBlogSettings(BlogConfigType.link),
        }}
      />
      {page}
    </>
  )
}

export default NotFoundPage
