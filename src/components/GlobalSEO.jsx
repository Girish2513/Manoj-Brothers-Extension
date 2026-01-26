import React from 'react';
import { Helmet } from 'react-helmet-async';

const GlobalSEO = () => {
    const siteTitle = "MB Extension";
    const siteDescription = "Premium flooring and interior wholesale solutions. Specialized in PVC Membrane Film, Soffit Panels, and Artificial Grass.";
    const siteUrl = "https://mbextension.com"; // Replace with actual URL if known, or generic
    const siteImage = "/og-image.svg";

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Manoj Brothers Extension",
        "url": siteUrl,
        "logo": `${siteUrl}${siteImage}`,
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+919849020651",
            "contactType": "customer service"
        },
        "sameAs": [
            "https://www.facebook.com/manojbrothers",
            "https://www.instagram.com/manojbrothers"
        ]
    };

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#DC2626" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:image" content={siteImage} />
            <meta property="og:image:alt" content="MB Extension flooring and interiors" />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={siteUrl} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={siteDescription} />
            <meta property="twitter:image" content={siteImage} />
            <meta property="twitter:image:alt" content="MB Extension flooring and interiors" />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
        </Helmet>
    );
};

export default GlobalSEO;
