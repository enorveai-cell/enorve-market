import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout"
import { ScrollToTop } from "./components/ScrollToTop"
import { Home } from "./pages/Home"

// Product Pages
import { AICopilot } from "./pages/product/AICopilot"
import { Inbox } from "./pages/product/Inbox"
import { Automation } from "./pages/product/Automation"
import { KnowledgeBase } from "./pages/product/KnowledgeBase"
import { Analytics } from "./pages/product/Analytics"

// Solutions Pages
import { CustomerSupport } from "./pages/solutions/CustomerSupport"
import { Ecommerce } from "./pages/solutions/Ecommerce"
import { SaaS } from "./pages/solutions/SaaS"
import { Founders } from "./pages/solutions/Founders"

// Trust & Security Pages
import { Pricing } from "./pages/Pricing"
import { Security } from "./pages/Security"

// Company Pages
import { ContactSales } from "./pages/company/Contact"

// Legal Pages
import { PrivacyPolicy } from "./pages/legal/PrivacyPolicy"
import { TermsOfService } from "./pages/legal/TermsOfService"

// 404 Page
import { NotFound } from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          {/* Homepage */}
          <Route path="/" element={<Home />} />

          {/* Product Routes */}
          <Route path="/product/ai-copilot" element={<AICopilot />} />
          <Route path="/product/inbox" element={<Inbox />} />
          <Route path="/product/automation" element={<Automation />} />
          <Route path="/product/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/product/analytics" element={<Analytics />} />

          {/* Solutions Routes */}
          <Route path="/solutions/customer-support" element={<CustomerSupport />} />
          <Route path="/solutions/ecommerce" element={<Ecommerce />} />
          <Route path="/solutions/saas" element={<SaaS />} />
          <Route path="/solutions/founders" element={<Founders />} />

          {/* Trust & Security Routes */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/security" element={<Security />} />

          {/* Company Routes */}
          <Route path="/contact-sales" element={<ContactSales />} />

          {/* Legal Routes */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />

          {/* 404 Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
