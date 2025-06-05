import React, { useState } from "react";
import sorularData from "../../sorular.json"; // yolu senin yapına göre düzenle

// Kategori tipleri
type Kategori = "ogrenci" | "ogretmen" | "ebeveyn" | "cocuk";

type Soru = {
  soru: string;
  secenekler: string[];
  dogru: string;
};

const kategoriler: { id: Kategori; label: string }[] = [
  { id: "ogrenci", label: "Öğrenci" },
  { id: "ogretmen", label: "Öğretmen" },
  { id: "ebeveyn", label: "Ebeveyn" },
  { id: "cocuk", label: "Çocuk" }
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
    <div className="px-4 py-36 max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-semibold text-primary mb-6">Kategori Seç</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
        {kategoriler.map((kat) => (
          <button
            key={kat.id}
            onClick={() => kategoriSecildi(kat.id)}
            className="w-48 h-48 px-4 py-4 border cursor-pointer border-primary text-primary rounded-md hover:bg-primary hover:text-white transition text-lg font-medium"
          >
            {kat.label}
          </button>
        ))}
      </div>

      {/* Modal */}
      {modalAcik && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={modalKapat}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
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

export default Testler;
