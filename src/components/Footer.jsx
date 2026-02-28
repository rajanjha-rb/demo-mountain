const Footer = () => {
  return (
    <footer className="border-t border-[#E2E8F0] bg-[#1E3A8A]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-xs text-slate-100 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-white">
            Himalayan Horizons Travel
          </p>
          <p>Jyatha, Thamel, Kathmandu 44600, Nepal</p>
          <p>© {new Date().getFullYear()} Himalayan Horizons Travel. All rights reserved.</p>
        </div>
        <div className="flex flex-col gap-4 text-xs sm:flex-row sm:items-center sm:gap-8">
          <div className="flex gap-4">
            <a
              href="#hero"
              className="transition hover:text-[#F59E0B]"
            >
              Home
            </a>
            <a
              href="#packages"
              className="transition hover:text-[#F59E0B]"
            >
              Packages
            </a>
            <a
              href="#contact"
              className="transition hover:text-[#F59E0B]"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-[#1E40AF] text-[11px] font-semibold text-slate-100 shadow-sm shadow-slate-900/40 transition hover:border-[#F59E0B] hover:text-[#F59E0B]"
            >
              Fb
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-[#1E40AF] text-[11px] font-semibold text-slate-100 shadow-sm shadow-slate-900/40 transition hover:border-[#F59E0B] hover:text-[#F59E0B]"
            >
              Ig
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-[#1E40AF] text-[11px] font-semibold text-slate-100 shadow-sm shadow-slate-900/40 transition hover:border-[#F59E0B] hover:text-[#F59E0B]"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

