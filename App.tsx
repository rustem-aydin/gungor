
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Send, Phone, MessageCircle, MapPin } from 'lucide-react';
import { SectionTitle } from './components/SectionTitle';
import { NAV_ITEMS, SERVICES, PROJECTS, WHY_US, CONTACT_INFO } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-sky-500 selection:text-white">
      {/* Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-sky-100' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-extrabold tracking-tighter uppercase">
            Güngör<span className="text-sky-500">pen</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-12 items-center">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="text-sm font-medium uppercase tracking-widest hover:text-sky-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#iletisim" 
              className="bg-sky-600 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-sky-700 transition-colors"
            >
              Teklif Al
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-sky-900">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white pt-32 px-10 md:hidden"
          >
            <div className="flex flex-col space-y-8 text-center">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-extrabold uppercase tracking-tighter hover:text-sky-500"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#iletisim"
                onClick={() => setIsMenuOpen(false)}
                className="bg-sky-600 text-white py-4 text-sm font-bold uppercase tracking-widest"
              >
                Teklif Al
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-sky-50/30">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="z-10"
            >
              <span className="inline-block px-3 py-1 bg-sky-100 text-sky-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-sky-200">
                Hatay'ın Öncü Yapı Çözümleri
              </span>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-extrabold tracking-tighter leading-[0.9] uppercase mb-8">
                Geleceğin Yapılarını <br /> 
                <span className="text-sky-500">Bugün İnşa Ediyoruz.</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-500 font-light leading-relaxed mb-12 max-w-xl">
                Güngörpen olarak, Hatay'ın kalbinde estetik ve güvenliği bir araya getiren premium alüminyum doğrama ve çelik kapı sistemleri sunuyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`tel:${CONTACT_INFO.phone}`} 
                  className="group bg-sky-600 text-white px-8 py-5 text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-sky-700 transition-all shadow-lg shadow-sky-200"
                >
                  Telefon Ara <Phone className="w-4 h-4" />
                </a>
                <a 
                  href="#iletisim" 
                  className="border border-sky-200 bg-white text-sky-900 px-8 py-5 text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-sky-50 transition-all"
                >
                  Teklif Al <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1022936/pexels-photo-1022936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Modern Balcony and Window"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-sky-900/10 mix-blend-multiply" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sky-500 -z-10 opacity-20" />
              <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-sky-200 -z-10" />
            </motion.div>
          </div>
          
          <div className="absolute bottom-10 left-10 flex gap-2 rotate-90 origin-left text-sky-200 text-[10px] uppercase font-bold tracking-[0.5em] select-none">
            GUNGORPEN • ESTETİK • GÜVENLİK • KALİTE
          </div>
        </section>

        {/* Services Section */}
        <section id="hizmetler" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <SectionTitle 
              title="Hizmetlerimiz" 
              subtitle="Mimariden endüstriye, her ihtiyaca uygun modern ve sürdürülebilir alüminyum ve çelik sistemleri."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SERVICES.map((service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  className="bg-sky-50/50 p-12 border border-sky-100 hover:border-sky-500 transition-colors group"
                >
                  <div className="mb-8 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-4 text-sky-950">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="hakkimizda" className="py-24 bg-sky-50/30">
          <div className="container mx-auto px-6">
            <SectionTitle 
              title="Neden Biz?" 
              subtitle="Yılların getirdiği tecrübe ve Hatay'ın yerel dinamiklerine olan hakimiyetimizle fark yaratıyoruz."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {WHY_US.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-sky-200 mb-6 group hover:bg-sky-600 hover:text-white transition-all bg-white shadow-sm">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold uppercase tracking-tight mb-2 text-sky-900">
                    {item.title}
                  </h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Gallery Section */}
        <section id="projeler" className="py-24 bg-sky-950 text-white">
          <div className="container mx-auto px-6">
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
              >
                <div>
                  <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter uppercase mb-4">
                    Seçkin Projelerimiz
                  </h2>
                  <p className="text-sky-200/60 max-w-xl text-lg font-light leading-relaxed">
                    Hatay ve çevresinde hayata geçirdiğimiz, kalite ve estetiğin buluştuğu referans çalışmalarımız.
                  </p>
                </div>
                <div className="w-24 h-px bg-sky-800 hidden md:block" />
              </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PROJECTS.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.6 }}
                  className="relative group overflow-hidden bg-sky-900 aspect-[4/3] rounded-sm"
                >
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-950/90 via-sky-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-sky-300 uppercase mb-1">
                      {project.category}
                    </span>
                    <h5 className="text-lg font-bold uppercase tracking-tight">
                      {project.title}
                    </h5>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="iletisim" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase mb-10 text-sky-950">
                  Bizimle <br />İletişime Geçin
                </h2>
                <div className="space-y-12">
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 border border-sky-200 flex items-center justify-center shrink-0 text-sky-600">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-sky-400 uppercase tracking-widest mb-1">Telefon</p>
                      <a href={`tel:${CONTACT_INFO.phone}`} className="text-xl font-bold hover:text-sky-600 transition-colors">
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 border border-sky-200 flex items-center justify-center shrink-0 text-sky-600">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-sky-400 uppercase tracking-widest mb-1">WhatsApp</p>
                      <a 
                        href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}`} 
                        className="text-xl font-bold hover:text-sky-600 transition-colors"
                      >
                        Bize Mesaj Gönderin
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 border border-sky-200 flex items-center justify-center shrink-0 text-sky-600">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-sky-400 uppercase tracking-widest mb-1">Adres</p>
                      <p className="text-lg text-zinc-600 leading-relaxed font-light">
                        {CONTACT_INFO.address}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-sky-50/50 p-10 md:p-16 border border-sky-100 shadow-xl shadow-sky-100"
              >
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-600">Ad Soyad</label>
                      <input 
                        type="text" 
                        className="w-full bg-transparent border-b border-sky-200 py-3 focus:border-sky-600 outline-none transition-colors text-sm" 
                        placeholder="Örn: Ahmet Güngör"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-600">Telefon</label>
                      <input 
                        type="tel" 
                        className="w-full bg-transparent border-b border-sky-200 py-3 focus:border-sky-600 outline-none transition-colors text-sm" 
                        placeholder="+90 5XX XXX XX XX"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-600">Mesajınız</label>
                    <textarea 
                      rows={4} 
                      className="w-full bg-transparent border-b border-sky-200 py-3 focus:border-sky-600 outline-none transition-colors text-sm resize-none" 
                      placeholder="Size nasıl yardımcı olabiliriz?"
                    />
                  </div>
                  <button className="w-full bg-sky-600 text-white py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-sky-700 transition-all flex items-center justify-center gap-3 shadow-lg shadow-sky-200">
                    Mesajı Gönder <Send className="w-4 h-4" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-sky-950 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 border-b border-sky-900 pb-20">
            <div>
              <a href="#" className="text-3xl font-extrabold tracking-tighter uppercase mb-6 block">
                Güngör<span className="text-sky-500">pen</span>
              </a>
              <p className="text-sky-200/50 max-w-sm font-light text-sm uppercase tracking-widest leading-loose">
                Modern mimariye değer katan premium alüminyum ve çelik sistemleri.
              </p>
            </div>
            <div className="flex flex-wrap gap-10">
              {NAV_ITEMS.map((item) => (
                <a key={item.href} href={item.href} className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 gap-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-700">
              © {new Date().getFullYear()} Güngörpen. Tüm Hakları Saklıdır.
            </p>
            <div className="flex gap-4">
               <span className="text-[10px] font-bold text-sky-800 uppercase tracking-widest">Hatay / Türkiye</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Credits Section */}
      <section className="bg-sky-950 border-t border-sky-900 py-6">
        <div className="container mx-auto px-6 text-center">
          <a 
            href="https://elharezmi.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-sky-700 hover:text-sky-500 transition-colors"
          >
            elharezmi.com tarafından yapılmıştır
          </a>
        </div>
      </section>
    </div>
  );
};

export default App;
