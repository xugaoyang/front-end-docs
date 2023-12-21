import {defineConfig} from 'vitepress'
import {withMermaid} from 'vitepress-plugin-mermaid'
import * as fs from 'fs'
import path from 'path'

const dirPath = './docs/'
function getFiles(dir, filelist = []) {
  let files = fs.readdirSync(dir)
  console.table(files)
  files = files.filter((file) => {
    const filePath = path.join(dir, file)
    const stats = fs.statSync(filePath)
    return stats.isDirectory() && !(['.vitepress','public','chrome插件','vscode插件'].includes(file))
    
  })
  for (const file of files) {
    const parent = {text: file, items:[]}
    const children = fs.readdirSync(`${dir}/${file}`)
    if(children.length) {
      for (const child of children) {
        parent.items.push({text: child.split('.')[0],link:`/${file}/${child.split('.')[0]}`})
      }
    }
    filelist.push(parent)
  }
  return filelist
}
const menu = getFiles(dirPath)


export default withMermaid(
  defineConfig({
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
        '/': menu,
      },
      footer: {
        message: 'front-end-docs',
        copyright: 'Copyright © 2023-present By Yann',
      },
    }
  })
)
