import React, { useState } from "react";
import { PiStudentBold, PiChalkboardTeacherBold, PiUsersThreeBold } from "react-icons/pi";
import { FaChild } from "react-icons/fa";
import sorularData from "../../sorular.json"; // yolu senin yapına göre düzenle

// Kategori tipleri
type Kategori = "ogrenci" | "ogretmen" | "ebeveyn" | "cocuk";

type Soru = {
  soru: string;
  secenekler: string[];
  dogru: string;
};

const kategoriler: { id: Kategori; label: string; icon: React.ReactNode; link: string; desc: string }[] = [
  { id: "ogrenci", label: "Öğrenciler", icon: <PiStudentBold className="text-3xl mb-3" />, link: "/egitim/ogrenciler", desc: "için hazırlanmış testler" },
  { id: "ogretmen", label: "Öğretmenler", icon: <PiChalkboardTeacherBold className="text-3xl mb-3" />, link: "/egitim/ogretmenler", desc: "için hazırlanmış testler" },
  { id: "ebeveyn", label: "Ebeveynler", icon: <PiUsersThreeBold className="text-3xl mb-3" />, link: "/egitim/ebeveynler", desc: "için hazırlanmış testler" },
  { id: "cocuk", label: "Çocuklar", icon: <FaChild className="text-3xl mb-3" />, link: "/egitim/cocuklar", desc: "için hazırlanmış testler" }
];

// Diziyi karıştıran yardımcı fonksiyon
const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Testler: React.FC = () => {
  const [aktifKategori, setAktifKategori] = useState<Kategori | null>(null);
  const [modalAcik, setModalAcik] = useState(false);
  const [sorular, setSorular] = useState<Soru[]>([]);

  const modalKapat = () => {
    setModalAcik(false);
    setAktifKategori(null);
    setSorular([]);
  };

  const kategoriSecildi = (kat: Kategori) => {
    const filtrelenmis = sorularData.filter(test => test.kategori === kat);
    if (filtrelenmis.length === 0) return;

    const rastgeleTest = filtrelenmis[Math.floor(Math.random() * filtrelenmis.length)];

    const karisikSorular: Soru[] = shuffleArray(rastgeleTest.sorular).map((soru) => ({
      ...soru,
      secenekler: shuffleArray(soru.secenekler),
    }));

    setSorular(karisikSorular);
    setAktifKategori(kat);
    setModalAcik(true);
  };

  return (
    <div className="py-16">
      <section className="mb-10">
        <h1 className="text-2xl font-semibold mb-4 text-primary">Kendinizi Test Edin</h1>
        <p className="mb-4 text-neutral-700 max-w-2xl">
          Eğer eğitimleri incelediyseniz, şimdi öğrendiklerinizi test etme zamanı! Aşağıdaki kategori kartlarına tıklayarak ilgili testleri başlatabilirsiniz. Her kategori için rastgele sorular hazırlanmıştır.
          Testler, deprem güvenliği ve hazırlığı konusundaki bilginizi ölçmenize yardımcı olacak. Her test sonunda doğru cevapları görebileceksiniz.
        </p>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-semibold text-primary mb-2">Test Kataloğumuz</h2>
        <p className="text-neutral-700 mb-8">
          Temel afet bilgileri, çanta hazırlığı ve deprem bilinci hakkında mini testler.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {kategoriler.map((kat) => (
            <div
              key={kat.id}
              className="border border-neutral-400 rounded-lg p-6 flex flex-col items-center"
            >
              {kat.icon}
              <h3 className="text-lg font-semibold text-primary">{kat.label}</h3>
              <p className="text-neutral-700 mb-4">
                {kat.desc}{" "}
              </p>
              <button
                onClick={() => kategoriSecildi(kat.id)}
                className="mt-auto px-4 py-2 rounded bg-primary text-background font-semibold hover:-translate-y-0.5 transition cursor-pointer"
              >
                Teste Başla
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {modalAcik && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={modalKapat}
              className="absolute top-2 right-3 text-neutral-500  max-w-2xlhover:text-red-500 text-xl"
            >
              &times;
            </button>

            <h3 className="text-xl font-bold text-primary mb-4">
              {aktifKategori && kategoriler.find((k) => k.id === aktifKategori)?.label} Testi
            </h3>

            <div className="space-y-6">
              {sorular.map((soru, i) => (
                <div key={i} className="text-left">
                  <p className="font-semibold mb-2">{i + 1}. {soru.soru}</p>
                  <ul className="space-y-2">
                    {soru.secenekler.map((secenek, j) => (
                      <li key={j} className="pl-4">– {secenek}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testler
