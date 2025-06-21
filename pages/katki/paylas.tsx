import React from "react";

const Paylas = () => {
    return (
        <main className="min-h-screen py-12 px-4">
            <section className="max-w-3xl mx-auto rounded-lg border border-neutral-400 p-8">
                <h1 className="text-2xl font-semibold text-primary mb-4">
                    Sosyal Medyada Paylaşarak Deprem Bilinci’ni Güçlendirin
                </h1>
                <p className="text-gray-700 mb-6">
                    Deprem Bilinci projesine sosyal medya üzerinden içerik üreterek katkı sağlamak isteyen herkese açığız!
                    Toplumu bilinçlendirmek, doğru bilgiye erişimi artırmak ve daha fazla kişiye ulaşmak için birlikte çalışıyoruz.
                    Katkı sağlamak için aşağıdaki önerileri ve adımları takip edebilirsiniz.
                </p>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-primary mb-2">
                        Sosyal Medyada Nasıl Katkı Sağlayabilirsiniz?
                    </h2>
                    <ul className="space-y-4 mt-6">
                        <li className="flex items-start">
                            <span className="w-8 h-8 bg-sage/20 text-primary rounded-full flex items-center justify-center mr-3 font-bold">
                                1
                            </span>
                            <div>
                                <span className="font-medium">Bilgilendirici Postlar:</span>
                                <span className="text-gray-600">
                                    {" "}
                                    Deprem öncesi, sırası ve sonrasında yapılması gerekenleri anlatan kısa ve anlaşılır gönderiler hazırlayın.
                                </span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="w-8 h-8 bg-sage/20 text-primary rounded-full flex items-center justify-center mr-3 font-bold">
                                2
                            </span>
                            <div>
                                <span className="font-medium">İnfografik ve Görsel Paylaşımlar:</span>
                                <span className="text-gray-600">
                                    {" "}
                                    Deprem bilinciyle ilgili dikkat çekici infografikler, görseller veya animasyonlar oluşturup paylaşın.
                                </span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="w-8 h-8 bg-sage/20 text-primary rounded-full flex items-center justify-center mr-3 font-bold">
                                3
                            </span>
                            <div>
                                <span className="font-medium">Kısa Videolar ve Reels:</span>
                                <span className="text-gray-600">
                                    {" "}
                                    Deprem bilinciyle ilgili kısa videolar, reels veya hikayeler çekerek toplumu bilgilendirin.
                                </span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="w-8 h-8 bg-sage/20 text-primary rounded-full flex items-center justify-center mr-3 font-bold">
                                4
                            </span>
                            <div>
                                <span className="font-medium">Hashtag Kullanımı:</span>
                                <span className="text-gray-600">
                                    {" "}
                                    #DepremBilinci ve benzeri etiketlerle içeriklerinizi daha geniş kitlelere ulaştırın.
                                </span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="w-8 h-8 bg-sage/20 text-primary rounded-full flex items-center justify-center mr-3 font-bold">
                                5
                            </span>
                            <div>
                                <span className="font-medium">Topluluk Etkileşimi:</span>
                                <span className="text-gray-600">
                                    {" "}
                                    Yorumlarda soruları yanıtlayın, doğru bilgiye yönlendirin ve toplulukla etkileşimde bulunun.
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-primary mb-2">
                        Sosyal Medyada Katkı Sağlama Adımları
                    </h2>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>
                            <span className="font-medium">
                                Hazırladığınız içerikleri kendi sosyal medya hesaplarınızda paylaşın ve <span className="text-primary font-semibold">#DepremBilinci</span> etiketiyle yayınlayın.
                            </span>
                        </li>
                        <li>
                            <span className="font-medium">
                                İçeriklerinizi <a href="https://www.instagram.com/deprembilinci" className="text-primary underline" target="_blank" rel="noopener noreferrer">@deprembilinci</a> hesabını etiketleyerek veya DM ile bize ulaştırabilirsiniz.
                            </span>
                        </li>
                        <li>
                            <span className="font-medium">
                                Bilgi ve görsellerin doğru, güncel ve topluluk kurallarına uygun olmasına dikkat edin.
                            </span>
                        </li>
                        <li>
                            <span className="font-medium">
                                İçeriklerinizi farklı platformlarda (Instagram, Twitter/X, TikTok, YouTube Shorts vb.) paylaşarak daha fazla kişiye ulaşmamıza destek olun.
                            </span>
                        </li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-primary mb-2">
                        Sosyal Medya İçeriği Üretirken Dikkat Edilmesi Gerekenler
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>
                            Bilgilerin doğruluğunu ve kaynağını mutlaka kontrol edin.
                        </li>
                        <li>
                            Telif hakkı içeren görseller veya videolar kullanmayın, kendi özgün içeriklerinizi üretin veya açık kaynak materyaller tercih edin.
                        </li>
                        <li>
                            İçeriklerinizin erişilebilir ve anlaşılır olmasına özen gösterin.
                        </li>
                        <li>
                            Topluluk kurallarına ve saygılı iletişime dikkat edin.
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
                        Sosyal medya içeriklerinizle topluma katkı sağlayabilirsiniz! Sorularınız için{" "}
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

export default Paylas;