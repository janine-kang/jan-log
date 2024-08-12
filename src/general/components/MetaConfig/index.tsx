import Head from "next/head"
import { TSection } from "src/general"
import {
  getBlogSettings,
  BlogConfigType,
  getUserProfile,
  ProfileConfigType,
} from "src/general/constants/configs"

export type MetaConfigProps = {
  title: string
  description: string
  section?: TSection
  date?: string
  image?: string
  url: string
}

const MetaConfig: React.FC<MetaConfigProps> = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="robots" content="follow, index" />
      <meta charSet="UTF-8" />
      <meta name="description" content={props.description} />
      {/* og */}
      <meta property="og:section" content={props.section} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:url" content={props.url} />
      {getBlogSettings(BlogConfigType.language) && (
        <meta
          property="og:locale"
          content={getBlogSettings(BlogConfigType.language)}
        />
      )}
      {props.image && <meta property="og:image" content={props.image} />}
      {/* twitter */}
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:card" content="summary_large_image" />
      {props.image && <meta name="twitter:image" content={props.image} />}
      {/* post */}

      <>
        <meta property="article:published_time" content={props.date} />
        <meta
          property="article:author"
          content={getUserProfile(ProfileConfigType.name)}
        />
      </>
    </Head>
  )
}

export default MetaConfig
