module.exports = {
  // 网站标题
  title: '前端食用指南',
  // 网站描述
  description: '使用规范、配置说明、解决方案',
  base: '/front-end-docs/',
  // 打包目录
  dest: './dist',
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  plugins: [
    '@vuepress/active-header-links', // 页面滚动时自动激活侧边栏链接的插件
    '@vuepress/back-to-top', // 返回顶部插件
    '@vuepress/medium-zoom', // 图片预览插件
    '@vuepress/nprogress', //页面顶部进度条
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ],
  themeConfig: {
    logo: '/images/logo.png',
    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    // lastUpdated: 'Last Updated', // string | boolean
    // 启动页面丝滑滚动
    smoothScroll: true,
    socialLinks: [{ icon: 'github', link: 'https://github.com' }],
    // 导航栏配置
    nav: [
      { text: '百度', link: 'https://www.baidu.com' },
      { text: '掘金', link: 'https://juejin.cn/frontend' },
      { text: 'github', link: 'https://github.com' },
    ],
    sidebar: {
      '/': getSidebar(),
    },
    footer: {
      message: '其实我也不知道写啥注脚',
      copyright: '那我就随便写个吧',
    },
  },
}

function getSidebar() {
  return [
    {
      text: '编码规范',
      items: [
        { text: 'css规范', link: '/编码规范/css规范' },
        { text: 'html规范', link: '/编码规范/html规范' },
        { text: 'js规范', link: '/编码规范/js规范' },
        { text: 'vue规范', link: '/编码规范/vue规范' },
        { text: '版本规范', link: '/编码规范/版本规范' },
      ],
    },
    {
      text: '包管理器',
      items: [{ text: 'pnpm', link: '/包管理器/pnpm' }],
    },
    {
      text: '环境准备',
      items: [{ text: 'node-sass', link: '/环境准备/nodesass安装' }],
    },
    {
      text: '框架优化',
      items: [
        { text: '页面自刷', link: '/框架优化/页面自刷' },
        { text: '自动化工具', link: '/框架优化/自动化工具' },
      ],
    },
    {
      text: '命名规范',
      items: [
        { text: '环境变量', link: '/命名规范/环境变量' },
        { text: '文件命名', link: '/命名规范/文件命名' },
      ],
    },

    {
      text: 'git规范',
      items: [{ text: 'git规范', link: '/git规范/git规范' }],
    },
    {
      text: 'chrome插件',
      items: [{ text: '插件列表', link: '/chrome插件/readme' }],
    },
    {
      text: 'vscode插件',
      items: [{ text: '插件列表', link: '/vscode插件/readme' }],
    },
  ]
}
