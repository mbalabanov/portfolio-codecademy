export default function ContactSection() {
  return (
    <section id="contact" className="py-28 px-6 bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-4">
          — Get In Touch —
        </p>
        <h2 className="text-4xl font-black mb-8">Contact</h2>
        <p className="text-xl text-gray-300 leading-relaxed mb-12">
          Have a project in mind or just want to say hello? My inbox is always
          open.
        </p>
        <a
          href="mailto:hello@marin.dev"
          className="inline-block px-10 py-4 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-gray-900 transition-colors duration-200"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
