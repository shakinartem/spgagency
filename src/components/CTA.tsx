import type { ContactLink } from "../types";
import { AuditForm } from "./AuditForm";

type CTAProps = { contacts: ContactLink[] };

export function CTA({ contacts }: CTAProps) {
  return (
    <section id="cta" className="section-shell px-4 pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[1.6rem] border border-paper/10 bg-paper/[0.06] p-7 text-white shadow-panel sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_12%,rgba(198,106,61,0.14),transparent_32%),linear-gradient(120deg,rgba(34,25,20,0.92),rgba(8,7,6,0.96)_52%,rgba(8,7,6,1))]" />
          <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <h2 className="editorial-title max-w-3xl text-5xl text-white sm:text-7xl">Покажем, где клиника теряет заявки.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                Заполните короткую анкету — мы посмотрим город, нишу и задачу, а затем предложим понятный первый шаг.
              </p>
              <div className="mt-10 grid gap-4">
                {contacts.map((contact) => (
                  <a key={contact.label} href={contact.href} className="block rounded-[1.15rem] border border-white/[0.15] bg-white/[0.08] p-5 transition hover:-translate-y-1 hover:border-white/30">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/50">{contact.label}</p>
                    <p className="mt-3 font-display text-3xl text-white">{contact.note}</p>
                  </a>
                ))}
              </div>
            </div>
            <AuditForm />
          </div>
        </div>
      </div>
    </section>
  );
}
