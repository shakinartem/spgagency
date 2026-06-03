import { ShieldCheck } from "lucide-react";
import { auditItems, contacts } from "../../data/sharik-content";
import { assetPath, Container, SectionTitle } from "./shared";

export function CTAFooterSection() {
  return (
    <section id="cta" className="section-shell pb-10">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)]">
          <div>
            <SectionTitle
              title={
                <>
                  Хотите понять, где клиника <span className="text-brand-accent">теряет пациентов?</span>
                </>
              }
              description="Оставьте заявку — проведём первичный разбор digital-системы и покажем, какие точки стоит усилить в первую очередь."
            />

            <div className="mt-8 rounded-[2rem] border border-brand-line bg-white p-6 shadow-soft">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-brand-ink">Что проверим на разборе</h3>
              <div className="mt-5 space-y-3">
                {auditItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 border-b border-dashed border-brand-line pb-3 last:border-b-0 last:pb-0">
                    <img src={assetPath("что проверим.svg")} alt="" className="h-6 w-6 flex-none" />
                    <span className="text-brand-copy">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-brand-line bg-white p-6 shadow-soft sm:p-7">
            <form className="space-y-5">
              <Field label="Имя" placeholder="Введите ваше имя" />
              <Field label="Телефон / Telegram" placeholder="+7 (***) ***-**-** или @username" />
              <Field label="Название клиники" placeholder="Введите название клиники" />
              <Field label="Город" placeholder="Введите ваш город" />

              <button type="submit" className="button-primary w-full justify-center">
                Получить разбор
              </button>
              <p className="flex items-center justify-center gap-2 text-sm text-brand-muted">
                <ShieldCheck size={16} className="text-brand-accent" />
                Данные не передаются третьим лицам.
              </p>
            </form>
          </div>
        </div>

        <footer className="mt-12 border-t border-[color:var(--line-strong)] pt-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <img src={assetPath("logo-sharik.svg")} alt="ШАРиК digital" className="h-16 w-16 flex-none" />
              <div>
                <p className="font-display text-[1.8rem] font-semibold leading-none text-brand-ink">ШАРиК digital</p>
                <p className="mt-1 text-sm text-brand-muted">маркетинг для стоматологий</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6">
              {contacts.map((item) => (
                <a key={item.label} href={item.href} className="footer-link">
                  {item.asset ? <img src={assetPath(item.asset)} alt="" className="h-5 w-5" /> : null}
                  <span>{item.label}</span>
                </a>
              ))}
              <a href={`${import.meta.env.BASE_URL}privacy.html`} className="footer-link">
                <img src={assetPath("щит 1.svg")} alt="" className="h-5 w-5" />
                <span>Политика конфиденциальности</span>
              </a>
            </div>
          </div>
        </footer>
      </Container>
    </section>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-base font-medium text-brand-ink">{label}</span>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-[1.1rem] border border-brand-line bg-page px-5 py-4 text-base text-brand-ink outline-none transition placeholder:text-brand-muted focus:border-brand-accent"
      />
    </label>
  );
}
