import { ArrowDown } from "lucide-react";
import heroBanner from "@/assets/hero-clinic.jpg";
import { doctors, aboutHistoryImage, certificates, facilityImages } from "@/data/mockData";

const GioiThieu = () => (
  <div>
    {/* Hero Banner */}
    <section className="relative h-[250px] md:h-[350px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBanner} alt="Giới thiệu Phòng khám" className="w-full h-full object-cover" width={1920} height={400} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, hsl(145,100%,18%) 0%, hsla(145,100%,27%,0.6) 35%, transparent 100%)" }} />
      </div>
    </section>

    {/* Lịch sử thành lập */}
    <section className="section-padding bg-zinc-50/60">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-semibold text-sm mb-2">Tagline text</p>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mb-10 leading-tight">
              Lịch sử thành lập
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <ArrowDown className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-medium text-base md:text-lg leading-relaxed">
                  Thành lập từ tháng 10/2008 do bs Nguyễn Xuân Sơn, Nguyễn Văn Thế, Phan Minh Đức
                </p>
              </div>
              <div className="flex items-start gap-4">
                <ArrowDown className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-medium text-base md:text-lg leading-relaxed">
                  Tiền thân là phòng khám Thể gia đường năm 1999 do bs Nguyễn Văn Thế
                </p>
              </div>
              <div className="flex items-start gap-4">
                <ArrowDown className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-medium text-base md:text-lg leading-relaxed">
                  Địa chỉ cũ: Nhà A4 đường Hàm Nghi, phường Mỹ Đình, Từ Liêm, Hà Nội; sau chuyển về nhà CT1 đường Trần Văn Lai phường Mỹ Đình 1.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <ArrowDown className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-medium text-base md:text-lg leading-relaxed">
                  Tháng 3 năm 2025 chuyển về số 17, khu tập thể công ty dược liệu TW1, ngõ 182 đường Đình Thôn, phường Từ Liêm Hà Nội, cơ sở 2 tại số 43 đường Phương Liệt - Hà Nội
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-square md:aspect-[4/3]">
              <img src={aboutHistoryImage} alt="Lịch sử phòng khám" className="w-full h-full object-cover" />
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

    {/* Giấy phép hoạt động & chứng nhận */}
    <section className="section-padding bg-card">
      <div className="section-container">
        <div className="mb-12">
          <p className="text-primary font-semibold text-sm mb-2">Tagline text</p>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground max-w-2xl leading-tight">
            Giấy phép hoạt động & chứng nhận chuyên môn
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div key={cert.id} className="rounded-2xl overflow-hidden shadow-sm border border-border/40 aspect-[3/4]">
              <img src={cert.src} alt={cert.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Cơ sở vật chất */}
    <section className="section-padding bg-zinc-50/60 pb-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-4">
            Cơ sở vật chất
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facilityImages.map((img) => (
            <div key={img.id} className="rounded-3xl overflow-hidden aspect-[4/3] border border-border/30 shadow-md">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default GioiThieu;
