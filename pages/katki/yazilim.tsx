import React from "react";

const KatkiYazilim = () => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-sage/30 to-sage/10 rounded-lg py-24 px-4">
            <section className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-2xl font-semibold text-primary mb-4">
                    Yazılım Katkısı ile Deprem Bilinci’ni Güçlendirin
                </h1>
                <p className="text-gray-700 mb-6">
                    Deprem Bilinci projesine yazılım alanında katkı sağlamak isteyen herkese
                    açığız! Birlikte daha güvenli ve bilinçli bir toplum için çalışıyoruz.
                    Katkı sağlamak için aşağıdaki adımları takip edebilirsiniz.
                </p>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-primary mb-2">
                        Nasıl Katkı Sağlayabilirsiniz?
                    </h2>
                    <ul className="space-y-4 mt-6">
                        <li className="flex items-start">
                            <span className="inline-block w-8 h-8 bg-sage/20 text-primary rounded-full -center justify-center mr-3 font-bold">
                                1
                            </span>
                            <div>
                                <span className="font-medium">Hata Bildirimi:</span>
                                <span className="text-gray-600">
                                    {" "}
                                    Karşılaştığınız hataları veya eksiklikleri{" "}
                                    <a
                                        href="https://github.com/"
                                        className="text-sage underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub Issues
                                    </a>
                                    {" "}üzerinden bildirin.
                                </span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="inline-block w-8 h-8 bg-sage/20 text-primary rounded-full items-center justify-center mr-3 font-bold">
                                2
                            </span>
                            <div>
                                <span className="font-medium">Yeni Özellik Geliştirme:</span>
                                <span className="text-gray-600">
                                    {" "}
                                    Projeye yeni özellikler ekleyin veya önerilerinizi paylaşın.
                                </span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="inline-block w-8 h-8 bg-sage/20 text-primary rounded-full items-center justify-center mr-3 font-bold">
                                3
                            </span>
                            <div>
                                <span className="font-medium">Kod İyileştirme:</span>
                                <span className="text-gray-600">
                                    {" "}
                                    Kodun okunabilirliğini ve performansını artıracak düzenlemeler
                                    yapın.
                                </span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="inline-block w-8 h-8 bg-sage/20 text-primary rounded-full items-center justify-center mr-3 font-bold">
                                4
                            </span>
                            <div>
                                <span className="font-medium">Test Yazımı:</span>
                                <span className="text-gray-600">
                                    {" "}
                                    Uygulamanın güvenilirliğini artırmak için birim ve entegrasyon
                                    testleri yazın.
                                </span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="inline-block w-8 h-8 bg-sage/20 text-primary rounded-full items-center justify-center mr-3 font-bold">
                                5
                            </span>
                            <div>
                                <span className="font-medium">Dökümantasyon:</span>
                                <span className="text-gray-600">
                                    {" "}
                                    Projenin daha anlaşılır olması için dökümantasyon katkısı
                                    sağlayın.
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-primary mb-2">
                        Katkı Sağlama Adımları
                    </h2>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>
                            <span className="font-medium">
                                Projeyi GitHub üzerinden{" "}
                                <span className="text-primary">fork</span> edin.
                            </span>
                        </li>
                        <li>
                            <span className="font-medium">
                                Kendi bilgisayarınıza{" "}
                                <span className="text-primary">clone</span> edin.
                            </span>
                        </li>
                        <li>
                            <span className="font-medium">
                                Geliştirmelerinizi yapın ve{" "}
                                <span className="text-primary">commit</span> edin.
                            </span>
                        </li>
                        <li>
                            <span className="font-medium">
                                Değişikliklerinizi{" "}
                                <span className="text-primary">pull request</span> olarak
                                gönderin.
                            </span>
                        </li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-primary mb-2">
                        Teknik Detaylar
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>
                            Proje{" "}
                            <span className="font-semibold">Next.js</span> ve{" "}
                            <span className="font-semibold">Tailwind CSS</span> ile
                            geliştirilmiştir.
                        </li>
                        <li>
                            Kod standartlarına ve{" "}
                            <span className="font-semibold">lint kurallarına</span> dikkat edin.
                        </li>
                        <li>
                            Her yeni özellik için uygun{" "}
                            <span className="font-semibold">testler</span> yazılması önerilir.
                        </li>
                        <li>
                            Katkı rehberimizi ve kodlama standartlarımızı{" "}
                            <a
                                href="https://github.com/"
                                className="text-sage underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>{" "}
                            üzerinden inceleyebilirsiniz.
                        </li>
                    </ul>
                </div>

                <div className="bg-sage/10 rounded-lg p-4 flex items-center">
                    <svg
                        className="w-8 h-8 text-sage mr-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 12a4 4 0 01-8 0 4 4 0 018 0zm6 8a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span className="text-primary font-medium">
                        Her türlü katkınız bizim için çok değerli! Sorularınız için{" "}
                        <a
                            href="mailto:info@deprembilinci.org"
                            className="underline"
                        >
                            info@deprembilinci.org
                        </a>{" "}
                        adresine yazabilirsiniz.
                    </span>
                </div>
            </section>
        </main>
    );
};

export default KatkiYazilim;