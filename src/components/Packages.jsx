const packages = [
  {
    name: 'Kathmandu Heritage Escape',
    duration: '5 Days',
    price: 'USD 590',
    description:
      'A refined cultural journey through UNESCO heritage sites, artisan lanes, and curated dining experiences.',
    image:
      '/assets/hero-himalayas.jpg',
    features: ['Private city guide', 'Boutique hotel', 'Airport transfers', 'Daily breakfast'],
  },
  {
    name: 'Pokhara Lakes & Annapurna Views',
    duration: '7 Days',
    price: 'USD 1,150',
    description:
      'Lakeside luxury with sunrise viewpoints, gentle hikes, and optional paragliding over the valley.',
    image:
      '/assets/hero-himalayas.jpg',
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
      '/assets/hero-himalayas.jpg',
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
    <section id="packages" className="scroll-mt-24 space-y-8 py-16 md:py-20">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-[#0F172A] sm:text-3xl">
            Curated Travel Packages
          </h2>
          <p className="mt-2 max-w-xl text-sm text-[#64748B]">
            Choose a starting point and we&apos;ll fine-tune every detail
            around your pace, interests, and travel style.
          </p>
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#64748B]">
          Transparent pricing · No hidden fees
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg) => (
          <article
            key={pkg.name}
            className={`group relative flex h-full flex-col overflow-hidden rounded-xl border bg-white shadow-md shadow-slate-200 transition hover:-translate-y-1 hover:shadow-lg ${
              pkg.featured ? 'border-[#1E3A8A]' : 'border-[#E2E8F0]'
            }`}
          >
            {pkg.featured && (
              <span className="absolute right-3 top-3 z-10 rounded-full bg-[#F59E0B] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm sm:right-4 sm:top-4 sm:px-3">
                Recommended
              </span>
            )}
            <div className="relative overflow-hidden">
              <img
                src={pkg.image}
                alt={pkg.name}
                className="h-40 w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-105 sm:h-48"
                loading="lazy"
              />
            </div>

            <div className="flex flex-1 flex-col p-3 sm:p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold text-[#0F172A] sm:text-base">
                  {pkg.name}
                </h3>
                <p className="shrink-0 text-sm font-semibold text-[#F59E0B] sm:text-base">
                  {pkg.price}
                </p>
              </div>

              <div className="mt-2 flex items-center gap-2 text-xs text-[#64748B]">
                <DurationIcon className="h-3 w-3 text-[#1E3A8A] sm:h-4 sm:w-4" />
                <span className="font-medium">{pkg.duration}</span>
              </div>

              <p className="mt-3 text-xs text-[#64748B] sm:text-sm">{pkg.description}</p>

              <ul className="mt-3 sm:mt-4 space-y-1 sm:space-y-2 text-xs sm:text-sm text-[#0F172A]">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 rounded-full bg-[#1E3A8A] sm:h-1.5 sm:w-1.5" />
                    <span className="text-xs sm:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="mt-4 sm:mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#1E3A8A] px-3 py-2 text-xs font-semibold text-white shadow-md shadow-slate-300 transition-colors hover:bg-[#F59E0B] sm:px-4 sm:py-3"
                onClick={() => {
                  const el = document.getElementById('contact')
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
              >
                Book Now
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Packages

