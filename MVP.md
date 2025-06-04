# 📦 MVP Özellikleri – Deprem Bilinci Projesi

Bu dosya, "Deprem Bilinci" eğitim platformunun Minimum Viable Product (MVP) aşamasındaki temel fonksiyonlarını listeler. Amaç, erken aşamada işlevsel bir sistem sunarak kullanıcıdan geri bildirim toplamaktır.

🔗 [Ana Sayfaya Git](./README.md)
🔗 [Katkıda Bulunma Rehberini Görüntüle](./KatkıdaBulunmaRehberi.md)

---

## 🎯 Hedef Kitle

* Öğrenciler
* Öğretmenler
* Ebeveynler
* Çocuklar

---

## 🔑 Temel Özellikler

### 1. Ana Sayfa

* Projenin tanıtımı
* 4 hedef kitleye özel butonlarla yönlendirme
* Hakkımızda / KVKK / İletişim bağlantıları

### 2. Eğitim Sayfaları

Her kullanıcı grubuna özel görsel içerikler ve açıklayıcı metinler:

#### 👩‍🎓 Öğrenciler

* Deprem öncesi-hazırlık afişleri
* Tahliye planı örnekleri
* Basit infografikler
* Mini test (5 soru)

#### 👩‍🏫 Öğretmenler

* Sınıf içi deprem tatbikat senaryoları
* Öğrencilere nasıl anlatılacağına dair rehber
* Mini test (5 soru)

#### 👨‍👩‍👧‍👦 Ebeveynler

* Aile afet planı oluşturma rehberi
* Çocuklarla iletişim taktikleri
* Mini test (5 soru)

#### 🧒 Çocuklar

* Çizimlerle anlatım, oyunlaştırılmış görseller
* Basit cümleler ve animasyonlu anlatımlar
* Mini test (3 soru)

---

### 3. Test Modülü

* Her eğitim sayfasının sonunda yer alan test bileşeni
* Doğru/yanlış kontrolü
* %60 üzeri başarıyla geçme kriteri
* Test sonucu sayfası (puan ve başarı bildirimi)

### 4. Sertifika Sistemi

* Testi geçen kullanıcılar için otomatik PDF sertifika üretimi
* Sertifikada ad, tarih, başarı bilgisi
* jsPDF ve html2canvas ile oluşturulmuş
* İndirilebilir buton ile kullanıcıya sunum

### 5. Firebase Entegrasyonu

* Firestore: Kullanıcı test sonuçlarını saklama
* Auth: E-posta ile giriş (isteğe bağlı)
* Hosting: Canlı dağıtım

---

## 🧪 Test Edilecek Senaryolar

* Eğitim içeriğini okuma ve test çözme akışı
* Test sonucuna göre sertifika gösterimi
* Mobil uyum kontrolü
* Firebase bağlantısı ve veri kayıtları (isteğe bağlı)

---

## 🔄 Geliştirilebilir Gelecek Özellikler

* Detaylı kullanıcı profilleri
* Test geçmişi ve gelişim takibi
* Gerçek tatbikat videoları
* Arama ve filtreleme özellikleri
* Admin paneli ile içerik yönetimi

---

Bu yapı, ilk ürün çıktısı için yeterli ve sürdürülebilir bir temel sunar.