import { defineConfig } from 'vitepress'

const docsBase = process.env.DOCS_BASE ?? '/'
const base = docsBase.endsWith('/') ? docsBase : `${docsBase}/`

export default defineConfig({
  base,
  title: 'cesium-kit',
  description:
    'cesium 二次封装库',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'API', link: '/api/' },
      { text: 'GitHub', link: 'https://github.com/CongYao1993/cesium-kit' },
    ],
    sidebar: {
      '/api/': [
        {
          text: 'API 文档',
          items: [{ text: '总览', link: '/api/' }],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/CongYao1993/cesium-kit' }
    ],
    footer: {
      message: 'Built with pnpm workspaces, TypeScript, Rollup and VitePress.',
      copyright: 'Copyright © 2026 cesium-kit',
    },
    search: {
      provider: 'local',
    },
  },
})
