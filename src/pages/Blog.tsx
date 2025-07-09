
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { supabase } from "@/integrations/supabase/client"
import type { BlogPost } from "@/integrations/supabase/types"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Phone, MapPin, Calendar, Clock, ArrowRight, Search } from "lucide-react"
import { toast } from "sonner"

export default function Blog() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Tümü")
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  const navigationItems = [
    { name: "Anasayfa", href: "/", key: "anasayfa" },
    { name: "Blog", href: "/blog", key: "blog" },
    { name: "Faaliyetlerimiz", href: "/faaliyetlerimiz", key: "faaliyetlerimiz" },
    { name: "Hakkımızda", href: "/hakkimizda", key: "hakkimizda" },
    { name: "İletişim", href: "/iletisim", key: "iletisim" }
  ]

  const categories = ["Tümü", "İş Hukuku", "Trafik Hukuku", "Aile Hukuku", "Askeri Hukuk", "Sigorta Hukuku"]

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("created_at", { ascending: false })

      if (error) throw error
      setPosts(data || [])
    } catch (error) {
      toast.error("Blog yazıları yüklenirken bir hata oluştu")
    } finally {
      setLoading(false)
    }
  }

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch
  })

  if (loading) return <div>Yükleniyor...</div>

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
                    item.key === "blog" ? 'text-primary border-b-2 border-primary pb-1' : 'text-gray-700'
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
                      item.key === "blog" ? 'text-primary' : 'text-gray-700'
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
              Hukuk Blog
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Ankara avukat olarak hukuki konularda güncel bilgiler, 
              yasa değişiklikleri ve müvekkil haklarıyla ilgili yazılarımı paylaşıyorum.
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Blog yazılarında ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 w-full"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-black'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  {post.image_url && (
                    <img
                      src={post.image_url}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.created_at).toLocaleDateString("tr-TR")}
                      </div>
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                    >
                      Devamını Oku
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Hukuki Danışmanlığa İhtiyacınız mı Var?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Blog yazılarımızda yer alan konularla ilgili detaylı bilgi almak için benimle iletişime geçebilirsiniz.
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
  )
}
