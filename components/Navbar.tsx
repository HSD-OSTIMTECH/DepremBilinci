import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='px-6 sm:px-0 py-6'>
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center gap-2'>
          <img src="/Logos/Logo.png" alt="icon for logo" />
          <span className='text-lg font-bold text-primary'>DepremBilinci</span>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-6 font-medium'>
          <a href="/">Ana Sayfa</a>

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
        </div>

        {/* Mobile Menu Button */}
        <button 
          className='md:hidden text-2xl'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
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