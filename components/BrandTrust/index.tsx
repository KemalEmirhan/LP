import React from "react";

export default function BrandTrust() {
  return (
    <section className="w-full py-24 bg-white" id="brand-trust">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Trust & Proof Points
          </h2>
          <div className="w-16 h-px bg-gray-300 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Market Leader */}
          <div className="group">
            <div className="bg-gray-50 rounded-2xl p-8 transition-[background-color,box-shadow] duration-150 hover:bg-white hover:shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Market Leader
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Germany&apos;s go-to provider for solar & heat tech, backed by{" "}
                <span className="font-medium text-blue-600">TÜV-rated customer experience</span>.
              </p>
            </div>
          </div>

          {/* Proven Results */}
          <div className="group">
            <div className="bg-gray-50 rounded-2xl p-8 transition-[background-color,box-shadow] duration-150 hover:bg-white hover:shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Proven Results
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Families slash up to{" "}
                <span className="font-bold text-green-600 text-xl">75%</span>{" "}
                off energy costs with this combined setup.
              </p>
            </div>
          </div>

          {/* Award-Winning */}
          <div className="group">
            <div className="bg-gray-50 rounded-2xl p-8 transition-[background-color,box-shadow] duration-150 hover:bg-white hover:shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Award-Winning
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Recognized as market-leading in both{" "}
                <span className="font-medium text-yellow-600">solar and heat sectors</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
          <div className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center transition-colors duration-150 group-hover:bg-blue-200">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-900">TÜV Certified</p>
              <p className="text-sm text-gray-600">Quality Assured</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center transition-colors duration-150 group-hover:bg-green-200">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-900">50,000+ Families</p>
              <p className="text-sm text-gray-600">Trusted Choice</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center transition-colors duration-150 group-hover:bg-purple-200">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-900">24/7 Support</p>
              <p className="text-sm text-gray-600">Always Here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}