import { FaChild, FaExclamationTriangle, FaShoppingBag, FaSmileBeam } from "react-icons/fa";

export default function Cocuk() {
  return (
    <div className="my-20 px-4 max-w-4xl mx-auto">
      {/* Başlık */}
      <header className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Deprem Bilincini Çocuklarla Birlikte Güçlendirelim!
        </h1>
        <p className="text-neutral-700 text-base md:text-lg max-w-xl mx-auto">
          Bu sayfada çocuklar için hazırlanmış eğlenceli ve öğretici bilgiler, güvenli davranışlar ve hazırlık önerileri yer alıyor.
        </p>
      </header>

      {/* İçerik bölümleri */}
      <section className="grid gap-12 md:grid-cols-3">

        {/* 1. Güvenli Davranışlar */}
        <article className="border border-neutral-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <FaExclamationTriangle className="text-4xl text-primary mb-4 mx-auto" />
          <h2 className="text-xl font-semibold text-primary mb-2 text-center">Güvenli Davranışlar</h2>
          <p className="text-neutral-700 text-sm md:text-base">
            Deprem anında sakin kalmayı öğren. Başını koru, masa altına saklan ve panik yapma!
          </p>
        </article>

        {/* 2. Deprem Çantası Hazırlığı */}
        <article className="border border-neutral-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <FaShoppingBag className="text-4xl text-primary mb-4 mx-auto" />
          <h2 className="text-xl font-semibold text-primary mb-2 text-center">Deprem Çantası Hazırlığı</h2>
          <p className="text-neutral-700 text-sm md:text-base">
            İçine su, atıştırmalık, fener ve önemli eşyaları koy. Her zaman hazır olmalısın!
          </p>
        </article>

        {/* 3. Mutlu ve Güvende Kal */}
        <article className="border border-neutral-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <FaSmileBeam className="text-4xl text-primary mb-4 mx-auto" />
          <h2 className="text-xl font-semibold text-primary mb-2 text-center">Mutlu ve Güvende Kal</h2>
          <p className="text-neutral-700 text-sm md:text-base">
            Deprem sonrası aile üyelerinle birlikte ol, yardımlaş ve korkularını paylaş.
          </p>
        </article>
      </section>

      {/* Mini Test */}
      <section className="mt-20 bg-primary bg-opacity-10 p-8 rounded-lg max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-background mb-4">Mini Deprem Bilgi Testi</h3>
        <p className="text-neutral-700 mb-6">
          Deprem anında en doğru davranış nedir?
        </p>
        <ul className="text-left max-w-sm mx-auto space-y-3">
          <li>• Paniğe kapılıp koşmak</li>
          <li>• Masa altına saklanmak</li>
          <li>• Pencerelere koşmak</li>
          <li>• Elektrik düğmesine basmak</li>
        </ul>
        <p className="mt-6 font-semibold text-primary">Doğru cevap: Masa altına saklanmak</p>
      </section>
    </div>
  );
}