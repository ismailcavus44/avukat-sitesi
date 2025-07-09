
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost"
import Faaliyetlerimiz from "./pages/Faaliyetlerimiz"
import Hakkimizda from "./pages/Hakkimizda"
import Iletisim from "./pages/Iletisim"
import NotFound from "./pages/NotFound"
import AdminPanel from "./pages/AdminPanel"
import Login from "./pages/Login"
import { Toaster } from "sonner"

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/faaliyetlerimiz" element={<Faaliyetlerimiz />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
