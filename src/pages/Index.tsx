import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";
import heroImage2 from "@/assets/anh.jpg";
import aboutImage from "@/assets/gallery-5.jpg";
import { galleryImages, getMockData } from "@/data/mockData";
import { useLanguage } from "@/contexts/LanguageContext";
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
    icon: <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.68011 38.0001H8.96011C9.40011 38.0001 9.84011 37.8001 10.1201 37.4401C10.4001 37.0801 10.4801 36.6401 10.4001 36.2401C9.76011 33.5601 10.4001 31.6801 12.3601 30.6401C13.5201 30.0001 14.9601 30.1201 16.0401 30.8801C18.0001 32.3201 21.8401 34.6001 25.7201 33.9201C28.6001 33.4401 31.4401 31.0801 33.1201 27.8001C34.4801 25.2001 36.2401 19.7601 32.8401 12.6401C31.2801 9.3601 29.3601 7.5201 27.1201 7.1201C24.4401 6.6801 22.0401 8.4001 20.5201 9.9201C20.4401 10.0001 20.3201 10.0001 20.2401 9.9601C20.2001 9.9601 20.1601 9.9201 20.1601 9.8801C19.9201 8.1601 21.2001 5.8401 21.7601 4.9601C22.0001 4.5601 22.0801 4.0401 21.8801 3.6001C21.7201 3.1201 21.3601 2.8001 20.8801 2.6401L19.1601 2.0801C18.4401 1.8401 17.6801 2.1201 17.2801 2.7201C14.9601 6.1601 14.1601 9.1201 14.9201 11.6001C15.5601 13.6401 17.2801 15.2801 19.8801 16.2801C20.6401 16.5601 21.2401 17.1201 21.5201 17.8401C21.8001 18.4801 21.8001 19.1601 21.5201 19.7601C21.0001 21.0001 20.0401 22.2801 18.7601 23.5601C17.8001 24.4801 16.4801 25.0401 15.1201 25.1201C5.36011 25.6801 5.16011 34.8001 5.20011 36.6001C5.24011 37.4001 5.88011 38.0001 6.68011 38.0001ZM15.1601 27.0401C17.0001 26.9201 18.7601 26.1601 20.0401 24.9201C21.5601 23.4801 22.6401 21.9601 23.2801 20.4801C23.7201 19.3601 23.7201 18.1601 23.2401 17.0401C22.7201 15.8801 21.7601 14.9201 20.5201 14.4401C19.1201 13.8801 17.3201 12.8401 16.7201 11.0001C16.2001 9.2001 16.8401 6.8401 18.7201 4.0001L19.8001 4.3601C18.8801 5.9201 17.9201 8.1601 18.2001 10.1601C18.3201 10.9201 18.8401 11.5601 19.6401 11.8401C20.4401 12.1201 21.3201 11.9201 21.9201 11.3201C22.8801 10.3201 24.8401 8.7201 26.8001 9.0401C28.4001 9.3201 29.8401 10.8001 31.0801 13.4801C34.1201 19.8401 32.5601 24.6401 31.4001 26.9201C29.9601 29.6001 27.6001 31.6001 25.3601 32.0001C22.1601 32.5601 18.8401 30.5601 17.1601 29.3201C15.4801 28.0801 13.2001 27.9201 11.4001 28.9201C9.92011 29.7201 7.56011 31.7201 8.36011 36.0401H7.16011C7.20011 33.4001 8.04012 27.4801 15.1601 27.0401Z" fill="#008733"/><path d="M19.04 29.2799C20.24 29.9999 24.6 32.1999 28.04 29.0799C31.08 26.2799 31.4 22.3999 31.4 20.7999C31.4 20.3999 31 20.1599 30.64 20.3199C29.84 20.6799 28.64 21.4799 28.04 22.9999C27.12 25.3999 25.56 25.1199 22.24 25.8799C19.76 26.4399 19.04 27.9599 18.8 28.6799C18.76 28.8799 18.84 29.1199 19.04 29.2799Z" fill="#008733"/></svg>,
    diseases: ["Viêm dạ dày", "Trào ngược dạ dày", "Viêm đại tràng", "Trĩ", "Rò hậu môn"],
  },
  {
    title: "Da liễu",
    icon: <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6444 5.8086V2H17.7V5.88936L17.6972 5.92733C17.674 6.24571 17.6031 6.6057 17.4427 6.98486C17.9434 7.16631 17.9767 7.76132 17.993 8.05416C17.9957 8.10141 17.9978 8.14079 18.0015 8.16929C18.7371 8.51467 19.1594 9.38501 18.961 10.2236C18.7624 11.0624 18.0114 11.5797 17.2208 11.4652C16.9802 11.8124 16.6915 12.1227 16.3612 12.3839C16.4685 13.2263 15.9843 14.0268 15.1983 14.2391C14.4123 14.4515 13.596 14.0023 13.2712 13.2187C12.8557 13.159 12.4518 13.0358 12.0712 12.8564C11.4433 13.354 10.5364 13.2847 9.94853 12.6584C9.51625 12.1979 9.3663 11.5531 9.50248 10.9777C8.40575 11.2147 7.02874 11.7168 5.90096 12.6404C4.68538 13.6359 3.72229 15.1448 3.72229 17.5048V29H1.66675V17.5048C1.66675 14.4689 2.95008 12.387 4.60494 11.0317C6.22153 9.7078 8.15405 9.10263 9.50772 8.86596C12.5175 8.33975 14.0588 7.61915 14.8366 7.01615C15.5231 6.48404 15.6226 6.04094 15.6444 5.8086ZM25.6874 2V6.12462C25.7329 6.41161 25.8834 6.83813 26.4786 7.30713C27.1541 7.83935 28.4327 8.44752 30.8257 8.86596C32.1793 9.10263 34.112 9.7078 35.7286 11.0317C37.3834 12.387 38.6667 14.4689 38.6667 17.5048V29H36.6112V17.5048C36.6112 15.1448 35.6481 13.6359 34.4325 12.6404C33.1787 11.6135 31.6168 11.1078 30.4745 10.908C27.9097 10.4595 26.2598 9.76511 25.2128 8.94015C24.1254 8.08328 23.7381 7.12361 23.6397 6.32405L23.6319 6.26052V2H25.6874Z" fill="#008733"/><path d="M30.8525 13.4827C29.4599 13.4827 28.3668 14.6431 28.3668 16.0649V16.8594C27.6418 16.2036 26.4806 16.0376 25.5407 16.517C24.5259 17.0345 24.1197 18.1257 24.5437 19.0592C24.1789 19.4681 23.8787 19.9239 23.6565 20.4147C22.5302 20.5579 21.6646 21.4137 21.6646 22.4484C21.6646 23.483 22.5302 24.3388 23.6565 24.482C23.8787 24.9729 24.1789 25.4286 24.5436 25.8374C24.1197 26.771 24.526 27.8621 25.5407 28.3797C26.4806 28.859 27.6418 28.693 28.3668 28.0371V39H30.3668V16.0649C30.3668 15.7669 30.5827 15.5517 30.8525 15.5517C31.0863 15.5517 31.2383 15.5971 31.3349 15.6429C31.4318 15.6887 31.4992 15.7472 31.5487 15.8066C31.6007 15.8691 31.6354 15.9358 31.6558 15.99C31.6608 16.0036 31.6644 16.0145 31.6668 16.0227V28.7127H33.6667V15.9695C33.6667 15.5518 33.4783 14.9534 33.0634 14.4556C32.6014 13.9012 31.8709 13.4827 30.8525 13.4827ZM7.27004 14.4556C7.73214 13.9012 8.46263 13.4827 9.48103 13.4827C11.1162 13.4827 12.1667 14.9078 12.1667 16.3966V28.8828C12.502 28.6242 12.9822 28.5747 13.3776 28.793C13.846 29.0518 14.0335 29.5973 13.8378 30.0641C14.0062 30.2685 14.1447 30.4965 14.2473 30.7419C14.7672 30.8135 15.1667 31.2415 15.1667 31.7587C15.1667 32.276 14.7672 32.704 14.2473 32.7756C14.1447 33.021 14.0062 33.2489 13.8378 33.4533C14.0335 33.92 13.846 34.4655 13.3776 34.7244C12.9822 34.9427 12.502 34.8932 12.1667 34.6346V39H10.1667V16.3966C10.1667 15.8423 9.82062 15.5517 9.48103 15.5517C9.24723 15.5517 9.09523 15.5971 8.99863 15.6429C8.90173 15.6887 8.83433 15.7472 8.78483 15.8066C8.73273 15.8691 8.69803 15.9358 8.67773 15.99C8.67273 16.0036 8.66913 16.0145 8.66673 16.0227V28.7127H6.66675V15.9695C6.66675 15.5518 6.85525 14.9534 7.27004 14.4556ZM21.1664 11.069C21.7187 11.069 22.1664 10.6058 22.1664 10.0345C22.1664 9.46314 21.7187 9 21.1664 9C20.6141 9 20.1664 9.46314 20.1664 10.0345C20.1664 10.6058 20.6141 11.069 21.1664 11.069ZM19.1665 14.1724C19.7188 14.1724 20.1664 13.7093 20.1664 13.1379C20.1664 12.5666 19.7188 12.1035 19.1665 12.1035C18.6142 12.1035 18.1665 12.5666 18.1665 13.1379C18.1665 13.7093 18.6142 14.1724 19.1665 14.1724Z" fill="#008733"/><path d="M16.6323 29.2251C16.6323 29.7774 16.1923 30.2251 15.6495 30.2251C15.1067 30.2251 14.6667 29.7774 14.6667 29.2251C14.6667 28.6728 15.1067 28.2251 15.6495 28.2251C16.1923 28.2251 16.6323 28.6728 16.6323 29.2251ZM17.1237 33C17.6664 33 18.1064 32.5523 18.1064 32C18.1064 31.4477 17.6664 31 17.1237 31C16.5809 31 16.1409 31.4477 16.1409 32C16.1409 32.5523 16.5809 33 17.1237 33ZM23.8634 29.1786C24.3971 29.2796 24.7492 29.8016 24.65 30.3446C24.5508 30.8876 24.0378 31.2459 23.5041 31.1449C22.9705 31.044 22.6184 30.522 22.7176 29.979C22.8168 29.436 23.3298 29.0777 23.8634 29.1786ZM22.3801 26.3552C22.9138 26.4561 23.2659 26.9781 23.1667 27.5211C23.0675 28.0641 22.5545 28.4224 22.0209 28.3215C21.4873 28.2205 21.1351 27.6985 21.2343 27.1555C21.3335 26.6125 21.8465 26.2542 22.3801 26.3552ZM22.0375 18C22.5802 18 23.0202 18.4477 23.0202 19C23.0202 19.5523 22.5802 20 22.0375 20C21.4947 20 21.0547 19.5523 21.0547 19C21.0547 18.4477 21.4947 18 22.0375 18Z" fill="#008733"/></svg>,
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

const heroSlides = [heroImage, heroImage2];

const Index = () => {
  const { lang, t } = useLanguage();
  const { clinicInfo, services, doctors, commonDiseases, testimonials, articles } = getMockData(lang);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[420px] md:h-[560px] flex items-center overflow-hidden group">
        {heroSlides.map((slide, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide} alt={`Phòng khám slide ${index + 1}`} className="w-full h-full object-cover" width={1920} height={1080} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, hsl(145,100%,15%) 0%, hsla(145,100%,20%,0.82) 40%, hsla(145,100%,20%,0.18) 70%, transparent 100%)" }} />
          </div>
        ))}

        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 md:left-8 z-20 p-2 md:p-3 rounded-full bg-black/30 text-white hover:bg-black/60 transition-all opacity-0 group-hover:opacity-100 transform -translate-y-1/2 top-1/2"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 md:right-8 z-20 p-2 md:p-3 rounded-full bg-black/30 text-white hover:bg-black/60 transition-all opacity-0 group-hover:opacity-100 transform -translate-y-1/2 top-1/2"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        <div className="relative z-10 section-container w-full pointer-events-none">
          <div className="max-w-[520px] pointer-events-auto">
            <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-white leading-tight mb-4 drop-shadow-sm whitespace-pre-line">
              {String(t('hero.title'))}
            </h1>
            <p className="text-white/90 text-sm md:text-base mb-3 font-medium whitespace-pre-line">
              {String(t('hero.desc'))}
            </p>
            <ul className="mb-6 space-y-1.5">
              {(Array.isArray(t('hero.bullets')) ? t('hero.bullets') as string[] : []).map((item) => (
                <li key={item} className="flex items-center gap-2 text-white text-sm font-medium">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/80 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/lien-he"
                className="inline-flex items-center px-5 py-2.5 border-2 border-white text-white font-bold text-sm uppercase tracking-wide hover:bg-white hover:text-primary transition-colors rounded-md pointer-events-auto"
              >
                {String(t('hero.bookBtn'))}
              </Link>
              <Link
                to="/lien-he"
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-white/60 text-white font-bold text-sm uppercase tracking-wide hover:bg-white/10 transition-colors rounded-md pointer-events-auto"
              >
                <Phone className="w-4 h-4" />
                {String(t('hero.hotlineBtn'))}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Common diseases */}
      <section className="section-padding bg-zinc-50/60">
        <div className="section-container">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-12">
            {String(t('sections.commonDiseases'))}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
            {diseaseCategoriesData.map((category, idx) => {
              const translatedCats = (t('diseaseCategoriesData') as any) || [];
              const transTitle = translatedCats[idx]?.title || category.title;
              const transDiseases = translatedCats[idx]?.diseases || category.diseases;
              
              return (
              <div key={category.title} className="flex flex-col p-4 bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-border/50 hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center w-full">
                  {category.icon}
                  <h3 className="font-heading font-semibold text-base text-foreground text-center mb-3 tracking-tight">{transTitle}</h3>
                </div>
                <ul className="w-full pl-[22px] space-y-1.5 list-disc text-sm font-medium text-muted-foreground marker:text-muted-foreground/60">
                  {transDiseases.map((d: string) => (
                    <li key={d} className="leading-snug">{d}</li>
                  ))}
                </ul>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* Services (Phương pháp điều trị) */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              {String(t('sections.methods'))}
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
              <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-8 leading-tight whitespace-pre-line">
                {String(t('hero.title'))}
              </h2>
              <div className="space-y-4 text-white/90 leading-relaxed text-sm md:text-base">
                <p>
                  {String(t('sections.aboutShort1'))}
                </p>
                <p>
                  {String(t('sections.aboutShort2'))}
                </p>
                <p>
                  {String(t('sections.aboutShort3'))}
                </p>
              </div>
              <Link
                to="/gioi-thieu"
                className="inline-flex items-center gap-2 mt-10 text-white font-bold text-sm uppercase tracking-widest hover:underline transition-all group"
              >
                {String(t('sections.aboutDetailBtn'))} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

      {/* Testimonials */}
      <section className="section-padding bg-zinc-50/60">
        <div className="section-container">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-12">
            {String(t('sections.testimonials'))}
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
            {String(t('sections.news'))}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.slice(0, 3).map((a) => (
              <ArticleCard key={a.id} {...a} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/tin-tuc-kien-thuc" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
              {String(t('sections.viewAllNews'))} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="section-container text-center text-primary-foreground">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">{String(t('sections.bookNow'))}</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            {String(t('sections.bookNowDesc'))}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${clinicInfo.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 px-8 py-3 bg-primary-foreground text-primary font-bold rounded-lg hover:bg-primary-foreground/90 transition-colors">
              <Phone className="w-5 h-5" /> {String(t('sections.callNow'))} {clinicInfo.phone}
            </a>
            <Link to="/lien-he" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary-foreground text-primary-foreground font-bold rounded-lg hover:bg-primary-foreground/10 transition-colors">
              {String(t('sections.sendReq'))}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
