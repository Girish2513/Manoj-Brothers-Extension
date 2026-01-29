# 🏢 Manoj Brothers Extension

> **Premium Flooring & Interior Materials E-Commerce Platform**

A modern, SEO-optimized React single-page application showcasing premium flooring solutions, artificial grass, carpets, and wholesale interior materials based in Hyderabad, India.

[![Website](https://img.shields.io/badge/Website-manojbrothersextension.com-red?style=for-the-badge)](http://manojbrothersextension.com)
[![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.5-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [Available Scripts](#-available-scripts)
- [Key Components](#-key-components)
- [Pages](#-pages)
- [SEO & Performance](#-seo--performance)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 Overview

**Manoj Brothers Extension** is a full-featured e-commerce website specializing in:

- 🏗️ **PVC & Vinyl Flooring** - Premium residential and commercial flooring solutions
- 🌱 **Artificial Grass** - Sports turf, landscaping, and vertical grass installations
- 🧵 **Carpets & Mats** - Exhibition carpets, door mats, yoga mats, and fancy carpets
- 🪟 **Blinds & Curtains** - Vertical blinds, roller blinds, and PVC strip curtains
- 🛡️ **Industrial Materials** - Waterproofing membranes, EPE foam, rubber sheets, and more

### Why This Project?

This website was built to provide a seamless online presence for a B2B/B2C flooring wholesale business. It focuses on:

- **User Experience**: Fast, responsive, and accessible design
- **SEO Optimization**: Meta tags, structured data, and sitemap for search visibility
- **Performance**: Code splitting, lazy loading, and optimized assets
- **Modern Stack**: Using the latest React ecosystem tools

---

## ✨ Features

### 🎨 User Interface
- **Responsive Design**: Mobile-first approach, works flawlessly on all devices
- **Smooth Animations**: Curtain reveal effects, scroll-triggered animations
- **Glassmorphism UI**: Modern transparent navbar with backdrop blur
- **Dark Mode Ready**: Premium dark-themed design with accent colors

### 🚀 Performance
- **Code Splitting**: Lazy-loaded routes reduce initial bundle size
- **Optimized Images**: WebP format with fallbacks for better loading
- **Prefetching**: Smart resource loading for instant navigation
- **Error Boundaries**: Graceful error handling without full page crashes

### 🔍 SEO & Accessibility
- **Dynamic Meta Tags**: Per-page SEO using `react-helmet-async`
- **Structured Data**: Schema.org markup for rich search results
- **Sitemap & Robots.txt**: Proper indexing configuration
- **ARIA Labels**: Screen reader support and keyboard navigation
- **Skip Links**: Accessibility shortcuts for main content

### 📱 Interactive Features
- **WhatsApp Integration**: Quick contact button floating on all pages
- **Google Maps**: Direct location link for physical store
- **FAQ Section**: Collapsible Q&A for common queries
- **Product Catalog**: 50+ products with detailed descriptions
- **Testimonials**: Customer reviews with ratings
- **Contact Form**: Backend integrated with Google Apps Script

---

## 🛠️ Tech Stack

### Core Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 18.2.0 | UI library for component-based architecture |
| **Vite** | 7.2.5 | Lightning-fast build tool and dev server |
| **React Router** | 7.9.6 | Client-side routing with hash link support |
| **React Helmet Async** | 2.0.5 | Dynamic document head management for SEO |

### Styling & UI

- **CSS Modules**: Scoped component styling
- **CSS Variables**: Theme consistency with `--color-*` and `--font-*`
- **Google Fonts**: Inter font family for modern typography
- **Lucide React**: Icon library for UI elements

### Development Tools

- **ESLint**: Code quality and consistency
- **PostCSS & Autoprefixer**: CSS processing and vendor prefixing
- **Rolldown Vite**: Enhanced Vite fork with better optimization

---

## 📂 Project Structure

```
Manoj-Brothers-Extension/
├── public/                      # Static assets served at root
│   ├── favicon.svg             # Browser tab icon
│   ├── og-image.svg            # Social media preview image
│   ├── robots.txt              # Search engine crawler instructions
│   ├── sitemap.xml             # SEO sitemap for search engines
│   └── vite.svg                # Vite logo
│
├── src/                        # Source code
│   ├── assets/                 # Images for products and UI
│   │   ├── vinyl-flooring.jpg
│   │   ├── artificial-grass.jpg
│   │   ├── [50+ product images]
│   │   └── ...
│   │
│   ├── components/             # Reusable React components
│   │   ├── ErrorBoundary.jsx   # Catches and displays React errors
│   │   ├── Footer.jsx          # Site footer with links
│   │   ├── GlobalSEO.jsx       # Global meta tags and structured data
│   │   ├── Layout.jsx          # Main layout wrapper with nav/footer
│   │   ├── LocationButton.jsx  # Floating Google Maps link button
│   │   ├── Navbar.jsx          # Main navigation bar
│   │   ├── WhatsAppButton.jsx  # Floating WhatsApp contact button
│   │   │
│   │   └── Home-section/       # Home page specific components
│   │       ├── BestSellers.jsx    # Featured products section
│   │       ├── Collections.jsx    # Product category showcase
│   │       ├── CurtainReveal.jsx  # Animated page entrance effect
│   │       ├── FinalCTA.jsx       # Call-to-action section
│   │       ├── HeroSection.jsx    # Landing hero banner
│   │       ├── Testimonials.jsx   # Customer reviews
│   │       └── WhyChooseUs.jsx    # Value propositions
│   │
│   ├── pages/                  # Route-level page components
│   │   ├── About.jsx           # About us page
│   │   ├── Contact.jsx         # Contact information page
│   │   ├── FAQ.jsx             # Frequently asked questions
│   │   ├── Home.jsx            # Homepage (aggregates Home-section components)
│   │   ├── NotFound.jsx        # 404 error page
│   │   ├── Products.jsx        # Full product catalog
│   │   │
│   │   └── [Component CSS files]
│   │       ├── FAQ.css
│   │       ├── Home.css
│   │       └── Products.css
│   │
│   ├── App.jsx                 # Root component with routing
│   ├── App.css                 # App-level styles
│   ├── main.jsx                # React DOM rendering entry point
│   └── index.css               # Global styles and CSS variables
│
├── .gitignore                  # Git ignore rules
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML entry point
├── package.json                # Project dependencies and scripts
├── package-lock.json           # Locked dependency versions
├── vite.config.js              # Vite bundler configuration
└── README.md                   # This file
```

### Key Directories Explained

#### `/src/components/`
Contains reusable UI components used across multiple pages:
- **Layout.jsx**: Wraps all pages with consistent header/footer
- **Navbar.jsx**: Responsive navigation with scroll effects
- **Footer.jsx**: Site footer with business info and links
- **WhatsAppButton.jsx**: Sticky floating button for instant WhatsApp chat
- **LocationButton.jsx**: Google Maps integration for store location

#### `/src/components/Home-section/`
Home page is broken into modular sections for maintainability:
- **CurtainReveal.jsx**: Animated entrance curtain effect
- **HeroSection.jsx**: Hero banner with call-to-action
- **BestSellers.jsx**: Featured products carousel
- **Collections.jsx**: Product category cards
- **WhyChooseUs.jsx**: Trust indicators and USPs
- **Testimonials.jsx**: Customer reviews and ratings
- **FinalCTA.jsx**: Bottom conversion section

#### `/src/pages/`
Each route has its own page component:
- **Home.jsx**: Combines all Home-section components
- **Products.jsx**: Complete product catalog with search/filter
- **About.jsx**: Company information and history
- **FAQ.jsx**: Collapsible Q&A accordion
- **Contact.jsx**: Contact form and business details
- **NotFound.jsx**: Custom 404 page

#### `/src/assets/`
All product images and visual assets (50+ images):
- Product photos optimized for web
- Consistent naming convention
- WebP format where possible for performance

---

## 🚀 Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### Clone the Repository

```bash
git clone https://github.com/Girish2513/Manoj-Brothers-Extension.git
cd Manoj-Brothers-Extension
```

### Install Dependencies

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

This will install all dependencies listed in `package.json`, including:
- React & React DOM
- React Router DOM
- Vite
- ESLint
- And all development dependencies

---

## 💻 Usage

### Development Server

Start the local development server:

```bash
npm run dev
```

This will:
- Start Vite dev server at `http://localhost:5173` (or next available port)
- Enable hot module replacement (HMR) for instant updates
- Provide detailed error overlays for debugging

**Output:**
```
VITE v7.2.5  ready in 300 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### Production Build

Create an optimized production build:

```bash
npm run build
```

This will:
- Bundle all code into the `/dist` directory
- Minify JavaScript and CSS
- Optimize assets and images
- Generate source maps for debugging

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

Serves the `/dist` folder at `http://localhost:4173`

### Linting

Check code quality and fix issues:

```bash
npm run lint
```

ESLint will analyze code and report:
- Syntax errors
- Best practice violations
- Unused variables
- React-specific issues

---

## 📜 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm run dev` | Starts development server with HMR |
| `build` | `npm run build` | Creates production-ready build in `/dist` |
| `preview` | `npm run preview` | Previews production build locally |
| `lint` | `npm run lint` | Runs ESLint to check code quality |

---

## 🧩 Key Components

### 1. **Navbar** (`src/components/Navbar.jsx`)

**Purpose**: Main navigation bar with responsive menu

**Features**:
- Glassmorphism design with backdrop blur
- Scroll-based transparency changes
- Mobile hamburger menu
- Active route highlighting
- Smooth scroll progress indicator

**Key Code**:
```jsx
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

---

### 2. **Layout** (`src/components/Layout.jsx`)

**Purpose**: Wraps all pages with consistent structure

**Features**:
- Includes Navbar and Footer on every page
- Skip-to-content link for accessibility
- Floating action buttons (WhatsApp, Location)

**Structure**:
```jsx
<div className="layout-wrapper">
  <a href="#main-content" className="skip-link">Skip to main content</a>
  <Navbar />
  <main id="main-content">
    <Outlet /> {/* Current route renders here */}
  </main>
  <Footer />
  <WhatsAppButton />
  <LocationButton />
</div>
```

---

### 3. **GlobalSEO** (`src/components/GlobalSEO.jsx`)

**Purpose**: Manages default SEO meta tags

**Features**:
- Open Graph tags for social sharing
- Twitter Card meta data
- Canonical URLs
- Structured data (Schema.org)

**Example**:
```jsx
<Helmet>
  <title>Manoj Brothers Extension | Premium Flooring</title>
  <meta name="description" content="..." />
  <meta property="og:title" content="..." />
  <meta property="og:image" content="/og-image.svg" />
</Helmet>
```

---

### 4. **ErrorBoundary** (`src/components/ErrorBoundary.jsx`)

**Purpose**: Catches React errors and shows fallback UI

**Features**:
- Prevents entire app crash on component errors
- Displays user-friendly error message
- Logs errors to console for debugging

**Implementation**:
```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
```

---

### 5. **WhatsAppButton** (`src/components/WhatsAppButton.jsx`)

**Purpose**: Floating action button for instant WhatsApp contact

**Features**:
- Fixed position on all pages
- Opens WhatsApp with pre-filled message
- Mobile and desktop compatible
- Icon from Lucide React

**Usage**:
```jsx
const whatsappNumber = "919849020651";
const message = "Hello, I'm interested in your products!";
const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
```

---

### 6. **CurtainReveal** (`src/components/Home-section/CurtainReveal.jsx`)

**Purpose**: Animated entrance effect on homepage load

**Features**:
- CSS animations for curtain opening
- Brand logo reveal
- Triggers once per session
- Non-blocking (doesn't delay content)

---

## 📄 Pages

### 🏠 Home (`src/pages/Home.jsx`)

**Route**: `/`

**Sections**:
1. **CurtainReveal**: Animated brand intro
2. **HeroSection**: Main banner with CTA
3. **BestSellers**: Featured products
4. **WhyChooseUs**: Trust indicators
5. **Collections**: Product categories
6. **Testimonials**: Customer reviews
7. **FinalCTA**: Bottom conversion section

**SEO**:
```jsx
<Helmet>
  <title>Home | Manoj Brothers Extension</title>
  <meta name="description" content="Explore our premium collection..." />
</Helmet>
```

---

### 🛍️ Products (`src/pages/Products.jsx`)

**Route**: `/products`

**Features**:
- 50+ products displayed in grid layout
- Category filtering (coming soon)
- Product details with images
- WhatsApp inquiry links per product

**Product Data Structure**:
```jsx
{
  id: 1,
  name: "Vinyl Flooring",
  image: vinylFlooringImg,
  description: "Premium vinyl flooring for residential...",
  category: "Flooring"
}
```

---

### ℹ️ About (`src/pages/About.jsx`)

**Route**: `/about`

**Content**:
- Company history and mission
- Team information
- Values and quality commitment
- Service areas

---

### ❓ FAQ (`src/pages/FAQ.jsx`)

**Route**: `/faq`

**Features**:
- Collapsible accordion items
- Click to expand/collapse
- Organized by topic
- Smooth animations

**Implementation**:
```jsx
const [activeIndex, setActiveIndex] = useState(null);

const toggleFAQ = (index) => {
  setActiveIndex(activeIndex === index ? null : index);
};
```

---

### 📞 Contact (`src/pages/Contact.jsx`)

**Route**: `/contact`

**Content**:
- Business address
- Phone numbers
- Email address
- Google Maps embed
- Business hours
- Contact form with backend integration

---

### 🚫 NotFound (`src/pages/NotFound.jsx`)

**Route**: `*` (catch-all)

**Features**:
- Custom 404 page
- "Go Home" button
- Maintains site branding
- Helpful error message

---

## 🔍 SEO & Performance

### SEO Features

#### 1. **Meta Tags**
- Per-page titles and descriptions
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs

#### 2. **Structured Data**
Implemented Schema.org markup for:
- Organization
- LocalBusiness
- Product catalog
- BreadcrumbList

#### 3. **Sitemap**
`/public/sitemap.xml` includes all pages with priorities:
```xml
<url>
  <loc>http://manojbrothersextension.com/</loc>
  <priority>1.0</priority>
</url>
```

#### 4. **Robots.txt**
```txt
User-agent: *
Allow: /
Sitemap: http://manojbrothersextension.com/sitemap.xml
```

### Performance Optimizations

#### Code Splitting
```jsx
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
```

#### Image Optimization
- WebP format usage
- Lazy loading with Intersection Observer
- Responsive images with `srcset`

#### Bundle Size
- Tree shaking removes unused code
- Minification reduces file sizes
- Gzip compression enabled

#### Lighthouse Score Targets
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 100
- **SEO**: 100

---

## 🌐 Deployment

### Deployment on Vercel (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Custom Domain**:
   - Add domain in Vercel dashboard
   - Update DNS records
   - SSL automatically provisioned

### Deployment on Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `dist`
3. **Add environment variables** (if any)

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload `/dist` folder to web server

3. Configure server for SPA routing:
   - All routes should serve `index.html`
   - Enable gzip compression
   - Set proper cache headers

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**

2. **Create a feature branch**:
   ```bash
   git checkout -b feature/YourFeatureName
   ```

3. **Make your changes**

4. **Commit with descriptive message**:
   ```bash
   git commit -m "Add: New product filtering feature"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feature/YourFeatureName
   ```

6. **Open a Pull Request**

### Code Style Guidelines

- Use functional components with hooks
- Follow ESLint rules
- Write descriptive commit messages
- Add comments for complex logic
- Keep components small and focused

---

## 📄 License

This project is **proprietary** and belongs to **Manoj Brothers Extension**. All rights reserved.

For licensing inquiries, contact: manojextension@gmail.com

---

## 📞 Contact

**Manoj Brothers Extension**

- **Website**: [manojbrothersextension.com](http://manojbrothersextension.com)
- **Location**: D.No. 5-1-27, Gowliguda, Hyderabad, Telangana, India
- **Phone**: 
  - Shiv Kumar Dalmia: +91 98490 20651
  - Ankur Dalmia: +91 98483 32000
- **Email**: manojextension@gmail.com
- **WhatsApp**: [Chat with us](https://wa.me/919849020651)

### Business Hours
- **Monday - Saturday**: 10:00 AM - 8:00 PM
- **Sunday**: 10:00 AM - 2:00 PM

---

## 🙏 Acknowledgments

- **React Team** for the amazing library
- **Vite Team** for blazing-fast build tool
- **Lucide** for beautiful icons
- **Google Fonts** for typography
- **Community** for open-source contributions

---

## 📊 Project Stats

- **Total Files**: 100+
- **Components**: 20+
- **Pages**: 6
- **Products**: 50+
- **Dependencies**: 12
- **Dev Dependencies**: 10

---

## 🗺️ Roadmap

### Planned Features

- [x] Backend API integration for contact form
- [ ] Product search and advanced filtering
- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Order management system
- [ ] Blog section for SEO content
- [ ] Multi-language support
- [ ] Dark/Light mode toggle
- [ ] Product comparison tool
- [ ] Customer testimonials submission form

---

## 🔗 Links

- **Live Website**: [manojbrothersextension.com](http://manojbrothersextension.com)
- **Repository**: [GitHub](https://github.com/Girish2513/Manoj-Brothers-Extension)
- **Issues**: [Report a bug](https://github.com/Girish2513/Manoj-Brothers-Extension/issues)

---

**Made with ❤️ for Manoj Brothers Extension**

---

*Last Updated: 2026-01-29 00:33:58*
