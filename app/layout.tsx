import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    default:  'DinoMem — Memory API for AI agents',
    template: '%s | DinoMem',
  },
  description: 'Postgres-native memory layer for AI agents. TypeScript and Python SDKs. CRDT conflict resolution, hybrid retrieval, webhooks, BYOK.',
}

const banner = (
  <Banner storageKey="dinomem-docs-banner">
    DinoMem is in active development. <a href="https://github.com/DinoMem/dinomem-sdk">Star us on GitHub</a>.
  </Banner>
)

const navbar = (
  <Navbar
    logo={
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/egg-accent.png" alt="" width={22} height={22} style={{ display: 'block' }} />
        <b>DinoMem</b>
      </span>
    }
    projectLink="https://github.com/DinoMem/dinomem-sdk"
  />
)

const footer = (
  <Footer>
    {new Date().getFullYear()} © DinoMem — AGPL-3.0 core · Apache-2.0 SDKs
  </Footer>
)

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          footer={footer}
          docsRepositoryBase="https://github.com/DinoMem/dinomem-docs/blob/main"
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
