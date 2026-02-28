const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-16 md:py-20"
    >
      <div className="grid gap-10 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-lg shadow-slate-200/80 md:grid-cols-[1.2fr,0.9fr] md:p-8">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#64748B]">
            About us
          </p>
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-[#0F172A] sm:text-3xl">
            Himalayan Horizons Travel
          </h2>
          <p className="text-sm leading-relaxed text-[#64748B] sm:text-base">
            Based in Kathmandu, Himalayan Horizons Travel is a locally owned
            boutique agency specializing in immersive journeys across Nepal. Our
            team of seasoned travel designers, licensed local guides, and
            mountain experts craft experiences that go beyond checklists and into
            real connection.
          </p>
          <p className="text-sm leading-relaxed text-[#64748B] sm:text-base">
            Whether you&apos;re trekking to Everest Base Camp, drifting across Phewa
            Lake at sunrise, or sharing tea in a remote village, every moment is
            thoughtfully designed for comfort, safety, and cultural authenticity.
          </p>
          <dl className="mt-4 grid gap-4 text-xs text-[#64748B] sm:grid-cols-3 sm:text-sm">
            <div>
              <dt className="font-medium text-[#0F172A]">Local expertise</dt>
              <dd className="mt-1">
                Native Nepali team with deep regional knowledge and on-the-ground
                support.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-[#0F172A]">
                Authentic experiences
              </dt>
              <dd className="mt-1">
                Small-group and private trips with meaningful community
                engagement.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-[#0F172A]">Responsible travel</dt>
              <dd className="mt-1">
                Fair wages for guides and porters, with every trip giving back to
                mountain communities.
              </dd>
            </div>
          </dl>
        </div>

        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 shadow-md shadow-slate-200">
            <p className="text-sm font-medium text-[#0F172A]">
              “Our guides aren&apos;t just leaders on the trail—they are storytellers,
              guardians of the mountains, and proud hosts eager to share the heart
              of Nepal with you.”
            </p>
            <p className="mt-3 text-xs font-semibold text-[#64748B]">
              — Himalayan Horizons Travel Team
            </p>
          </div>
          <div className="grid gap-3 text-xs text-[#64748B] sm:grid-cols-2 sm:text-sm">
            <div className="rounded-xl border border-[#E2E8F0] bg-white p-3 shadow-sm shadow-slate-200">
              <p className="font-semibold text-[#0F172A]">
                Licensed local guides
              </p>
              <p className="mt-1">
                All treks and tours are led by fully certified local guides with
                wilderness first-aid training.
              </p>
            </div>
            <div className="rounded-xl border border-[#E2E8F0] bg-white p-3 shadow-sm shadow-slate-200">
              <p className="font-semibold text-[#0F172A]">
                Tailored itineraries
              </p>
              <p className="mt-1">
                Every journey can be customized to match your fitness level,
                interests, and time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

