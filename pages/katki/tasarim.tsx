import React from "react";

const Tasarim = () => {
    return (
        <main className="min-h-screen py-12 px-4">
            <section className="max-w-3xl mx-auto rounded-lg border border-neutral-400 p-8 bg-white">
                <h1 className="text-2xl font-semibold text-primary mb-4">
                    Tasarım Katkısı ile Deprem Bilinci’ni Güçlendirin
                </h1>
                <p className="text-gray-700 mb-6">
                    Deprem Bilinci projesine tasarım alanında katkı sağlamak isteyen herkese açığız!
                    Birlikte daha erişilebilir, anlaşılır ve etkili bir platform oluşturmak için çalışıyoruz.
                    Katkı sağlamak için aşağıdaki adımları takip edebilirsiniz.
                </p>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-primary mb-2">
                        Nasıl Katkı Sağlayabilirsiniz?
                    </h2>
                    <ul className="space-y-4 mt-6">
                        <li className="flex items-start">
                            <span className="inline-block w-8 h-8 bg-sage/20 text-primary rounded-full flex items-center justify-center mr-3 font-bold">
                                1
                            </span>
                            <div>
                                <span className="font-medium">Arayüz Tasarımı:</span>
                                <span className="text-gray-600">
                                    {" "}
                                    Kullanıcı deneyimini iyileştirecek yeni arayüz tasarımları oluşturun veya mevcut tasarımları geliştirin.
                                </span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="inline-block w-8 h-8 bg-sage/20 text-primary rounded-full flex items-center justify-center mr-3 font-bold">
                                2
                            </span>
                            <div>
                                <span className="font-medium">Kullanıcı Deneyimi (UX):</span>
                                <span className="text-gray-600">
                                    {" "}
                                    Akışları, erişilebilirliği ve kullanılabilirliği artıracak önerilerde bulunun.
                                </span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="inline-block w-8 h-8 bg-sage/20 text-primary rounded-full flex items-center justify-center mr-3 font-bold">
                                3
                            </span>
                            <div>
                                <span className="font-medium">Grafik ve İllüstrasyon:</span>
                                <span className="text-gray-600">
                                    {" "}
                                    Projede kullanılmak üzere ikon, illüstrasyon veya infografikler hazırlayın.
                                </span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="inline-block w-8 h-8 bg-sage/20 text-primary rounded-full flex items-center justify-center mr-3 font-bold">
                                4
                            </span>
                            <div>
                                <span className="font-medium">Renk ve Tipografi:</span>
                                <span className="text-gray-600">
                                    {" "}
                                    Renk paleti, yazı tipi ve görsel bütünlük önerileri sunun.
                                </span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="inline-block w-8 h-8 bg-sage/20 text-primary rounded-full flex items-center justify-center mr-3 font-bold">
                                5
                            </span>
                            <div>
                                <span className="font-medium">Tasarım Dökümantasyonu:</span>
                                <span className="text-gray-600">
                                    {" "}
                                    Tasarım kararlarını ve bileşenlerini açıklayan dokümanlar hazırlayın.
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
                                Tasarım önerilerinizi veya dosyalarınızı{" "}
                                <a
                                    href="https://github.com/HSD-OSTIMTECH/DepremBilinci/issues"
                                    className="text-primary underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub Issues
                                </a>{" "}
                                üzerinden paylaşın veya bir <span className="text-primary">pull request</span> oluşturun.
                            </span>
                        </li>
                        <li>
                            <span className="font-medium">
                                Figma, Adobe XD, Sketch gibi araçlarla hazırladığınız çalışmaları paylaşabilirsiniz.
                            </span>
                        </li>
                        <li>
                            <span className="font-medium">
                                Tasarımınızın nedenlerini ve kullanıcıya katkısını kısa bir açıklama ile belirtin.
                            </span>
                        </li>
                        <li>
                            <span className="font-medium">
                                Geri bildirimlere açık olun ve toplulukla iletişimde kalın.
                            </span>
                        </li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-primary mb-2">
                        Teknik ve Stil Detayları
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>
                            Proje <span className="font-semibold">Next.js</span> ve <span className="font-semibold">Tailwind CSS</span> ile geliştirilmektedir.
                        </li>
                        <li>
                            Tasarımlarınızın <span className="font-semibold">responsive</span> ve erişilebilir olmasına özen gösterin.
                        </li>
                        <li>
                            Renk kontrastı ve tipografi uyumuna dikkat edin.
                        </li>
                        <li>
                            Tasarım sistemimizi ve mevcut bileşenleri <a
                                href="https://github.com/HSD-OSTIMTECH/DepremBilinci"
                                className="text-sage underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >GitHub</a> üzerinden inceleyebilirsiniz.
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
                        Her türlü tasarım katkınız bizim için çok değerli! Sorularınız için{" "}
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

export default Tasarim;