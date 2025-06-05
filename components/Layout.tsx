import { ReactNode } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

import { Toaster } from "react-hot-toast";

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
        <Navbar />

        <Toaster 
          position="top-center"
        />

        <main>
            {children}
        </main>

        <Footer />

    </>
  )
}

export default Layout