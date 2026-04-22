import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { siteConfig } from "../data/site-config";

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
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [successPopupVisible, setSuccessPopupVisible] = useState(false);

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

  const openTelegram = () => {
    window.open(`https://t.me/${siteConfig.telegramUsername}`, "_blank", "noopener,noreferrer");
  };

  const showSuccess = () => {
    setSubmitted(true);
    setSuccessPopupVisible(true);
    const yandexWindow = window as unknown as { ym?: (...args: unknown[]) => void };
    if (typeof yandexWindow.ym === "function") {
      yandexWindow.ym(108662566, "reachGoal", "audit_form_submit");
    }
    window.setTimeout(() => setSuccessPopupVisible(false), 3200);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError("");
    setSubmitted(false);
    setCopied(false);

    if (siteConfig.auditWebhookUrl) {
      try {
        setSubmitting(true);
        const response = await fetch(siteConfig.auditWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...form,
            message,
            source: "spgagency-site",
            createdAt: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          throw new Error("Webhook error");
        }

        setForm(initialState);
        showSuccess();
        openTelegram();
        return;
      } catch {
        setError("Не удалось отправить заявку через webhook. Открываем безопасный fallback через Telegram.");
      } finally {
        setSubmitting(false);
      }
    }

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(message);
        setCopied(true);
      }
    } catch {
      setError("Не удалось скопировать текст автоматически. Его можно выделить вручную после открытия Telegram.");
    }

    showSuccess();
    openTelegram();
  };

  return (
    <>
      <form id="audit-form" onSubmit={handleSubmit} className="panel-card relative overflow-hidden p-6 sm:p-7">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,122,31,0.18),transparent_34%)]" />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.28em] text-sand/55">Форма аудита</p>
          <h3 className="mt-3 font-display text-4xl text-paper">Соберем вводные и запустим заявку в работу.</h3>
          <p className="mt-3 text-sm leading-6 text-sand/72">
            Заявка отправляется в Telegram через webhook, клиент получает подтверждение на сайте и сразу переходит в Telegram для быстрого диалога.
          </p>

          <div className="mt-6 grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm uppercase tracking-[0.2em] text-sand/60">Имя</span>
              <input value={form.name} onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-paper outline-none transition focus:border-ember/40" placeholder="Как к вам обращаться" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm uppercase tracking-[0.2em] text-sand/60">Ниша</span>
              <input value={form.niche} onChange={(event) => setForm((prev) => ({ ...prev, niche: event.target.value }))} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-paper outline-none transition focus:border-ember/40" placeholder="Стоматология, медицина, B2B, недвижимость..." />
            </label>
            <label className="grid gap-2">
              <span className="text-sm uppercase tracking-[0.2em] text-sand/60">Контакт</span>
              <input value={form.contact} onChange={(event) => setForm((prev) => ({ ...prev, contact: event.target.value }))} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-paper outline-none transition focus:border-ember/40" placeholder="@username, телефон или ссылка" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm uppercase tracking-[0.2em] text-sand/60">Что нужно усилить</span>
              <textarea value={form.task} onChange={(event) => setForm((prev) => ({ ...prev, task: event.target.value }))} className="min-h-[132px] rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-paper outline-none transition focus:border-ember/40" placeholder="Кратко опишите задачу: поток заявок, сайт, репутация, контент, упаковка..." />
            </label>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button type="submit" disabled={submitting} className="liquid-glass-button justify-center disabled:cursor-wait disabled:opacity-70">
              {submitting ? "Отправляем..." : "Получить аудит"}
            </button>
            <p className="text-sm leading-6 text-sand/66">
              {submitted
                ? "Заявка отправлена. Telegram открывается автоматически."
                : copied
                  ? "Текст заявки скопирован. Telegram открыт в новой вкладке."
                  : "После отправки заявка улетит в Telegram, появится подтверждение и откроется чат."}
            </p>
          </div>

          {error ? <p className="mt-3 text-sm leading-6 text-ember">{error}</p> : null}
        </div>
      </form>

      <AnimatePresence>
        {successPopupVisible ? (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.24 }}
            className="fixed bottom-6 right-6 z-[90] max-w-sm rounded-[1.6rem] border border-emerald-400/30 bg-[linear-gradient(180deg,rgba(10,22,14,0.94),rgba(8,16,11,0.92))] p-5 shadow-panel backdrop-blur-xl"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 text-emerald-300">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-emerald-200/75">Заявка отправлена</p>
                <p className="mt-2 text-sm leading-6 text-paper/90">Мы отправили заявку в Telegram. Сейчас откроется чат, чтобы клиент мог написать сразу.</p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
