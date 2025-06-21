import {
  FaBookReader,
  FaHandsHelping,
} from "react-icons/fa";

export default function Ogrenciler() {
  return (
    <div className="my-20 px-4">
      {/* Başlık */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
          Deprem Bilinci Eğitiminde Öğrencinin Rolü
        </h1>
        <p className="text-neutral-700 text-lg md:text-xl max-w-2xl mx-auto">
          Öğrenciler afet sürecinin pasif bir parçası değil, aktif birer uygulayıcısı olabilirler. Bu sayfa, deprem bilinci eğitimlerinde öğrencilerin doğrudan katılımını hedefleyen yöntemleri ve kazanımları içerir.
        </p>
      </header>

      {/* Öğrenci Katılımı */}
      <section className="group border border-neutral-200 rounded-2xl p-6 shadow-md bg-neutral-50">
        <FaBookReader className="text-5xl text-primary mb-4 mx-auto" />
        <h2 className="text-2xl font-bold text-center text-primary mb-4">Aktif Katılım ve Öğrenci Liderliği</h2>

        <p className="text-neutral-700 text-base mb-4">
          Deprem bilincini güçlendirmek için öğrencilerin yalnızca dinleyici değil, uygulayıcı ve aktarıcı rolünde olması gerekir. Akran eğitimi, liderlik görevlendirmeleri ve yaratıcı üretimler bu süreci destekler.
        </p>

        <h3 className="text-lg font-semibold text-primary mt-6 mb-2">🎯 Hedeflenen Öğrenci Kazanımları</h3>
        <ul className="list-disc list-inside text-sm text-neutral-700 space-y-1">
          <li>Deprem öncesi, anı ve sonrası için temel kavramları kavrar.</li>
          <li>Sınıf içi güvenli davranışlara ilişkin bilgi ve beceri geliştirir.</li>
          <li>Kriz anlarında arkadaşlarına rehberlik edebilecek öz yeterlilik kazanır.</li>
        </ul>

        <h3 className="text-lg font-semibold text-primary mt-6 mb-2">🛠️ Öğrenci Katılımını Artıran Yöntemler</h3>
        <ol className="list-decimal list-inside text-sm text-neutral-700 space-y-1">
          <li><strong>Akran Eğitimi:</strong> Konuyu iyi kavrayan öğrenciler, arkadaşlarına uygulamalı mini sunumlar yapar.</li>
          <li><strong>Deprem Elçileri:</strong> Her sınıfta 1-2 öğrenci, tatbikatlar öncesi hazırlıkları koordine eder.</li>
          <li><strong>Afet Temalı Kulüp Çalışmaları:</strong> Öğrenciler poster, şiir, tiyatro gibi yollarla öğrendiklerini yansıtır.</li>
        </ol>

        <div className="mt-6 bg-green-100 border-l-4 border-green-500 p-4 rounded-md text-sm">
          📌 <strong>Not:</strong> Öğrencilerin fikirlerine değer verilmesi ve onların da eğitim sürecine katkı sunabileceği mesajı, kalıcı öğrenmeyi ve özgüveni destekler.
        </div>
      </section>

      {/* Toplumsal Etki */}
      <section className="mt-20 bg-neutral-50 p-8 rounded-2xl shadow-sm">
        <FaHandsHelping className="text-4xl text-primary mb-4" />
        <h3 className="text-2xl font-bold text-primary mb-4">Öğrenci Davranışıyla Toplumu Etkilemek</h3>

        <p className="text-neutral-700 text-base md:text-lg mb-6 max-w-3xl">
          Okullarda öğrenilen afet davranışları yalnızca sınıf sınırlarında kalmaz. Öğrenciler ailelerine, çevresine ve toplumun geneline bu bilgileri taşıyarak yaygınlaştırıcı bir rol üstlenir.
        </p>

        <h4 className="text-lg font-semibold text-primary mb-2">Evde Paylaşım ve Sorumluluk</h4>
        <p className="text-neutral-700 text-base mb-4">
          Öğrenciler öğrendiklerini aile bireyleriyle paylaşmalı; deprem çantası hazırlığı, toplanma alanı belirlenmesi gibi konularda sorumluluk almalıdır.
        </p>

        <h4 className="text-lg font-semibold text-primary mb-2">Mahallede Farkındalık Çalışmaları</h4>
        <p className="text-neutral-700 text-base mb-4">
          Okulda hazırlanan broşürler, çizimler veya afişler öğrenciler aracılığıyla komşulara ulaştırılabilir. Bu sayede çocuklar toplumsal bir bilinç taşıyıcısı olur.
        </p>

        <div className="mt-6 bg-indigo-100 border-l-4 border-indigo-500 p-4 rounded-md text-sm italic text-neutral-800">
          “Bir öğrencinin edindiği bilgi, bir ailenin hayatını kurtarabilir.”
        </div>
      </section>
    </div>
  );
}
