
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Search, Calendar, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const Category = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { slug } = useParams();

  const navigationItems = [
    { name: "Anasayfa", href: "/", key: "anasayfa" },
    { name: "Blog", href: "/blog", key: "blog" },
    { name: "Faaliyetlerimiz", href: "/faaliyetlerimiz", key: "faaliyetlerimiz" },
    { name: "Hakkımızda", href: "/hakkimizda", key: "hakkimizda" },
    { name: "İletişim", href: "/iletisim", key: "iletisim" }
  ];

  const categories = {
    "is-hukuku": {
      title: "İş Hukuku",
      description: "İşçi ve işveren haklarının korunması, iş sözleşmeleri, tazminat davaları ve çalışma yaşamına ilişkin hukuki süreçlerde uzman destek."
    },
    "trafik-kazalari": {
      title: "Trafik Kazaları",
      description: "Trafik kazası mağdurlarının hakları, sigorta işlemleri, maddi ve manevi tazminat talepleri konularında hukuki danışmanlık."
    },
    "bosanma-davalari": {
      title: "Boşanma Davaları",
      description: "Evlilik birliğinin sona ermesi, mal rejimi, velayet, nafaka ve eşler arası hukuki uyuşmazlıklarda profesyonel hizmet."
    },
    "askeri-davalar": {
      title: "Askeri Davalar",
      description: "Askeri personelin hukuki sorunları, disiplin cezaları, özlük hakları ve askeri yargı süreçlerinde uzman destek."
    }
  };

  const currentCategory = categories[slug as keyof typeof categories];

  const blogPosts = [
    {
      title: "İş Akdi Feshi ve Kıdem Tazminatı Hakları",
      excerpt: "İş akdinin feshi durumunda çalışanların sahip olduğu kıdem tazminatı hakları ve hesaplama yöntemleri hakkında detaylı bilgiler.",
      date: "15 Aralık 2024",
      author: "Av. İsmail Çavuş",
      slug: "is-akdi-feshi-kidem-tazminati",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400"
    },
    {
      title: "Trafik Kazası Sonrası Yapılması Gerekenler",
      excerpt: "Trafik kazası geçirdikten sonra hukuki süreçte izlenmesi gereken adımlar ve tazminat talep etme süreci.",
      date: "12 Aralık 2024", 
      author: "Av. İsmail Çavuş",
      slug: "trafik-kazasi-sonrasi-yapilmasi-gerekenler",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400"
    },
    {
      title: "Boşanma Davası Açma Şartları ve Süreci",
      excerpt: "Boşanma davası açabilmek için gerekli şartlar, gerekli belgeler ve hukuki süreç hakkında bilinmesi gerekenler.",
      date: "10 Aralık 2024",
      author: "Av. İsmail Çavuş", 
      slug: "bosanma-davasi-acma-sartlari",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400"
    },
    {
      title: "Askeri Personel Özlük Hakları",
      excerpt: "Askeri personelin özlük hakları, disiplin cezaları ve hukuki süreçlerde bilinmesi gereken önemli noktalar.",
      date: "8 Aralık 2024",
      author: "Av. İsmail Çavuş",
      slug: "askeri-personel-ozluk-haklari", 
      image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=400"
    },
    {
      title: "İşyeri Mobbing ve Hukuki Haklar",
      excerpt: "İşyerinde karşılaşılan mobbing durumları ve çalışanların bu konudaki hukuki hakları hakkında detaylar.",
      date: "5 Aralık 2024",
      author: "Av. İsmail Çavuş",
      slug: "isyeri-mobbing-hukuki-haklar",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      title: "Trafik Sigortası ve Tazminat Süreci",
      excerpt: "Trafik sigortası kapsamında tazminat talep etme süreci ve dikkat edilmesi gereken hukuki noktalar.",
      date: "3 Aralık 2024",
      author: "Av. İsmail Çavuş",
      slug: "trafik-sigortasi-tazminat-sureci",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400"
    }
  ];

  if (!currentCategory) {
    return <div>Kategori bulunamadı</div>;
  }

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
                  className="text-sm font-medium transition-colors hover:text-primary text-gray-700"
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
                    className="text-sm font-medium transition-colors hover:text-primary text-gray-700"
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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {currentCategory.title}
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              {currentCategory.description}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
                      Devamını Oku
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
                  <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
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

export default Category;
