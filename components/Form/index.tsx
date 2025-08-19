'use client'

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import useSWRMutation from "swr/mutation";
import { FormData, SignUpHandler } from "@/utils/Server/SignUp";

export default function Form() {
  const searchParams = useSearchParams();
  const signupId = searchParams.get('signupId');
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    email: '',
    signupId: signupId || ''
  });
  const [successData, setSuccessData] = useState<{ name: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const { trigger, isMutating, error } = useSWRMutation('/api/signup', SignUpHandler);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (errorMessage) setErrorMessage('');

    try {
      const result = await trigger(formData);

      if (result && result.status === 'success' && result.data) {
        setSuccessData({ name: result.data.name });
        setFormData({ name: '', surname: '', email: '', signupId: signupId || '' });
      } else {
        setErrorMessage(result?.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Network error. Please check your connection and try again.');
    }
  };

  const getButtonText = () => {
    if (isMutating) {
      return 'Submitting...';
    }
    if (successData) {
      return 'Thank You!';
    }
    return "Let's Calculate Your Savings";
  };

  const getButtonClasses = () => {
    const baseClasses = "w-full px-6 py-4 rounded-md text-lg font-bold transition-all duration-150 active:scale-97 cursor-pointer";
    
    if (isMutating) {
      return `${baseClasses} bg-gray-400 text-white cursor-not-allowed`;
    }
    if (successData) {
      return `${baseClasses} bg-green-500 text-white hover:bg-green-600`;
    }
    return `${baseClasses} bg-[#ffd233] text-black hover:bg-[#ffd233]/90`;
  };

  return (
    <section className="w-full lg:max-w-6/12 mx-auto sm:px-8 sm:py-12" id="signup-form">
      <div className="bg-white rounded-lg shadow-lg p-12 border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-neutral-950 mb-2">
            Ready to Transform Your Home?
          </h2>
          <p className="text-gray-600">
            Join thousands of homeowners who&apos;ve already switched to solar-powered heating. 
            Get your personalized savings estimate in just 30 seconds!
          </p>
        </div>

        {successData ? (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-950">
              Welcome, {successData.name}! 🎉
            </h3>
            <p className="text-gray-600">
              Your journey to a greener home starts now. We&apos;ll be in touch within 24 hours with your personalized savings estimate.
            </p>
            <button
              onClick={() => setSuccessData(null)}
              className={getButtonClasses()}
            >
              {getButtonText()}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                First Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="w-full px-4 py-3 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-[#ffd233] focus:border-transparent transition-all duration-200"
                disabled={isMutating}
                required
                aria-describedby={errorMessage ? 'error-message' : undefined}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="surname" className="block text-sm font-medium text-gray-700">
                Last Name *
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleInputChange}
                placeholder="Surname"
                className="w-full px-4 py-3 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-[#ffd233] focus:border-transparent transition-all duration-200"
                disabled={isMutating}
                required
                aria-describedby={errorMessage ? 'error-message' : undefined}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="example@gmail.com"
                className="w-full px-4 py-3 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-[#ffd233] focus:border-transparent transition-all duration-200"
                disabled={isMutating}
                required
                aria-describedby={errorMessage ? 'error-message' : undefined}
              />
            </div>

            {(errorMessage || error) && (
              <div 
                id="error-message"
                className="p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm"
                role="alert"
              >
                {errorMessage || (error instanceof Error ? error.message : 'An error occurred')}
              </div>
            )}

            <button
              type="submit"
              className={getButtonClasses()}
              disabled={isMutating}
              aria-label={isMutating ? 'Submitting form' : 'Submit form'}
            >
              {isMutating && (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              {getButtonText()}
            </button>

            <p className="text-xs text-gray-500 text-center">
              By submitting this form, you agree to receive communications about solar-powered heating solutions. 
              We respect your privacy and will never share your information.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}