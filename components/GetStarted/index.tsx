import React from "react";
import Image from "next/image";

export default function GetStarted() {
  return (
    <section className="w-full py-24 bg-white" id="get-started">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-12">
              <h2 className="text-4xl font-light text-gray-900 mb-4">
                Get Started in Three Effortless Steps
              </h2>
              <div className="w-16 h-px bg-gray-300"></div>
            </div>

            <div className="space-y-6">
              <div className="group">
                <div className="bg-gray-50 rounded-2xl p-6 transition-[background-color,box-shadow] duration-150 hover:bg-white hover:shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-150 group-hover:bg-blue-200">
                      <span className="text-blue-600 font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Estimate Your Savings
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        In just a minute, see how much you could save.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-gray-50 rounded-2xl p-6 transition-[background-color,box-shadow] duration-150 hover:bg-white hover:shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-150 group-hover:bg-green-200">
                      <span className="text-green-600 font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Receive a Custom Plan
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        No-obligation proposal with everything tailored to your home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-gray-50 rounded-2xl p-6 transition-[background-color,box-shadow] duration-150 hover:bg-white hover:shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-150 group-hover:bg-purple-200">
                      <span className="text-purple-600 font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Relax While We Install
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        Installation happens in about 4 weeks, by local experts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/get-started.webp"
                alt="Get started with solar and heat pump installation"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="hidden lg:flex absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-2xl items-center justify-center shadow-lg">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
