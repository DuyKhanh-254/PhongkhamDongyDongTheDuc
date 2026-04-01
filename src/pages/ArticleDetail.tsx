import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { articles } from "@/data/mockData";
import ArticleCard from "@/components/ArticleCard";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="section-padding text-center">
        <p className="text-muted-foreground">Bài viết không tồn tại.</p>
        <Link to="/tin-tuc-kien-thuc" className="text-primary font-bold hover:underline mt-4 inline-block">
          Quay lại danh sách
        </Link>
      </div>
    );
  }

  const related = articles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div>
      {/* Banner image */}
      <div className="relative h-[240px] md:h-[360px] overflow-hidden">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 section-container pb-8">
          <span className="text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full">
            {article.category}
          </span>
        </div>
      </div>

      <article className="section-padding bg-card">
        <div className="section-container max-w-3xl mx-auto">
          <Link to="/tin-tuc-kien-thuc" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="w-4 h-4" /> Quay lại danh sách
          </Link>

          <h1 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
            {article.title}
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            {new Date(article.date).toLocaleDateString("vi-VN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="prose prose-green max-w-none text-foreground leading-relaxed whitespace-pre-line">
            {article.content}
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-padding" style={{ background: "linear-gradient(180deg, hsl(145,60%,97%) 0%, hsl(0,0%,100%) 100%)" }}>
          <div className="section-container">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-8">Bài viết liên quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((a) => (
                <ArticleCard key={a.id} {...a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ArticleDetail;
