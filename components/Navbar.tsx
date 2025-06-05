import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
  return (
    <nav className='py-6 flex items-center justify-between'>

        <div className='flex items-center gap-2'>
            <img src="Logos/Logo.png" alt="icon for logo" />
            <span className='text-lg font-bold text-primary'>DepremBilinci</span>
        </div>

        <div className='flex items-center gap-6 font-medium'>
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

                </DropdownMenuContent>

            </DropdownMenu>

            <DropdownMenu>

                <DropdownMenuTrigger className='flex items-center gap-2 cursor-pointer'>
                    <span>Nasıl Katkı Sağlarsınız</span>
                    <IoIosArrowDown />
                </DropdownMenuTrigger>

                <DropdownMenuContent>

                    <DropdownMenuItem>
                        <a href="/katkı/genel-rehber">Genel Rehber</a>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <a href="/katkı/yazılım">Yazılım</a>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <a href="/katkı/tasarım">Tasarım</a>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <a href="/katkı/icerik-uret">İçerik Üret</a>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <a href="/katkı/paylas">Paylaş</a>
                    </DropdownMenuItem>

                </DropdownMenuContent>

            </DropdownMenu>

            <a href="/iletisim" className='px-6 py-2 rounded-sm bg-primary text-background hover:-translate-y-0.5 transition-all'>İletişim</a>
        </div>

    </nav>
  )
}

export default Navbar