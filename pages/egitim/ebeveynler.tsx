import {
  FaExclamationTriangle,
  FaLightbulb,
} from "react-icons/fa";

export default function Ebeveynler() {
  return (
    <div className="my-6 sm:my-20 px-4">
      {/* Başlık */}
      <header className="text-center mb-16">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
          Deprem Bilinci Eğitiminde Ebeveynin Rolü
        </h1>
        <p className="text-neutral-700 text-lg md:text-xl max-w-2xl mx-auto">
          Evde afet bilinci oluşturmak, çocukların sadece kendilerini değil, çevrelerini de koruyabilmeleri adına hayati önemdedir. Bu sayfa, ebeveynler için deprem öncesi, anı ve sonrası süreçlerde yol gösterici bir rehber niteliğindedir.
        </p>
      </header>

      {/* Eğitimsel Bölümler */}
      <article className="group border border-neutral-200 rounded-2xl p-6 shadow-md bg-neutral-50">
        <FaExclamationTriangle className="text-5xl text-primary mb-4 mx-auto" />
        <h2 className="text-2xl font-bold text-center text-primary mb-4">Güvenli Davranış Bilinci</h2>

        <p className="text-neutral-700 text-base mb-4">
          Deprem sırasında doğru ve refleks haline gelmiş davranışlar hayat kurtarır. Çocukların yaş grubu, gelişim düzeyi ve bireysel özellikleri dikkate alınarak anlatımdan çok uygulamaya dayalı öğrenme yöntemleri tercih edilmelidir.
        </p>

        <h3 className="text-lg font-semibold text-primary mt-6 mb-2">🎯 Eğitimsel Hedefler</h3>
        <ul className="list-disc list-inside text-sm text-neutral-700 space-y-1">
          <li>Çocuklar, “deprem anı” kavramını anlayabilir ve bu sırada ne yapmaları gerektiğini açıklayabilir.</li>
          <li>“Çök-Kapan-Tutun” tekniğini ev ortamında uygulayarak öğrenebilir.</li>
          <li>Ev içinde tehlikeli alanları (cam kenarı, devrilebilecek eşyalar vb.) ayırt edebilir.</li>
        </ul>

        <h3 className="text-lg font-semibold text-primary mt-6 mb-2">🧪 Evde Uygulama Örnekleri</h3>
        <ol className="list-decimal list-inside text-sm text-neutral-700 space-y-1">
          <li>
            <strong>Senaryo Oyunu:</strong> Evin herhangi bir odasında küçük bir “deprem oldu” senaryosu canlandırılarak çocuğun refleksleri geliştirilir.
          </li>
          <li>
            <strong>Hareket Modelleme:</strong> “Çök-Kapan-Tutun” hareketi birlikte yapılarak pekiştirilir.
          </li>
          <li>
            <strong>Güvenli-Nesne Seçimi:</strong> Evdeki nesneler incelenerek hangilerinin güvenli olduğu çocuğa sorulur.
          </li>
          <li>
            <strong>Aylık Tatbikat:</strong> Aile içinde her ay düzenli olarak kısa bir tatbikat gerçekleştirilir.
          </li>
        </ol>

        <div className="mt-6 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-md text-sm">
          📌 <strong>Not:</strong> Çocuğunuzla birlikte evdeki “güvenli alanları” belirleyin ve bu alanları tekrar ederek ezberlemesini sağlayın. Tekrar öğrenmenin temelidir.
        </div>

        <div className="mt-4 text-sm text-neutral-600">
          Kaynak önerisi: <a href="https://www.afad.gov.tr/afete-hazir-turkiye" target="_blank" className="underline text-primary">AFAD Eğitim Materyalleri</a>
        </div>
      </article>

      {/* Bilinçlendirme Amacı */}
      <section className="mt-20 bg-neutral-50 p-8 rounded-2xl shadow-sm">
        <FaLightbulb className="text-4xl text-primary mb-4" />
        <h3 className="text-2xl font-bold text-primary mb-4">Evde Farkındalık Oluşturmak</h3>

        <p className="text-neutral-700 text-base md:text-lg mb-6 max-w-3xl">
          Afet bilinci, yalnızca bir kriz anında ne yapılacağını öğretmekle sınırlı değildir. Bu bilinç, çocukların hayatı, çevreyi ve başkalarını önemsemesini sağlar. Ebeveyn olarak göstereceğiniz liderlik, çocuğunuzun kriz durumlarına karşı hazırlıklı ve sorumlu bireyler olmasında etkili olacaktır.
        </p>

        <h4 className="text-lg font-semibold text-primary mb-2">Sorumluluk Paylaşımı</h4>
        <p className="text-neutral-700 text-base mb-4">
          Çocuklar, aile içinde rehberlik edecek kişilere ihtiyaç duyar. Panik anında sizin sakinliğiniz ve bilinçli davranışlarınız onların güven duygusunu artırır.
        </p>

        <h4 className="text-lg font-semibold text-primary mb-2">Günlük Hayata Entegrasyon</h4>
        <p className="text-neutral-700 text-base mb-4">
          Deprem bilincini yalnızca özel zamanlarda değil, günlük yaşamın parçası haline getirin. Örneğin oyun oynarken deprem senaryoları kullanabilir, kitap okurken afet temalı hikâyeler seçebilirsiniz.
        </p>

        <h4 className="text-lg font-semibold text-primary mb-2">Aile Kültürüne Dönüştürme</h4>
        <p className="text-neutral-700 text-base mb-4">
          Bu bilinci sürdürülebilir hale getirmek için sadece çocuklara değil, evin tüm bireylerine eğitim verilmelidir. Bu ortak farkındalık, kriz zamanlarında koordinasyonu kolaylaştırır.
        </p>

        <div className="mt-6 bg-indigo-100 border-l-4 border-indigo-500 p-4 rounded-md text-sm italic text-neutral-800">
          “Bir çocuğun doğru öğrendiği davranış, bir evi güvenli hale getirebilir.”
        </div>
      </section>

      {/* Evde Uygulama Rehberi */}
      <section className="mt-20 bg-neutral-50 border border-neutral-200 p-8 rounded-2xl shadow-sm">
        <h3 className="text-2xl font-bold text-primary mb-4">Ev İçi Uygulama Rehberi</h3>

        <p className="text-neutral-700 text-base mb-6">
          Deprem bilincinin kalıcı olması için sadece bilgi vermek yeterli değildir. Çocuğun aktif katılım sağlayabileceği ev içi uygulamalarla bu bilgi davranışa dönüştürülmelidir.
        </p>

        <h4 className="text-lg font-semibold text-primary mb-2">1. Aylık Tatbikatlar</h4>
        <p className="text-neutral-700 text-base mb-4">
          Her ayın belirli bir gününde kısa süreli tatbikatlar yapılabilir. Bu, hem öğrenmeyi pekiştirir hem de aile bireyleri arasında koordinasyonu güçlendirir.
        </p>

        <h4 className="text-lg font-semibold text-primary mb-2">2. Görsel Materyaller</h4>
        <p className="text-neutral-700 text-base mb-4">
          Çocuğunuzla birlikte ev planı çizin, güvenli alanları işaretleyin. Bu çizimi buzdolabına veya çocuk odasına asarak sürekli hatırlanmasını sağlayın.
        </p>

        <h4 className="text-lg font-semibold text-primary mb-2">3. Afet Bilinci Köşesi</h4>
        <p className="text-neutral-700 text-base mb-4">
          Evde sabit bir alana afet çantası, yönergeler ve çocuğun yaptığı çizimleri koyabilirsiniz. Bu köşe hem bilgi sağlar hem de bilinçlendirici bir hatırlatıcı olur.
        </p>

        <h4 className="text-lg font-semibold text-primary mb-2">4. Diğer Aile Üyelerini Dahil Etme</h4>
        <p className="text-neutral-700 text-base">
          Büyükanneler, amcalar, bakıcılar gibi evde vakit geçiren herkes bu bilinç sürecine dâhil edilmelidir. Bu sayede kriz anında herkes uyum içinde hareket eder.
        </p>
      </section>

      {/* Psikososyal Destek */}
      <section className="mt-20 bg-neutral-50 border border-neutral-200 p-8 rounded-2xl shadow-sm">
        <h3 className="text-2xl font-bold text-primary mb-4">Deprem Sürecinde Çocuğun Duygusal İhtiyaçları</h3>

        <p className="text-neutral-700 text-base mb-6">
          Çocuğunuzun deprem sürecine hazırlıklı olması, olay anını sakin karşılaması ve sonrasında desteklenmesi bütünsel bir yaklaşım gerektirir. Ebeveyn olarak sürecin tüm aşamalarında aktif rol üstlenmelisiniz.
        </p>

        <h4 className="text-lg font-semibold text-primary mb-2">1. Deprem Öncesi: Hazırlık</h4>
        <ul className="list-disc list-inside text-sm text-neutral-700 space-y-1 mb-6">
          <li>Temel kavramlar sade bir dille açıklanmalı (deprem nedir, neden olur?).</li>
          <li>Doğru davranışlar sık tekrarlarla öğretilmelidir.</li>
          <li>Çocuklara kriz anında ne yapacaklarını basitçe öğretin.</li>
          <li>Afet çantası, çıkış yolları gibi unsurlar birlikte gözden geçirilmelidir.</li>
        </ul>

        <h4 className="text-lg font-semibold text-primary mb-2">2. Deprem Anı: Rehberlik</h4>
        <ul className="list-disc list-inside text-sm text-neutral-700 space-y-1 mb-6">
          <li>Sakin ve kararlı olun. Çocuğa güven verin: “Buradayım, güvendesin.”</li>
          <li>Basit ve net komutlar kullanın.</li>
          <li>Önceden çalışılmış hareketleri hatırlatın ve uygulayın.</li>
        </ul>

        <h4 className="text-lg font-semibold text-primary mb-2">3. Deprem Sonrası: Destek</h4>
        <ul className="list-disc list-inside text-sm text-neutral-700 space-y-1">
          <li>Çocuğunuzun duygularını ifade etmesine fırsat tanıyın.</li>
          <li>Resim çizme, hikâye anlatma gibi etkinliklerle duygularını dışa vurmasını destekleyin.</li>
          <li>Gözlemlediğiniz olağan dışı tepkilerde bir uzmandan destek alın.</li>
          <li>Normal rutinlere dönerek güven ortamı oluşturun.</li>
        </ul>

        <div className="mt-6 bg-pink-100 border-l-4 border-pink-500 p-4 rounded-md text-sm text-neutral-800">
          <strong>Not:</strong> Deprem süreci bir bütün olarak düşünülmeli; yalnızca olay anı değil, öncesi ve sonrası da planlı şekilde ele alınmalıdır. Duygusal destek, çocuğun kendini güvende hissetmesinin temelidir.
        </div>
      </section>
    </div>
  );
}
