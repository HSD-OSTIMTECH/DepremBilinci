import React from 'react'

const KatkiRehberi = () => {
  return (
    <div className="flex items-center justify-between my-32 gap-8">

        <section className="mb-10 border border-neutral-400 rounded-xl p-6">
            <h1 className="text-2xl font-bold mb-4 text-primary">Katkı Türleri</h1>
            <p className="mb-4 text-gray-700">
            Açık kaynak projelere birçok farklı şekilde katkı sağlayabilirsiniz. Herkesin teknik bilgiye sahip olması gerekmez!
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>
                <a href="/katki/yazilim" className='underline hover:text-sky-700 transition font-semibold'>Kod Katkısı:</a> Hataları düzeltmek, yeni özellikler eklemek veya mevcut kodu iyileştirmek.
            </li>
            <li>
                <a href="/katki/icerik-uret" className='underline hover:text-sky-700 transition font-semibold'>Dokümantasyon:</a> Kılavuzlar, açıklamalar veya örnekler eklemek.
            </li>
            <li>
                <span className="font-semibold">Hata Bildirimi:</span> Karşılaşılan sorunları detaylı şekilde <i>issue</i> olarak bildirmek.
            </li>
            <li>
                <a href="/katki/tasarim" className='underline hover:text-sky-700 transition font-semibold'>Tasarım ve Çeviri:</a> Arayüz tasarımı, logo veya çoklu dil desteği sağlamak.
            </li>
            <li>
                <span className='font-semibold'>Geri Bildirim:</span> Kullanıcı deneyimiyle ilgili önerilerde bulunmak.
            </li>
            </ul>
        </section>

        <section className="mb-10 border border-neutral-400 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 text-primary">Katkı Süreci Nasıl İşler?</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-800">
            <li>
              <span className="font-semibold">Projeyi İnceleyin:</span> README ve dokümantasyonu okuyun, projenin amacını ve kurallarını anlayın.
            </li>
            <li>
              <span className="font-semibold">Katkı Alanı Seçin:</span> Açık konuları (<i>issues</i>) inceleyin veya yeni bir geliştirme fikri belirleyin.
            </li>
            <li>
              <span className="font-semibold">Fork ve Clone:</span> Projeyi kendi hesabınıza <i>fork</i> edin ve bilgisayarınıza <i>clone</i> ile indirin.
            </li>
            <li>
              <span className="font-semibold">Değişiklik Yapın:</span> Yeni bir <i>branch</i> oluşturun ve katkınızı ekleyin.
            </li>
            <li>
              <span className="font-semibold">Pull Request (PR) Açın:</span> Açıklayıcı bir başlık ve açıklama ile PR oluşturun.
            </li>
            <li>
              <span className="font-semibold">Geri Bildirimleri Takip Edin:</span> Gerekirse düzenlemeler yapın ve katkınızın kabul edilmesini bekleyin.
            </li>
          </ol>
        </section>

    </div>
  )
}

export default KatkiRehberi