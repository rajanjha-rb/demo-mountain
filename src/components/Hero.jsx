const Hero = () => {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[90vh] items-center overflow-hidden bg-slate-900 pt-16 sm:min-h-[95vh]"
    >
      <img
        src="/assets/nepalidevu-mount-everest-6395759_1920.jpg"
        alt="Mount Everest peak with dramatic clouds"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-up space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#F59E0B] animate-pulse" />
                Your Trusted Travel Partner Since 2010
              </div>
              
              <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Discover the
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#F97316]">
                  Magic of Nepal
                </span>
              </h1>
              
              <p className="max-w-xl text-balance text-lg leading-relaxed text-white/90 sm:text-xl">
                From the towering peaks of Everest to the serene temples of Kathmandu, 
                experience Nepal's breathtaking beauty through curated journeys designed 
                just for you.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] px-8 py-4 text-base font-semibold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">Start Your Adventure</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#F97316] opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative z-10 ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#destinations"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-transparent px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all hover:border-white hover:bg-white/10"
              >
                Explore Destinations
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur transition-all hover:scale-105 hover:bg-white/15">
                  <div className="mb-4 text-3xl font-bold text-white">5,000+</div>
                  <div className="text-sm text-white/80">Successful Journeys</div>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur transition-all hover:scale-105 hover:bg-white/15">
                  <div className="mb-4 text-3xl font-bold text-[#F59E0B]">15+</div>
                  <div className="text-sm text-white/80">Years of Experience</div>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur transition-all hover:scale-105 hover:bg-white/15">
                  <div className="mb-4 text-3xl font-bold text-white">120+</div>
                  <div className="text-sm text-white/80">Expert Local Guides</div>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur transition-all hover:scale-105 hover:bg-white/15">
                  <div className="mb-4 text-3xl font-bold text-[#F59E0B]">4.9/5</div>
                  <div className="text-sm text-white/80">Traveler Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:hidden">
          <div className="rounded-xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur">
            <div className="text-2xl font-bold text-white">5,000+</div>
            <div className="text-xs text-white/80 mt-1">Journeys</div>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur">
            <div className="text-2xl font-bold text-white">120+</div>
            <div className="text-xs text-white/80 mt-1">Guides</div>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur">
            <div className="text-2xl font-bold text-[#F59E0B]">15+</div>
            <div className="text-xs text-white/80 mt-1">Years</div>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur">
            <div className="text-2xl font-bold text-[#F59E0B]">4.9/5</div>
            <div className="text-xs text-white/80 mt-1">Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

