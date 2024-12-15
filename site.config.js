const CONFIG = {
  // profile setting (required)
  profile: {
    name: "강재닌",
    nickname: "Janine",
    image: "/profile.jpeg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    profileImage: "/memoji.jpg",
    position: "Software Engineer",
    bio: "Now or Never",
    about:
      "Front-end 부터 iOS Native 개발까지 가능한 \n 클라이언트 개발자 강재닌 입니다. \n\n 주어진 것을 반드시 해냅니다. \n 성장하는 것을 즐깁니다.",
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
    title: "강재닌의 강한 참조",
    description: "Now or Never",
    // description: "🌊🏄🏻‍♀️🌊🌊",
    logo: "/memoji-face.jpg",
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

  link: "https://janine-dev.life",

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
  giscus: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || "",
      repoId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID || "",
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || "",
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || "",
      "issue-term": "og:title",
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidatePostTime: 3600 * 12, // revalidate time for [slug], index
  revalidateListTime: 3600 * 4, // revalidate time for all posts
}

module.exports = { CONFIG }
