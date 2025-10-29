export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 text-center max-w-xl">
      <h2 className="text-3xl font-bold text-primary mb-4">Contact Me</h2>
      <p className="text-gray-400 mb-6">
        Got a project idea or just want to say hi? Let’s connect!
      </p>
      <a
        href="mailto:yourname@example.com"
        className="px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition"
      >
        Say Hello 👋
      </a>
    </section>
  );
}
