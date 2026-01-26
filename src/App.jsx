import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { HelmetProvider } from 'react-helmet-async';
import GlobalSEO from './components/GlobalSEO';
import ErrorBoundary from './components/ErrorBoundary';

const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));

const FallbackLoader = () => (
  <div className="page-loader" role="status" aria-live="polite">
    Loading…
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <GlobalSEO />
        <ErrorBoundary>
          <Suspense fallback={<FallbackLoader />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                {/* This remains a separate page for when users click "View Details" */}
                <Route path="products" element={<Products />} />
                <Route path="about" element={<About />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;