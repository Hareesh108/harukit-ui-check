"use client";

import Link from "next/link";
import { useState } from "react";
import { Package as LucidePackage } from "lucide-react";

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("npx harukit@latest init --yes");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-yellow-50/20 text-gray-900 relative overflow-hidden">
      {/* Global background patterns */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.02)_1px,transparent_0)] bg-[length:24px_24px] pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-transparent via-yellow-100/5 to-orange-100/5 pointer-events-none"></div>

      {/* Header */}
      <header className="w-full bg-gradient-to-r from-slate-50/90 via-white/90 to-yellow-50/40 backdrop-blur-xl border-b border-white/30 shadow-lg sticky top-0 z-50 relative overflow-hidden">
        {/* Modern background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.03)_1px,transparent_0)] bg-[length:20px_20px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-100/10 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-xl shadow-lg ring-1 ring-yellow-200/50">
                {/* Image placeholder - uncomment and add your logo */}
                {/* <Image
                  src="/logo/hareesh-bhittam.png"
                  alt="Harukit Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                /> */}
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Harukit UI
                </span>{" "}
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/docs"
                className="flex items-center px-4 py-3 text-gray-700 hover:text-yellow-600 hover:bg-yellow-50/50 rounded-lg font-medium transition-all duration-200 group"
              >
                <svg
                  className="w-5 h-5 mr-3 text-gray-400 group-hover:text-yellow-500 transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Docs
              </Link>

              <Link
                href="https://www.npmjs.com/package/harukit"
                target="_blank"
                className="flex items-center px-2 py-3 text-gray-700 hover:text-yellow-600 hover:bg-yellow-50/50 rounded-lg font-medium transition-all duration-200 group"
              >
                <span className="mr-3 group-hover:text-yellow-500 transition-colors duration-200">
                  <LucidePackage className="w-5 h-5" />
                </span>{" "}
                NPM
              </Link>

              {/* <Link
                href="/components"
                className="text-gray-700 hover:text-yellow-600 font-medium transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-yellow-50/50"
              >
                Components
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              <Link
                href="/examples"
                className="text-gray-700 hover:text-yellow-600 font-medium transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-yellow-50/50"
              >
                Examples
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link> */}
              <Link
                href="https://github.com/Hareesh108/harukit-ui"
                target="_blank"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-lg font-medium hover:from-gray-800 hover:to-gray-700 transition-all duration-300 group shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <svg
                  className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg text-gray-700 hover:text-yellow-600 hover:bg-yellow-50/50 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeMobileMenu}
        ></div>

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-lg shadow-lg">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Harukit UI
              </span>
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Drawer Navigation */}
          <nav className="p-6">
            <div className="space-y-4">
              <Link
                href="/docs"
                onClick={closeMobileMenu}
                className="flex items-center px-4 py-3 text-gray-700 hover:text-yellow-600 hover:bg-yellow-50/50 rounded-lg font-medium transition-all duration-200 group"
              >
                <svg
                  className="w-5 h-5 mr-3 text-gray-400 group-hover:text-yellow-500 transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Docs
              </Link>
              {/* <Link
                href="/components"
                onClick={closeMobileMenu}
                className="flex items-center px-4 py-3 text-gray-700 hover:text-yellow-600 hover:bg-yellow-50/50 rounded-lg font-medium transition-all duration-200 group"
              >
                <svg
                  className="w-5 h-5 mr-3 text-gray-400 group-hover:text-yellow-500 transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                Components
              </Link>
              <Link
                href="/examples"
                onClick={closeMobileMenu}
                className="flex items-center px-4 py-3 text-gray-700 hover:text-yellow-600 hover:bg-yellow-50/50 rounded-lg font-medium transition-all duration-200 group"
              >
                <svg
                  className="w-5 h-5 mr-3 text-gray-400 group-hover:text-yellow-500 transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                Examples
              </Link> */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <Link
                  href="https://github.com/Hareesh108/harukit-ui"
                  target="_blank"
                  onClick={closeMobileMenu}
                  className="flex items-center px-4 py-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-lg font-medium hover:from-gray-800 hover:to-gray-700 transition-all duration-200 group shadow-lg"
                >
                  <svg
                    className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="flex flex-1 flex-col items-center justify-center text-center px-4 py-24 relative">
        {/* Hero background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/30 via-white/50 to-slate-50/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,193,7,0.1)_0%,_transparent_70%)]"></div>

        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Build Modern React Apps <br /> with{" "}
            <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
              Harukit UI
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8 mx-auto">
            A modern CLI tool & React component library — copy, customize, and
            control every piece of your UI. Inspired by{" "}
            <code className="bg-gradient-to-r from-gray-100 to-gray-200 px-2 py-1 rounded-md border border-gray-200/50 font-mono text-sm">
              shadcn/ui
            </code>
            , built for your workflow.
          </p>
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-green-400 text-sm text-left p-4 rounded-xl mb-8 w-full max-w-lg mx-auto shadow-2xl border border-gray-700/50 relative group">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-xs">Terminal</span>
              </div>
              <button
                onClick={copyToClipboard}
                className="opacity-0 group-hover:opacity-100 transition-all duration-300 p-1.5 rounded-md hover:bg-gray-700/50 text-gray-400 hover:text-green-400"
                title="Copy to clipboard"
              >
                {copied ? (
                  <svg
                    className="w-4 h-4 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <pre className="text-green-400 font-mono">
              npx harukit@latest init --yes
            </pre>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
            <Link
              href="/docs"
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 via-yellow-400 to-orange-500 text-white rounded-xl font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-yellow-300/20"
            >
              Get Started
            </Link>
            <Link
              href="https://github.com/Hareesh108/harukit-ui"
              target="_blank"
              className="px-8 py-4 border-2 border-yellow-500/50 text-yellow-600 rounded-xl font-semibold hover:bg-yellow-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 bg-white/50 backdrop-blur-sm"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-8 py-24 relative">
        {/* Features background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white/30 to-yellow-50/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,193,7,0.05)_0%,_transparent_50%)]"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Why Choose Harukit?
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
              Ship faster with fully customizable, beautiful, and accessible
              React components — your code, your control.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/70 backdrop-blur-sm shadow-xl p-8 rounded-2xl border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-white text-xl">🧩</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Copy & Own
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Components live in your codebase — no vendor lock-in. Tweak
                every line to match your design system perfectly.
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm shadow-xl p-8 rounded-2xl border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-white text-xl">🌈</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Beautiful & Accessible
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Pre-built with modern styling and a11y best practices. Focus on
                features, not boilerplate.
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm shadow-xl p-8 rounded-2xl border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-white text-xl">⚡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                CLI Powered
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Add, update, or remove components instantly with the Harukit
                CLI. Simple. Fast. Flexible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 relative">
        {/* Footer background */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100/50 via-white/30 to-yellow-50/30 border-t border-white/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,193,7,0.03)_0%,_transparent_70%)]"></div>

        <div className="relative z-10">
          <p className="text-sm text-gray-600 font-medium">
            © {new Date().getFullYear()} Harukit UI — Crafted by Hareesh
            Bhittam <span className="inline-block animate-bounce">🚀</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
