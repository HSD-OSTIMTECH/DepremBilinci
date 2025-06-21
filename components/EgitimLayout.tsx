import React, { useState } from 'react'
import { IoAddCircle } from "react-icons/io5"
import { supabase } from '@/lib/supabaseClient'
import toast from 'react-hot-toast'
import Navbar from './Navbar'
import Footer from './Footer'
import { Toaster } from 'react-hot-toast'


const EgitimLayout = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [note, setNote] = useState({
    title: '',
    content: '',
    category: ''
  })

  const handleSaveNote = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (!session) {
        toast.error('Not almak için giriş yapmalısınız')
        return
      }

      if (!note.title || !note.content) {
        toast.error('Başlık ve içerik alanları doldurulmalıdır')
        return
      }

      const { error } = await supabase
        .from('notes')
        .insert([
          {
            title: note.title,
            content: note.content,
            category: window.location.pathname.split('/')[2] || 'genel',
            user_id: session.user.id
          }
        ])

      if (error) throw error

      toast.success('Notunuz kaydedildi')
      setIsModalOpen(false)
      setNote({ title: '', content: '', category: '' })

    } catch (error) {
      toast.error('Not kaydedilirken bir hata oluştu')
    }
  }

  return (
    <div className="min-h-screen flex flex-col font-nunito max-w-6xl container mx-auto">

      {/* Navbar */}
      <Navbar />

      <Toaster 
          position="top-center"
        />

      {/* Main Content */}
      <main>
        {children}
      </main>

      

      {/* Floating Add Note Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
        title="Not Al"
      >
        <IoAddCircle size={24} />
      </button>

      {/* Note Taking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-3 text-neutral-500 hover:text-red-500 text-xl"
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className="mt-2">
              <h3 className="text-xl font-bold text-primary mb-4">Not Al</h3>
              
              {/* Note Form */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Başlık
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={note.title}
                    onChange={(e) => setNote(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="Not başlığı"
                  />
                </div>

                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                    İçerik
                  </label>
                  <textarea
                    id="content"
                    value={note.content}
                    onChange={(e) => setNote(prev => ({ ...prev, content: e.target.value }))}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="Not içeriği..."
                  />
                </div>

                <button
                  onClick={handleSaveNote}
                  className="w-full py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default EgitimLayout