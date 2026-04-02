import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Send, ArrowRight } from "lucide-react";
import { getMockData } from "@/data/mockData";
import { useLanguage } from "@/contexts/LanguageContext";
import PageBanner from "@/components/PageBanner";

const ServiceDetail = () => {
  const { lang, t } = useLanguage();
  const { services, articles } = getMockData(lang);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const service = services.find((s) => s.id === id);
  // Default to 0, though we should check if images exist
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!service) {
    return (
      <div className="section-padding text-center">
        <p className="text-muted-foreground">{String(t('sections.notFound')) || "Dịch vụ không tồn tại."}</p>
        <button onClick={() => navigate("/dich-vu")} className="text-primary font-bold hover:underline mt-4 inline-block">
          {String(t('sections.backToList')) || "Quay lại danh sách"}
        </button>
      </div>
    );
  }

  const handleNextImg = () => {
    if (service.images) {
      setCurrentImgIndex((prev) => (prev === service.images.length - 1 ? 0 : prev + 1));
    }
  };

  const handlePrevImg = () => {
    if (service.images) {
      setCurrentImgIndex((prev) => (prev === 0 ? service.images.length - 1 : prev - 1));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", message: "" });
    }, 5000);
  };

  const latestArticles = articles.slice(0, 3);

  // Extract H2 headings for Table of Contents
  const extractHeadings = (text: string) => {
    const lines = text.split('\n');
    return lines.filter(line => line.startsWith('## ')).map(line => line.replace('## ', '').trim());
  };
  
  const headings = extractHeadings(service.content || "");

  return (
    <div>
      <PageBanner title={service.title} />

      <section className="section-padding bg-card">
        <div className="section-container">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[15px] text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">{String(t('nav.home'))}</Link>
            <span>/</span>
            <Link to="/dich-vu" className="hover:text-primary transition-colors">{String(t('nav.services')).toUpperCase()}</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate max-w-[200px] md:max-w-none">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column - Main Content (8/12) */}
            <div className="lg:col-span-8">
              {/* Back Button */}
              <Link to="/dich-vu" className="inline-flex items-center gap-2 text-[14px] text-muted-foreground hover:text-primary mb-6 transition-colors">
                <ChevronLeft className="w-4 h-4" /> {String(t('sections.backToList')) || "Quay lại danh sách"}
              </Link>

              <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                {service.title}
              </h1>

              {/* Table of Contents (Mục lục) */}
              {headings.length > 0 && (
                <div className="bg-accent/40 rounded-xl p-5 mb-8 border border-border">
                  <div className="flex items-center justify-between mb-3">
                     <h3 className="font-heading font-bold text-foreground text-lg">Mục lục</h3>
                  </div>
                  <ul className="space-y-2 text-[15px]">
                    {headings.map((heading, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-primary font-medium">
                        <span className="text-primary/60 mt-0.5">•</span>
                        {heading}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Image Slider */}
              {service.images && service.images.length > 0 && (
                <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video bg-muted group">
                  <img
                    src={service.images[currentImgIndex]}
                    alt={`${service.title} - ảnh ${currentImgIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  
                  {service.images.length > 1 && (
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <button 
                        onClick={handlePrevImg}
                        className="w-10 h-10 rounded-full bg-black/60 hover:bg-primary text-white flex items-center justify-center backdrop-blur-sm transition-all"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={handleNextImg}
                        className="w-10 h-10 rounded-full bg-black/60 hover:bg-primary text-white flex items-center justify-center backdrop-blur-sm transition-all"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Prose Content */}
              <div className="prose prose-green max-w-none text-foreground leading-relaxed whitespace-pre-line mb-10">
                {service.content}
              </div>
            </div>

            {/* Right Column - Sidebar (4/12) */}
            <div className="lg:col-span-4 space-y-8 sticky top-28 self-start">
              
              {/* Sticky Form */}
              <div className="bg-accent/30 rounded-2xl p-6 border border-border/60">
                <h3 className="font-heading font-extrabold text-xl text-primary mb-6 uppercase">
                  ĐỂ LẠI THÔNG TIN TƯ VẤN
                </h3>
                
                {submitted ? (
                  <div className="py-8 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 mx-auto mb-3 flex items-center justify-center">
                      <Send className="w-6 h-6 text-primary" />
                    </div>
                    <p className="font-medium text-foreground mb-1">{String(t('contact.successTitle'))}</p>
                    <p className="text-sm text-muted-foreground">{String(t('contact.successDesc'))}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        {String(t('contact.nameLabel'))}
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                        placeholder={String(t('contact.namePlaceholder'))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        {String(t('contact.phoneLabel'))}
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                        placeholder={String(t('contact.phonePlaceholder'))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        {String(t('contact.messageLabel'))}
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm resize-none"
                        placeholder={String(t('contact.messagePlaceholder'))}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 mt-2 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                    >
                      {String(t('contact.submitBtn'))} <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>

              {/* Latest Articles */}
              <div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-4">Bài viết mới nhất</h3>
                <div className="space-y-4">
                  {latestArticles.map(article => (
                    <Link to={`/tin-tuc-kien-thuc/${article.slug}`} key={article.id} className="group flex gap-4 items-center">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                          {article.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">{article.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
