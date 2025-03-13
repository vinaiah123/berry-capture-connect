
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize animation observer for elements that animate on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Lazy load observation after component mounts
    setTimeout(() => {
      const elements = document.querySelectorAll(".slide-in-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }, 100);
    
    return () => observer.disconnect();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ThemeProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                
                {/* Feature Pages */}
                <Route path="/features" element={<Index />} />
                <Route path="/features/screen-recorder" element={<Index />} />
                <Route path="/features/ai-tools" element={<Index />} />
                <Route path="/features/video-hosting" element={<Index />} />
                <Route path="/features/screenshot" element={<Index />} />
                <Route path="/features/webcam" element={<Index />} />
                <Route path="/features/sdk" element={<Index />} />
                
                {/* Use Case Pages */}
                <Route path="/use-cases" element={<Index />} />
                <Route path="/use-cases/marketing" element={<Index />} />
                <Route path="/use-cases/sales" element={<Index />} />
                <Route path="/use-cases/support" element={<Index />} />
                <Route path="/use-cases/education" element={<Index />} />
                <Route path="/use-cases/engineering" element={<Index />} />
                <Route path="/use-cases/team" element={<Index />} />
                
                {/* Company Pages */}
                <Route path="/pricing" element={<Index />} />
                <Route path="/about" element={<Index />} />
                <Route path="/blog" element={<Index />} />
                <Route path="/contact" element={<Index />} />
                <Route path="/careers" element={<Index />} />
                
                {/* Auth Pages */}
                <Route path="/login" element={<Index />} />
                <Route path="/signup" element={<Index />} />
                
                {/* Legal Pages */}
                <Route path="/terms" element={<Index />} />
                <Route path="/privacy" element={<Index />} />
                <Route path="/cookies" element={<Index />} />
                <Route path="/sitemap" element={<Index />} />
                
                {/* Catch-all route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <ThemeSwitcher />
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
