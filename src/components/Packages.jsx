const packages = [
  {
    name: 'Kathmandu Heritage Escape',
    duration: '5 Days',
    price: 'USD 590',
    description:
      'A refined cultural journey through UNESCO heritage sites, artisan lanes, and curated dining experiences.',
    image:
      '/assets/2.webp',
    features: ['Private city guide', 'Boutique hotel', 'Airport transfers', 'Daily breakfast'],
  },
  {
    name: 'Pokhara Lakes & Annapurna Views',
    duration: '7 Days',
    price: 'USD 1,150',
    description:
      'Lakeside luxury with sunrise viewpoints, gentle hikes, and optional paragliding over the valley.',
    image:
      '/assets/3.webp',
    features: ['Scenic tours', 'Comfort transport', 'Selected activities', 'Daily breakfast'],
    featured: true,
  },
  {
    name: 'Everest Base Camp Signature Trek',
    duration: '12 Days',
    price: 'USD 2,850',
    description:
      'A premium, safety-first trek with acclimatization built in—guided by licensed experts and trusted logistics.',
    image:
      '/assets/nasib-mountain-and-cloud-2388115_1280.jpg',
    features: ['Licensed mountain guide', 'Porter support', 'Teahouse stays', 'All permits'],
  },
]

const DurationIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    aria-hidden="true"
  >
    <path
      d="M12 7v5l3 2"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Packages = () => {
  return (
    <section id="packages" className="scroll-mt-24 bg-gradient-to-br from-[#F8FAFC] to-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-medium text-[#64748B] shadow-sm">
            <svg className="h-4 w-4 text-[#F59E0B]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            All-Inclusive Packages
          </div>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
            Choose Your Adventure
          </h2>
          <p className="mx-auto max-w-3xl text-balance text-lg text-[#64748B]">
            Transparent pricing with no hidden fees. Each package includes accommodations, 
            guided tours, and unforgettable experiences tailored to your interests.
          </p>
        </div>

        <div className="relative">
          {/* Featured Package - Highlighted */}
          <div className="mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B] to-[#F97316] rounded-3xl transform rotate-1 opacity-10"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-[#F59E0B] to-[#F97316] text-white px-6 py-3 rounded-bl-2xl">
                  <span className="text-sm font-bold uppercase tracking-wider">Most Popular</span>
                </div>
                
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src="/assets/photodrishti-fishtail-mountain-5009522_1920.jpg"
                      alt="Pokhara Lakes & Annapurna Views"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="text-3xl font-bold mb-2">Pokhara Lakes & Annapurna</div>
                      <div className="text-xl font-semibold">7 Days • USD 1,150</div>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-green-100 p-3">
                          <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-[#0F172A]">Best Value</div>
                          <div className="text-sm text-[#64748B]">Perfect balance of adventure & relaxation</div>
                        </div>
                      </div>
                      
                      <p className="text-[#64748B] leading-relaxed">
                        Lakeside luxury with sunrise viewpoints, gentle hikes, and optional paragliding over the valley. 
                        Experience the perfect blend of adventure and tranquility.
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm">
                          <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span className="text-[#0F172A]">Scenic tours & sunrise viewpoints</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span className="text-[#0F172A]">Comfortable transportation</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span className="text-[#0F172A]">Selected adventure activities</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span className="text-[#0F172A]">Daily breakfast & dinner</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 pt-4">
                        <button
                          type="button"
                          className="flex-1 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#F97316] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                          onClick={() => {
                            const el = document.getElementById('contact')
                            if (el) {
                              el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                            }
                          }}
                        >
                          Book This Package
                        </button>
                        <button
                          type="button"
                          className="rounded-full border-2 border-[#E2E8F0] bg-white px-6 py-3 text-sm font-semibold text-[#1E3A8A] transition-colors hover:border-[#1E3A8A] hover:bg-[#EFF6FF]"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Packages - Side by Side */}
          <div className="grid gap-8 lg:grid-cols-2">
            {packages.filter(pkg => !pkg.featured).map((pkg, index) => (
              <article
                key={pkg.name}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                      index === 0 ? 'bg-blue-600 text-white' : 'bg-purple-600 text-white'
                    }`}>
                      {index === 0 ? 'Cultural' : 'Adventure'}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 text-white text-right">
                    <div className="text-2xl font-bold">{pkg.price}</div>
                    <div className="text-sm opacity-90">{pkg.duration}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">{pkg.name}</h3>
                  <p className="text-[#64748B] leading-relaxed mb-6">{pkg.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm">
                        <div className="rounded-full bg-[#EFF6FF] p-1">
                          <svg className="h-3 w-3 text-[#1E3A8A]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                        </div>
                        <span className="text-[#0F172A]">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    type="button"
                    className="w-full rounded-full bg-[#1E3A8A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#F59E0B]"
                    onClick={() => {
                      const el = document.getElementById('contact')
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }
                    }}
                  >
                    Book This Package
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-6 py-3 shadow-sm">
            <svg className="h-5 w-5 text-[#64748B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm text-[#64748B]">
              All packages are customizable. Contact us for a personalized itinerary.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Packages

