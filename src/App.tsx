import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import ProtectedRoute from "./components/ProtectedRoute";
import { ThemeProvider } from "./components/ThemeProvider";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const OurApproach = lazy(() => import("./pages/OurApproach"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const Services = lazy(() => import("./pages/Services"));
const SpecializedPrograms = lazy(() => import("./pages/SpecializedPrograms"));
const AddOns = lazy(() => import("./pages/AddOns"));
const Regions = lazy(() => import("./pages/Regions"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Onboarding = lazy(() => import("./pages/Onboarding"));
const Auth = lazy(() => import("./pages/Auth"));
const Admin = lazy(() => import("./pages/Admin"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/our-approach" element={<OurApproach />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/services" element={<Services />} />
                <Route path="/specialized-programs" element={<SpecializedPrograms />} />
                <Route path="/add-ons" element={<AddOns />} />
                <Route path="/regions" element={<Regions />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/pricing" element={<Services />} />
                <Route path="/programs" element={<Services />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/apply" element={<Onboarding />} />
                <Route path="/book-discovery" element={<Onboarding />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
