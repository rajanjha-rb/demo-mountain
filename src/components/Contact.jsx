const Contact = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-16 md:py-20"
    >
      <div className="grid gap-8 rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-lg shadow-slate-200/80 sm:gap-10 sm:p-6 md:grid-cols-[1.1fr,0.9fr] md:p-8">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#64748B]">
            Contact
          </p>
          <h2 className="text-balance text-xl font-semibold tracking-tight text-[#0F172A] sm:text-2xl md:text-3xl">
            Plan Your Nepal Journey
          </h2>
          <p className="text-xs text-[#64748B] sm:text-sm">
            Share your travel dates, interests, and any special requests. Our
            travel designers will respond within 24 hours with a personalized
            proposal.
          </p>

          <form className="mt-4 space-y-4 text-sm text-[#0F172A]">
            <div className="space-y-1">
              <label htmlFor="name" className="text-xs font-medium text-[#0F172A]">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                className="w-full rounded-xl border border-[#E2E8F0] bg-white px-3 py-2 text-xs text-[#0F172A] shadow-inner shadow-slate-100 outline-none transition placeholder:text-[#94A3B8] focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A] sm:text-sm"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-xs font-medium text-[#0F172A]"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-[#E2E8F0] bg-white px-3 py-2 text-xs text-[#0F172A] shadow-inner shadow-slate-100 outline-none transition placeholder:text-[#94A3B8] focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A] sm:text-sm"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="message"
                className="text-xs font-medium text-[#0F172A]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your ideal trip, travel dates, and group size."
                className="w-full resize-none rounded-xl border border-[#E2E8F0] bg-white px-3 py-2 text-xs text-[#0F172A] shadow-inner shadow-slate-100 outline-none transition placeholder:text-[#94A3B8] focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A] sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#1E3A8A] px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-slate-300 transition-colors hover:bg-[#F59E0B] sm:w-auto sm:px-5 sm:py-3"
            >
              Send Inquiry
            </button>
            <p className="text-xs text-[#64748B]">
              By submitting, you agree to be contacted by Himalayan Horizons
              Travel with trip information.
            </p>
          </form>
        </div>

        <div className="space-y-4 text-xs text-[#0F172A] sm:space-y-5 sm:text-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#64748B]">
              Kathmandu office
            </p>
            <p className="mt-2 text-xs text-[#0F172A] sm:text-sm">
              Himalayan Horizons Travel Pvt. Ltd.
            </p>
            <p className="text-xs text-[#64748B] sm:text-sm">
              Jyatha, Thamel, Kathmandu 44600, Nepal
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#64748B]">
              Phone
            </p>
            <p className="mt-1 text-xs text-[#0F172A] sm:text-sm">
              +977-1-4412345 (Office)
            </p>
            <p className="text-xs text-[#64748B] sm:text-sm">+977-980-1234567 (24/7)</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#64748B]">
              Email
            </p>
            <p className="mt-1 text-xs text-[#0F172A] sm:text-sm">
              hello@himalayanhorizons.travel
            </p>
          </div>

          <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 text-xs text-[#64748B] shadow-inner shadow-slate-100 sm:p-4">
            <p className="font-semibold text-[#0F172A]">
              Kathmandu time (GMT+5:45)
            </p>
            <p className="mt-1">
              We typically respond within 24 hours, Monday to Saturday.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

