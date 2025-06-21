import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import { z } from 'zod'

// Validation schema
const loginSchema = z.object({
  email: z.string().email('Geçerli bir email adresi giriniz'),
  password: z.string().min(6, 'Şifre en az 6 karakter olmalıdır')
})

const Login = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  // Check if user is already logged in
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        router.replace('/')
        toast.error('Zaten giriş yapmış durumdasınız')
      }
    }
    checkUser()
  }, [router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Validate form data
      loginSchema.parse(formData)
      
      setLoading(true)
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })

      if (error) throw error

      toast.success('Başarıyla giriş yapıldı')
      router.push('/')
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach(err => {
          toast.error(err.message)
        })
      } else {
        toast.error('Giriş yapılırken bir hata oluştu')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <h2 className="text-center text-2xl font-medium text-gray-800">
            Hesabınıza giriş yapın
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email adresi
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                placeholder="ornek@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Şifre
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
          </button>
        </form>
        <span className='text-neutral-600 block mt-4'>
            Daha kayıt olmadınız mı?  <a href="/reigster" className='underline text-primary hover:text-primary/70 transition-colors'>Kayıt Olun</a>
        </span>

      </div>
    </div>
  )
}

export default Login