import Script from "next/script"

interface SeoSchemaProps {
  schema: Record<string, any>
}

export default function SeoSchema({ schema }: SeoSchemaProps) {
  return (
    <Script
      id="seo-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}
