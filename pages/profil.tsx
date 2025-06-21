import React from 'react'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import { RiBookmark2Line, RiFileListLine } from 'react-icons/ri'

type TestResult = {
  id: string
  created_at: string
  test_name: string
  score: number
  total_questions: number
  category: string
}

type Note = {
  id: string
  created_at: string
  title: string
  content: string
  category: string
}

const Profil = () => {
  const router = useRouter()
  const [testResults, setTestResults] = useState<TestResult[]>([])
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (!session) {
        router.push('/login')
        toast.error('Bu sayfayı görüntülemek için giriş yapmalısınız')
        return
      }

      try {
        // Fetch test results
        const { data: testData, error: testError } = await supabase
          .from('test_results')
          .select('*')
          .eq('user_id', session.user.id)
          .order('created_at', { ascending: false })

        if (testError) throw testError
        setTestResults(testData || [])

        // Fetch notes
        const { data: noteData, error: noteError } = await supabase
          .from('notes')
          .select('*')
          .eq('user_id', session.user.id)
          .order('created_at', { ascending: false })

        if (noteError) throw noteError
        setNotes(noteData || [])

      } catch (error) {
        toast.error('Veriler yüklenirken bir hata oluştu')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [router])

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-8">Profil</h1>

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Test Sonuçları */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <RiFileListLine className="text-xl text-primary" />
              <h2 className="text-xl font-medium text-gray-800">Test Sonuçları</h2>
            </div>
            
            {testResults.length === 0 ? (
              <p className="text-gray-500">Henüz test sonucunuz bulunmuyor.</p>
            ) : (
              <div className="space-y-4">
                {testResults.map((result) => (
                  <div 
                    key={result.id}
                    className="p-4 rounded-md bg-gray-50 border border-gray-100"
                  >
                    <h3 className="font-medium text-gray-800">{result.test_name}</h3>
                    <p className="text-sm text-gray-600 mb-2">Kategori: {result.category}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary rounded-full h-2"
                          style={{ width: `${(result.score / result.total_questions) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-600">
                        {result.score}/{result.total_questions}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      {new Date(result.created_at).toLocaleDateString('tr-TR')}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Notlar */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <RiBookmark2Line className="text-xl text-primary" />
              <h2 className="text-xl font-medium text-gray-800">Notlarınız</h2>
            </div>

            {notes.length === 0 ? (
              <p className="text-gray-500">Henüz notunuz bulunmuyor.</p>
            ) : (
              <div className="space-y-4">
                {notes.map((note) => (
                  <div 
                    key={note.id}
                    className="p-4 rounded-md bg-gray-50 border border-gray-100"
                  >
                    <h3 className="font-medium text-gray-800">{note.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">Kategori: {note.category}</p>
                    <p className="text-sm text-gray-700">{note.content}</p>
                    <p className="text-xs text-gray-500 mt-2">
                      {new Date(note.created_at).toLocaleDateString('tr-TR')}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Profil