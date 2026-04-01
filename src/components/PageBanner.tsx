import defaultBanner from "@/assets/hero-clinic.jpg";

interface PageBannerProps {
  title: string;
  backgroundImage?: string;
  breadcrumb?: string;
}

const PageBanner = ({ title, backgroundImage = defaultBanner, breadcrumb }: PageBannerProps) => (
  <div
    className="page-banner relative"
    style={{
      backgroundImage: `linear-gradient(rgba(0,91,25,0.7), rgba(0,91,25,0.7)), url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <h1 className="page-banner-title mb-2 text-white font-heading font-extrabold text-3xl md:text-5xl tracking-tight">{title}</h1>
      {breadcrumb && (
        <p className="text-white/90 text-sm md:text-base font-medium">{breadcrumb}</p>
      )}
    </div>
  </div>
);

export default PageBanner;
