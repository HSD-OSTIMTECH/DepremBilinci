import React, { useState, useEffect } from 'react'
import { IoIosArrowDown } from "react-icons/io"
import { RiMenu3Line, RiCloseLine, RiUserLine } from "react-icons/ri"
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/router'
import type { Session } from '@supabase/supabase-js'

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [session, setSession] = useState<Session | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Check and set initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <nav className='px-6 sm:px-0 py-6'>
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center gap-2'>
          <img src="/Logos/Logo.png" alt="icon for logo" className="h-4 sm:h-8 w-4 sm:w-8" />
          <span className='text-sm sm:text-lg font-bold text-primary'>DepremBilinci</span>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-6 font-medium'>
          <a href="/" className="hover:text-primary transition-colors">Ana Sayfa</a>

          <DropdownMenu>
            <DropdownMenuTrigger className='flex items-center gap-2 cursor-pointer'>
              <span>Deprem Eğitimleri</span>
              <IoIosArrowDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <a href="/egitim/cocuklar">Çocuklar</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/egitim/ebeveynler">Ebeveynler</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/egitim/ogrenciler">Öğrenciler</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/egitim/ogretmenler">Öğretmenler</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/egitim/testler">Testler</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className='flex items-center gap-2 cursor-pointer'>
              <span>Nasıl Katkı Sağlarsınız</span>
              <IoIosArrowDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <a href="/katki">Genel Rehber</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/katki/yazilim">Yazılım</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/katki/tasarim">Tasarım</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/katki/icerik-uret">İçerik Üret</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/katki/paylas">Paylaş</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Auth Buttons */}
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger className='flex items-center gap-2 cursor-pointer'>
                <RiUserLine className="text-lg" />
                <span>Hesabınız</span>
                <IoIosArrowDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <span className="text-sm text-gray-600">
                    {session.user.email}
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/profil">Profil</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button 
                    onClick={handleLogout}
                    className="text-red-600 hover:text-red-700 transition-colors"
                  >
                    Çıkış Yap
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-4">
              <a 
                href="/login"
                className="px-4 py-2 rounded-md text-primary hover:bg-primary/5 transition-colors"
              >
                Giriş Yap
              </a>
              <a 
                href="/register"
                className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                Kayıt Ol
              </a>
            </div>
          )}
        </div>

        {/* Mobile Menu Button and Auth */}
        <div className="md:hidden flex items-center gap-4">
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger className='flex items-center gap-1'>
                <RiUserLine className="text-lg" />
                <IoIosArrowDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <span className="text-sm text-gray-600">
                    {session.user.email}
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/profil">Profil</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button 
                    onClick={handleLogout}
                    className="text-red-600 hover:text-red-700 transition-colors"
                  >
                    Çıkış Yap
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <a 
              href="/login"
              className="px-3 py-1.5 text-sm rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              Giriş
            </a>
          )}
          <button 
            className='text-2xl'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden mt-4 p-4 bg-white/20 border border-primary/20 rounded-lg shadow-xs'>
          <div className='flex flex-col gap-4'>
            <a href="/" className='hover:text-primary transition'>Ana Sayfa</a>
            
            <div className='space-y-2'>
              <p className='font-semibold'>Deprem Eğitimleri</p>
              <div className='ml-4 flex flex-col gap-2'>
                <a href="/egitim/cocuklar" className='hover:text-primary transition'>Çocuklar</a>
                <a href="/egitim/ebeveynler" className='hover:text-primary transition'>Ebeveynler</a>
                <a href="/egitim/ogrenciler" className='hover:text-primary transition'>Öğrenciler</a>
                <a href="/egitim/ogretmenler" className='hover:text-primary transition'>Öğretmenler</a>
                <a href="/egitim/testler" className='hover:text-primary transition'>Testler</a>
              </div>
            </div>

            <div className='space-y-2'>
              <p className='font-semibold'>Nasıl Katkı Sağlarsınız</p>
              <div className='ml-4 flex flex-col gap-2'>
                <a href="/katki" className='hover:text-primary transition'>Genel Rehber</a>
                <a href="/katki/yazilim" className='hover:text-primary transition'>Yazılım</a>
                <a href="/katki/tasarim" className='hover:text-primary transition'>Tasarım</a>
                <a href="/katki/icerik-uret" className='hover:text-primary transition'>İçerik Üret</a>
                <a href="/katki/paylas" className='hover:text-primary transition'>Paylaş</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar