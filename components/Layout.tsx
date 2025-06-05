import { ReactNode } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

import { Toaster } from "react-hot-toast";

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col font-nunito max-w-6xl container mx-auto">
        <Navbar />

        <Toaster 
          position="top-center"
        />

        <main className="flex-grow">
            {children}
        </main>

        <Footer />

    </div>
  )
}

export default Layout