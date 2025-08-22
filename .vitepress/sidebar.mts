// @ts-nocheck
import fs from 'fs'
import path from 'path'

type SidebarItem = { text: string; link?: string; items?: SidebarItem[]; collapsed?: boolean }

function getFrontmatter(filePath: string): { title?: string; order?: number } {
  try {
    const src = fs.readFileSync(filePath, 'utf8')
    const m = src.match(/^---[\s\S]*?---/)
    if (!m) return {}
    const fm = m[0]
    const title = (fm.match(/\btitle:\s*"?([^\"\n]+)"?/i) || [])[1]
    const orderStr = (fm.match(/\border:\s*([0-9]+)/i) || [])[1]
    const order = orderStr ? Number(orderStr) : undefined
    return { title, order }
  } catch {
    return {}
  }
}

function readMarkdownFiles(dir: string): { text: string; link: string; order?: number }[] {
  if (!fs.existsSync(dir)) return []
  const entries = fs.readdirSync(dir).filter((f) => f.endsWith('.md'))
  const items = entries.map((f) => {
    const name = f.replace(/\.md$/, '')
    const abs = path.join(dir, f)
    const fm = getFrontmatter(abs)
    const text = fm.title || name
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (m) => m.toUpperCase())
    return { text, link: `/${path.posix.join(dir.replace(/\\/g, '/').replace(/^.*?wiki\//, ''), name)}`, order: fm.order }
  })
  items.sort((a, b) => {
    const ao = a.order ?? 9999
    const bo = b.order ?? 9999
    if (ao !== bo) return ao - bo
    return a.text.localeCompare(b.text, 'zh-CN')
  })
  return items
}

export function buildIslandsSidebar(rootAbs: string): SidebarItem[] {
  const groups: SidebarItem[] = []

  // Map existing single-file docs
  const faqFile = path.join(rootAbs, 'Islands/FAQ.md')
  const quickStartFile = path.join(rootAbs, 'Islands/Quick_Start_Guide.md')
  const commandsFile = path.join(rootAbs, 'Islands/Commands_Reference.md')
  const permissionsFile = path.join(rootAbs, 'Islands/Permissions.md')
  const variablesFile = path.join(rootAbs, 'Islands/PAPI_Variables_Reference.md')
  const aboutFile = path.join(rootAbs, 'Islands/About.md')

  // 常见问题（作为可点击的分组标题，避免与唯一子项重名）
  if (fs.existsSync(faqFile)) {
    const fm = getFrontmatter(faqFile)
    groups.push({ text: fm.title || '常见问题', link: '/Islands/FAQ', collapsed: false })
  }

  // 开始
  const startItems: SidebarItem[] = []
  if (fs.existsSync(quickStartFile)) {
    const fm = getFrontmatter(quickStartFile)
    startItems.push({ text: fm.title || '快速开始', link: '/Islands/Quick_Start_Guide' })
  }
  if (fs.existsSync(commandsFile)) {
    const fm = getFrontmatter(commandsFile)
    startItems.push({ text: fm.title || '命令', link: '/Islands/Commands_Reference' })
  }
  if (fs.existsSync(permissionsFile)) {
    const fm = getFrontmatter(permissionsFile)
    startItems.push({ text: fm.title || '权限', link: '/Islands/Permissions' })
  }
  if (fs.existsSync(variablesFile)) {
    const fm = getFrontmatter(variablesFile)
    startItems.push({ text: fm.title || '变量', link: '/Islands/PAPI_Variables_Reference' })
  }
  if (startItems.length) groups.push({ text: '开始', collapsed: false, items: startItems, collapsible: false as any })

  // 关于（作为可点击的分组标题，避免与唯一子项重名）
  if (fs.existsSync(aboutFile)) {
    const fm = getFrontmatter(aboutFile)
    groups.push({ text: fm.title || '关于', link: '/Islands/About', collapsed: false })
  }

  return groups
}


