const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-gradient-to-br from-white to-[#F8FAFC] py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-medium text-[#64748B] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#1E3A8A]" />
            Our Story
          </div>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
            More Than Just Travel
          </h2>
          <p className="mx-auto max-w-3xl text-balance text-lg text-[#64748B]">
            We're not just a travel company—we're your gateway to authentic Himalayan experiences, 
            crafted with passion, expertise, and a deep love for Nepal.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Story Section */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] rounded-2xl opacity-10 blur"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] p-3">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A]">Himalayan Horizons Travel</h3>
                    <p className="text-sm text-[#64748B]">Established 2010 • Kathmandu, Nepal</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-[#64748B] leading-relaxed">
                  <p>
                    Born in the heart of Kathmandu, Himalayan Horizons Travel is a locally-owned boutique agency 
                    that lives and breathes Nepal. Our team of native travel designers, licensed mountain guides, 
                    and cultural experts create journeys that transcend typical tourism.
                  </p>
                  <p>
                    From the moment you contact us to your final farewell dinner, every detail is thoughtfully 
                    crafted to ensure comfort, safety, and authentic cultural connection.
                  </p>
                </div>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#E2E8F0] transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-[#0F172A] mb-2">Local Expertise</h4>
                <p className="text-sm text-[#64748B]">
                  Native Nepali team with deep regional knowledge and 24/7 on-the-ground support.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#E2E8F0] transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-[#0F172A] mb-2">Authentic Experiences</h4>
                <p className="text-sm text-[#64748B]">
                  Small-group and private journeys with meaningful community engagement.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#E2E8F0] transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-[#0F172A] mb-2">Responsible Travel</h4>
                <p className="text-sm text-[#64748B]">
                  Fair wages for guides and porters, with every trip giving back to mountain communities.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#E2E8F0] transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="rounded-full bg-orange-100 w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-bold text-[#0F172A] mb-2">Safety First</h4>
                <p className="text-sm text-[#64748B]">
                  Licensed guides, comprehensive insurance, and emergency support on all journeys.
                </p>
              </div>
            </div>
          </div>

          {/* Quote and Stats */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#F59E0B] to-[#F97316] rounded-2xl opacity-20 blur"></div>
              <div className="relative bg-gradient-to-br from-[#F59E0B] to-[#F97316] rounded-2xl p-8 text-white">
                <svg className="h-8 w-8 mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4.97v7.391h-9.953z"/>
                  <path d="M5.017 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v7.391h-9.983z"/>
                </svg>
                <blockquote className="text-lg leading-relaxed mb-6">
                  "Our guides aren&apos;t just leaders on the trail—they are storytellers, 
                  guardians of the mountains, and proud hosts eager to share the heart of Nepal with you."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="text-sm">
                    <div className="font-bold">Himalayan Horizons Team</div>
                    <div className="opacity-90">Your Mountain Companions</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 text-center shadow-md border border-[#E2E8F0]">
                <div className="text-3xl font-bold text-[#1E3A8A] mb-2">15+</div>
                <div className="text-sm text-[#64748B]">Years of Excellence</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md border border-[#E2E8F0]">
                <div className="text-3xl font-bold text-[#F59E0B] mb-2">98%</div>
                <div className="text-sm text-[#64748B]">Client Satisfaction</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md border border-[#E2E8F0]">
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-sm text-[#64748B]">Support Available</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md border border-[#E2E8F0]">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-sm text-[#64748B]">Local Guides</div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] rounded-2xl p-8 text-center text-white">
              <h3 className="text-xl font-bold mb-4">Ready to Experience the Real Nepal?</h3>
              <p className="mb-6 opacity-90">
                Let our local experts craft your perfect Himalayan adventure.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1E3A8A] transition-all hover:scale-105 hover:shadow-lg"
              >
                Start Planning Your Journey
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

