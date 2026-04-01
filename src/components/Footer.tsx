import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";
import { clinicInfo } from "@/data/mockData";

const Footer = () => (
  <footer className="bg-primary-dark text-primary-foreground">
    <div className="section-container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Logo" className="h-12 w-12 object-contain brightness-200" />
            <div>
              <div className="font-heading font-bold text-sm">PHÒNG KHÁM ĐÔNG Y</div>
              <div className="font-heading font-extrabold text-lg">SƠN - THẾ - ĐỨC</div>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/80 leading-relaxed">
            Chuyên điều trị bằng phương pháp y học cổ truyền kết hợp hiện đại.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-heading font-bold text-lg mb-4">Liên kết nhanh</h3>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            {[
              { label: "Trang chủ", path: "/" },
              { label: "Giới thiệu", path: "/gioi-thieu" },
              { label: "Dịch vụ", path: "/dich-vu" },
              { label: "Tin tức", path: "/tin-tuc-kien-thuc" },
              { label: "Liên hệ", path: "/lien-he" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="hover:text-primary-foreground transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading font-bold text-lg mb-4">Liên hệ</h3>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              {clinicInfo.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 flex-shrink-0" />
              {clinicInfo.phone}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 flex-shrink-0" />
              {clinicInfo.email}
            </li>
            <li className="flex items-start gap-2">
              <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
              {clinicInfo.workingHours}
            </li>
          </ul>
        </div>

        {/* Map */}
        <div>
          <h3 className="font-heading font-bold text-lg mb-4">Bản đồ</h3>
          <div className="rounded-lg overflow-hidden h-40">
            <iframe
              src={clinicInfo.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bản đồ phòng khám"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="section-container py-4 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} {clinicInfo.name}. Bảo lưu mọi quyền.
      </div>
    </div>
  </footer>
);

export default Footer;
