import { ReactNode } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

import { Toaster } from "react-hot-toast";

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="font-nunito max-w-6xl container mx-auto">
        <Navbar />

        <Toaster 
          position="top-center"
        />

        <main>
            {children}
        </main>

        <Footer />

    </div>
  )
}

export default Layout