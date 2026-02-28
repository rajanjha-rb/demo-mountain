const Hero = () => {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[84vh] items-center overflow-hidden bg-slate-900 pt-16 sm:min-h-[88vh]"
    >
      <img
        src="/assets/hero-himalayas.jpg"
        alt="Nepal Himalayan mountain landscape"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 -z-10 bg-black/45" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-up max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
            Your Trusted Travel Partner
          </p>

          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Explore the Beauty of{' '}
            <span className="text-[#F8FAFC] underline decoration-[#F59E0B]/80 decoration-2 underline-offset-4 sm:underline-offset-8">
              Nepal
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-balance text-sm leading-relaxed text-white/85 sm:text-base lg:text-lg">
            Premium, locally-led journeys—from cultural heritage in Kathmandu to
            Himalayan treks and serene lakeside escapes, crafted with care and
            trusted expertise.
          </p>

          <div className="mt-7 grid gap-3 sm:flex sm:items-center">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#1E3A8A] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-colors hover:bg-[#F59E0B] sm:w-auto sm:px-6"
            >
              Book Your Adventure
            </a>
            <a
              href="#destinations"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/40 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15 sm:w-auto sm:px-6"
            >
              View Destinations
            </a>
          </div>

          <dl className="mt-10 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/15 bg-white/10 p-3 text-white backdrop-blur sm:p-4">
              <dt className="text-xs text-white/80 sm:text-sm">Trips crafted</dt>
              <dd className="mt-1 text-lg font-semibold sm:text-xl">5,000+</dd>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/10 p-3 text-white backdrop-blur sm:p-4">
              <dt className="text-xs text-white/80 sm:text-sm">Local guides</dt>
              <dd className="mt-1 text-lg font-semibold sm:text-xl">120+</dd>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/10 p-3 text-white backdrop-blur sm:p-4">
              <dt className="text-xs text-white/80 sm:text-sm">Traveler rating</dt>
              <dd className="mt-1 text-lg font-semibold text-[#F59E0B] sm:text-xl">
                4.9/5
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

export default Hero

