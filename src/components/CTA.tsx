import { ArrowUpRight, Send } from "lucide-react";
import type { ContactLink } from "../types";

type CTAProps = {
  contacts: ContactLink[];
};

export function CTA({ contacts }: CTAProps) {
  return (
    <section id="cta" className="section-shell px-4 pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="panel-card relative overflow-hidden p-7 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,122,31,0.24),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_28%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="label-chip">Финальный брифинг</div>
              <h2 className="mt-6 max-w-3xl font-display text-5xl leading-none text-paper sm:text-6xl">
                Давайте обсудим,
                <span className="block text-ember">как усилить ваш проект.</span>
              </h2>
              <div className="mt-8 space-y-5 text-base leading-7 text-sand/82 sm:text-lg">
                <p>Если вы стоматология, предложим, как собрать поток записей без хаоса, скидочной гонки и разрозненных подрядчиков.</p>
                <p>Если у вас другой бизнес, соберём рабочую digital-систему под вашу задачу: от позиции и упаковки до сайта, воронки, контента и репутации.</p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="https://t.me/spg_smm" className="btn-primary">
                  Написать в Telegram
                  <Send size={18} />
                </a>
                <a href="mailto:info@spgagency.ru?subject=Запрос%20на%20аудит%20от%20сайта%20SPG" className="btn-secondary">
                  Получить аудит
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              {contacts.map((contact) => (
                <a key={contact.label} href={contact.href} className="panel-subtle block transition hover:border-ember/35">
                  <p className="text-xs uppercase tracking-[0.28em] text-sand/55">{contact.label}</p>
                  <p className="mt-3 font-display text-3xl text-paper">{contact.note}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
