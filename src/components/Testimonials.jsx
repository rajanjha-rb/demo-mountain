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
      className="scroll-mt-24 space-y-8 rounded-2xl bg-[#F8FAFC] py-16 md:py-20"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-[#0F172A] sm:text-3xl">
            Trusted by Travelers Worldwide
          </h2>
          <p className="mt-2 max-w-xl text-sm text-[#64748B]">
            Hear from guests who&apos;ve explored Nepal with Himalayan Horizons
            Travel.
          </p>
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#64748B]">
          4.9 / 5 traveler rating
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="relative flex h-full flex-col rounded-xl border border-[#E2E8F0] bg-white p-4 shadow-md shadow-slate-200 sm:p-5"
          >
            <div className="flex items-center gap-3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-8 w-8 rounded-full object-cover ring-2 ring-[#1E3A8A] sm:h-10 sm:w-10"
                loading="lazy"
              />
              <div className="text-xs">
                <p className="font-semibold text-[#0F172A]">
                  {testimonial.name}
                </p>
                <p className="text-[#64748B]">{testimonial.location}</p>
              </div>
            </div>
            <blockquote className="mt-3 sm:mt-4 flex-1 text-xs leading-relaxed text-[#64748B] sm:text-sm">
              "{testimonial.quote}"
            </blockquote>
            <div className="mt-3 sm:mt-4 flex items-center gap-1 text-xs text-[#F59E0B]">
              <span>★★★★★</span>
              <span className="text-[#64748B]">Verified traveler</span>
            </div>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Testimonials

