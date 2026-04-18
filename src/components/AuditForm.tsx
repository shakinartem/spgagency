import { FormEvent, useMemo, useState } from "react";

type FormState = {
  name: string;
  niche: string;
  contact: string;
  task: string;
};

const initialState: FormState = {
  name: "",
  niche: "",
  contact: "",
  task: "",
};

export function AuditForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [copied, setCopied] = useState(false);

  const message = useMemo(
    () =>
      [
        "Новая заявка на аудит с сайта SPG",
        `Имя: ${form.name || "не указано"}`,
        `Ниша: ${form.niche || "не указана"}`,
        `Контакт: ${form.contact || "не указан"}`,
        `Задача: ${form.task || "не указана"}`,
      ].join("\n"),
    [form],
  );

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      window.open("https://t.me/spg_marketing", "_blank", "noopener,noreferrer");
    }
  };

  return (
    <form id="audit-form" onSubmit={handleSubmit} className="panel-card p-6 sm:p-7">
      <p className="text-xs uppercase tracking-[0.28em] text-sand/55">Форма аудита</p>
      <h3 className="mt-3 font-display text-4xl text-paper">Соберём вводные и откроем Telegram.</h3>
      <p className="mt-3 text-sm leading-6 text-sand/72">
        Так как сайт полностью статический, я не стал вшивать в браузер токен Telegram-бота. Форма готовит сообщение, копирует его и открывает чат
        с вами в Telegram без риска светить секреты на фронтенде.
      </p>

      <div className="mt-6 grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm uppercase tracking-[0.2em] text-sand/60">Имя</span>
          <input
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-paper outline-none transition focus:border-ember/40"
            placeholder="Как к вам обращаться"
          />
        </label>
        <label className="grid gap-2">
          <span className="text-sm uppercase tracking-[0.2em] text-sand/60">Ниша</span>
          <input
            value={form.niche}
            onChange={(event) => setForm((prev) => ({ ...prev, niche: event.target.value }))}
            className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-paper outline-none transition focus:border-ember/40"
            placeholder="Стоматология, медицина, B2B, недвижимость..."
          />
        </label>
        <label className="grid gap-2">
          <span className="text-sm uppercase tracking-[0.2em] text-sand/60">Контакт</span>
          <input
            value={form.contact}
            onChange={(event) => setForm((prev) => ({ ...prev, contact: event.target.value }))}
            className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-paper outline-none transition focus:border-ember/40"
            placeholder="@username, телефон или ссылка"
          />
        </label>
        <label className="grid gap-2">
          <span className="text-sm uppercase tracking-[0.2em] text-sand/60">Что нужно усилить</span>
          <textarea
            value={form.task}
            onChange={(event) => setForm((prev) => ({ ...prev, task: event.target.value }))}
            className="min-h-[132px] rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-paper outline-none transition focus:border-ember/40"
            placeholder="Кратко опишите задачу: поток заявок, сайт, репутация, контент, упаковка..."
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="btn-primary justify-center">
          Получить аудит
        </button>
        <p className="text-sm leading-6 text-sand/66">{copied ? "Текст заявки скопирован. Telegram открыт в новой вкладке." : "После клика сообщение скопируется, а чат @spg_marketing откроется автоматически."}</p>
      </div>
    </form>
  );
}
