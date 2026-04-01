import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import { clinicInfo } from "@/data/mockData";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const LienHe = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <PageBanner title="Liên hệ" />

      <section className="section-padding bg-card">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                Thông tin liên hệ
              </h2>
              <div className="space-y-5 mb-8">
                {[
                  { icon: MapPin, label: "Địa chỉ", value: clinicInfo.address },
                  { icon: Phone, label: "Hotline", value: clinicInfo.phone },
                  { icon: Mail, label: "Email", value: clinicInfo.email },
                  { icon: Clock, label: "Giờ làm việc", value: clinicInfo.workingHours },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{label}</p>
                      <p className="text-sm text-muted-foreground">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden h-64">
                <iframe
                  src={clinicInfo.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Bản đồ"
                />
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                Gửi yêu cầu tư vấn
              </h2>

              {submitted ? (
                <div className="p-8 bg-accent rounded-xl text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">Cảm ơn bạn!</h3>
                  <p className="text-sm text-muted-foreground">
                    Chúng tôi đã nhận được thông tin. Đội ngũ tư vấn sẽ liên hệ bạn trong thời gian sớm nhất.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Họ và tên *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Số điện thoại *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="0912 345 678"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Nội dung *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Mô tả triệu chứng hoặc yêu cầu tư vấn..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Gửi yêu cầu
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LienHe;
