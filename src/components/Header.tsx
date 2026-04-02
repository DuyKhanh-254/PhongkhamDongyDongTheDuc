import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { getMockData } from "@/data/mockData";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const { clinicInfo } = getMockData(lang);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServiceOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinks = [
    { label: t('nav.home'), path: "/" },
    { label: t('nav.about'), path: "/gioi-thieu" },
    { label: t('nav.news'), path: "/tin-tuc-kien-thuc" },
    { label: t('nav.library'), path: "/thu-vien" },
    { label: t('nav.contact'), path: "/lien-he" },
  ];

  const { services } = getMockData(lang);

  return (
    <header className="sticky top-0 z-50 bg-card shadow-sm">
      <div style={{ backgroundColor: "hsl(145,100%,18%)" }}>
        <div className="section-container flex items-center justify-between py-2 text-xs md:text-sm text-white">
          <div className="hidden md:flex items-center gap-5">
            <a href={`tel:${clinicInfo.phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Phone className="w-3.5 h-3.5" />
              {clinicInfo.phone}
            </a>
            <a href={`mailto:${clinicInfo.email}`} className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Mail className="w-3.5 h-3.5" />
              {clinicInfo.email}
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              {clinicInfo.address}
            </span>
          </div>
          <a href={`tel:${clinicInfo.phone.replace(/\s/g, "")}`} className="md:hidden flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" />
            {clinicInfo.phone}
          </a>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-white/30">|</span>
            <div className="relative">
              <div 
                className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity p-1"
                onClick={() => setLangOpen(!langOpen)}
              >
                <span>{t(`header.lang_${lang}`)}</span>
                <ChevronDown className="w-3 h-3" />
              </div>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white text-black shadow-md rounded overflow-hidden z-50 w-32 border border-black/10">
                  <div className="flex flex-col">
                    <button className={`px-4 py-2 text-left text-sm hover:bg-gray-100 ${lang === 'vi' ? 'font-bold text-primary' : ''}`} onClick={() => { setLang('vi'); setLangOpen(false); }}>Tiếng Việt</button>
                    <button className={`px-4 py-2 text-left text-sm hover:bg-gray-100 ${lang === 'ko' ? 'font-bold text-primary' : ''}`} onClick={() => { setLang('ko'); setLangOpen(false); }}>한국어</button>
                    <button className={`px-4 py-2 text-left text-sm hover:bg-gray-100 ${lang === 'zh' ? 'font-bold text-primary' : ''}`} onClick={() => { setLang('zh'); setLangOpen(false); }}>中文</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="section-container flex items-center justify-between h-20 md:h-24">
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img src={logo} alt="Logo" className="h-16 md:h-20 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5" ref={dropdownRef}>
          {navLinks.slice(0, 2).map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link key={link.path} to={link.path} className={`px-4 py-2 text-sm font-bold font-heading transition-colors rounded-md relative ${isActive ? "text-primary" : "text-foreground hover:text-primary"}`}>
                {String(link.label).toUpperCase()}
                {isActive && <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full" />}
              </Link>
            );
          })}

          <div className="relative">
            <button onClick={() => setServiceOpen(!serviceOpen)} className={`flex items-center gap-1 px-4 py-2 text-sm font-bold font-heading transition-colors rounded-md ${location.pathname.startsWith("/dich-vu") ? "text-primary" : "text-foreground hover:text-primary"}`}>
              {String(t('nav.services')).toUpperCase()}
              <ChevronDown className={`w-4 h-4 transition-transform ${serviceOpen ? "rotate-180" : ""}`} />
            </button>
            {serviceOpen && (
              <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-border py-2 z-50">
                {services.map((s) => (
                  <Link key={s.id} to={`/dich-vu/${s.id}`} onClick={() => setServiceOpen(false)} className="block px-5 py-2.5 text-sm text-foreground hover:text-primary hover:bg-accent transition-colors">
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(2).map((link) => {
            const isActive = location.pathname === link.path || (link.path !== "/" && location.pathname.startsWith(link.path));
            return (
              <Link key={link.path} to={link.path} className={`px-4 py-2 text-sm font-bold font-heading transition-colors rounded-md relative ${isActive ? "text-primary" : "text-foreground hover:text-primary"}`}>
                {String(link.label).toUpperCase()}
                {isActive && <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full" />}
              </Link>
            );
          })}
        </nav>

        <button className="lg:hidden p-2 text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <nav className="section-container py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link key={link.path} to={link.path} onClick={() => setMobileOpen(false)} className={`px-4 py-3 text-sm font-bold font-heading rounded-lg transition-colors ${isActive ? "text-primary bg-accent" : "text-foreground hover:bg-accent"}`}>
                  {String(link.label).toUpperCase()}
                </Link>
              );
            })}
            <Link to="/dich-vu" onClick={() => setMobileOpen(false)} className="px-4 py-3 text-sm font-bold font-heading rounded-lg transition-colors text-foreground hover:bg-accent">
               {String(t('nav.services')).toUpperCase()}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
