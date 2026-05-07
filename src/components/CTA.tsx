import { Send } from "lucide-react";
import type { ContactLink } from "../types";
import { AuditForm } from "./AuditForm";

type CTAProps = { contacts: ContactLink[] };

export function CTA({ contacts }: CTAProps) {
  return (
    <section id="cta" className="section-shell px-4 pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[1.8rem] border border-paper/10 bg-paper/[0.06] p-7 text-white shadow-panel sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_12%,rgba(181,13,19,0.12),transparent_32%),linear-gradient(120deg,rgba(34,25,20,0.92),rgba(8,7,6,0.96)_52%,rgba(8,7,6,1))]" />
          <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/[0.15] bg-white/10 px-4 py-2 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-white/70">Разбор роста</div>
              <h2 className="editorial-title mt-6 max-w-3xl text-5xl text-white sm:text-7xl">
                Поймем, где
                <span className="block text-white/70">теряются записи.</span>
              </h2>
              <div className="mt-8 space-y-5 text-base leading-7 text-white/75 sm:text-lg">
                <p>Посмотрим на текущий путь пациента: посадочные страницы, реклама, карты, отзывы, оффер, CRM и обработка обращений.</p>
                <p>После этого предложим понятный план: что исправить первым, какие каналы усилить и какие метрики отслеживать владельцу клиники.</p>
              </div>
              <div className="mt-6 rounded-[1.45rem] border border-white/[0.15] bg-white/[0.08] p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">Формат</p>
                <p className="mt-3 text-base leading-7 text-white/90">
                  Можно начать с аудита или отдельного участка. Чаще всего мы собираем связку работ, чтобы маркетинг клиники
                  стал управляемой системой, а не набором подрядчиков.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="https://t.me/spg_marketing" className="btn-primary">
                  Написать в Telegram
                  <Send size={18} />
                </a>
                <a href="#audit-form" className="btn-secondary">Заполнить форму</a>
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
