import React from "react";
import { FaGithub, FaMedium, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {

  const footerLink = "text-base font-medium text-neutral-700 hover:text-neutral-950 transition-all"
  return (
    <footer className="text-neutral-700 py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:flex md:justify-between">
        {/* Hakkımızda */}
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold text-primary mb-3">Hakkımızda</h3>
          <p className="text-neutral-700">
            Bu platform HSD OSTİMTECH – Huawei Student Developers topluluğu tarafından açık kaynaklı sosyal sorumluluk projeleri geliştirmek amacıyla oluşturulmuştur.
          </p>
        </div>

        {/* Bizi Takip Et */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-3">Bizi Takip Et!</h3>
          <div className="space-y-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100"
            >
              <FaGithub className="text-xl" /> GitHub
            </a>
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100"
            >
              <FaMedium className="text-xl" /> Medium
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100"
            >
              <FaLinkedin className="text-xl" /> LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100"
            >
              <FaInstagram className="text-xl" /> Instagram
            </a>
          </div>
        </div>

        {/* Navigasyon */}
        <div>

          <h3 className="text-lg font-semibold text-primary mb-3">Navigasyon</h3>

          <div className="flex flex-col gap-2 font-medium">
            <a href="/" className={footerLink}>Ana Sayfa</a>
            <a href="/hakkimizda" className={footerLink}>Neler Yapıyoruz?</a>
            <a href="/cocuk-egitim" className={footerLink}>Eğitimler</a>
            <a href="/katkı/genel-rehber" className={footerLink}>Katkı Rehberi</a>
            <a href="/iletisim" className={footerLink}>İletişim</a>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
