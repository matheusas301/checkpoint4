import { Footer } from "../footer/page"
import { Header } from "../header/Header"
import { ElementMain } from "./Layout.style"

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <ElementMain>{children}</ElementMain>
      <Footer />
    </>
  )
}