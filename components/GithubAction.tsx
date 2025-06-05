import React, { useEffect, useState } from "react";

// GitHub API'den dönen user tipi
type GithubUser = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
};

const GithubAction: React.FC = () => {
  const [members, setMembers] = useState<GithubUser[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/hsd-ostimtech/members")
      .then((res) => res.json())
      .then((data: GithubUser[]) => setMembers(data))
      .catch((err) => console.error("GitHub verisi alınamadı:", err));
  }, []);

  return (
    <div className="px-4 py-12 flex flex-col md:flex-row items-center justify-between">

      {/* Üyelerin avatarları */}
      <div className="flex flex-wrap gap-4 mb-8">
        {members.map((member) => (
          <a
            key={member.id}
            href={member.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform"
          >
            <img
              src={member.avatar_url}
              alt={member.login}
              title={member.login}
              className="w-16 h-16 rounded-full border"
            />
          </a>
        ))}
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
