import React from "react";
import Image from "next/image";

export default function WhyThisPackage() {
  return (
    <section className="w-full py-24 bg-white" id="why-this-package">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/heat-pump.webp"
                alt="Heat pump system"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="hidden lg:flex absolute -bottom-6 -right-6 w-24 h-24 bg-green-100 rounded-2xl items-center justify-center shadow-lg">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>

          <div>
            <div className="mb-12">
              <h2 className="text-4xl font-light text-gray-900 mb-4">
                Why This Package Shines
              </h2>
              <div className="w-16 h-px bg-gray-300"></div>
            </div>

            <div className="space-y-6">
              <div className="group">
                <div className="bg-gray-50 rounded-2xl p-6 transition-all duration-300 hover:bg-white hover:shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Slash Your Bills
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        Tap into free solar electricity—expect thermal energy that costs next to nothing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-gray-50 rounded-2xl p-6 transition-all duration-300 hover:bg-white hover:shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Ultra‑Quiet. Ultra‑Efficient
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        Bosch Compress 5800i AW delivers heat even in freezing temps, while barely whispering.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-gray-50 rounded-2xl p-6 transition-all duration-300 hover:bg-white hover:shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        All‑Around Convenience
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        From planning to professional install—no surprises, no hassle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-gray-50 rounded-2xl p-6 transition-all duration-300 hover:bg-white hover:shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Cash In on Grants
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        Financing is easy, and with subsidies, starting around €7,800 makes it a smart move.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}