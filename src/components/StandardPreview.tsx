const items = [
  {
    icon: "🔬",
    title: "Ingredient check",
    body: "Every ingredient screened against our hard block list.",
  },
  {
    icon: "🏷️",
    title: "Brand credibility",
    body: "We verify certifications and sourcing claims.",
  },
  {
    icon: "💬",
    title: "Customer feedback",
    body: "Community flags gaps we may have missed.",
  },
  {
    icon: "🔁",
    title: "Continuous updates",
    body: "When new research drops we reassess.",
  },
];

export default function StandardPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-display tracking-tight text-center mb-12">Our standard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl bg-cream-dark/40 border border-forest/10 p-7 text-center shadow-card hover:-translate-y-0.5 hover:shadow-card-lg transition-all"
          >
            <div className="w-12 h-12 mx-auto rounded-full bg-sage/70 flex items-center justify-center text-xl mb-4 shadow-sm">
              {item.icon}
            </div>
            <h3 className="font-display text-lg mb-1.5">{item.title}</h3>
            <p className="text-sm text-forest/70 leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>
      <p className="font-display italic text-2xl md:text-3xl tracking-tight text-center mt-14 max-w-xl mx-auto">
        &ldquo;We are not perfect but we do our best.&rdquo;
      </p>
    </section>
  );
}
