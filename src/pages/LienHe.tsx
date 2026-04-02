import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import { getMockData } from "@/data/mockData";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LienHe = () => {
  const { lang, t } = useLanguage();
  const { clinicInfo } = getMockData(lang);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <PageBanner title={String(t('nav.contact'))} />

      <section className="section-padding bg-card">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                {String(t('footer.contactData'))}
              </h2>
              <div className="space-y-5 mb-8">
                {[
                  { icon: MapPin, label: t('contact.addressLabel'), value: clinicInfo.address },
                  { icon: Phone, label: t('contact.hotlineLabel'), value: clinicInfo.phone },
                  { icon: Mail, label: t('contact.emailDataLabel'), value: clinicInfo.email },
                  { icon: Clock, label: t('contact.workingHoursLabel'), value: clinicInfo.workingHours },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={String(label)} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{String(label)}</p>
                      <p className="text-sm text-muted-foreground">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d931.1001026521429!2d105.77228276962126!3d21.0166587506789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454a84bf44c0b%3A0xb677d78dabe40220!2zMTcgTmcuIDE4MiDEkC4gxJDDrG5oIFRow7RuLCBN4bu5IMSQw6xuaCwgVOG7qyBMacOqbSwgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1775042993374!5m2!1sen!2s"
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
                {String(t('contact.formTitle'))}
              </h2>

              {submitted ? (
                <div className="p-8 bg-accent rounded-xl text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">{String(t('contact.successTitle'))}</h3>
                  <p className="text-sm text-muted-foreground">
                    {String(t('contact.successDesc'))}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{String(t('contact.nameLabel'))}</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder={String(t('contact.namePlaceholder'))}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{String(t('contact.phoneLabel'))}</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder={String(t('contact.phonePlaceholder'))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{String(t('contact.emailLabel'))}</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder={String(t('contact.emailPlaceholder'))}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{String(t('contact.messageLabel'))}</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder={String(t('contact.messagePlaceholder'))}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> {String(t('contact.submitBtn'))}
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
