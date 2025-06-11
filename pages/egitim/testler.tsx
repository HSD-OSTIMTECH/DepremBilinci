import React, { useState } from "react";
import { PiStudentBold, PiChalkboardTeacherBold, PiUsersThreeBold } from "react-icons/pi";
import { FaChild } from "react-icons/fa";
import sorularData from "../../sorular.json"; 
import toast from "react-hot-toast";

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

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Testler: React.FC = () => {
  const [aktifKategori, setAktifKategori] = useState<Kategori | null>(null);
  const [modalAcik, setModalAcik] = useState(false);
  const [sorular, setSorular] = useState<Soru[]>([]);
  const [secimler, setSecimler] = useState<(string | null)[]>([]);
  const [sonuc, setSonuc] = useState<{ dogru: number; toplam: number } | null>(null);

  const modalKapat = () => {
    setModalAcik(false);
    setAktifKategori(null);
    setSorular([]);
    setSecimler([]);
    setSonuc(null);
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
    setSecimler(Array(karisikSorular.length).fill(null));
    setSonuc(null);
    setAktifKategori(kat);
    setModalAcik(true);
  };

  const secenekSec = (soruIndex: number, secenek: string) => {
    setSecimler((prev) => {
      const yeni = [...prev];
      yeni[soruIndex] = secenek;
      return yeni;
    });
  };

  const sonucuGoster = () => {
    if (secimler.some((s) => s === null)) {
      toast.error("Lütfen tüm sorular için bir seçenek işaretleyin.");
      return;
    }
    let dogru = 0;
    sorular.forEach((soru, i) => {
      if (secimler[i] === soru.dogru) dogru++;
    });
    setSonuc({ dogru, toplam: sorular.length });
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
          <div className="bg-white rounded-lg p-6 w-full max-w-6xl shadow-lg relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={modalKapat}
              className="absolute top-2 right-3 text-neutral-500 hover:text-red-500 text-xl"
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
                      <li key={j}>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name={`soru-${i}`}
                            value={secenek}
                            checked={secimler[i] === secenek}
                            onChange={() => secenekSec(i, secenek)}
                            className="accent-primary"
                            disabled={!!sonuc}
                          />
                          <span
                            className={
                              sonuc
                                ? secenek === soru.dogru
                                  ? "font-semibold text-green-600"
                                  : secimler[i] === secenek
                                  ? "font-semibold text-red-600"
                                  : ""
                                : ""
                            }
                          >
                            {secenek}
                          </span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {!sonuc && (
              <button
                onClick={sonucuGoster}
                className="mt-8 w-full px-4 py-2 rounded bg-primary text-background cursor-pointer font-semibold hover:-translate-y-0.5 transition"
              >
                Sonucu Göster
              </button>
            )}

            {sonuc && (
              <div className="mt-6 text-center">
                <p className="text-lg font-bold text-primary">
                  Doğru Sayısı: {sonuc.dogru} / {sonuc.toplam}
                </p>
                <button
                  onClick={modalKapat}
                  className="mt-4 px-4 py-2 rounded bg-primary text-background cursor-pointer font-semibold hover:-translate-y-0.5 transition"
                >
                  Kapat
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Testler
