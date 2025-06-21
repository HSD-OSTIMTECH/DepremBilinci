import {
  FaExclamationTriangle,
  FaShoppingBag,
  FaSmileBeam,
  FaLightbulb,
} from "react-icons/fa";

export default function Ogretmen() {
  return (
    <div className="my-6 sm:my-20 px-4">
      {/* Başlık */}
      <header className="text-center mb-16">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
          Deprem Bilinci Eğitiminde Öğretmenin Rolü
        </h1>
        <p className="text-neutral-700 text-lg md:text-xl max-w-2xl mx-auto">
          Okullarda afet bilinci oluşturmak, sadece öğrencileri korumakla kalmaz; aynı zamanda toplum genelinde bilinçli nesiller yetiştirmenin temelini oluşturur. Bu sayfa, öğretmenler için deprem öncesi, anı ve sonrası süreçlerde rehber niteliğindedir.
        </p>
      </header>

      {/* Eğitimsel Bölümler */}
      <article className="group border border-neutral-200 rounded-2xl p-6 shadow-md bg-neutral-50">
        <FaExclamationTriangle className="text-5xl text-primary mb-4 mx-auto" />
        <h2 className="text-2xl font-bold text-center text-primary mb-4">Güvenli Davranış Eğitimi</h2>

        {/* Giriş açıklaması */}
        <p className="text-neutral-700 text-base mb-4">
          Deprem sırasında panik yerine refleks haline gelmiş doğru davranışlar hayat kurtarır. Öğrencilerin yaş grubu, gelişim düzeyi ve bireysel farklılıkları göz önünde bulundurularak güvenli davranış eğitimi planlanmalı; anlatım yerine uygulama odaklı yöntemler tercih edilmelidir.
        </p>

        {/* Eğitimsel Hedefler */}
        <h3 className="text-lg font-semibold text-primary mt-6 mb-2">🎯 Eğitimsel Hedefler</h3>
        <ul className="list-disc list-inside text-sm text-neutral-700 space-y-1">
          <li>Öğrenciler, “deprem anı” kavramını anlayabilir ve bu sırada ne yapmaları gerektiğini ifade edebilir.</li>
          <li>“Çök-Kapan-Tutun” tekniğini model alarak fiziksel olarak doğru şekilde uygulayabilir.</li>
          <li>Sınıf içinde tehlikeli alanları (cam kenarı, dolap önü vb.) tanıyabilir.</li>
        </ul>

        {/* Uygulamalı Eğitim Yöntemi */}
        <h3 className="text-lg font-semibold text-primary mt-6 mb-2">🧪 Sınıf İçi Uygulama Örnekleri</h3>
        <ol className="list-decimal list-inside text-sm text-neutral-700 space-y-1">
          <li>
            <strong>Senaryo Anlatımı:</strong> Öğretmen, bir hikâye veya çizim eşliğinde deprem anını canlandırır. "Sarsıntı başladı, ne yapmalıyız?" sorusuyla öğrencilerin katılımı sağlanır.
          </li>
          <li>
            <strong>Modelleme ve Uygulama:</strong> “Çök-Kapan-Tutun” hareketi önce öğretmen tarafından gösterilir, ardından öğrencilerle birlikte defalarca tekrarlanır.
          </li>
          <li>
            <strong>Güvenli-Nesne Seçimi Oyunu:</strong> Sınıfta farklı nesneler gösterilir, öğrenciler bu nesnelerin güvenli/sakınılması gereken olup olmadığını tartışır.
          </li>
          <li>
            <strong>Tatbikat Günü:</strong> Ayda bir kez tüm okul genelinde yapılacak uygulamalı deprem tatbikatlarına sınıf düzeyinde hazırlanılır.
          </li>
        </ol>

        {/* Ekstra Bilgilendirme */}
        <div className="mt-6 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-md text-sm">
          📌 <strong>Not:</strong> Her sınıfın içinde “Güvenli Alan Haritası” görseli asılmalı ve öğrencilerden bu alanları ezberlemeleri beklenmelidir. Eğitimde tekrar en etkili araçtır; öğrenilen davranışlar her ay pekiştirilmelidir.
        </div>

        {/* Kaynak önerisi */}
        <div className="mt-4 text-sm text-neutral-600">
          Kaynak önerisi: <a href="https://www.afad.gov.tr/afete-hazir-turkiye" target="_blank" className="underline text-primary">AFAD Eğitim Materyalleri</a>
        </div>
      </article>


      {/* Bilinçlendirme Amacı */}
      <section className="mt-20 bg-neutral-50 p-8 rounded-2xl shadow-sm">
        <FaLightbulb className="text-4xl text-primary mb-4" />
        <h3 className="text-2xl font-bold text-primary mb-4">Eğitimle Farkındalık Yaratmak</h3>

        {/* Tanımlayıcı paragraf */}
        <p className="text-neutral-700 text-base md:text-lg mb-6 max-w-3xl">
          Afet bilinci eğitimi, yalnızca acil durum anlarında ne yapılacağını öğretmekle sınırlı değildir. Bu eğitimler aynı zamanda öğrencilerin hayata, çevreye ve insanlara karşı sorumluluk duygusunu geliştirmeyi hedefler. Bir öğretmen olarak sizin liderliğinizde şekillenen bu farkındalık, öğrencilerin kriz zamanlarında hem kendilerini hem de başkalarını koruyabilmelerini sağlar.
        </p>

        {/* Öğretmenin toplumsal rolü */}
        <h4 className="text-lg font-semibold text-primary mb-2">Öğretmenin Rolü Sadece Sınıfla Sınırlı Değildir</h4>
        <p className="text-neutral-700 text-base mb-4">
          Öğretmenler, sadece akademik bilgi aktarıcısı değil; aynı zamanda güven, yönlendirme ve kriz yönetimi açısından rol modeldir. Öğrenciler, özellikle stresli durumlarda öğretmenin tepkilerini örnek alır. Bu nedenle bilinçli, sakin ve hazırlıklı bir öğretmen öğrenciler üzerinde güçlü bir etki bırakır.
        </p>

        {/* Eğitimde disiplinlerarası yaklaşım */}
        <h4 className="text-lg font-semibold text-primary mb-2">Disiplinlerarası Yaklaşım</h4>
        <p className="text-neutral-700 text-base mb-4">
          Deprem ve afet bilinci konuları sadece fen bilgisi ya da sosyal bilgiler dersiyle sınırlı değildir. Türkçe dersinde deprem temalı metinler, görsel sanatlarda güvenli alan çizimleri, müzikte uyarı sinyalleri ritimleri gibi yaratıcı entegrasyonlarla öğrencilerin çok yönlü farkındalığı geliştirilebilir.
        </p>

        {/* Okul kültürü ve sürdürülebilirlik */}
        <h4 className="text-lg font-semibold text-primary mb-2">Okul Kültürüne Dönüştürme</h4>
        <p className="text-neutral-700 text-base mb-4">
          Farkındalık eğitimlerinin kalıcı olması için bireysel derslerle sınırlı kalmaması, okul genelinde sürdürülebilir bir kültüre dönüşmesi gerekir. Tüm öğretmenlerin ortak bir dil kullanması, öğrenci-veli-öğretmen koordinasyonunun sağlanması bu süreci güçlendirir.
        </p>

        {/* Alıntı */}
        <div className="mt-6 bg-indigo-100 border-l-4 border-indigo-500 p-4 rounded-md text-sm italic text-neutral-800">
          “Afet bilinci eğitiminde bir çocuğun öğrendiği tek doğru davranış, tüm sınıfı koruyabilir.”
        </div>
      </section>


      {/* Öğretmenler İçin Uygulama Rehberi */}
      <section className="mt-20 bg-neutral-50 border border-neutral-200 p-8 rounded-2xl shadow-sm">
        <h3 className="text-2xl font-bold text-primary mb-4">Sınıf İçi Uygulama Rehberi</h3>

        <p className="text-neutral-700 text-base mb-6">
          Deprem bilincinin çocuklarda kalıcı hâle gelmesi için yalnızca bilgi vermek yeterli değildir. Öğrencilerin aktif katılım sağlayabileceği uygulama temelli etkinliklerle bu farkındalık davranışa dönüştürülmelidir. Aşağıda, sınıf içi organizasyonlarda kullanılabilecek uygulama önerileri yer almaktadır.
        </p>

        <h4 className="text-lg font-semibold text-primary mb-2">1. Düzenli Tatbikat Planlaması</h4>
        <p className="text-neutral-700 text-base mb-4">
          Her ay veya iki ayda bir olacak şekilde, ders saatleri içerisinde küçük çaplı deprem tatbikatları düzenlenmelidir. Bu tatbikatlar, öğrencilerin refleks geliştirmesini sağlar ve kriz anında öğretmenin yönlendirmesine daha hızlı yanıt verilmesini mümkün kılar. Tatbikatlar öncesinde neden yapıldığı öğrencilere sade bir dille açıklanmalı; sonrasında ise geri bildirim alınarak değerlendirme yapılmalıdır.
        </p>

        <h4 className="text-lg font-semibold text-primary mb-2">2. Görsel Materyal ile Bilinçlendirme</h4>
        <p className="text-neutral-700 text-base mb-4">
          Öğrencilerle birlikte “Deprem Anı Posteri”, “Güvenli Alan Haritası” gibi görsel materyaller hazırlanabilir. Bu uygulamalar hem bilgiyi pekiştirir hem de öğrencilerin dikkatini çeker. Her öğrenci grubunun yaşına uygun tasarımlar yapılması ve sınıf panosunda düzenli olarak sergilenmesi önerilir.
        </p>

        <h4 className="text-lg font-semibold text-primary mb-2">3. Afet Bilinci Köşesi Oluşturulması</h4>
        <p className="text-neutral-700 text-base mb-4">
          Sınıf içerisinde sabit bir "Afet Bilinci Köşesi" oluşturularak burada afet çantası örneği, güvenli davranış yönergeleri, broşürler ve öğrenci çalışmalarına yer verilebilir. Bu köşe hem öğrencilerin dikkatini canlı tutar hem de misafir veliler veya denetmenler için görünür bir farkındalık göstergesidir.
        </p>

        <h4 className="text-lg font-semibold text-primary mb-2">4. Veli Katılımı ve Bilgilendirme</h4>
        <p className="text-neutral-700 text-base">
          Öğrencilerin okulda öğrendikleri afet davranışlarını evde de sürdürebilmeleri için velilerle iletişim kurulması gereklidir. Sınıfta uygulanan eğitimlerin kısa özetleri velilere düzenli bültenlerle iletilmeli, isteyen velilerin tatbikatlara gözlemci olarak katılmasına olanak tanınmalıdır.
        </p>
      </section>


      {/* Okul Yönetimi ile İş Birliği */}
      <section className="mt-20 bg-neutral-50 border border-neutral-200 p-8 rounded-2xl shadow-sm">
        <h3 className="text-2xl font-bold text-primary mb-4">Okul Yönetimi ile Koordinasyon</h3>

        {/* Giriş açıklaması */}
        <p className="text-neutral-700 text-base mb-6">
          Afetlere hazırlık süreçlerinde bireysel çabaların ötesine geçilerek kurumsal düzeyde eşgüdüm sağlanmalıdır. Okul yönetimi ile öğretmenler arasında iş birliği ve iletişim açık tutulmalı; tüm afet yönetimi planları net, uygulanabilir ve okul genelinde yaygınlaştırılmış olmalıdır.
        </p>

        {/* Kurumsal yapı ve sorumluluk paylaşımı */}
        <h4 className="text-lg font-semibold text-primary mb-2">1. Kurumsal Görev Dağılımı ve Sorumluluk Takibi</h4>
        <p className="text-neutral-700 text-base mb-4">
          Her öğretmenin, kriz anında üstleneceği görev tanımı önceden belirlenmeli ve yazılı olarak kendisine tebliğ edilmelidir. Okulun acil durum planı içerisinde; tahliye liderleri, toplanma alanı sorumluları, öğrenci yoklama görevlileri gibi roller açıkça tanımlanmalıdır. Gerektiğinde bu görevler yedek öğretmenlerle desteklenmelidir.
        </p>

        {/* Periyodik koordinasyon toplantıları */}
        <h4 className="text-lg font-semibold text-primary mb-2">2. Periyodik Değerlendirme ve Koordinasyon Toplantıları</h4>
        <p className="text-neutral-700 text-base mb-4">
          Öğretmenler ve idareciler arasında afet öncesi hazırlıklar, tatbikat sonrası değerlendirmeler ve karşılaşılan eksikliklere dair çözüm önerilerinin konuşulacağı düzenli toplantılar yapılmalıdır. Bu toplantılar, sadece prosedürün tamamlanması için değil, gerçek kriz anlarına hazır olunması için gerçekleştirilmelidir.
        </p>

        {/* Planların görünür ve erişilebilir olması */}
        <h4 className="text-lg font-semibold text-primary mb-2">3. Planların Erişilebilirliği ve Görünürlüğü</h4>
        <p className="text-neutral-700 text-base mb-4">
          Okulun acil durum planı ve afet görev dağılım şeması; öğretmen odası, her sınıf ve idari birimlerde görünür ve kolay erişilebilir şekilde bulundurulmalıdır. Yeni başlayan öğretmenler ya da geçici personel bu plana hızla adapte edilmelidir.
        </p>

        {/* Fiziki koşulların yönetimle değerlendirilmesi */}
        <h4 className="text-lg font-semibold text-primary mb-2">4. Fiziki Risklerin Ortak Tespiti</h4>
        <p className="text-neutral-700 text-base mb-4">
          Sınıf içi ve okul genelindeki fiziksel riskler (raf sabitleme eksikleri, yangın söndürücü konumu, tahliye güzergahlarındaki engeller vb.) okul yönetimi ile birlikte düzenli olarak değerlendirilmelidir. Öğretmenler bu gözlemlerini yönetime yazılı olarak bildirmeli; alınan önlemler raporlanmalıdır.
        </p>

        {/* Hatırlatma kutusu */}
        <div className="mt-6 bg-blue-100 border-l-4 border-blue-500 p-4 rounded-md text-sm text-neutral-800">
          <strong>Hatırlatma:</strong> “Afet Görev Dağılım Tablosu” her sınıfta ve öğretmenler odasında görünür şekilde yer almalı; tüm personelin bu tabloyu periyodik olarak gözden geçirmesi sağlanmalıdır.
        </div>
      </section>


      {/* Öğrencilerle Kriz Sonrası Süreç */}
      <section className="mt-20 bg-neutral-50 border border-neutral-200 p-8 rounded-2xl shadow-sm">
        <h3 className="text-2xl font-bold text-primary mb-4">Deprem Sürecinde Öğrencilere Yönelik Psikososyal Destek</h3>

        <p className="text-neutral-700 text-base mb-6">
          Öğrencilerin deprem sürecine hazırlıklı olmaları, anı güvenli bir şekilde atlatmaları ve sonrasında duygusal olarak desteklenmeleri büyük önem taşır. Bu nedenle öğretmenlerin sadece kriz sonrası değil, öncesi ve anı da dâhil olmak üzere bütünsel bir yaklaşım benimsemesi gerekmektedir.
        </p>

        {/* 1. Deprem Öncesi Dönem */}
        <h4 className="text-lg font-semibold text-primary mb-2">1. Deprem Öncesi Dönem: Farkındalık ve Hazırlık</h4>
        <p className="text-neutral-700 text-base mb-4">
          Bu dönemde öğrencilerin hem bilgi düzeyleri artırılmalı hem de duygusal olarak hazırlıklı olmaları sağlanmalıdır. Sınıf içi çalışmalarla aşağıdaki hedefler desteklenmelidir:
        </p>
        <ul className="list-disc list-inside text-sm text-neutral-700 space-y-1 mb-6">
          <li>Deprem nedir, neden olur gibi temel kavramlar öğrencilerin yaş düzeyine uygun şekilde açıklanmalıdır.</li>
          <li>“Çök-Kapan-Tutun” gibi güvenli davranışlar sık tekrarlarla öğretilmelidir.</li>
          <li>Afet anında öğretmenin ve öğrencinin görevleri belirlenmeli, öğrenciler kriz anında ne yapacaklarını bilmelidir.</li>
          <li>Sınıfta afet çantası, çıkış yolları ve toplanma alanları tanıtılmalı; tatbikatlar uygulanmalıdır.</li>
        </ul>

        {/* 2. Deprem Anı */}
        <h4 className="text-lg font-semibold text-primary mb-2">2. Deprem Anı: Güvenli Yönlendirme ve Sakinlik</h4>
        <p className="text-neutral-700 text-base mb-4">
          Deprem gerçekleştiği anda öğretmenin rehberliği hayati önem taşır. Panik ortamında öğrencilerin davranışlarını şekillendiren en büyük etken öğretmenin duruşudur:
        </p>
        <ul className="list-disc list-inside text-sm text-neutral-700 space-y-1 mb-6">
          <li>Öğrenciler sakinleştirilerek önceden çalışılmış davranış planı devreye alınmalıdır.</li>
          <li>Sesli komutlar net, kısa ve anlaşılır olmalıdır (örneğin: “Şimdi kapan!”, “Başını koru!”).</li>
          <li>Fiziksel güvenliği sağlanan öğrencilere sözel güven de verilmelidir: “Buradayım, güvendesiniz.” gibi.</li>
          <li>Sarsıntı geçtikten sonra yoklama alınmalı ve organize biçimde tahliye gerçekleştirilmelidir.</li>
        </ul>

        {/* 3. Deprem Sonrası Dönem */}
        <h4 className="text-lg font-semibold text-primary mb-2">3. Deprem Sonrası Dönem: Duygusal Destek ve Takip</h4>
        <p className="text-neutral-700 text-base mb-4">
          Afet sonrasında öğrencilerin ruhsal durumu yakından takip edilmeli ve okul ortamı tekrar güvenli bir alan haline getirilmelidir. Aşağıdaki adımlar izlenmelidir:
        </p>
        <ul className="list-disc list-inside text-sm text-neutral-700 space-y-1">
          <li>Öğrencilerin yaşadığı olayları paylaşmalarına fırsat verilmelidir (resim, yazı, sözlü anlatım yoluyla).</li>
          <li>Deprem teması etrafında yapılacak sınıf etkinlikleri normalleşme sürecini destekleyebilir.</li>
          <li>Duygusal tepkileri yoğun olan öğrenciler rehberlik birimine yönlendirilmelidir.</li>
          <li>Velilerle düzenli iletişim kurulmalı; evde gözlenen davranışlarla sınıf içi gözlemler karşılaştırılmalıdır.</li>
          <li>Güçlü sosyal ilişkiler ve destekleyici sınıf atmosferi ön planda tutulmalıdır.</li>
        </ul>

        {/* Hatırlatma kutusu */}
        <div className="mt-6 bg-pink-100 border-l-4 border-pink-500 p-4 rounded-md text-sm text-neutral-800">
          <strong>Not:</strong> Deprem süreci bir bütün olarak ele alınmalı; sadece olay anına odaklanmak yerine öncesi ve sonrası dâhil olacak şekilde planlama yapılmalıdır. Öğrencilerin psikososyal ihtiyaçları, akademik başarılarının ön koşuludur.
        </div>
      </section>

    </div>
  );
}
