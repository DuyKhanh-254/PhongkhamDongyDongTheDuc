import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { clinicInfo } from "@/data/mockData";

const services = [
  { label: "Khám, tư vấn Y học cổ truyền", path: "/dich-vu" },
  { label: "Châm cứu trị liệu", path: "/dich-vu" },
  { label: "Xoa bóp – bấm huyệt", path: "/dich-vu" },
  { label: "Vật lý trị liệu, phục hồi chức năng", path: "/dich-vu" },
  { label: "Kê đơn thang thuốc – sắc thuốc", path: "/dich-vu" },
  { label: "Điều trị bằng phương pháp không dùng thuốc", path: "/dich-vu" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
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
    { label: "Trang chủ", path: "/" },
    { label: "Giới thiệu", path: "/gioi-thieu" },
    { label: "Tin tức & Kiến thức", path: "/tin-tuc-kien-thuc" },
    { label: "Thư viện", path: "/thu-vien" },
    { label: "Liên hệ", path: "/lien-he" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card shadow-sm">
      {/* Top bar */}
      <div style={{ backgroundColor: "hsl(145,100%,18%)" }}>
        <div className="section-container flex items-center justify-between py-2 text-xs md:text-sm text-white">
          {/* Left: contact info */}
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
          {/* Mobile: phone only */}
          <a href={`tel:${clinicInfo.phone.replace(/\s/g, "")}`} className="md:hidden flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" />
            {clinicInfo.phone}
          </a>
          {/* Right: social + language */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-70 transition-opacity">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.954H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
            </a>
            {/* TikTok */}
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:opacity-70 transition-opacity">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
            </a>
            {/* YouTube */}
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:opacity-70 transition-opacity">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
            </a>
            <span className="hidden md:inline text-white/30">|</span>
            {/* Language */}
            <div className="hidden md:flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
              <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@master/svg/vn.svg" alt="VN" className="w-5 h-3.5 object-cover rounded-sm" />
              <span>Tiếng Việt</span>
              <ChevronDown className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="section-container flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img src={logo} alt="Phòng khám Đông y Sơn Thế Đức" className="h-16 md:h-20 w-auto object-contain" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {/* Trang chủ */}
          {navLinks.slice(0, 1).map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link key={link.path} to={link.path}
                className={`px-4 py-2 text-sm font-bold font-heading transition-colors rounded-md relative ${isActive ? "text-primary" : "text-foreground hover:text-primary"}`}
              >
                {link.label.toUpperCase()}
                {isActive && <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full" />}
              </Link>
            );
          })}
          {/* Giới thiệu */}
          {navLinks.slice(1, 2).map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link key={link.path} to={link.path}
                className={`px-4 py-2 text-sm font-bold font-heading transition-colors rounded-md relative ${isActive ? "text-primary" : "text-foreground hover:text-primary"}`}
              >
                {link.label.toUpperCase()}
                {isActive && <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full" />}
              </Link>
            );
          })}

          {/* Dịch vụ dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServiceOpen(!serviceOpen)}
              className={`flex items-center gap-1 px-4 py-2 text-sm font-bold font-heading transition-colors rounded-md ${
                location.pathname.startsWith("/dich-vu") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              DỊCH VỤ KHÁM & ĐIỀU TRỊ
              <ChevronDown className={`w-4 h-4 transition-transform ${serviceOpen ? "rotate-180" : ""}`} />
            </button>
            {serviceOpen && (
              <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-border py-2 z-50">
                {services.map((s) => (
                  <Link
                    key={s.label}
                    to={s.path}
                    onClick={() => setServiceOpen(false)}
                    className="block px-5 py-2.5 text-sm text-foreground hover:text-primary hover:bg-accent transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Còn lại */}
          {navLinks.slice(2).map((link) => {
            const isActive = location.pathname === link.path || (link.path !== "/" && location.pathname.startsWith(link.path));
            return (
              <Link key={link.path} to={link.path}
                className={`px-4 py-2 text-sm font-bold font-heading transition-colors rounded-md relative ${isActive ? "text-primary" : "text-foreground hover:text-primary"}`}
              >
                {link.label.toUpperCase()}
                {isActive && <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full" />}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <nav className="section-container py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link key={link.path} to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 text-sm font-bold font-heading rounded-lg transition-colors ${isActive ? "text-primary bg-accent" : "text-foreground hover:bg-accent"}`}
                >
                  {link.label.toUpperCase()}
                </Link>
              );
            })}
            <Link to="/dich-vu" onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-sm font-bold font-heading rounded-lg transition-colors text-foreground hover:bg-accent"
            >
              DỊCH VỤ KHÁM & ĐIỀU TRỊ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
