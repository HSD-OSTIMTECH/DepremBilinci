import {
  PiStudentBold,
  PiChalkboardTeacherBold,
  PiUsersThreeBold,
} from "react-icons/pi";
import { FaChild, FaCode, FaPencilRuler, FaShareAlt } from "react-icons/fa";

import GithubAction from "@/components/GithubAction";

export default function Home() {
  return (
    <div className="my-24">

        {/*Hero Section*/}
        <section className="flex flex-col items-center justify-center px-4 text-center py-32">
          <h1 className="text-2xl md:text-4xl font-bold text-primary mb-4">
            Depremlere Bilinçli Hazırlık, Herkes İçin<br />Erişilebilir Eğitimle Mümkün.
          </h1>

          <p className="md:text-base text-neutral-700 max-w-xl mb-6">
            HSD OSTİMTECH tarafından geliştirilen açık kaynaklı bir sosyal sorumluluk platformudur. 
            Öğrencilere, öğretmenlere, ebeveynlere ve çocuklara özel eğitimlerle toplumu güçlendirmeye çalışıyoruz.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="/egitim/cocuklar"
              className="bg-primary text-white px-6 py-2 font-medium rounded-sm hover:-translate-y-0.5 transition-all"
            >
              Eğitimlere Başla
            </a>
            <a
              href="https://github.com/hsd-ostimtech"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-neutral-400 text-primary px-6 py-2 font-medium rounded-sm hover:-translate-y-0.5 transition-all"
            >
              GitHub’da İncele
            </a>
          </div>
        </section>

        {/* Eğitim Kataloğumuz*/}
        <section className="py-48">

          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">Eğitim Kataloğumuz</h2>
          <p className="text-neutral-700 mb-8">
            Temel afet bilgileri, çanta hazırlığı ve mini testler
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Öğrenciler */}
            <div className="border border-neutral-400 rounded-lg p-6">
              <PiStudentBold className="text-3xl mb-3" />
              <h3 className="text-lg font-semibold text-primary">Öğrenciler</h3>
              <p className="text-neutral-700">
                İçin hazırlanmış eğitimi{" "}
                <a href="/egitim/ogrenciler" className="text-sage hover:underline">
                  incele
                </a>
              </p>
            </div>

            {/* Öğretmenler */}
            <div className="border border-neutral-400 rounded-lg p-6">
              <PiChalkboardTeacherBold className="text-3xl mb-3" />
              <h3 className="text-lg font-semibold text-primary">Öğretmenler</h3>
              <p className="text-neutral-700">
                İçin hazırlanmış eğitimi{" "}
                <a href="/egitim/ogretmenler" className="text-sage hover:underline">
                  incele
                </a>
              </p>
            </div>

            {/* Ebeveynler */}
            <div className="border border-neutral-400 rounded-lg p-6">
              <PiUsersThreeBold className="text-3xl mb-3" />
              <h3 className="text-lg font-semibold text-primary">Ebeveynler</h3>
              <p className="text-neutral-700">
                İçin hazırlanmış eğitimi{" "}
                <a href="/egitim/ebeveynler" className="text-sage hover:underline">
                  incele
                </a>
              </p>
            </div>

            {/* Çocuklar */}
            <div className="border border-neutral-400 rounded-lg p-6">
              <FaChild className="text-3xl mb-3" />
              <h3 className="text-lg font-semibold text-primary">Çocuklar</h3>
              <p className="text-neutral-700">
                İçin hazırlanmış eğitimi{" "}
                <a href="/egitim/cocuklar" className="text-sage hover:underline">
                  incele
                </a>
              </p>
            </div>
          </div>
        </section>

        {/*Bu Platform Nedir?*/}
        <GithubAction/>

        {/* Destek Olun */}
        <section className="px-4 py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Sol metin alanı */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-3">Sen de Destek Ol!</h2>
              <p className="text-neutral-700 mb-6">
                Açık kaynaklı bu platform herkesin katkısına açık. Kod yazabilir, içerik üretebilir ya da sadece paylaşarak destek olabilirsin.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://github.com/hsd-ostimtech/deprembilinci"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition"
                >
                  GitHub’da Yıldızla
                </a>
                <a
                  href="/katki/genel-rehber"
                  className="border border-primary text-primary px-6 py-2 rounded-md hover:bg-gray-100 transition"
                >
                  Katkı Rehberini İncele
                </a>
              </div>
            </div>

            {/* Sağ ikonlu destek alanı */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 border rounded-md px-4 py-3">
                <FaCode className="text-primary text-xl" />
                <span className="font-medium text-[#2e3a59]">Kod Yaz!</span>
              </div>
              <div className="flex items-center gap-3 border rounded-md px-4 py-3">
                <FaPencilRuler className="text-primary text-xl" />
                <span className="font-medium text-[#2e3a59]">Tasarla!</span>
              </div>
              <div className="flex items-center gap-3 border rounded-md px-4 py-3">
                <FaShareAlt className="text-primary text-xl" />
                <span className="font-medium text-[#2e3a59]">Yayınlaştır!</span>
              </div>
            </div>
          </div>
        </section>

    </div>
  );
}
