'use client';

import { useState } from 'react';

export default function CourseEnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    course: 'Complete Digital Marketing Course (6 Months)',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          city: '', 
          course: 'Complete Digital Marketing Course (6 Months)', 
          message: '' 
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info Cards */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-3 mb-6 shadow-lg">
                <span className="text-2xl mr-3">🎓</span>
                <span className="font-bold">Enroll Now & Save 20%!</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Start Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Digital Marketing</span> Journey Today!
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join 500+ successful students who transformed their careers with our comprehensive Digital Marketing Course in Varanasi! 🚀
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Course Fee Card */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border-2 border-blue-200 hover:shadow-xl transition-all">
                <div className="text-3xl mb-2">💰</div>
                <div className="text-3xl font-black text-blue-900 mb-1">₹30,000</div>
                <div className="text-sm text-blue-700 font-semibold">Course Fee Only</div>
                <div className="text-xs text-blue-600 mt-1">EMI from ₹5K/mo</div>
              </div>

              {/* Duration Card */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border-2 border-purple-200 hover:shadow-xl transition-all">
                <div className="text-3xl mb-2">📅</div>
                <div className="text-3xl font-black text-purple-900 mb-1">6 Months</div>
                <div className="text-sm text-purple-700 font-semibold">Duration</div>
                <div className="text-xs text-purple-600 mt-1">24 weeks training</div>
              </div>

              {/* Placement Card */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border-2 border-green-200 hover:shadow-xl transition-all">
                <div className="text-3xl mb-2">💼</div>
                <div className="text-3xl font-black text-green-900 mb-1">100%</div>
                <div className="text-sm text-green-700 font-semibold">Job Assistance</div>
                <div className="text-xs text-green-600 mt-1">Guaranteed support</div>
              </div>

              {/* Certifications Card */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border-2 border-orange-200 hover:shadow-xl transition-all">
                <div className="text-3xl mb-2">📜</div>
                <div className="text-3xl font-black text-orange-900 mb-1">Google</div>
                <div className="text-sm text-orange-700 font-semibold">Certifications</div>
                <div className="text-xs text-orange-600 mt-1">+ Meta Blueprint</div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900">500+ Students</div>
                  <div className="text-sm text-gray-600">Successfully Trained</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">★</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">4.9 Rating</div>
                  <div className="text-sm text-gray-600">Student Reviews</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">%</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">100% Practical</div>
                  <div className="text-sm text-gray-600">Live Projects</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-blue-100">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">📝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Course Enquiry Form</h3>
              <p className="text-gray-600">Get 20% early bird discount this month!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-900"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-900"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-900"
                  placeholder="10-digit mobile number"
                />
              </div>

              {/* City Field */}
              <div>
                <label htmlFor="city" className="block text-sm font-bold text-gray-900 mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-900"
                  placeholder="Varanasi"
                />
              </div>

              {/* Course Selection */}
              <div>
                <label htmlFor="course" className="block text-sm font-bold text-gray-900 mb-2">
                  Course Interested In
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-900"
                >
                  <option value="Complete Digital Marketing Course (6 Months)">Complete Digital Marketing Course (6 Months)</option>
                  <option value="Advanced SEO Course">Advanced SEO Course</option>
                  <option value="AI Models for Marketing">AI Models for Marketing</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Social Media Marketing">Social Media Marketing</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none text-gray-900"
                  placeholder="Any specific questions or preferences..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 shadow-xl hover:shadow-2xl'
                } text-white flex items-center justify-center gap-2`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Enquiry</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-4 flex items-center gap-3 animate-fade-in">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800">Enquiry Sent Successfully! 🎉</h4>
                    <p className="text-sm text-green-700">We&apos;ll contact you within 2 hours.</p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border-2 border-red-500 rounded-xl p-4 flex items-center gap-3 animate-fade-in">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">!</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-800">Oops! Something went wrong</h4>
                    <p className="text-sm text-red-700">Please call us at +91 83695-11877</p>
                  </div>
                </div>
              )}
            </form>

            {/* Trust Badge */}
            <div className="mt-6 pt-6 border-t border-gray-300 text-center">
              <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Your information is 100% secure with us
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
