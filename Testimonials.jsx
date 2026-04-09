const TESTIMONIALS = [
  {
    name: 'Dr. Sarah Nkosi',
    role: 'Lecturer, Information Systems',
    avatar: 'SN',
    color: 'bg-indigo-100 text-indigo-700',
    quote:
      'An exceptionally diligent student who consistently demonstrates a strong ability to analyse complex business problems and propose structured, practical solutions. A natural communicator.',
  },
  {
    name: 'James Okonkwo',
    role: 'IT Manager · Internship Supervisor',
    avatar: 'JO',
    color: 'bg-purple-100 text-purple-700',
    quote:
      'During their internship, they quickly grasped our systems, contributed meaningfully to our QA process, and proactively identified several workflow inefficiencies. A pleasure to work with.',
  },
  {
    name: 'Amira Petersen',
    role: 'Team Lead · Group Project',
    avatar: 'AP',
    color: 'bg-teal-100 text-teal-700',
    quote:
      'Reliable, detail-oriented, and always prepared. They took ownership of our requirements documentation and helped keep the whole team on track. Would recommend without hesitation.',
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col gap-4">
      {/* Quote icon */}
      <div className="text-5xl text-indigo-100 font-serif leading-none">"</div>
      <p className="text-gray-600 leading-relaxed text-sm flex-1">{testimonial.quote}</p>
      {/* Author */}
      <div className="flex items-center gap-3 mt-2">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${testimonial.color}`}
        >
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-semibold text-gray-800 text-sm">{testimonial.name}</div>
          <div className="text-gray-400 text-xs">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">
            What People Say
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Testimonials</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 text-sm mt-3 italic">
            * Placeholder quotes — replace with real references once gathered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}