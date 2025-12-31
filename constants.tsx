
import React from 'react';
import { DoorOpen, Layout, ShieldCheck, Hammer, Clock, MapPin, Phone, Mail } from 'lucide-react';
import { Service, Project, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Projeler', href: '#projeler' },
  { label: 'İletişim', href: '#iletisim' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Alüminyum Kapı Sistemleri',
    description: 'Yüksek yalıtımlı, estetik ve dayanıklı alüminyum kapı çözümleriyle mekanlarınıza değer katıyoruz.',
    icon: <DoorOpen className="w-8 h-8 text-sky-600" />,
  },
  {
    id: '2',
    title: 'Alüminyum Pencere Sistemleri',
    description: 'Geniş görüş açısı ve maksimum enerji tasarrufu sağlayan modern pencere profilleri.',
    icon: <Layout className="w-8 h-8 text-sky-600" />,
  },
  {
    id: '3',
    title: 'Çelik Kapı Çözümleri',
    description: 'Güvenliği ön planda tutan, darbelere dayanıklı ve modern tasarımlı çelik kapı seçenekleri.',
    icon: <ShieldCheck className="w-8 h-8 text-sky-600" />,
  },
];

export const PROJECTS: Project[] = [
  { id: 1, title: 'Modern Cephe Tasarımı', category: 'Alüminyum Cephe', imageUrl: 'https://images.pexels.com/photos/323781/pexels-photo-323781.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 2, title: 'Rezidans Pencere Sistemleri', category: 'Pencere Sistemleri', imageUrl: 'https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 3, title: 'Ticari Plaza Doğrama', category: 'Kurumsal Çözümler', imageUrl: 'https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 4, title: 'Villa Balkon Sistemleri', category: 'Lüks Konut', imageUrl: 'https://images.pexels.com/photos/1022936/pexels-photo-1022936.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 5, title: 'Modern Ofis Girişi', category: 'Çelik Kapı', imageUrl: 'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 6, title: 'Minimalist Pencere Hattı', category: 'Modern Mimari', imageUrl: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export const WHY_US = [
  {
    title: 'Kaliteli Malzeme',
    description: 'Dünya standartlarında sertifikalı alüminyum ve çelik profiller kullanıyoruz.',
    icon: <ShieldCheck className="w-6 h-6 text-sky-500" />,
  },
  {
    title: 'Profesyonel İşçilik',
    description: 'Uzman montaj ekibimizle kusursuz uygulama ve detay çözümleri sunuyoruz.',
    icon: <Hammer className="w-6 h-6 text-sky-500" />,
  },
  {
    title: 'Zamanında Teslimat',
    description: 'Projelerinizi planlanan sürede ve eksiksiz olarak teslim ediyoruz.',
    icon: <Clock className="w-6 h-6 text-sky-500" />,
  },
  {
    title: 'Hatay Yerel Hizmet',
    description: 'Bölgemizi tanıyor, Hatay ve çevresine hızlı teknik destek sağlıyoruz.',
    icon: <MapPin className="w-6 h-6 text-sky-500" />,
  },
];

export const CONTACT_INFO = {
  phone: '+90 532 000 00 00',
  whatsapp: '+90 532 000 00 00',
  address: 'Yeni Mahalle, Atatürk Caddesi, No:123, Hatay/Türkiye',
  email: 'info@gungorpen.com',
};
