import { useState } from 'react'

const navItems = [
  { href: '#hero', label: 'Home' },
  { href: '#destinations', label: 'Destinations' },
  { href: '#packages', label: 'Packages' },
  { href: '#about', label: 'About' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleNavClick = () => {
    setOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[#E2E8F0] bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-[#1E3A8A]"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#1E3A8A] text-xs font-black text-white shadow-md">
            HH
          </span>
          <span className="hidden flex-col text-left sm:flex">
            <span className="text-xs uppercase tracking-[0.28em] text-[#1E3A8A]">
              Himalayan
            </span>
            <span className="text-sm font-semibold text-[#0F172A]">
              Horizons Travel
            </span>
          </span>
          <span className="flex flex-col text-left sm:hidden">
            <span className="text-xs font-semibold text-[#1E3A8A]">
              Himalayan Horizons
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#64748B]">
              Travel
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium text-[#0F172A] lg:flex md:gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative transition-colors hover:text-[#F59E0B]"
            >
              <span>{item.label}</span>
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-[#1E3A8A] px-3 py-2 text-xs font-semibold text-white shadow-md transition-colors hover:bg-[#F59E0B] sm:px-4"
          >
            Book Your Adventure
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-[#E2E8F0] bg-white p-2 text-[#0F172A] shadow-sm transition hover:border-[#F59E0B] hover:text-[#F59E0B] md:hidden"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-4 rounded-full bg-current" />
            <span className="block h-0.5 w-3 rounded-full bg-current" />
          </div>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className="md:hidden">
        <div
          className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 ${
            open ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        <aside
          className={`fixed right-0 top-0 z-50 h-dvh w-[86%] max-w-sm border-l border-[#E2E8F0] bg-white shadow-lg transition-transform duration-300 ease-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between border-b border-[#E2E8F0] px-4 py-4">
            <span className="text-sm font-semibold text-[#1E3A8A]">
              Himalayan Horizons Travel
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full border border-[#E2E8F0] bg-white p-2 text-[#0F172A] shadow-sm transition hover:border-[#F59E0B] hover:text-[#F59E0B]"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-1 px-4 py-4 text-sm font-medium text-[#0F172A]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="rounded-lg px-3 py-3 transition hover:bg-[#EFF6FF]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="mt-3 w-full rounded-full bg-[#1E3A8A] px-4 py-3 text-center text-xs font-semibold text-white shadow-md transition-colors hover:bg-[#F59E0B]"
            >
              Book Your Adventure
            </a>
          </div>
        </aside>
      </div>
    </header>
  )
}

export default Navbar

