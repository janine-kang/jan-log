const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Janine",
    image: "/profile.jpeg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "iOS Software Engineer",
    bio: "그럼에도 불구하고 배움을 멈추지 않겠다 마음먹는 순간들이 진정한 성장이라고 생각합니다.",
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
  },

  // CONFIG configration (required)
  link: "",
  since: 2021, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    aboutId: process.env.NOTION_ABOUT_PAGE_ID,
    pageId: process.env.NOTION_PAGE_ID,
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
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
