const destinations = [
  {
    name: 'Kathmandu',
    description:
      'Discover vibrant temples, ancient palaces, and winding alleys filled with culture and craftsmanship.',
    image: '/assets/hero-himalayas.jpg',
  },
  {
    name: 'Pokhara',
    description:
      'Wake up to mirror-like lakes and Annapurna views, perfect for paragliding and relaxed mountain vibes.',
    image: '/assets/hero-himalayas.jpg',
  },
  {
    name: 'Chitwan National Park',
    description:
      'Journey into the jungle for rhino safaris, birdwatching, and Tharu cultural experiences.',
    image: '/assets/hero-himalayas.jpg',
  },
  {
    name: 'Lumbini',
    description:
      'Walk through serene monasteries and the sacred birthplace of Lord Buddha, steeped in peace.',
    image: '/assets/hero-himalayas.jpg',
  },
  {
    name: 'Everest Base Camp',
    description:
      'Trek iconic trails, cross suspension bridges, and stand at the foot of the world&apos;s highest peak.',
    image: '/assets/hero-himalayas.jpg',
  },
  {
    name: 'Annapurna Circuit',
    description:
      'Traverse diverse landscapes, from subtropical valleys to high mountain passes and yak pastures.',
    image: '/assets/hero-himalayas.jpg',
  },
]

const Destinations = () => {
  return (
    <section id="destinations" className="scroll-mt-24 space-y-8 py-16 md:py-20">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-[#0F172A] sm:text-3xl">
            Signature Destinations
          </h2>
          <p className="mt-2 max-w-xl text-sm text-[#64748B]">
            Handpicked journeys across Nepal&apos;s most inspiring landscapes,
            guided by locals who call these mountains home.
          </p>
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#64748B]">
          Explore beyond the guidebooks
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <article
            key={destination.name}
            className="group relative overflow-hidden rounded-xl border border-[#E2E8F0] bg-white p-3 shadow-md shadow-slate-200 transition hover:-translate-y-1 hover:shadow-lg sm:p-4"
          >
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={destination.image}
                alt={destination.name}
                className="h-40 w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-105 sm:h-48 md:h-52"
                loading="lazy"
              />
            </div>
            <div className="relative space-y-2 px-2 pb-3 pt-4 sm:px-3">
              <h3 className="text-sm font-semibold text-[#0F172A] sm:text-base">
                {destination.name}
              </h3>
              <p className="text-xs text-[#64748B] sm:text-sm">
                {destination.description}
              </p>
              <div className="pt-2">
                <a
                  href="#packages"
                  className="inline-flex w-full items-center justify-center rounded-full border border-[#E2E8F0] bg-white px-3 py-2 text-xs font-semibold text-[#1E3A8A] shadow-sm transition-colors hover:border-[#1E3A8A] hover:bg-[#EFF6FF] sm:w-auto sm:px-4"
                >
                  Explore
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Destinations

