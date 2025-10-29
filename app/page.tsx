"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Code2, Zap, Database, Layers, Github, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".fade-in-section")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-white">
              <Image
                src="/images/nextblock-logo-small.webp"
                alt="NextBlock logo"
                fill
                priority
                className="object-contain"
                sizes="64px"
              />
            </div>
            <span className="text-xl font-bold text-white">NextBlock</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-gray-400 transition-colors hover:text-white">
              Features
            </a>
            <a href="#benefits" className="text-sm text-gray-400 transition-colors hover:text-white">
              Why NextBlock
            </a>
            <a
              href="https://github.com/Webman-Dev/nextblock"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              GitHub
            </a>
            <a href="https://github.com/Webman-Dev/nextblock-monorepo/tree/master/docs" target="_blank">
              <Button variant="outline" className="border-white/10 bg-transparent text-white hover:bg-white/50 hover:cursor-pointer">
                Documentation
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="fade-in-section mx-auto max-w-4xl text-center opacity-0">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
            <Github className="h-4 w-4" />
            Open Source & Free Forever
          </div>

          <h1 className="mb-6 bg-linear-to-br from-white via-white to-gray-400 bg-clip-text text-6xl font-bold leading-tight tracking-tight text-transparent md:text-7xl lg:text-8xl">
            Build Better,
            <br />
            <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Build Faster
            </span>
          </h1>

          <p className="mx-auto mb-4 max-w-2xl text-balance text-xl leading-relaxed text-gray-300 md:text-2xl">
            The Modern CMS WordPress Wishes It Was
          </p>

          <p className="mx-auto mb-10 max-w-2xl text-balance text-lg leading-relaxed text-gray-400">
            NextBlock is the open-source content management framework built with Next.js, Tailwind CSS, Supabase, and
            Vercel. Say goodbye to WordPress bloat and hello to blazing-fast performance and modern development.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="group h-12 gap-2 bg-linear-to-r from-blue-500 to-purple-600 px-8 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/40"
            >
              <a href="https://github.com/Webman-Dev/nextblock" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                View on GitHub
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <a href="https://github.com/Webman-Dev/nextblock-monorepo/tree/master/docs" target="_blank">
            <Button
              size="lg"
              variant="outline"
              className="h-12 border-white/10 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:cursor-pointer"
            >
              Read Documentation
            </Button>
            </a>
          </div>

          {/* Hero Visual */}
          <div className="relative mt-16">
            <div className="absolute inset-0 -z-10 bg-linear-to-r from-blue-500/20 to-purple-600/20 blur-3xl"></div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-[#1a1a2e] to-[#0f0f1e] p-1 shadow-2xl">
              <div className="rounded-xl bg-[#0a0a0f] p-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 text-xs text-gray-500">Terminal</span>
                  </div>
                  <pre className="text-left text-sm leading-relaxed text-gray-300">
                    <code>
                      <span className="text-blue-400">$</span> npm create nextblock{"\n"}
                      <span className="text-gray-500">Need to install the following packages:</span>
                      {"\n"}
                      <span className="text-gray-500">create-nextblock@0.0.1</span>
                      {"\n"}
                      <span className="text-gray-500">Ok to proceed? (y)</span>{" "}
                      <span className="text-green-400">y</span>
                      {"\n"}
                      {"\n"}
                      <span className="text-purple-400">&gt;</span>{" "}
                      <span className="text-gray-400">@nextblock-cms/source@0.0.1 npx</span>
                      {"\n"}
                      <span className="text-purple-400">&gt;</span>{" "}
                      <span className="text-gray-400">create-nextblock</span>
                      {"\n"}
                      {"\n"}
                      <span className="text-cyan-400">?</span>{" "}
                      <span className="text-white">What is your project named?</span>{" "}
                      <span className="text-gray-500">(nextblock-cms)</span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <div className="fade-in-section mx-auto max-w-6xl opacity-0">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Everything WordPress can&apos;t do,{" "}
              <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                out of the box
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-balance text-lg text-gray-400">
              A complete framework with modern architecture, not a legacy platform held together by plugins
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Next.js Powered",
                description:
                  "Built on Next.js 16 with App Router, React Server Components, and automatic optimization for blazing-fast performance.",
                gradient: "from-yellow-500 to-orange-600",
              },
              {
                icon: Code2,
                title: "Component-Based",
                description:
                  "Build with React components and Tailwind CSS. Reusable, maintainable code instead of messy PHP templates.",
                gradient: "from-blue-500 to-cyan-600",
              },
              {
                icon: Database,
                title: "Supabase Backend",
                description:
                  "PostgreSQL database with real-time subscriptions, authentication, and storage. All the backend you need, built-in.",
                gradient: "from-green-500 to-emerald-600",
              },
              {
                icon: Layers,
                title: "Headless & Flexible",
                description:
                  "Use as headless CMS, traditional site builder, or anything in between. Your content, your way.",
                gradient: "from-purple-500 to-pink-600",
              },
              {
                icon: Github,
                title: "Git-Based Workflow",
                description:
                  "Version control for content and code. Branch, merge, and deploy with confidence like a real application.",
                gradient: "from-red-500 to-rose-600",
              },
              {
                icon: Zap,
                title: "Deploy on Vercel",
                description:
                  "One-click deployment to Vercel's global edge network. Instant page loads with automatic scaling and zero config.",
                gradient: "from-indigo-500 to-purple-600",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-white/10 bg-linear-to-br from-white/5 to-white/2 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
              >
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${feature.gradient} shadow-lg`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="leading-relaxed text-gray-400">{feature.description}</p>
                <div
                  className={`absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-linear-to-br ${feature.gradient} opacity-0 blur-3xl transition-opacity group-hover:opacity-20`}
                ></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="container mx-auto px-6 py-20">
        <div className="fade-in-section mx-auto max-w-6xl opacity-0">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                Leave WordPress{" "}
                <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  in the dust
                </span>
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-400">
                Stop fighting with outdated technology. NextBlock gives you a modern, open-source framework that scales
                from personal blogs to enterprise applications.
              </p>
              <ul className="space-y-4">
                {[
                  "100% free and open source—no hidden costs",
                  "Modern React + Next.js architecture",
                  "Full TypeScript support with type safety",
                  "Supabase for database, auth, and storage",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-purple-600">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -z-10 bg-linear-to-r from-blue-500/10 to-purple-600/10 blur-3xl"></div>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-[#1a1a2e] to-[#0f0f1e] p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4">
                    <span className="text-sm text-gray-400">Page Load Time</span>
                    <span className="font-mono text-lg font-bold text-green-400">0.3s</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4">
                    <span className="text-sm text-gray-400">Build Time</span>
                    <span className="font-mono text-lg font-bold text-green-400">12s</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4">
                    <span className="text-sm text-gray-400">Lighthouse Score</span>
                    <span className="font-mono text-lg font-bold text-blue-400">100</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4">
                    <span className="text-sm text-gray-400">vs WordPress</span>
                    <span className="font-mono text-lg font-bold text-purple-400">100x</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container mx-auto px-6 py-20">
        <div className="fade-in-section mx-auto max-w-6xl opacity-0">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Developers are{" "}
              <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                making the switch
              </span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "Migrated from WordPress in a weekend. NextBlock is everything I wished WordPress could be—fast, modern, and actually enjoyable to work with.",
                author: "Sarah Chen",
                role: "Full Stack Developer",
                avatar: "/images/developer-woman.webp",
              },
              {
                quote:
                  "Finally, a CMS that doesn't feel like it's from 2005. The component-based architecture is a game changer for our team.",
                author: "Michael Rodriguez",
                role: "Engineering Lead at StartupXYZ",
                avatar: "/images/developer-man.webp",
              },
              {
                quote:
                  "We cut our hosting costs by 80% and our sites are 10x faster. Should have left WordPress years ago.",
                author: "Emily Watson",
                role: "Freelance Developer",
                avatar: "/images/engineer-woman.webp",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border-white/10 bg-linear-to-br from-white/5 to-white/2 p-6 backdrop-blur-sm"
              >
                <p className="mb-6 leading-relaxed text-gray-300">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full border-2 border-white/10 object-cover"
                    sizes="48px"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="fade-in-section mx-auto max-w-4xl opacity-0">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 p-12 text-center backdrop-blur-sm">
            <div className="absolute inset-0 -z-10 bg-linear-to-r from-blue-500/20 to-purple-600/20 blur-3xl"></div>
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Ready to build something amazing?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-balance text-lg text-gray-300">
              Join the community of developers building faster, better websites with NextBlock. 100% free and open
              source forever.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="group h-12 gap-2 bg-linear-to-r from-blue-500 to-purple-600 px-8 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/40"
              >
                <a href="https://github.com/Webman-Dev/nextblock" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  Get Started on GitHub
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <a href="https://github.com/Webman-Dev/nextblock-monorepo/tree/master/docs" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="h-12 border-white/10 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:cursor-pointer"
              >
                View Documentation
              </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#0a0a0f]">
        <div className="container mx-auto px-6 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-white">
                  <Image
                    src="/images/nextblock-logo-small.webp"
                    alt="NextBlock logo"
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
                <span className="text-xl font-bold text-white">NextBlock</span>
              </div>
              <p className="text-sm text-gray-400">
                The modern, open-source content management framework. WordPress, but better.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#features" className="transition-colors hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Migration Guide
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Webman-Dev/nextblock"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">Community</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="https://dev.to/nextblockcms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Webman-Dev/nextblock"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    Contributing
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">Connect</h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Webman-Dev/nextblock"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/NextBlockCMS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nextblock/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              <div className="mt-4">
                <a
                  href="https://www.npmjs.com/~nextblockcms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  View on NPM →
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-white/5 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 NextBlock. Open source and free forever.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
