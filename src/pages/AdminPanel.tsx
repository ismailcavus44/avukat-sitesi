import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "@/integrations/supabase/client"
import type { BlogPost } from "@/integrations/supabase/types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { toast } from "sonner"

export default function AdminPanel() {
  const navigate = useNavigate()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image_url: "",
    excerpt: "",
    slug: ""
  })

  useEffect(() => {
    checkAdminAccess()
  }, [])

  const checkAdminAccess = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        toast.error("Lütfen giriş yapın")
        navigate("/")
        return
      }

      const { data: adminUser, error: adminError } = await supabase
        .from("admin_users")
        .select("id")
        .eq("id", user.id)
        .single()

      if (adminError || !adminUser) {
        toast.error("Bu sayfaya erişim yetkiniz yok")
        navigate("/")
        return
      }

      fetchPosts()
    } catch (error) {
      toast.error("Bir hata oluştu")
      navigate("/")
    }
  }

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingPost) {
        const { error } = await supabase
          .from("blog_posts")
          .update({
            title: formData.title,
            content: formData.content,
            image_url: formData.image_url,
            excerpt: formData.excerpt,
            slug: formData.slug,
            updated_at: new Date().toISOString()
          })
          .eq("id", editingPost.id)

        if (error) throw error
        toast.success("Blog yazısı başarıyla güncellendi")
      } else {
        const { error } = await supabase
          .from("blog_posts")
          .insert([{
            ...formData,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }])

        if (error) throw error
        toast.success("Blog yazısı başarıyla eklendi")
      }

      setFormData({
        title: "",
        content: "",
        image_url: "",
        excerpt: "",
        slug: ""
      })
      setEditingPost(null)
      fetchPosts()
    } catch (error) {
      toast.error("Bir hata oluştu")
    }
  }

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post)
    setFormData({
      title: post.title,
      content: post.content,
      image_url: post.image_url || "",
      excerpt: post.excerpt,
      slug: post.slug
    })
  }

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from("blog_posts")
        .delete()
        .eq("id", id)

      if (error) throw error
      toast.success("Blog yazısı başarıyla silindi")
      fetchPosts()
    } catch (error) {
      toast.error("Silme işlemi sırasında bir hata oluştu")
    }
  }

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      navigate("/")
    } catch (error) {
      toast.error("Çıkış yapılırken bir hata oluştu")
    }
  }

  if (loading) return <div>Yükleniyor...</div>

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Paneli</h1>
        <Button onClick={handleLogout} className="bg-red-500 hover:bg-red-600">
          Çıkış Yap
        </Button>
      </div>
      
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <Input
          placeholder="Başlık"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <Input
          placeholder="Slug (URL-friendly başlık)"
          value={formData.slug}
          onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
          required
        />
        <Input
          placeholder="Resim URL"
          value={formData.image_url}
          onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
        />
        <Textarea
          placeholder="Özet"
          value={formData.excerpt}
          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
          required
        />
        <Textarea
          placeholder="İçerik"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          required
          className="min-h-[200px]"
        />
        <Button type="submit">
          {editingPost ? "Güncelle" : "Ekle"}
        </Button>
      </form>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id} className="p-4">
            <h3 className="font-bold">{post.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
            <div className="flex gap-2 mt-4">
              <Button
                onClick={() => handleEdit(post)}
                className="bg-blue-500 hover:bg-blue-600"
              >
                Düzenle
              </Button>
              <Button
                onClick={() => handleDelete(post.id)}
                className="bg-red-500 hover:bg-red-600"
              >
                Sil
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
} 