import Image from "next/image"
import Link from "next/link"
import { CheckSquare } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <Link href="https://hoppier.com/" className="text-3xl font-medium text-slate-800">
          hoppier
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="https://app.hoppier.com/" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Sign In
          </Link>
          <div className="relative group">
          </div>
          <Link href="https://hoppier.com/catalog" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Catalog
          </Link>
          <Link href="https://hoppier.com/pricing" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Pricing
          </Link>
          <Link
            href="https://hoppier.com/get-started"
            className="bg-emerald-1000 hover:bg-emerald-1050 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
          >
            SEE IT IN ACTION
          </Link>
        </nav>
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-blue-50 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-600 leading-tight">
                  Easily Send Employee Rewards & Client Gifts to 60+ Countries.
                  <span className="block mt-2">In Minutes, Not Hours.</span>
                </h1>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckSquare className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">Send lunch, coffee, gifts, and more!</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">Recover 100% of your unused funds.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">Improve recognition and engagement.</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Link
                    href="https://hoppier.com/get-started"
                    className="bg-emerald-1000 hover:bg-emerald-1050 text-white px-6 py-3 rounded text-lg font-medium transition-colors inline-block w-full md:w-auto text-center"
                  >
                    Start sending cards
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=32&width=32`}
                          alt="Customer"
                          width={32}
                          height={32}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-1 font-semibold">4.8</span>
                  </div>
                  <span className="text-sm text-slate-600">1200+ Happy Customers</span>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Hoppier Card Interface"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-12 italic">
              The Best Places to Work in 60+ Countries Use Hoppier. Does Yours?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {["Shopify", "Amazon", "Pixlee", "Philips", "Roots", "LinkedIn"].map((brand) => (
                <div key={brand} className="h-12 flex items-center justify-center">
                  <Image
                    src={`/placeholder.svg?height=48&width=120&text=${brand}`}
                    alt={brand}
                    width={120}
                    height={48}
                    className="max-h-12 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-12">
              The old way vs <span className="bg-indigo-600 text-white px-2 py-1">Hoppier way</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">The Old Way</h3>
                <ul className="text-left space-y-3">
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-red-500 flex-shrink-0"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                    <span>Manual gift card purchases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-red-500 flex-shrink-0"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                    <span>Limited international options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-red-500 flex-shrink-0"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                    <span>Unused funds are lost</span>
                  </li>
                </ul>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">The Hoppier Way</h3>
                <ul className="text-left space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckSquare className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span>Automated digital cards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span>Available in 60+ countries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span>100% of unused funds returned</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">hoppier</h3>
              <p className="text-slate-300">The modern way to send rewards and gifts globally.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="https://hoppier.com/pricing" className="text-slate-300 hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="https://hoppier.com/catalog" className="text-slate-300 hover:text-white">
                    Catalog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="https://hoppier.com/blog" className="text-slate-300 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="https://hoppier.com/get-started" className="text-slate-300 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="https://hoppier.com/privacy-policy" className="text-slate-300 hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="https://hoppier.com/terms" className="text-slate-300 hover:text-white">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>© {new Date().getFullYear()} Hoppier. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}
