export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-surface-custom">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="flex flex-col items-start gap-4">
            <div className="w-12 h-12 bg-primary-container-custom text-white flex items-center justify-center rounded-lg">
              <span className="material-symbols-outlined">speed</span>
            </div>
            <h4 className="text-lg font-bold">Rapid Response</h4>
            <p className="text-on-primary-container text-sm leading-relaxed">Average ticket acknowledgment in under 5 minutes with immediate escalation to level 2 engineers.</p>
          </div>
       
          <div className="flex flex-col items-start gap-4">
            <div className="w-12 h-12 bg-primary-container-custom text-white flex items-center justify-center rounded-lg">
              <span className="material-symbols-outlined">update</span>
            </div>
            <h4 className="text-lg font-bold">Availability</h4>
            <p className="text-on-primary-container text-sm leading-relaxed">Nights, Holidays, weekends—we never clocks out. We are your redundant IT layer.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
