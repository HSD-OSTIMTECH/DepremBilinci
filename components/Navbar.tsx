import React from 'react'

const Navbar = () => {
  return (
    <nav className='py-6 flex items-center justify-between'>

        <div className='flex items-center gap-2'>
            <img src="Logos/Logo.png" alt="icon for logo" />
            <span className='text-lg font-bold text-primary'>DepremBilinci</span>
        </div>

        <div className='flex items-center gap-6 font-medium'>
            <a href="/">Ana Sayfa</a>
            <a href="/deprembilinci">Deprem Bilinci</a>
            <a href="/katkı">Nasıl Katkı Sağlarsınız</a>

            <a href="/iletisim" className='px-6 py-2 rounded-sm bg-primary text-background hover:-translate-y-0.5 transition-all'>İletişim</a>
        </div>

    </nav>
  )
}

export default Navbar