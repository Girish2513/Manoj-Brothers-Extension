import React from "react";
import { Helmet } from "react-helmet-async";

const GlobalSEO = () => {
  const siteTitle =
    "Manoj Brothers Extension | PVC Flooring & Interior Materials Supplier in Hyderabad";

  const siteDescription =
    "Manoj Brothers Extension is a premium wholesale supplier of PVC flooring, PVC membrane film, soffit panels, artificial grass, and interior materials based in Gowliguda, Hyderabad, Telangana.";

  const siteUrl = "https://www.manojbrothersextension.com";
  const siteImage = `${siteUrl}/assets/mb-logo.png`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteUrl}/#business`,
    "name": "Manoj Brothers Extension",
    "url": siteUrl,
    "logo": siteImage,
    "image": siteImage,
    "telephone": "+919849020651",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress":
        "D.No. 5-1-27, Opp. Mahakali Kaman, Near Ram Mandir, Gowliguda Chaman",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500012",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.385,
      "longitude": 78.4867
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "10:00",
        "closes": "20:00"
      }
    ],
    "areaServed": "Hyderabad",
    "description": siteDescription
  };

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />

      {/* Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default GlobalSEO;
