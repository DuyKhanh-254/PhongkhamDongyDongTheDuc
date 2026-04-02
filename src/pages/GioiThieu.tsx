import { ArrowDown } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import { aboutHistoryImage, certificates, facilityImages, getMockData } from "@/data/mockData";
import { useLanguage } from "@/contexts/LanguageContext";

const GioiThieu = () => {
  const { lang, t } = useLanguage();
  const { doctors } = getMockData(lang);

  return (
    <div>
      {/* Hero Banner */}
      <PageBanner />

      {/* Lịch sử thành lập */}
      <section className="section-padding bg-zinc-50/60">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mb-10 leading-tight">
                {String(t('sections.history'))}
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <ArrowDown className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground font-medium text-base md:text-lg leading-relaxed">
                    {String(t('sections.history1'))}
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <ArrowDown className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground font-medium text-base md:text-lg leading-relaxed">
                    {String(t('sections.history2'))}
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <ArrowDown className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground font-medium text-base md:text-lg leading-relaxed">
                    {String(t('sections.history3'))}
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <ArrowDown className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground font-medium text-base md:text-lg leading-relaxed">
                    {String(t('sections.history4'))}
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
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              {String(t('sections.doctors'))}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doc) => (
              <div key={doc.id} className="group">
                <div className="rounded-2xl overflow-hidden bg-muted aspect-[4/5] mb-4">
                  <img src={doc.image} alt={doc.name} loading="lazy" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{doc.title}</p>
                  <h3 className="font-heading font-bold text-foreground text-base mt-0.5">{doc.name}</h3>
                  <p className="text-base text-muted-foreground mt-2 leading-relaxed">{doc.description}</p>
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
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground max-w-2xl leading-tight">
              {String(t('sections.cert'))}
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
              {String(t('sections.facility'))}
            </h2>
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
};

export default GioiThieu;
