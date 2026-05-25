export default function Testimonials() {
  return (
    <section className="py-24 bg-surface-container-high relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-16 text-center">Trusted by Industry Leaders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface-container-lowest p-10 rounded-2xl relative">
            <span className="material-symbols-outlined text-surface-dim absolute top-6 right-6 text-6xl opacity-20">format_quote</span>
            <p className="text-lg font-medium text-on-surface-custom mb-8 relative z-10 italic">"When our primary data center went down at 2 AM on a Sunday, Digital OutOfHours IT Support had us back online before our internal team even woke up. Their response speed is unreal."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img className="w-full h-full object-cover" alt="Professional portrait of a confident middle-aged male CTO in a modern office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbagj6Hx8bLlQPuboOFMFvd_0Rmwmx9UvAlK3yBH7CRPhLBvj0DWLON8_yDdp_Qb4jfd3h2xj6ol898YLFh3JSuLUxp-ipW-Z36ORsMad87v8dL-baWJF3con-RXoCJZhGyGWn8tx80L1-IX8Zrl5Cpp6xIa3DNhW7Ap67e56gaz7L-fAg7-WgOuycD8gAj8M4hPuy5nnrLfpuOx4_vYx-xpdO9XqMk6vQMD7BQL-xaFPSl3rURTwhYlv4wPv0pDGrZtrv2CGhcQE" />
              </div>
              <div>
                <p className="font-bold text-sm">Marcus Chen</p>
                <p className="text-xs text-on-primary-container">CTO, Vertex Logistics</p>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-10 rounded-2xl relative">
            <span className="material-symbols-outlined text-surface-dim absolute top-6 right-6 text-6xl opacity-20">format_quote</span>
            <p className="text-lg font-medium text-on-surface-custom mb-8 relative z-10 italic">"The piece of mind we get knowing someone is monitoring our security during the weekend is worth every penny. They are proactive, not just reactive."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img className="w-full h-full object-cover" alt="Professional portrait of a female operations director smiling warmly in a bright corporate environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcHXAq8GSvu7PC26j3dCh_iemAUean0aDBSspN_g61P9spTLxrkVtZmZBM-iclbixWBq5K2x6K-FYuanHtmzC8kt5UqXKBSGj7KuQnhMumzUeQq9KAufWhVKb5bxVg_Xxa6_gVHRGEt0Xi2lgLJfpfbW99m9KIfNHU-q61h3G7u57fhMBoxl2DhbiHDLl-r8vnRsHWNvObnOsSJJw2lngW6OW1wC042Kc2InZN9WEUclY-g2IIMrsTlsg5hB0GEe4vCAwhpQgd2qQ" />
              </div>
              <div>
                <p className="font-bold text-sm">Sarah Jenkins</p>
                <p className="text-xs text-on-primary-container">Ops Director, BlueStream Health</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
