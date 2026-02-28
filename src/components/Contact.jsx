const Contact = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-gradient-to-br from-white to-[#F8FAFC] py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-medium text-[#64748B] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#F59E0B] animate-pulse" />
            Get in Touch
          </div>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
            Start Your Nepal Adventure
          </h2>
          <p className="mx-auto max-w-3xl text-balance text-lg text-[#64748B]">
            Ready to explore the Himalayas? Share your travel dreams with us and let our local experts 
            craft the perfect journey. We respond within 24 hours.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] rounded-3xl opacity-10 blur"></div>
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] p-3">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0F172A]">Send Us a Message</h3>
                    <p className="text-xs sm:text-sm text-[#64748B]">We'll get back to you within 24 hours</p>
                  </div>
                </div>
                
                <form className="space-y-4 sm:space-y-6">
                  <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs sm:text-sm font-medium text-[#0F172A]">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-[#E2E8F0] bg-white px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-[#0F172A] shadow-inner shadow-slate-100 outline-none transition placeholder:text-[#94A3B8] focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/20"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-xs sm:text-sm font-medium text-[#0F172A]"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-[#E2E8F0] bg-white px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-[#0F172A] shadow-inner shadow-slate-100 outline-none transition placeholder:text-[#94A3B8] focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/20"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-xs sm:text-sm font-medium text-[#0F172A]"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="w-full rounded-xl border border-[#E2E8F0] bg-white px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-[#0F172A] shadow-inner shadow-slate-100 outline-none transition placeholder:text-[#94A3B8] focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-xs sm:text-sm font-medium text-[#0F172A]"
                    >
                      Tell Us About Your Dream Trip *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Share your travel dates, interests, group size, and any special requests..."
                      className="w-full resize-none rounded-xl border border-[#E2E8F0] bg-white px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-[#0F172A] shadow-inner shadow-slate-100 outline-none transition placeholder:text-[#94A3B8] focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/20"
                      required
                    />
                  </div>
                  
                  <div className="flex items-center gap-2 sm:gap-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="rounded border-[#E2E8F0] text-[#1E3A8A] focus:ring-[#1E3A8A] h-4 w-4"
                    />
                    <label htmlFor="newsletter" className="text-xs sm:text-sm text-[#64748B]">
                      Send me travel tips and special offers
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] px-4 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                  >
                    Send Message →
                  </button>
                  
                  <p className="text-xs text-[#64748B] text-center mt-3">
                    By submitting, you agree to be contacted by Himalayan Horizons Travel with trip information.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-lg sm:text-2xl font-bold text-[#0F172A] mb-4 sm:mb-6">Visit Our Office</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md border border-[#E2E8F0]">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="rounded-full bg-blue-100 p-2 sm:p-3">
                      <svg className="h-4 w-4 sm:h-6 sm:w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F172A] mb-2 text-sm sm:text-base">Kathmandu Headquarters</h4>
                      <p className="text-[#64748B] leading-relaxed text-xs sm:text-sm">
                        Himalayan Horizons Travel Pvt. Ltd.<br />
                        Jyatha, Thamel, Kathmandu 44600<br />
                        Nepal
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md border border-[#E2E8F0]">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="rounded-full bg-green-100 p-2 sm:p-3">
                      <svg className="h-4 w-4 sm:h-6 sm:w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13 2.257a1 1 0 001.21.502l4.493 1.498a1 1 0 00.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 21 3s-6.716-3-6-3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F172A] mb-2 text-sm sm:text-base">Phone Numbers</h4>
                      <div className="space-y-1 text-[#64748B] text-xs sm:text-sm">
                        <p>Office: +977-1-4412345</p>
                        <p>24/7 Emergency: +977-980-1234567</p>
                        <p>WhatsApp: +977-980-1234567</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md border border-[#E2E8F0]">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="rounded-full bg-purple-100 p-2 sm:p-3">
                      <svg className="h-4 w-4 sm:h-6 sm:w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F172A] mb-2 text-sm sm:text-base">Email Addresses</h4>
                      <div className="space-y-1 text-[#64748B] text-xs sm:text-sm">
                        <p>General: hello@himalayanhorizons.travel</p>
                        <p>Bookings: bookings@himalayanhorizons.travel</p>
                        <p>Support: support@himalayanhorizons.travel</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#F59E0B] to-[#F97316] rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="font-bold">Business Hours</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <p><strong>Kathmandu Time (GMT+5:45)</strong></p>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                  <p className="mt-3 text-sm opacity-90">
                    We typically respond within 24 hours, Monday to Saturday.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] rounded-2xl p-6 text-white">
                <h4 className="font-bold mb-3">Need Quick Help?</h4>
                <p className="text-sm mb-4 opacity-90">
                  Chat with our travel experts instantly on WhatsApp for immediate assistance.
                </p>
                <a
                  href="https://wa.me/9779801234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1E3A8A] transition-all hover:scale-105"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
