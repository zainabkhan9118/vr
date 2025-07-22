// Experiences Preview section
const experiences = [
  {
    icon: "🌌",
    label: "360° & VR Worlds",
    desc: "Breathtaking visuals and soundscapes."
  },
  {
    icon: "🧠",
    label: "Custom Minds",
    desc: "Mix sounds, visuals, and sessions."
  },
  {
    icon: "🤝",
    label: "Group Sessions",
    desc: "Join others in guided meditations or coaching."
  }
];

export default function ExperiencesPreview() {
  return (
    <section className="pt-10 pb-16 bg-transparent flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-[#fcf7e9]">Experiences Preview</h2>
      <div className="flex flex-col sm:flex-row gap-8 justify-center">
        {experiences.map((exp) => (
          <div
            key={exp.label}
            className="rounded-2xl p-8 w-64 shadow-lg hover:scale-105 transition-transform cursor-pointer border border-white/10 card-glow"
            style={{
              background: '#C8A2C8', // Lilac from palette
              boxShadow: '0 4px 32px 0 #DB91EF33, 0 2px 8px #BDA8F355',
            }}
          >
            <div className="text-5xl mb-4">{exp.icon}</div>
            <div className="text-xl font-semibold mb-2 text-[#2A1A6F]">{exp.label}</div>
            <div className="text-[#56365C] text-base">{exp.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
