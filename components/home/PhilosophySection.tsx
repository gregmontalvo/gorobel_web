import Image from "next/image";
import { Clock, Users, Brain } from "lucide-react";

const pillars = [
  {
    icon: Clock,
    title: "Solo 1 hora",
    body: "Sesiones estructuradas. Sin rutinas interminables, sin perder el tiempo. El método correcto multiplica los resultados.",
  },
  {
    icon: Users,
    title: "Comunidad real",
    body: "No entrenamos héroes, ayudamos a personas. Buen rollo, competición sana y compañerismo que dura más allá del gym.",
  },
  {
    icon: Brain,
    title: "Salud mental",
    body: "El ejercicio como herramienta de bienestar integral. Cuerpas y mentes sanas. Damos la misma importancia a ambas.",
  },
];

export default function PhilosophySection() {
  return (
    <section className="section-padding bg-[var(--color-cream)]">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — image stack */}
          <div className="relative h-[520px] hidden lg:block">
            <div className="absolute top-0 left-0 w-[72%] h-[78%] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://gorobelgara.com/wp-content/uploads/2025/06/Podcast-y-entreno-73.jpg"
                alt="Entrenamiento en comunidad Gorobel"
                fill
                className="object-cover img-zoom"
                sizes="(max-width: 1024px) 0px, 40vw"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[55%] h-[55%] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-[var(--color-cream)]">
              <Image
                src="https://gorobelgara.com/wp-content/uploads/2025/06/Entreno-49.jpg"
                alt="CrossTraining en Gorobel"
                fill
                className="object-cover img-zoom"
                sizes="(max-width: 1024px) 0px, 25vw"
              />
            </div>
            {/* Badge */}
            <div className="absolute top-4 right-0 bg-[var(--color-forest)] text-white rounded-2xl px-5 py-4 shadow-xl max-w-[160px]">
              <span className="block text-4xl font-display font-black">+15</span>
              <span className="text-[var(--color-sage-light)] text-sm font-medium leading-tight">
                años siendo pioneros en España
              </span>
            </div>
          </div>

          {/* Right — text */}
          <div>
            <p className="section-label">Nuestra filosofía</p>
            <h2 className="text-headline font-display text-[var(--color-charcoal)] mb-6">
              No entrenamos héroes.
              <span className="block text-[var(--color-moss)]">
                Ayudamos personas.
              </span>
            </h2>
            <p className="text-[var(--color-steel)] text-lg leading-relaxed mb-10">
              Desde 2010 hemos perfeccionado un método que funciona para personas reales,
              de cualquier edad y nivel. Sin complejos, sin sentirte juzgad@. Solo tú,
              tu progreso y una comunidad que te acompaña.
            </p>

            <div className="space-y-6">
              {pillars.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-[var(--color-forest)]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[var(--color-forest)]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[var(--color-charcoal)] mb-1">
                      {title}
                    </h3>
                    <p className="text-[var(--color-steel)] text-sm leading-relaxed">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
