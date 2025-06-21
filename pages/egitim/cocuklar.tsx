import {
  FaExclamationTriangle,
  FaShoppingBag,
  FaSmileBeam,
  FaLightbulb,
} from "react-icons/fa";

export default function Cocuk() {
  return (
    <div className="my-6 sm:my-20 px-4">
      {/* Başlık */}
      <header className="text-center mb-16">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
          Deprem Bilincini Çocuklarla Birlikte Güçlendirelim!
        </h1>
        <p className="text-neutral-700 text-lg md:text-xl max-w-2xl mx-auto">
          Deprem sadece büyükleri ilgilendirmez! Çocuklar da deprem hakkında bilgi sahibi olmalı ve doğru davranışları öğrenmelidir. Bu sayfada eğlenerek öğrenebilirsin!
        </p>
      </header>

      {/* İçerik bölümleri */}
      <section className="grid gap-10 md:grid-cols-3">
        {/* 1. Güvenli Davranışlar */}
        <article className="group border border-neutral-200 cursor-pointer rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 bg-neutral-50">
          <FaExclamationTriangle className="text-5xl text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
          <h2 className="text-xl font-bold text-center text-primary mb-2">Güvenli Davranışlar</h2>
          <p className="text-neutral-700 text-base text-center">
            Deprem anında <strong>sakin kalmak</strong> çok önemli! Başını koru, sağlam bir nesnenin altına saklan (örneğin masa), ve yerinden ayrılma.
          </p>
          <div className="mt-4 bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded-md text-sm">
            💡 <strong>İpucu:</strong> Saklandığın yerden çıkmak için sarsıntının tamamen bitmesini bekle!
          </div>
        </article>

        {/* 2. Deprem Çantası Hazırlığı */}
        <article className="group border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 bg-neutral-50">
          <FaShoppingBag className="text-5xl text-primary mb-4 mx-auto group-hover:scale-110 transition-transform cursor-pointer" />
          <h2 className="text-xl font-bold text-center text-primary mb-2">Deprem Çantası Hazırlığı</h2>
          <p className="text-neutral-700 text-base text-center">
            Hazırlıklı olmak her zaman iyidir! Deprem çantan <strong>her an ulaşabileceğin</strong> bir yerde olmalı.
          </p>
          <ul className="mt-4 list-disc list-inside text-sm text-neutral-600">
            <li>Su ve atıştırmalıklar</li>
            <li>Fener ve yedek piller</li>
            <li>Islak mendil ve ilaçlar</li>
            <li>Ailene ait iletişim bilgileri</li>
          </ul>
        </article>

        {/* 3. Mutlu ve Güvende Kal */}
        <article className="group border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 bg-neutral-50">
          <FaSmileBeam className="text-5xl text-primary mb-4 mx-auto group-hover:scale-110 transition-transform cursor-pointer" />
          <h2 className="text-xl font-bold text-center text-primary mb-2">Mutlu ve Güvende Kal</h2>
          <p className="text-neutral-700 text-base text-center shadow-sm">
            Deprem sonrası <strong>aile bireylerinle bir arada olmak</strong> seni güvende ve huzurlu hissettirir.
          </p>
          <div className="mt-4 bg-green-100 border-l-4 border-green-500 p-3 rounded-md text-sm">
            💚 <strong>Unutma:</strong> Yardım etmek ve paylaşmak, korkunu azaltır!
          </div>
        </article>
      </section>

      {/* Eğlenceli Bilgi */}
      <section className="mt-20 bg-neutral-50 p-8 rounded-2xl shadow-sm">
        <FaLightbulb className="text-4xl text-primary mb-4" />
        <h3 className="text-2xl font-bold text-primary mb-4">Neden Bilinçli Olmalıyız?</h3>
        <p className="text-neutral-700 text-base md:text-lg max-w-2xl">
          Deprem sırasında ne yapacağını bilmek seni ve sevdiklerini korur. Bilinçli olmak, <strong>cesur olmak</strong> demektir. Ne kadar çok öğrenirsen, o kadar güvendesin!
        </p>
      </section>

      {/* Mini Test */}
      <section className="mt-20 bg-neutral-50 bg-opacity-10 p-8 rounded-2xl text-left shadow-sm">
        <h3 className="text-2xl font-bold text-primary mb-4">Mini Deprem Bilgi Testi</h3>
        <p className="text-neutral-700 mb-6 text-lg">Deprem anında en doğru davranış nedir?</p>
        <ul className="text-left space-y-3 text-neutral-800 font-medium">
          <li>❌ Paniğe kapılıp koşmak</li>
          <li>✅ Masa altına saklanmak</li>
          <li>❌ Pencerelere koşmak</li>
          <li>❌ Elektrik düğmesine basmak</li>
        </ul>
        <p className="mt-6 font-semibold text-primary text-lg">✅ Doğru cevap: Masa altına saklanmak</p>
      </section>

      {/* Deprem Öncesi Hazırlıklar */}
      <section className="mt-20 bg-neutral-50 border border-neutral-200 p-8 rounded-2xl shadow-sm">
        <h3 className="text-2xl font-bold text-primary mb-4">Deprem Öncesi Hazırlıklar</h3>
        <p className="text-neutral-700 text-base">
          Deprem olmadan önce hazırlıklı olmak çok önemlidir. Ailenden yardım iste ve birlikte bazı hazırlıklar yap:
        </p>
        <ul className="mt-4 list-disc list-inside text-sm text-neutral-600 space-y-1">
          <li>Evdeki ağır eşyaların sabitlenip sabitlenmediğini kontrol et.</li>
          <li>Deprem sırasında nerede saklanabileceğini öğren.</li>
          <li>Deprem çantasını nereye koyduğunuzu öğren.</li>
        </ul>
      </section>

      {/* Aile Acil Planı */}
      <section className="mt-20 bg-neutral-50 border border-neutral-200 p-8 rounded-2xl shadow-sm">
        <h3 className="text-2xl font-bold text-primary mb-4">Aile Acil Planı</h3>
        <p className="text-neutral-700 text-base">
          Her ailenin bir acil planı olmalı. Bu plan, herkesin nerede buluşacağını ve nasıl iletişim kuracağını içerir.
        </p>
        <div className="mt-4 bg-blue-100 border-l-4 border-blue-500 p-3 rounded-md text-sm">
          🗺️ <strong>Öneri:</strong> Ailenle birlikte bir buluşma noktası belirle ve bu yeri unutma!
        </div>
      </section>

      {/* Okulda Ne Yapmalı? */}
      <section className="mt-20 bg-neutral-50 border border-neutral-200 p-8 rounded-2xl shadow-sm">
        <h3 className="text-2xl font-bold text-primary mb-4">Okulda Ne Yapmalı?</h3>
        <p className="text-neutral-700 text-base">
          Deprem okulda olursa, öğretmenini dikkatlice dinle ve aşağıdakilere dikkat et:
        </p>
        <ul className="mt-4 list-disc list-inside text-sm text-neutral-600 space-y-1">
          <li>Sıra altına saklan, başını kollarınla koru.</li>
          <li>Camdan, tahtadan ve raflardan uzak dur.</li>
          <li>Sarsıntı geçince öğretmeninle birlikte dışarı çık.</li>
        </ul>
      </section>

      {/* Evde Güvenli Alanlar */}
      <section className="mt-20 bg-neutral-50 border border-neutral-200 p-8 rounded-2xl shadow-sm">
        <h3 className="text-2xl font-bold text-primary mb-4">Evde Güvenli Alanlar</h3>
        <p className="text-neutral-700 text-base">
          Evde bazı yerler deprem sırasında daha güvenlidir. Bunları önceden belirlemek seni koruyabilir:
        </p>
        <ul className="mt-4 list-disc list-inside text-sm text-neutral-600 space-y-1">
          <li>Sağlam masa veya sıra altı</li>
          <li>Yatak yanı (başını koruyacak şekilde)</li>
          <li>İç duvar köşeleri</li>
        </ul>
      </section>

      {/* Depremden Sonra Duygularımız */}
      <section className="mt-20 bg-neutral-50 border border-neutral-200 p-8 rounded-2xl shadow-sm">
        <h3 className="text-2xl font-bold text-primary mb-4">Depremden Sonra Duygularımız</h3>
        <p className="text-neutral-700 text-base">
          Deprem yaşadıktan sonra kendini üzgün, korkmuş veya şaşkın hissedebilirsin. Bu çok normaldir!
        </p>
        <div className="mt-4 bg-pink-100 border-l-4 border-pink-500 p-3 rounded-md text-sm">
          🧠 <strong>Unutma:</strong> Hislerini bir yetişkinle paylaşmak seni rahatlatır. Konuşmaktan korkma!
        </div>
      </section>


    </div>
  );
}
