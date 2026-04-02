import PageBanner from "@/components/PageBanner";
import { getMockData } from "@/data/mockData";
import ServiceCard from "@/components/ServiceCard";
import { useLanguage } from "@/contexts/LanguageContext";

const DichVu = () => {
  const { lang, t } = useLanguage();
  const { services } = getMockData(lang);

  return (
    <div>
      <PageBanner title={String(t('nav.services'))} />

      <section className="section-padding bg-card">
        <div className="section-container">
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            {String(t('sections.servicesDesc'))}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.id} {...s} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DichVu;
