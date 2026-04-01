import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import GioiThieu from "./pages/GioiThieu";
import DichVu from "./pages/DichVu";
import TinTuc from "./pages/TinTuc";
import ArticleDetail from "./pages/ArticleDetail";
import ThuVien from "./pages/ThuVien";
import LienHe from "./pages/LienHe";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/gioi-thieu" element={<GioiThieu />} />
              <Route path="/dich-vu" element={<DichVu />} />
              <Route path="/tin-tuc-kien-thuc" element={<TinTuc />} />
              <Route path="/tin-tuc-kien-thuc/:slug" element={<ArticleDetail />} />
              <Route path="/thu-vien" element={<ThuVien />} />
              <Route path="/lien-he" element={<LienHe />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
