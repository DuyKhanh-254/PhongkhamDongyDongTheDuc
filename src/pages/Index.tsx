import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";
import aboutImage from "@/assets/gallery-5.png";
import { clinicInfo, services, doctors, articles, galleryImages, commonDiseases, testimonials } from "@/data/mockData";
import ServiceCard from "@/components/ServiceCard";
import ArticleCard from "@/components/ArticleCard";

const diseaseCategoriesData = [
  {
    title: "Xương khớp",
    icon: <svg className="w-[36px] h-[36px] text-primary mb-[8px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c0 .28.22.5.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"/></svg>,
    diseases: ["Đau cổ vai gáy", "Đau thắt lưng", "Thần kinh tọa", "Thoái hóa khớp gối", "Viêm khớp"],
  },
  {
    title: "Thần kinh",
    icon: <svg className="w-[36px] h-[36px] text-primary mb-[8px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>,
    diseases: ["Đau đầu", "Mất ngủ", "Rối loạn thần kinh thực vật"],
  },
  {
    title: "Tiêu hóa",
    icon: <svg className="w-[36px] h-[36px] text-primary mb-[8px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3v2c0 1.5.5 2.5 1.5 3.5 1.5 1.5 3.5 1.5 4.5 3.5 1 2 .5 5-2 7-2 1.5-5 2-8 0-4-2.5-5-6.5-2.5-9s3-3 3-5V3" /></svg>,
    diseases: ["Viêm dạ dày", "Trào ngược dạ dày", "Viêm đại tràng", "Trĩ", "Rò hậu môn"],
  },
  {
    title: "Da liễu",
    icon: <svg className="w-[36px] h-[36px] text-primary mb-[8px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 4v1c0 1.5 1 2.5 2.5 3.5A6.5 6.5 0 0 1 21 14v7" /><path d="M9 4v1c0 1.5-1 2.5-2.5 3.5A6.5 6.5 0 0 0 3 14v7" /><path d="M15 11v10" /><path d="M9 11v10" /><path d="M15 9h-6" /><circle cx="10" cy="14" r="1.5" fill="currentColor" stroke="none" /><circle cx="14" cy="18" r="1.5" fill="currentColor" stroke="none" /><circle cx="12" cy="11" r="1" fill="currentColor" stroke="none" /><circle cx="13" cy="15" r="1" fill="currentColor" stroke="none" /></svg>,
    diseases: ["Dị ứng", "Chàm", "Mề đay"],
  },
  {
    title: "Sức khỏe phụ nữ",
    icon: <svg className="w-[36px] h-[36px] text-primary mb-[8px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="6"/><path d="M12 16v6"/><path d="M9 19h6"/></svg>,
    diseases: ["Rối loạn kinh nguyệt", "Tiền mãn kinh"],
  },
  {
    title: "Bệnh theo mùa",
    icon: <svg className="w-[36px] h-[36px] text-primary mb-[8px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 7V3"/><path d="M12 21v-4"/><path d="M7 12H3"/><path d="M21 12h-4"/><path d="m8.5 8.5-3-3"/><path d="m18.5 18.5-3-3"/><path d="m8.5 15.5-3 3"/><path d="m18.5 5.5-3 3"/></svg>,
    diseases: ["Cúm A", "Cúm B", "COVID-19", "Sốt virus"],
  }
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[400px] md:h-[550px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Phòng khám" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, hsl(145,100%,18%) 0%, hsla(145,100%,27%,0.6) 35%, transparent 100%)" }} />
        </div>
      </section>

      {/* Common diseases */}
      <section className="section-padding bg-zinc-50/60">
        <div className="section-container">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-12">
            Các bệnh điều trị phổ biến
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
            {diseaseCategoriesData.map((category) => (
              <div key={category.title} className="flex flex-col p-4 bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-border/50 hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center w-full">
                  {category.icon}
                  <h3 className="font-heading font-semibold text-base text-foreground text-center mb-3 tracking-tight">{category.title}</h3>
                </div>
                <ul className="w-full pl-[22px] space-y-1.5 list-disc text-sm font-medium text-muted-foreground marker:text-muted-foreground/60">
                  {category.diseases.map((d) => (
                    <li key={d} className="leading-snug">{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services (Phương pháp điều trị) */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              Phương pháp điều trị tại phòng khám
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.id} className="group rounded-2xl overflow-hidden shadow-sm border border-transparent hover:shadow-lg transition-all flex flex-col">
                <div className="aspect-[16/9] md:aspect-[4/3] overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="bg-primary p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-semibold text-white text-lg mb-2 group-hover:text-white/90">
                      {s.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About short */}
      <section className="section-padding" style={{ backgroundColor: "hsl(145,100%,18%)" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div className="text-white">
              <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-8 leading-tight">
                Phòng khám đông y<br />SƠN - THẾ - ĐỨC
              </h2>
              <div className="space-y-4 text-white/90 leading-relaxed text-sm md:text-base">
                <p>
                  <strong className="text-white">Phòng khám Đông y Sơn Thế Đức</strong> là phòng khám chuyên khoa y học cổ truyền, tập trung điều trị các bệnh lý xương khớp, thần kinh và tiêu hóa bằng phương pháp Đông y kết hợp hiện đại.
                </p>
                <p>
                  Phòng khám áp dụng các phương pháp điều trị như <strong className="text-white">châm cứu, xoa bóp bấm huyệt, điện châm, kê đơn thuốc Đông y và các liệu pháp không dùng thuốc</strong>, giúp tác động vào căn nguyên bệnh, lưu thông khí huyết và phục hồi chức năng cơ thể một cách tự nhiên.
                </p>
                <p>
                  Sơn Thế Đức hướng tới mục tiêu giúp người bệnh <strong className="text-white">giảm đau – phục hồi – sống khỏe bền vững</strong> bằng các phương pháp Đông y an toàn, không phụ thuộc thuốc Tây.
                </p>
              </div>
              <Link
                to="/gioi-thieu"
                className="inline-flex items-center gap-2 mt-10 text-white font-bold text-sm uppercase tracking-widest hover:underline transition-all group"
              >
                GIỚI THIỆU CHI TIẾT <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            {/* Right: image */}
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={aboutImage}
                  alt="Phòng khám Sơn Thế Đức"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, hsl(145,60%,97%) 0%, hsl(0,0%,100%) 100%)" }}>
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm mb-2">Intuitive Design</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              Đội ngũ y bác sĩ
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doc) => (
              <div key={doc.id} className="group">
                <div className="rounded-2xl overflow-hidden bg-muted aspect-[4/5] mb-4">
                  <img src={doc.image} alt={doc.name} loading="lazy" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{doc.title}</p>
                  <h3 className="font-heading font-bold text-foreground text-base mt-0.5">{doc.name}</h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{doc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-zinc-50/60">
        <div className="section-container">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-12">
            Cảm nhận bệnh nhân
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-border/40 flex flex-col items-center text-center">
                <p className="text-foreground font-medium mb-6 flex-1 text-base leading-relaxed">
                  {t.quote}
                </p>
                <div className="w-12 h-12 rounded-full overflow-hidden mb-3 border border-border">
                  <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm font-semibold text-muted-foreground">{t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* News */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, hsl(0,0%,100%) 0%, hsl(145,60%,97%) 100%)" }}>
        <div className="section-container">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-12">
            Tin tức & Kiến thức
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.slice(0, 3).map((a) => (
              <ArticleCard key={a.id} {...a} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/tin-tuc-kien-thuc" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
              Xem tất cả bài viết <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="section-container text-center text-primary-foreground">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">Đặt lịch khám ngay hôm nay</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Đội ngũ bác sĩ giàu kinh nghiệm sẵn sàng tư vấn và điều trị cho bạn.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${clinicInfo.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 px-8 py-3 bg-primary-foreground text-primary font-bold rounded-lg hover:bg-primary-foreground/90 transition-colors">
              <Phone className="w-5 h-5" /> Gọi ngay: {clinicInfo.phone}
            </a>
            <Link to="/lien-he" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary-foreground text-primary-foreground font-bold rounded-lg hover:bg-primary-foreground/10 transition-colors">
              Gửi yêu cầu tư vấn
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
