const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Janine",
    image: "/profile.jpeg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    position: "iOS Software Engineer",
    bio: "Now or Never",
    email: "developerjanine@gmail.com",
    linkedin: "janine-kang",
    github: "janine-kang",
    instagram: "",
  },
  projects: [
    {
      name: `Github`,
      href: "https://github.com/janine-kang",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Waves of Janine",
    description: "🌊🏄🏻‍♀️🌊🌊",
    mobileDescription: "🏄🏻‍♀️🌊",
    link: "",
    since: "2021", // If leave this empty, current year will be used.
    lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
    ogImageGenerateURL: "", // The link to generate OG image, don't end with a slash
  },

  // notion configuration (required)
  notionConfig: {
    aboutId: process.env.NOTION_ABOUT_PAGE_ID,
    collectionId: process.env.NOTION_COLLECTION_ID,
    collectionViewId: process.env.NOTION_COLLECTION_VIEW_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidatePostTime: 3600 * 12, // revalidate time for [slug], index
  revalidateListTime: 3600 * 4, // revalidate time for all posts
}

module.exports = { CONFIG }
