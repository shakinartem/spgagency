import { Send } from "lucide-react";
import type { ContactLink } from "../types";
import { AuditForm } from "./AuditForm";

type CTAProps = { contacts: ContactLink[] };

export function CTA({ contacts }: CTAProps) {
  return (
    <section id="cta" className="section-shell px-4 pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[1.8rem] border border-paper/10 bg-paper/[0.06] p-7 text-white shadow-panel sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_12%,rgba(157,116,81,0.22),transparent_30%),linear-gradient(120deg,rgba(99,8,10,0.92),rgba(8,7,6,0.94)_48%,rgba(8,7,6,1))]" />
          <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/[0.15] bg-white/10 px-4 py-2 text-[0.66rem] font-bold uppercase tracking-[0.28em] text-white/70">Финальный брифинг</div>
              <h2 className="editorial-title mt-6 max-w-3xl text-5xl text-white sm:text-7xl">
                Соберем карту
                <span className="block text-white/70">роста стоматологии.</span>
              </h2>
              <div className="mt-8 space-y-5 text-base leading-7 text-white/75 sm:text-lg">
                <p>Если у вас стоматология, покажем, где сейчас теряются заявки, доверие и маржинальность.</p>
                <p>Дальше соберем рабочую систему: позиционирование, сайт, карты, отзывы, контент, лидогенерация и контроль цифр.</p>
              </div>
              <div className="mt-6 rounded-[1.45rem] border border-white/[0.15] bg-white/[0.08] p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-white/50">Формат и бюджет</p>
                <p className="mt-3 text-base leading-7 text-white/90">
                  Ориентир для отдельной единицы работы начинается от 35 000 ₽. Чаще мы собираем не разовую услугу,
                  а стратегическую связку, которая делает маркетинг стоматологии управляемой инфраструктурой.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="https://t.me/spg_marketing" className="btn-primary">
                  Написать стратегу
                  <Send size={18} />
                </a>
                <a href="#audit-form" className="btn-secondary">Перейти к форме аудита</a>
              </div>
              <div className="mt-8 grid gap-4">
                {contacts.map((contact) => (
                  <a key={contact.label} href={contact.href} className="block rounded-[1.35rem] border border-white/[0.15] bg-white/[0.08] p-5 transition hover:-translate-y-1 hover:border-white/30">
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
