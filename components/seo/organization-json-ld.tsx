import { siteConfig } from "@/data/site";

import { JsonLd } from "@/components/seo/json-ld";

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        telephone: siteConfig.phone,
        areaServed: {
          "@type": "City",
          name: siteConfig.city,
        },
        sameAs: [siteConfig.instagram],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          contactType: "customer service",
          availableLanguage: "Turkish",
        },
      }}
    />
  );
}
