
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GaleriaPage from "./pages/GaleriaPage";
import CronologiaPage from "./pages/CronologiaPage";
import TestimoniosPage from "./pages/TestimoniosPage";
import RecursosPage from "./pages/RecursosPage";
import ReflexionPage from "./pages/ReflexionPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/galeria" element={<GaleriaPage />} />
          <Route path="/cronologia" element={<CronologiaPage />} />
          <Route path="/testimonios" element={<TestimoniosPage />} />
          <Route path="/recursos" element={<RecursosPage />} />
          <Route path="/reflexion" element={<ReflexionPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
