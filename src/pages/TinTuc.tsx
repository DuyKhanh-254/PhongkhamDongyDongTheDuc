import PageBanner from "@/components/PageBanner";
import ArticleCard from "@/components/ArticleCard";
import { getMockData } from "@/data/mockData";
import { useLanguage } from "@/contexts/LanguageContext";

const TinTuc = () => {
  const { lang, t } = useLanguage();
  const { articles } = getMockData(lang);

  return (
    <div>
      <PageBanner title={String(t('nav.news'))} />

      <section className="section-padding bg-card">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a) => (
              <ArticleCard key={a.id} {...a} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TinTuc;
