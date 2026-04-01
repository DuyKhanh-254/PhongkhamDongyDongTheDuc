import PageBanner from "@/components/PageBanner";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/mockData";

const TinTuc = () => (
  <div>
    <PageBanner title="Tin tức & Kiến thức" />

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

export default TinTuc;
