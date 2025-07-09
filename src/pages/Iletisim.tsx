import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Iletisim = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const currentPage = "iletisim";

  const navigationItems = [
    { name: "Anasayfa", href: "/", key: "anasayfa" },
    { name: "Blog", href: "/blog", key: "blog" },
    { name: "Faaliyetlerimiz", href: "/faaliyetlerimiz", key: "faaliyetlerimiz" },
    { name: "Hakkımızda", href: "/hakkimizda", key: "hakkimizda" },
    { name: "İletişim", href: "/iletisim", key: "iletisim" }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Telefon",
      content: "+90 510 220 69 45",
      action: () => window.open('tel:+905102206945', '_self')
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Adres",
      content: "Korkutreis, Cihan Sk. No:12/8, 06530 Çankaya/Ankara",
      action: () => window.open('https://maps.google.com/?q=Korkutreis,+Cihan+Sk.+No:12/8,+06530+Çankaya/Ankara', '_blank')
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Çalışma Saatleri",
      content: "Pazartesi - Cuma: 09:00 - 18:00"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "Mesajınız Alındı",
      description: "En kısa sürede size dönüş yapacağım. Teşekkür ederim.",
    });

    // Form reset
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

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

      {/* Page Header */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              İletişim
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Hukuki danışmanlık ve destek için benimle iletişime geçin. 
              Ankara avukat olarak size yardımcı olmaktan memnuniyet duyarım.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-48 flex flex-col ${
                  info.action ? 'cursor-pointer' : ''
                }`}
                onClick={info.action}
              >
                <CardContent className="p-8 text-center flex-1 flex flex-col justify-center">
                  <div className="mb-6 flex justify-center">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {info.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Mesaj Gönderin
              </h2>
              
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Ad Soyad *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="Adınız ve soyadınız"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Telefon *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="Telefon numaranız"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">E-posta</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="E-posta adresiniz"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Konu *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="Mesajınızın konusu"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Mesajınız *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="mt-1 min-h-[180px] resize-none"
                        placeholder="Hukuki durumunuz hakkında detaylı bilgi veriniz..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-black font-semibold py-3"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Mesaj Gönder
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Ofis Konumum
              </h2>
              
              <Card className="border-0 shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-[400px] bg-gray-200 relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.6943956449775!2d32.85844671525926!3d39.91896997942331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f1d66a22537%3A0x2f8b6b2e9ee8e8c8!2sKorkutreis%2C%20Cihan%20Sk.%20No%3A12%2F8%2C%2006530%20%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1625000000000!5m2!1str!2str"
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Av. İsmail Çavuş Ofis Konumu"
                    ></iframe>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Ofis Adresi
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Korkutreis, Cihan Sk. No:12/8<br />
                      06530 Çankaya/Ankara
                    </p>
                    <Button 
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-black"
                      onClick={() => window.open('https://maps.google.com/?q=Korkutreis,+Cihan+Sk.+No:12/8,+06530+Çankaya/Ankara', '_blank')}
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Haritada Aç
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
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

export default Iletisim;
