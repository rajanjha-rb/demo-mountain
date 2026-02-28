const testimonials = [
  {
    name: 'Sophie Martin',
    location: 'Paris, France',
    quote:
      'Every detail was taken care of—from airport pickup to the final farewell dinner. Our Everest Base Camp trek felt safe, meaningful, and unforgettable.',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Rahul Mehta',
    location: 'Mumbai, India',
    quote:
      'We wanted a mix of adventure and family time. Himalayan Horizons designed the perfect Pokhara and Chitwan itinerary around our kids.',
    image:
      'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Emily Chen',
    location: 'Vancouver, Canada',
    quote:
      'Our guide shared stories, introduced us to local food, and helped us connect with the culture beyond the tourist trail. Truly personalized travel.',
    image:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80',
  },
]

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 bg-gradient-to-br from-[#1E3A8A] to-[#1E40AF] py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
            <svg className="h-4 w-4 text-[#F59E0B]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Traveler Stories
          </div>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Voices from the Himalayas
          </h2>
          <p className="mx-auto max-w-3xl text-balance text-lg text-white/90">
            Real experiences from real travelers who discovered the magic of Nepal with us. 
            Their stories inspire us to create even better journeys.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Featured Testimonial */}
          <div className="lg:col-span-2">
            <article className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-[#F59E0B] to-[#F97316] text-white px-6 py-3 rounded-bl-2xl">
                <span className="text-sm font-bold uppercase tracking-wider">Featured Story</span>
              </div>
              
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
                    alt="Sophie Martin"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"
                        alt="Sophie Martin"
                        className="h-12 w-12 rounded-full border-2 border-white"
                        loading="lazy"
                      />
                      <div>
                        <div className="font-bold">Sophie Martin</div>
                        <div className="text-sm opacity-90">Paris, France</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★★★★★</span>
                      <span className="text-sm opacity-90">Everest Base Camp Trek</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="space-y-6">
                    <blockquote className="text-lg leading-relaxed text-[#64748B]">
                      "Every detail was taken care of—from airport pickup to the final farewell dinner. 
                      Our Everest Base Camp trek felt safe, meaningful, and absolutely unforgettable. 
                      The guides were incredible, and the views... well, you have to see them to believe them!"
                    </blockquote>
                    
                    <div className="flex items-center gap-6 text-sm text-[#64748B]">
                      <div className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        <span>Verified Traveler</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>October 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Side Testimonials */}
          <div className="space-y-6">
            {testimonials.slice(1).map((testimonial) => (
              <article
                key={testimonial.name}
                className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 transition-all hover:bg-white/20 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full border-2 border-white/50"
                    loading="lazy"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="font-bold text-white">{testimonial.name}</div>
                        <div className="text-sm text-white/80">{testimonial.location}</div>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400 text-sm">★★★★★</span>
                      </div>
                    </div>
                    <blockquote className="text-sm leading-relaxed text-white/90">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="mt-3 flex items-center gap-2 text-xs text-white/70">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <span>Verified Traveler</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            <div>
              <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-sm text-white/80">Average Rating</div>
              <div className="flex justify-center mt-2">
                <span className="text-yellow-400">★★★★★</span>
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-sm text-white/80">Reviews This Year</div>
              <div className="flex justify-center mt-2">
                <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-sm text-white/80">Would Recommend</div>
              <div className="flex justify-center mt-2">
                <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

