import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";
import logo2 from "@/assets/logo2.jpg";
import { getMockData } from "@/data/mockData";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { lang, t } = useLanguage();
  const { clinicInfo } = getMockData(lang);

  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img src={logo2} alt="Logo" className="h-12 w-12 object-contain" style={{ mixBlendMode: "screen" }} />
                <div>
                  <div className="font-heading font-bold text-sm">
                    {lang === 'ko' ? "동양의학 클리닉" : lang === 'zh' ? "中医诊所" : "PHÒNG KHÁM ĐÔNG Y"}
                  </div>
                  <div className="font-heading font-extrabold text-lg uppercase">{clinicInfo.shortName}</div>
                </div>
              </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              {String(t('sections.aboutShort1'))}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">{String(t('footer.quickLinks'))}</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {[
                { label: t('nav.home'), path: "/" },
                { label: t('nav.about'), path: "/gioi-thieu" },
                { label: t('nav.services'), path: "/dich-vu" },
                { label: t('nav.news'), path: "/tin-tuc-kien-thuc" },
                { label: t('nav.contact'), path: "/lien-he" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="hover:text-primary-foreground transition-colors">
                    {String(l.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">{String(t('footer.contactData'))}</h3>
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
            <h3 className="font-heading font-bold text-lg mb-4">
              {lang === 'ko' ? "지도" : lang === 'zh' ? "地图" : "Bản đồ"}
            </h3>
            <div className="rounded-lg overflow-hidden h-40">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1862.2039957185066!2d105.7700553!3d21.0163552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134552c4453affb%3A0x4e7ca07443213a5!2zUGjDsm5nIGtow6FtIMSRw7RuZyB5IFPGoW4gVGjhur8gxJDhu6lj!5e0!3m2!1sen!2s!4v1775123617801!5m2!1sen!2s"
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
           {String(t('footer.allRightsReserved'))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
