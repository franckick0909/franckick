'use client'
import { ReactLenis } from '@studio-freight/react-lenis'

function Layout({ children }: { children: React.ReactNode }) {

  return (
    <ReactLenis root>
      { children }
    </ReactLenis>
  )
}

export default Layout;