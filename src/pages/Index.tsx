
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Mail, Scale, Users, FileText, Shield, Clock, CheckCircle, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentPage = "anasayfa";

  const navigationItems = [
    { name: "Anasayfa", href: "/", key: "anasayfa" },
    { name: "Blog", href: "/blog", key: "blog" },
    { name: "Faaliyetlerimiz", href: "/faaliyetlerimiz", key: "faaliyetlerimiz" },
    { name: "Hakkımızda", href: "/hakkimizda", key: "hakkimizda" },
    { name: "İletişim", href: "/iletisim", key: "iletisim" }
  ];

  const practiceAreas = [
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "İş Hukuku",
      description: "İşçi ve işveren haklarının korunması, iş sözleşmeleri, tazminat davaları ve çalışma yaşamına ilişkin hukuki süreçlerde uzman destek.",
      link: "/kategori/is-hukuku"
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Trafik Kazaları",
      description: "Trafik kazası mağdurlarının hakları, sigorta işlemleri, maddi ve manevi tazminat talepleri konularında hukuki danışmanlık.",
      link: "/kategori/trafik-kazalari"
    },
    {
      icon: <Scale className="w-10 h-10 text-primary" />,
      title: "Boşanma Davaları",
      description: "Evlilik birliğinin sona ermesi, mal rejimi, velayet, nafaka ve eşler arası hukuki uyuşmazlıklarda profesyonel hizmet.",
      link: "/kategori/bosanma-davalari"
    },
    {
      icon: <FileText className="w-10 h-10 text-primary" />,
      title: "Askeri Davalar",
      description: "Askeri personelin hukuki sorunları, disiplin cezaları, özlük hakları ve askeri yargı süreçlerinde uzman destek.",
      link: "/kategori/askeri-davalar"
    }
  ];

  const advantages = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Hızlı Çözüm",
      description: "Hukuki süreçlerin etkin yönetimi ile zamanında sonuç"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Güvenilir Hizmet",
      description: "Ankara 2 No'lu Barosu üyesi olarak profesyonel yaklaşım"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Müvekkil Odaklı",
      description: "Her davada müvekkil menfaatlerinin öncelikli korunması"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/24772b40-dc6a-46d2-b9ad-467efaa9aca8.png" 
                alt="Av. İsmail Çavuş Logo" 
                className="h-12 lg:h-16 w-auto"
              />
            </div>

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
                size="lg"
                className="bg-primary hover:bg-primary/90 text-black font-semibold px-6 py-3 text-base"
                onClick={() => window.open('tel:+905102206945', '_self')}
              >
                <Phone className="w-5 h-5 mr-2" />
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Ankara Avukat
              <span className="block text-primary mt-2">Hukuk Danışmanlığı</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-in">
              Av. İsmail Çavuş olarak Ankara'da iş hukuku, trafik kazaları, boşanma davaları ve askeri davalar konularında uzman hukuki destek sunuyorum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-4 text-lg"
                onClick={() => window.open('tel:+905102206945', '_self')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Hemen Arayın
              </Button>
              <Link to="/iletisim">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary text-primary hover:bg-primary hover:text-black font-semibold px-8 py-4 text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  İletişim Formu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Hukuki Hizmet Alanlarımız
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ankara'da uzman avukat olarak çeşitli hukuk alanlarında müvekkillerime kapsamlı hizmet sunmaktayım.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {practiceAreas.map((area, index) => (
              <Link key={index} to={area.link}>
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50/50 overflow-hidden group cursor-pointer">
                  <CardContent className="p-10">
                    <div className="mb-8 transform group-hover:scale-110 transition-transform duration-300">
                      {area.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-gray-100/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Neden Av. İsmail Çavuş?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ankara'da hukuki danışmanlık hizmeti alırken beni tercih etmenizin nedenleri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:shadow-2xl group-hover:bg-primary/5 transition-all duration-300">
                  {advantage.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Hukuki Desteğe İhtiyacınız mı Var?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ankara'da uzman avukat desteği için hemen iletişime geçin. Size en uygun çözümü birlikte bulalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-black font-semibold px-10 py-6 text-lg"
              onClick={() => window.open('tel:+905102206945', '_self')}
            >
              <Phone className="w-6 h-6 mr-3" />
              +90 510 220 69 45
            </Button>
            <Link to="/iletisim">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-black font-semibold px-10 py-6 text-lg"
              >
                Online Danışmanlık Al
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile CTA - Only visible on mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="mx-2 mb-2 rounded-lg bg-white/95 backdrop-blur-sm border border-gray-200 shadow-xl">
          <div className="flex divide-x divide-gray-200">
            <button
              onClick={() => window.open('tel:+905102206945', '_self')}
              className="flex-1 flex items-center justify-center py-4 text-primary hover:bg-primary/10 font-semibold transition-colors rounded-l-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Ara
            </button>
            <button
              onClick={() => window.open('https://wa.me/905102206945', '_blank')}
              className="flex-1 flex items-center justify-center py-4 text-green-600 hover:bg-green-50 font-semibold transition-colors rounded-r-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
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

            {/* Calculation Tools */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Hesaplama Araçları</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/blog/kidem-tazminati-hesaplama-araci" 
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Kıdem Tazminatı Hesaplama
                  </Link>
                </li>
                <li>
                  <span className="text-gray-300">Diğer araçlar yakında...</span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">İletişim Bilgileri</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <a 
                      href="https://maps.google.com/?q=Korkutreis,+Cihan+Sk.+No:12/8,+06530+Çankaya/Ankara"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      Korkutreis, Cihan Sk. No:12/8<br />
                      06530 Çankaya/Ankara
                    </a>
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

export default Index;
