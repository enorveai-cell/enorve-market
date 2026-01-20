# Enorve Marketing Website

AI-powered customer support platform marketing site built with React, TypeScript, and Vite.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or 20+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the site.

## 📊 Google Analytics Setup

The site includes Google Analytics 4 integration. To enable tracking:

1. **Get your GA4 Measurement ID**:
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a GA4 property
   - Copy your Measurement ID (format: `G-XXXXXXXXXX`)

2. **Configure locally**:
   ```bash
   # Copy the example env file
   cp .env.example .env.local
   
   # Edit .env.local and add your GA4 ID
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

3. **For production (Cloudflare Pages)**:
   - Add environment variable in Cloudflare dashboard
   - Variable name: `VITE_GA_MEASUREMENT_ID`  
   - Value: Your GA4 measurement ID

**Privacy**: Analytics includes IP anonymization by default.

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Project Structure

```
src/
├── components/      # Reusable UI components
│   ├── ui/         # Base UI components (Button, Logo, etc.)
│   └── sections/   # Page sections (Hero, CTA, etc.)
├── pages/          # Route pages
│   ├── product/    # Product pages (AI Copilot, Inbox, etc.)
│   ├── solutions/  # Solution pages (SaaS, E-commerce, etc.)
│   ├── legal/      # Legal pages (Privacy, Terms)
│   └── company/    # Company pages (Contact)
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
└── layouts/        # Page layouts
```

## 🌐 Deployment

### Cloudflare Pages

1. **Connect Repository**:
   - Go to Cloudflare Pages dashboard
   - Connect your GitHub repository

2. **Build Settings**:
   - Framework: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`

3. **Environment Variables** (optional):
   - `VITE_GA_MEASUREMENT_ID`: Your Google Analytics 4 ID

4. **Deploy**: Click "Save and Deploy"

### Other Platforms

The site is a standard Vite build and can be deployed to:
- Vercel
- Netlify
- AWS Amplify
- GitHub Pages (requires additional configuration)

## 📝 Content Updates

### Payment Model
The site uses a **payment-required** model (no free trials):
- All CTAs say "Get Started"
- Links direct to `https://app.enorve.com/`
- Pricing clearly shows plan costs upfront

### Key Pages
- **Home** (`/`): Main landing page
- **Pricing** (`/pricing`): Plans at $39, $199, $499, and Custom
- **Security** (`/security`): Legal-reviewed security information
- **Contact** (`/contact-sales`): Sales inquiry form

## ⚙️ Configuration

### SEO
- Dynamic canonical tags via `usePageTitle()` hook
- robots.txt configured for search engines
- Meta tags for social sharing
- Sitemap: Add `public/sitemap.xml` (recommended)

### Styling
- **Framework**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: Dark mode (customizable in `tailwind.config.js`)

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GA_MEASUREMENT_ID` | Google Analytics 4 ID | No |

**Note**: All `VITE_` prefixed variables are exposed to the browser.

## 📦 Dependencies

### Core
- React 19
- React Router 7
- TypeScript 5
- Vite 7

### UI
- Tailwind CSS 3
- Framer Motion 12
- Lucide React

## 🤝 Contributing

This is a marketing site for Enorve. For changes:
1. Create a feature branch
2. Make your changes
3. Test locally with `npm run build` && `npm run preview`
4. Submit for review

## 📄 License

Proprietary - Enorve AI

## 🆘 Support

For questions or issues:
- Technical: Create an issue in this repository
- Security: Contact security@enorve.com
- Sales: Visit https://enorve.com/contact-sales
