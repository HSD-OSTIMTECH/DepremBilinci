

const GithubAction = () => {

  return (
    <div className="py-32 flex flex-col md:flex-row items-center justify-between">

      {/* Üyelerin avatarları */}
      <div className="flex flex-wrap gap-4 mb-8">
        <img src="/Images/deprembilinci.png" alt="deprembilinci" className="rounded-2xl"/>
      </div>

      {/* Açıklama */}
      <div className="md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">Bu Platform Nedir?</h2>
        <p className="text-neutral-700">
          HSD OSTİMTECH tarafından geliştirilen açık kaynaklı bir sosyal sorumluluk platformudur. Afetlere karşı bilinç oluşturmayı amaçlar. Eğitim, test ve sertifika modülleriyle toplumu dijital ortamda güçlendirir. Sol tarafta ise katkı sağlayanları görüyorsunuz.
        </p>
      </div>

    </div>
  );
};

export default GithubAction;
