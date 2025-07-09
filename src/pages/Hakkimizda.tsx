import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Hakkimizda = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentPage = "hakkimizda";

  const navigationItems = [
    { name: "Anasayfa", href: "/", key: "anasayfa" },
    { name: "Blog", href: "/blog", key: "blog" },
    { name: "Faaliyetlerimiz", href: "/faaliyetlerimiz", key: "faaliyetlerimiz" },
    { name: "Hakkımızda", href: "/hakkimizda", key: "hakkimizda" },
    { name: "İletişim", href: "/iletisim", key: "iletisim" }
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

      {/* Page Header with Image */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Av. İsmail Çavuş
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
                Ankara 2 No'lu Barosu üyesi olarak, hukuki haklarınızın korunması ve 
                adalete erişiminiz için çalışan deneyimli bir avukat. İş hukuku, trafik kazaları, 
                boşanma davaları ve askeri davalar konularında müvekkillerime uzman hukuki 
                danışmanlık hizmeti sunmaktayım. Mesleki deneyimimle birlikte, her müvekkilimin 
                hukuki durumunu titizlikle değerlendirerek en uygun çözüm yollarını belirliyorum.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-black font-semibold"
                  onClick={() => window.open('tel:+905102206945', '_self')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  İletişime Geç
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500"
                  alt="Av. İsmail Çavuş Profil Fotoğrafı" 
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Hakkımda
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                1995 yılında Malatya'da doğdum. Hukuk mesleğine olan ilgim ve adalete hizmet etme arzum 
                beni Gazi Üniversitesi Hukuk Fakültesi'ne yönlendirdi. 2016 yılında başladığım hukuk 
                eğitimimi 2020 yılında başarıyla tamamladım.
              </p>
              
              <p>
                Mezuniyetimin ardından mesleki kariyerime Manisa'da başladım. Burada serbest avukatlık 
                yaparak iş hukuku, trafik kazaları ve hukukun diğer alanlarında değerli deneyimler 
                edindim. Manisa'daki çalışma sürem boyunca müvekkillerimin haklarını korumak için 
                önemli davalarda yer aldım ve bu süreçte hem mesleki hem de kişisel gelişimimi sürdürdüm.
              </p>
              
              <p>
                2023 yılında Ankara'ya taşınarak yeni bir döneme başladım. Ankara 2 No'lu Barosu'na 
                bağlı serbest avukat olarak çalışmalarımı sürdürmeye başladım. Şu anda da aynı şekilde 
                faaliyetlerimi devam ettirmekte olup, müvekkillerime kaliteli hukuki hizmet sunmayı 
                hedefliyorum.
              </p>
              
              <p>
                Meslek hayatım boyunca özellikle iş hukuku, trafik kazaları, boşanma davaları ve 
                askeri davalar konularında uzmanlaştım. Her müvekkilimin durumunu titizlikle değerlendirerek, 
                en uygun hukuki çözümleri sunmaya odaklanıyorum. Hukuki süreçlerin karmaşıklığını 
                anlıyor ve müvekkillerimi bu süreçte en iyi şekilde bilgilendirmeye özen gösteriyorum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Hukuki Danışmanlık İçin Benimle İletişime Geçin
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ankara'da avukat olarak, hukuki haklarınızın korunması ve problemlerinizin çözümü için 
            size yardımcı olmaktan memnuniyet duyarım.
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
                İletişim Formu
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

export default Hakkimizda;
