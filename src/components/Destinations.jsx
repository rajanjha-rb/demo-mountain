const destinations = [
  {
    name: 'Kathmandu',
    description:
      'Discover vibrant temples, ancient palaces, and winding alleys filled with culture and craftsmanship.',
    image: '/assets/1.webp',
  },
  {
    name: 'Pokhara',
    description:
      'Wake up to mirror-like lakes and Annapurna views, perfect for paragliding and relaxed mountain vibes.',
    image: '/assets/2.webp',
  },
  {
    name: 'Chitwan National Park',
    description:
      'Journey into the jungle for rhino safaris, birdwatching, and Tharu cultural experiences.',
    image: '/assets/3.webp',
  },
  {
    name: 'Lumbini',
    description:
      'Walk through serene monasteries and the sacred birthplace of Lord Buddha, steeped in peace.',
    image: '/assets/nasib-mountain-and-cloud-2388115_1280.jpg',
  },
  {
    name: 'Everest Base Camp',
    description:
      'Trek iconic trails, cross suspension bridges, and stand at the foot of the world&apos;s highest peak.',
    image: '/assets/glorioushimalaya-gokyo-ri-4692458_1920.jpg',
  },
  {
    name: 'Annapurna Circuit',
    description:
      'Traverse diverse landscapes, from subtropical valleys to high mountain passes and yak pastures.',
    image: '/assets/photodrishti-fishtail-mountain-5009522_1920.jpg',
  },
]

const Destinations = () => {
  return (
    <section id="destinations" className="scroll-mt-24 space-y-12 py-16 md:py-20">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2 text-sm font-medium text-[#64748B]">
          <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
          Explore Nepal's Hidden Gems
        </div>
        <h2 className="text-balance text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
          Signature Destinations
        </h2>
        <p className="mx-auto max-w-3xl text-balance text-lg text-[#64748B]">
          From ancient temples to towering peaks, each destination tells a unique story of adventure, culture, and natural beauty.
        </p>
      </div>

      <div className="relative">
        {/* Featured Destination - Large Card */}
        <div className="mb-8">
          <article className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl shadow-slate-200/50 transition-all hover:scale-[1.02] hover:shadow-3xl">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src="/assets/1.webp"
                  alt="Kathmandu Heritage Sites"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-full bg-[#F59E0B] px-3 py-1 text-xs font-bold uppercase tracking-wider">Most Popular</span>
                    <span className="rounded-full bg-white/20 backdrop-blur px-3 py-1 text-xs font-medium">12 Days</span>
                  </div>
                  <h3 className="text-2xl font-bold">Kathmandu Heritage</h3>
                  <p className="mt-2 text-sm text-white/90">Ancient temples and cultural treasures</p>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-[#0F172A] mb-3">Cultural Heart of Nepal</h4>
                    <p className="text-[#64748B] leading-relaxed">
                      Explore ancient temples, royal palaces, and vibrant markets. Experience the living heritage 
                      of Kathmandu Valley with expert local guides who share stories behind every monument 
                      and hidden courtyard.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-[#EFF6FF] p-2">
                        <svg className="h-5 w-5 text-[#1E3A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#0F172A]">Difficulty</div>
                        <div className="text-xs text-[#64748B]">Easy to Moderate</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-[#F0FDF4] p-2">
                        <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#0F172A]">Best Time</div>
                        <div className="text-xs text-[#64748B]">Year Round</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href="#packages"
                      className="inline-flex items-center justify-center rounded-full bg-[#1E3A8A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#F59E0B]"
                    >
                      View Packages
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-full border border-[#E2E8F0] bg-white px-6 py-3 text-sm font-semibold text-[#1E3A8A] transition-colors hover:border-[#1E3A8A] hover:bg-[#EFF6FF]"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Grid of Other Destinations */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.slice(1).map((destination, index) => (
            <article
              key={destination.name}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl ${
                index === 1 ? 'sm:col-span-2 sm:row-span-1 lg:col-span-1' : ''
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 right-4">
                  <span className="rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-[#0F172A]">
                    {index === 1 ? 'Cultural' : index === 2 ? 'Wildlife' : 'Spiritual'}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{destination.name}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed mb-4">
                  {destination.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-[#64748B]">
                    <div className="flex items-center gap-1">
                      <svg className="h-4 w-4 text-[#F59E0B]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      <span>4.8</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="h-4 w-4 text-[#64748B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{index === 1 ? '5-7' : index === 2 ? '3-4' : '2-3'} days</span>
                    </div>
                  </div>
                  
                  <a
                    href="#packages"
                    className="inline-flex items-center justify-center rounded-full bg-[#1E3A8A] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#F59E0B]"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Destinations

