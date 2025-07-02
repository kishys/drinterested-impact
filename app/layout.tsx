import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Script from "next/script"
import { Toaster } from "@/components/ui/toaster"
import SeoSchema from "@/components/seo-schema"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Dr. Interested 2025 Semi-Annual Impact Report | Healthcare Education Impact",
    template: "%s | Dr. Interested Impact Report 2025",
  },
  description:
    "Explore Dr. Interested's comprehensive 2025 Semi-Annual Impact Report showcasing our achievements in empowering 500+ high school students to pursue healthcare careers through mentorship, education, and hands-on experiences. Discover student success stories, program growth metrics, and community impact data.",
  keywords: [
    "Dr. Interested impact report 2025",
    "healthcare education impact assessment",
    "high school medical mentorship results",
    "student healthcare career development outcomes",
    "medical education program effectiveness",
    "healthcare volunteer impact metrics",
    "student-led healthcare organization results",
    "high school healthcare internship outcomes",
    "medical career guidance success stories",
    "healthcare education nonprofit impact",
    "student mentorship program evaluation",
    "healthcare workforce development impact",
    "medical field exploration program results",
    "high school healthcare club achievements",
    "healthcare education community impact",
    "student leadership development healthcare",
    "medical career preparation program outcomes",
    "healthcare education accessibility impact",
    "diverse healthcare workforce development",
    "student healthcare research achievements",
  ],
  authors: [
    { name: "Dr. Interested Team", url: "https://drinterested.tech/members" },
    { name: "Adil Mukhi", url: "https://drinterested.tech/members" },
  ],
  creator: "Dr. Interested - Student-Led Healthcare Education Organization",
  publisher: "Dr. Interested",
  category: "Education",
  classification: "Healthcare Education Impact Report",
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://impact2025.drinterested.tech",
    title: "Dr. Interested 2025 Semi-Annual Impact Report - Transforming Healthcare Education",
    description:
      "Discover how Dr. Interested empowered 500+ high school students in healthcare careers through our comprehensive 2025 impact report. View detailed metrics, success stories, and program outcomes that demonstrate our commitment to building a diverse healthcare workforce.",
    siteName: "Dr. Interested Impact Report",
    images: [
      {
        url: "https://impact2025.drinterested.tech/circle-logo.png",
        width: 1200,
        height: 630,
        alt: "Dr. Interested 2025 Semi-Annual Impact Report - Healthcare Education Impact",
        type: "image/png",
      },
      {
        url: "https://impact2025.drinterested.tech/logo.png",
        width: 800,
        height: 800,
        alt: "Dr. Interested Logo",
        type: "image/png",
      },
    ],
    article: {
      publishedTime: "2025-01-01T00:00:00.000Z",
      modifiedTime: "2025-01-01T00:00:00.000Z",
      section: "Healthcare Education",
      tags: [
        "healthcare education",
        "impact report",
        "student mentorship",
        "medical careers",
        "high school programs",
        "healthcare workforce development",
      ],
      authors: ["https://drinterested.tech/members"],
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@DrInterested",
    creator: "@DrInterested",
    title: "Dr. Interested 2025 Impact Report - Empowering Future Healthcare Professionals",
    description:
      "📊 Our 2025 Semi-Annual Impact Report is here! Discover how we've empowered 500+ students to explore healthcare careers. #HealthcareEducation #StudentMentorship #MedicalCareers",
    images: [
      {
        url: "https://impact2025.drinterested.tech/impact-report-twitter.png",
        alt: "Dr. Interested 2025 Semi-Annual Impact Report",
      },
    ],
  },
  alternates: {
    canonical: "https://impact2025.drinterested.tech",
    languages: {
      "en-US": "https://impact2025.drinterested.tech",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    { rel: "icon", url: "/favicon.ico", sizes: "any" },
    { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png", sizes: "180x180" },
    { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png", sizes: "192x192" },
    { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png", sizes: "512x512" },
  ],
  manifest: "/site.webmanifest",
  generator: "Next.js",
  applicationName: "Dr. Interested Impact Report",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://impact2025.drinterested.tech"),
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification-code",
  },
  other: {
    "msapplication-TileColor": "#405862",
    "theme-color": "#405862",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#405862" },
    { media: "(prefers-color-scheme: dark)", color: "#4ecdc4" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
}

const impactReportSchema = {
  "@context": "https://schema.org",
  "@type": "Report",
  "@id": "https://impact2025.drinterested.tech/#report",
  name: "Dr. Interested 2025 Semi-Annual Impact Report",
  description:
    "Comprehensive impact assessment of Dr. Interested's healthcare education programs, showcasing student outcomes, program growth, and community impact metrics for July-December 2024.",
  url: "https://impact2025.drinterested.tech",
  datePublished: "2025-01-01",
  dateModified: "2025-01-01",
  inLanguage: "en-US",
  author: {
    "@type": "Organization",
    name: "Dr. Interested",
    url: "https://drinterested.tech",
    logo: "https://drinterested.tech/logo.png",
    sameAs: [
      "https://www.instagram.com/dr.interested/",
      "https://www.linkedin.com/company/dr-interested",
      "https://discord.gg/pzbGRgsGXY",
    ],
  },
  publisher: {
    "@type": "Organization",
    name: "Dr. Interested",
    url: "https://drinterested.tech",
    logo: {
      "@type": "ImageObject",
      url: "https://drinterested.tech/logo.png",
      width: 800,
      height: 800,
    },
  },
  about: {
    "@type": "Thing",
    name: "Healthcare Education Impact",
    description: "Assessment of educational programs designed to prepare high school students for healthcare careers",
  },
  keywords: "healthcare education, student mentorship, medical careers, impact assessment, educational outcomes",
  mainEntity: {
    "@type": "EducationalOrganization",
    name: "Dr. Interested",
    description:
      "Student-led organization empowering high school students to explore healthcare careers through education, mentorship, and hands-on experiences",
    url: "https://drinterested.tech",
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://drinterested.tech/#organization",
  name: "Dr. Interested",
  alternateName: ["Dr Interested", "Doctor Interested"],
  url: "https://drinterested.tech",
  logo: "https://drinterested.tech/logo.png",
  image: "https://drinterested.tech/logo.png",
  description:
    "Dr. Interested is a student-led organization dedicated to empowering high school students to explore careers in healthcare through comprehensive education, mentorship programs, and hands-on experiences.",
  foundingDate: "2020",
  sameAs: [
    "https://www.instagram.com/dr.interested/",
    "https://www.linkedin.com/company/dr-interested",
    "https://discord.gg/pzbGRgsGXY",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "admin@drinterested.tech",
    contactType: "customer service",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
    audienceType: "high school students interested in healthcare careers",
  },
  educationalCredentialAwarded: "Volunteer Hours Certificate",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Healthcare Education Programs",
    itemListElement: [
      {
        "@type": "Course",
        name: "Healthcare Career Exploration",
        description: "Comprehensive program introducing students to various healthcare career paths",
      },
      {
        "@type": "Course",
        name: "Medical Research Mentorship",
        description: "Hands-on research experience with healthcare professionals",
      },
    ],
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Dr. Interested",
      item: "https://drinterested.tech",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Impact Reports",
      item: "https://impact2025.drinterested.tech",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "2025 Semi-Annual Report",
      item: "https://impact2025.drinterested.tech",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-6MYCRFPPGE" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6MYCRFPPGE', {
              page_title: 'Dr. Interested 2025 Impact Report',
              page_location: 'https://impact2025.drinterested.tech',
              content_group1: 'Impact Report',
              content_group2: '2025 Semi-Annual'
            });
          `}
        </Script>

        {/* Structured Data */}
        <Script id="impact-report-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(impactReportSchema)}
        </Script>
        <Script id="organization-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(organizationSchema)}
        </Script>
        <Script id="breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(breadcrumbSchema)}
        </Script>

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.canva.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://drinterested.tech" />
        <link rel="dns-prefetch" href="https://discord.gg" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SeoSchema schema={impactReportSchema} />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1" role="main">
              {children}
            </main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
