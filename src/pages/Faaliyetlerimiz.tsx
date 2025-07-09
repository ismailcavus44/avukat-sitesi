
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Users, Shield, Scale, FileText, Briefcase, Gavel, Clock, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Faaliyetlerimiz = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentPage = "faaliyetlerimiz";

  const navigationItems = [
    { name: "Anasayfa", href: "/", key: "anasayfa" },
    { name: "Blog", href: "/blog", key: "blog" },
    { name: "Faaliyetlerimiz", href: "/faaliyetlerimiz", key: "faaliyetlerimiz" },
    { name: "Hakkımızda", href: "/hakkimizda", key: "hakkimizda" },
    { name: "İletişim", href: "/iletisim", key: "iletisim" }
  ];

  const practiceAreas = [
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "İş Hukuku",
      description: "İşçi ve işveren hakları konusunda kapsamlı hukuki destek",
      services: [
        "İş sözleşmelerinin hazırlanması ve incelenmesi",
        "İşe iade davaları ve süreç yönetimi",
        "Kıdem ve ihbar tazminatı talepleri",
        "İş yerinde mobbing ve taciz davaları",
        "Fazla mesai ve yıllık izin alacaklarının takibi",
        "İş kazası ve meslek hastalığı davaları"
      ]
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Trafik Kazaları",
      description: "Trafik kazası mağdurlarının haklarının korunması",
      services: [
        "Maddi ve manevi tazminat taleplerinin takibi",
        "Sigorta şirketleri ile müzakere süreçleri",
        "Trafik ceza davalarında savunma",
        "Ekspertiz raporlarının değerlendirilmesi",
        "İş göremezlik tazminatı hesaplamaları",
        "Araç hasarı ve değer kaybı talepleri"
      ]
    },
    {
      icon: <Scale className="w-12 h-12 text-primary" />,
      title: "Boşanma Davaları",
      description: "Aile hukuku alanında hassas ve profesyonel yaklaşım",
      services: [
        "Anlaşmalı ve çekişmeli boşanma davaları",
        "Nafaka (yoksulluk ve tedbir nafakası) talepleri",
        "Velayet ve kişisel ilişki düzenleme",
        "Mal rejimi ve ortak malların paylaşımı",
        "Nişan ve evlilik sözleşmesi iptalleri",
        "Aile içi şiddet önleme tedbirleri"
      ]
    },
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: "Askeri Davalar",
      description: "Askeri personelin hukuki sorunlarında uzman destek",
      services: [
        "Disiplin cezalarına karşı itiraz süreçleri",
        "Özlük hakları ve maaş alacakları",
        "Askerlik tecil ve muafiyet işlemleri",
        "Askeri yargı süreçlerinde savunma",
        "Emeklilik işlemleri ve hakları",
        "Askeri personel sicil düzeltme davaları"
      ]
    },
    {
      icon: <Briefcase className="w-12 h-12 text-primary" />,
      title: "Ticaret Hukuku",
      description: "Ticari faaliyetlerde hukuki danışmanlık",
      services: [
        "Şirket kuruluş işlemleri",
        "Sözleşmelerin hazırlanması ve müzakeresi",
        "Ticari alacak takibi",
        "Ortaklık anlaşmazlıklarının çözümü",
        "Marka ve patent işlemleri",
        "Rekabet hukuku uyuşmazlıkları"
      ]
    },
    {
      icon: <Gavel className="w-12 h-12 text-primary" />,
      title: "Ceza Hukuku",
      description: "Ceza davalarında etkili savunma stratejileri",
      services: [
        "Suç duyurusu ve şikayetlerin takibi",
        "Ceza davalarında müdafilik",
        "Beraat ve hükmün açıklanmasının geriye bırakılması",
        "Temyiz ve istinaf başvuruları",
        "Uzlaştırma süreçlerinin yönetimi",
        "Adli kontrol tedbirlerine itiraz"
      ]
    }
  ];

  const legalProcess = [
    {
      step: "1",
      title: "İlk Görüşme",
      description: "Hukuki durumunuzun değerlendirilmesi ve çözüm yollarının belirlenmesi"
    },
    {
      step: "2", 
      title: "Dosya Hazırlığı",
      description: "Gerekli belgelerin toplanması ve hukuki stratejinin oluşturulması"
    },
    {
      step: "3",
      title: "Süreç Yönetimi",
      description: "Davanın takibi ve müvekkil bilgilendirmesinin düzenli yapılması"
    },
    {
      step: "4",
      title: "Sonuç",
      description: "Hukuki sürecin tamamlanması ve sonuçların değerlendirilmesi"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/24772b40-dc6a-46d2-b9ad-467efaa9aca8.png" 
                alt="Av. İsmail Çavuş Logo" 
                className="h-12 lg:h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    currentPage === item.key ? 'text-primary border-b-2 border-primary pb-1' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Contact Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                className="bg-primary hover:bg-primary/90 text-black font-medium"
                onClick={() => window.open('tel:+905102206945', '_self')}
              >
                <Phone className="w-4 h-4 mr-2" />
                İletişim
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className="block w-full h-0.5 bg-gray-600"></span>
                <span className="block w-full h-0.5 bg-gray-600"></span>
                <span className="block w-full h-0.5 bg-gray-600"></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 py-4">
              <nav className="flex flex-col space-y-3">
                {navigationItems.map((item) => (
                  <Link
                    key={item.key}
                    to={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      currentPage === item.key ? 'text-primary' : 'text-gray-700'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button 
                  className="bg-primary hover:bg-primary/90 text-black font-medium w-fit mt-4"
                  onClick={() => window.open('tel:+905102206945', '_self')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  İletişim
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Hukuki Hizmet Alanlarımız
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Ankara'da avukat olarak çeşitli hukuk dallarında uzman hizmet sunuyor, 
              müvekkillerimin haklarını en iyi şekilde korumak için çalışıyorum.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {practiceAreas.map((area, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="lg:w-1/2">
                  <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50">
                    <CardContent className="p-8 text-center">
                      <div className="mb-6 flex justify-center">
                        {area.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {area.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {area.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6">
                      Sunduğum Hizmetler:
                    </h4>
                    {area.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed">{service}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Process */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hukuki Süreç Nasıl İşler?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ankara avukat olarak her davamda izlediğim sistematik yaklaşım
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {legalProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Hangi Konuda Destek Alabilirsiniz?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Yukarıda belirtilen hukuk alanlarının herhangi birinde sorunuz varsa, 
            deneyimli Ankara avukatı olarak size yardımcı olmaktan memnuniyet duyarım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-4"
              onClick={() => window.open('tel:+905102206945', '_self')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Hemen Arayın
            </Button>
            <Link to="/iletisim">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-black font-semibold px-8 py-4"
              >
                Online Randevu Al
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo and Description */}
            <div>
              <img 
                src="/lovable-uploads/ead81581-97a3-4a94-8297-834b53c44f1c.png" 
                alt="Av. İsmail Çavuş Footer Logo" 
                className="h-16 w-auto mb-4"
              />
              <p className="text-gray-300 leading-relaxed">
                Ankara 2 No'lu Barosu üyesi Av. İsmail Çavuş olarak, hukuki haklarınızın korunması için profesyonel destek sunuyorum.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Hızlı Erişim</h3>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.key}>
                    <Link 
                      to={item.href} 
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">İletişim Bilgileri</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">
                      Korkutreis, Cihan Sk. No:12/8<br />
                      06530 Çankaya/Ankara
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a 
                    href="tel:+905102206945" 
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    +90 510 220 69 45
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Av. İsmail Çavuş. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Faaliyetlerimiz;
