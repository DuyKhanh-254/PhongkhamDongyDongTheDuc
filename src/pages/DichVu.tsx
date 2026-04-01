import PageBanner from "@/components/PageBanner";
import { services } from "@/data/mockData";
import ServiceCard from "@/components/ServiceCard";

const DichVu = () => (
  <div>
    <PageBanner title="Dịch vụ khám & điều trị" />

    <section className="section-padding bg-card">
      <div className="section-container">
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Phòng khám Đông y Sơn - Thế - Đức cung cấp đa dạng dịch vụ y học cổ truyền,
          kết hợp phương pháp hiện đại nhằm mang lại hiệu quả điều trị tối ưu.
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

export default DichVu;
