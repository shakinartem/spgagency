import { Send } from "lucide-react";
import type { ContactLink } from "../types";
import { AuditForm } from "./AuditForm";

type CTAProps = { contacts: ContactLink[] };

export function CTA({ contacts }: CTAProps) {
  return (
    <section id="cta" className="section-shell px-4 pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="panel-card relative overflow-hidden p-7 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,122,31,0.24),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_28%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="label-chip">Финальный брифинг</div>
              <h2 className="mt-6 max-w-3xl font-display text-5xl leading-none text-paper sm:text-6xl">
                Давайте обсудим,
                <span className="block text-ember">как усилить ваш проект.</span>
              </h2>
              <div className="mt-8 space-y-5 text-base leading-7 text-sand/82 sm:text-lg">
                <p>Если у вас стоматология или медицина, покажем, как собрать поток записей без хаоса, скидочной гонки и разрозненных подрядчиков.</p>
                <p>Если у вас другой бизнес, соберём рабочую digital-систему под вашу задачу: от позиционирования и упаковки до сайта, воронки, контента и репутации.</p>
              </div>
              <div className="mt-6 rounded-[1.7rem] border border-dashed border-ember/30 bg-ember/8 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-sand/58">Формат и бюджет</p>
                <p className="mt-3 text-base leading-7 text-paper/90">
                  Ориентир для отдельной единицы работы начинается от 35 000 ₽. Чаще мы собираем не разовые услуги,
                  а связку, которая реально двигает проект: контент, сайт, репутация, лидогенерация и контроль цифр.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="https://t.me/spg_marketing" className="btn-primary">
                  Написать в Telegram
                  <Send size={18} />
                </a>
                <a href="#audit-form" className="btn-secondary">Перейти к форме аудита</a>
              </div>
              <div className="mt-8 grid gap-4">
                {contacts.map((contact) => (
                  <a key={contact.label} href={contact.href} className="panel-subtle block transition hover:border-ember/35 hover:-translate-y-1">
                    <p className="text-xs uppercase tracking-[0.28em] text-sand/55">{contact.label}</p>
                    <p className="mt-3 font-display text-3xl text-paper">{contact.note}</p>
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
