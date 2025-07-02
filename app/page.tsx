import { ArrowLeft, Instagram, Linkedin, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function ImpactReportPDF() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-white border-2 border-teal-500 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex items-baseline space-x-1">
                <span className="text-xl font-bold text-gray-800">Dr.</span>
                <span className="text-xl font-bold text-teal-500">Interested</span>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="https://drinterested.tech" className="text-gray-600 hover:text-teal-500 transition-colors">
                Home
              </Link>
              <Link
                href="https://drinterested.tech/our-work"
                className="text-gray-600 hover:text-teal-500 transition-colors"
              >
                Our Work
              </Link>
              <Link
                href="https://drinterested.tech/events"
                className="text-gray-600 hover:text-teal-500 transition-colors"
              >
                Events
              </Link>
              <Link
                href="https://drinterested.tech/blog"
                className="text-gray-600 hover:text-teal-500 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="https://drinterested.tech/members"
                className="text-gray-600 hover:text-teal-500 transition-colors"
              >
                Members
              </Link>
              <Link
                href="https://drinterested.tech/contact"
                className="text-gray-600 hover:text-teal-500 transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link href="https://drinterested.tech">
                <Button className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 rounded-md flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back Home</span>
                </Button>
              </Link>
              <div className="hidden md:flex items-center space-x-2">
                <Link href="https://discord.gg/pzbGRgsGXY" className="text-gray-600 hover:text-teal-500">
                  <Globe className="w-5 h-5" />
                </Link>
                <Link href="https://www.instagram.com/dr.interested/" className="text-gray-600 hover:text-teal-500">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/dr-interested"
                  className="text-gray-600 hover:text-teal-500"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* PDF Viewer */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Impact Report - First Half of 2025</h1>
          <p className="text-gray-600">Dr. Interested</p>
        </div>

        <div className="flex justify-center">
          <iframe
            src="https://docs.google.com/gview?url=https://drive.google.com/file/d/11npXSlsru4gD9pHS1cc4LWttPIBHgX8U/view?usp=sharing&embedded=true"
            style={{ width: "100%", maxWidth: "900px", height: "700px" }}
            frameBorder="0"
            title="Dr. Interested Impact Report 2025"
            className="border border-gray-200 rounded-lg shadow-lg bg-white"
          />
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Having trouble viewing the PDF?
            <a
              href="https://drive.google.com/file/d/11npXSlsru4gD9pHS1cc4LWttPIBHgX8U/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-600 ml-1"
            >
              Click here to open in a new tab
            </a>
          </p>
        </div>
      </main>

      {/* Footer - Exact match to the image */}
      <footer className="bg-slate-700 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-teal-400 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-teal-400 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-baseline space-x-1">
                  <span className="text-lg font-bold text-white">Dr.</span>
                  <span className="text-lg font-bold text-teal-400">Interested</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Inspiring the next generation of healthcare professionals through education, collaboration, and
                meaningful experiences.
              </p>
              <div className="flex items-center space-x-3">
                <Link href="https://www.instagram.com/dr.interested/" className="text-gray-300 hover:text-teal-400">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/dr-interested"
                  className="text-gray-300 hover:text-teal-400"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="https://discord.gg/pzbGRgsGXY" className="text-gray-300 hover:text-teal-400">
                  <Globe className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-teal-400">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="https://drinterested.tech" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://drinterested.tech/our-work"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://drinterested.tech/events"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://drinterested.tech/blog"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://drinterested.tech/members"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Members
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://drinterested.tech/contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="font-semibold mb-4 text-teal-400">Contact Us</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-teal-400 font-medium">Administration</p>
                  <p className="text-gray-300">admin@drinterested.tech</p>
                </div>
                <div>
                  <p className="text-teal-400 font-medium">Human Resources</p>
                  <p className="text-gray-300">hr@drinterested.tech</p>
                </div>
                <div>
                  <p className="text-teal-400 font-medium">Outreach</p>
                  <p className="text-gray-300">outreach@drinterested.tech</p>
                </div>
              </div>
            </div>

            {/* Stay Updated */}
            <div>
              <h4 className="font-semibold mb-4 text-teal-400">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-4">Subscribe for the latest events and opportunities.</p>
              <div className="space-y-3">
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-slate-600 border-slate-500 text-white placeholder-gray-400"
                />
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">Subscribe</Button>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                By subscribing, you agree to our{" "}
                <Link href="#" className="text-teal-400 hover:text-teal-300">
                  Terms
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-teal-400 hover:text-teal-300">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-slate-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Dr. Interested. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-teal-400 text-sm">
                Terms & Conditions
              </Link>
              <span className="text-gray-500">•</span>
              <Link href="#" className="text-gray-400 hover:text-teal-400 text-sm">
                Privacy Policy
              </Link>
              <button className="text-gray-400 hover:text-teal-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
