
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { supabase } from "@/integrations/supabase/client"
import type { BlogPost } from "@/integrations/supabase/types"
import { toast } from "sonner"

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPost()
  }, [slug])

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .single()

      if (error) throw error
      if (!data) {
        navigate("/404")
        return
      }
      setPost(data)
    } catch (error) {
      toast.error("Blog yazısı yüklenirken bir hata oluştu")
      navigate("/blog")
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div>Yükleniyor...</div>
  if (!post) return null

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      {post.image_url && (
        <img
          src={post.image_url}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />
      )}
      
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      
      <div className="text-gray-500 mb-8">
        {new Date(post.created_at).toLocaleDateString("tr-TR")}
      </div>
      
      <div className="prose prose-lg max-w-none">
        {post.content}
      </div>
    </div>
  )
}
