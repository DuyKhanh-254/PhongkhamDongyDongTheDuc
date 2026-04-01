import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import { galleryImages } from "@/data/mockData";
import { X, PlayCircle } from "lucide-react";

const ThuVien = () => {
  const [activeTab, setActiveTab] = useState<"all" | "image" | "video">("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  // Giả lập dữ liệu có chứa cả video (mỗi ảnh thứ 3 coi như là thumbnail video)
  const items = galleryImages.map((img, index) => ({
    ...img,
    type: index % 3 === 0 ? "video" : "image"
  }));

  const filteredItems = items.filter(item => {
    if (activeTab === "all") return true;
    return item.type === activeTab;
  });

  return (
    <div>
      <PageBanner 
       
      />

      <section className="section-padding bg-zinc-50/60 pb-24">
        <div className="section-container">
          
          {/* Tabs Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {[
              { id: "all", label: "Tất cả" },
              { id: "image", label: "Hình ảnh" },
              { id: "video", label: "Video" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-white text-foreground hover:bg-accent border border-border/40"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setLightbox(item.src)}
                className="relative aspect-[4/3] rounded-[24px] overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay gradient cho tất cả item khi hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                {/* Video Play Icon */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary/90 group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <PlayCircle className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              Không có nội dung nào trong danh mục này.
            </div>
          )}

        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-12 backdrop-blur-sm" 
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20">
            <X className="w-8 h-8" />
          </button>
          <img 
            src={lightbox} 
            alt="Phóng to" 
            className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl animate-in zoom-in-95 duration-300" 
          />
        </div>
      )}
    </div>
  );
};

export default ThuVien;
