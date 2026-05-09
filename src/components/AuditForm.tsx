import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { siteConfig } from "../data/site-config";

type AuditFormMode = "short" | "full";

type AuditFormProps = {
  mode?: AuditFormMode;
  title?: string;
  description?: string;
  buttonLabel?: string;
};

type FormState = {
  name: string;
  telegram: string;
  phone: string;
  city: string;
  niche: string;
  services: string[];
  comment: string;
};

const serviceOptions = [
  "SMM",
  "Реклама",
  "SEO",
  "SERM",
  "Карты",
  "Посадочная",
  "CRM",
  "Аналитика",
  "Контент",
  "Сопровождение",
  "Не знаю, нужен разбор",
];

const initialState: FormState = {
  name: "",
  telegram: "",
  phone: "",
  city: "",
  niche: "",
  services: [],
  comment: "",
};

export function AuditForm({
  mode = "full",
  title,
  description,
  buttonLabel,
}: AuditFormProps) {
  const isShort = mode === "short";
  const [form, setForm] = useState<FormState>(initialState);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [successPopupVisible, setSuccessPopupVisible] = useState(false);

  const resolvedTitle = title ?? (isShort ? "Оставьте имя и Telegram" : "Покажем, где клиника теряет заявки.");
  const resolvedDescription =
    description ??
    (isShort
      ? "Оставьте имя и Telegram — обсудим выбранный пакет и подскажем, с чего начать."
      : "Заполните короткую анкету — мы посмотрим город, нишу и задачу, а затем предложим понятный первый шаг.");
  const resolvedButtonLabel = buttonLabel ?? (isShort ? "Получить расчет" : "Получить разбор клиники");

  const message = useMemo(() => {
    const lines = [
      `Новая заявка с сайта SPG (${isShort ? "короткая форма" : "полная анкета"})`,
      `Имя: ${form.name || "не указано"}`,
      `Telegram: ${form.telegram || "не указан"}`,
    ];

    if (!isShort) {
      lines.push(
        `Телефон или мессенджер: ${form.phone || "не указан"}`,
        `Город: ${form.city || "не указан"}`,
        `Ниша: ${form.niche || "не указана"}`,
        `Желаемые услуги: ${form.services.length ? form.services.join(", ") : "не указаны"}`,
        `Комментарий: ${form.comment || "не указан"}`,
      );
    }

    return lines.join("\n");
  }, [form, isShort]);

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

  const toggleService = (service: string) => {
    setForm((current) => {
      const hasService = current.services.includes(service);
      return {
        ...current,
        services: hasService ? current.services.filter((item) => item !== service) : [...current.services, service],
      };
    });
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
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            mode,
            message,
            source: "spgagency-site",
            createdAt: new Date().toISOString(),
          }),
        });

        if (!response.ok) throw new Error("Webhook error");

        setForm(initialState);
        showSuccess();
        openTelegram();
        return;
      } catch {
        setError("Не удалось отправить заявку через webhook. Можно написать нам напрямую в Telegram.");
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
      setError("Не удалось автоматически скопировать текст заявки. Можно написать нам напрямую в Telegram.");
    }

    showSuccess();
    openTelegram();
  };

  return (
    <>
      <form id={isShort ? "calculator-form" : "audit-form"} onSubmit={handleSubmit} className="panel-card relative overflow-hidden p-6 sm:p-7">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,106,61,0.12),transparent_34%)]" />
        <div className="relative">
          <h3 className="font-display text-4xl uppercase leading-tight text-paper">{resolvedTitle}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-sand/70">{resolvedDescription}</p>

          <div className="mt-6 grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm uppercase tracking-[0.2em] text-sand/60">Имя</span>
              <input
                value={form.name}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                className="rounded-2xl border border-paper/10 bg-paper/[0.07] px-4 py-3 text-paper outline-none transition focus:border-ember/40"
                placeholder="Как к вам обращаться"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm uppercase tracking-[0.2em] text-sand/60">Telegram username</span>
              <input
                value={form.telegram}
                onChange={(event) => setForm((prev) => ({ ...prev, telegram: event.target.value }))}
                className="rounded-2xl border border-paper/10 bg-paper/[0.07] px-4 py-3 text-paper outline-none transition focus:border-ember/40"
                placeholder="@username"
              />
            </label>

            {!isShort ? (
              <>
                <label className="grid gap-2">
                  <span className="text-sm uppercase tracking-[0.2em] text-sand/60">Телефон или мессенджер</span>
                  <input
                    value={form.phone}
                    onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                    className="rounded-2xl border border-paper/10 bg-paper/[0.07] px-4 py-3 text-paper outline-none transition focus:border-ember/40"
                    placeholder="+7 или удобный мессенджер"
                  />
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-sm uppercase tracking-[0.2em] text-sand/60">Город</span>
                    <input
                      value={form.city}
                      onChange={(event) => setForm((prev) => ({ ...prev, city: event.target.value }))}
                      className="rounded-2xl border border-paper/10 bg-paper/[0.07] px-4 py-3 text-paper outline-none transition focus:border-ember/40"
                      placeholder="Где работает клиника"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm uppercase tracking-[0.2em] text-sand/60">Ниша</span>
                    <input
                      value={form.niche}
                      onChange={(event) => setForm((prev) => ({ ...prev, niche: event.target.value }))}
                      className="rounded-2xl border border-paper/10 bg-paper/[0.07] px-4 py-3 text-paper outline-none transition focus:border-ember/40"
                      placeholder="Стоматология, медицина, эстетика"
                    />
                  </label>
                </div>

                <div className="grid gap-3">
                  <span className="text-sm uppercase tracking-[0.2em] text-sand/60">Желаемые услуги</span>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((service) => {
                      const active = form.services.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                            active
                              ? "border-ember bg-ember text-white"
                              : "border-paper/10 bg-paper/[0.05] text-sand/75 hover:border-ember/35 hover:text-paper"
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <label className="grid gap-2">
                  <span className="text-sm uppercase tracking-[0.2em] text-sand/60">Комментарий</span>
                  <textarea
                    value={form.comment}
                    onChange={(event) => setForm((prev) => ({ ...prev, comment: event.target.value }))}
                    className="min-h-[8rem] rounded-2xl border border-paper/10 bg-paper/[0.07] px-4 py-3 text-paper outline-none transition focus:border-ember/40"
                    placeholder="Коротко опишите задачу, текущую ситуацию или что хотите улучшить."
                  />
                </label>
              </>
            ) : null}
          </div>

          <div className="mt-6 grid gap-3">
            <button type="submit" disabled={submitting} className="btn-primary w-full justify-center disabled:cursor-wait disabled:opacity-70">
              {submitting ? "Отправляем..." : `${resolvedButtonLabel} →`}
              <ArrowRight size={18} />
            </button>
            <p className="text-sm leading-6 text-sand/70">
              {submitted ? "Заявка отправлена." : copied ? "Текст заявки скопирован." : "Ответим и подскажем, с чего лучше начать."}
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
            className="fixed bottom-6 right-6 z-[90] max-w-sm rounded-[1.4rem] border border-emerald-400/30 bg-[linear-gradient(180deg,rgba(10,22,14,0.94),rgba(8,16,11,0.92))] p-5 shadow-panel backdrop-blur-xl"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 text-emerald-300">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-emerald-200/75">Заявка отправлена</p>
                <p className="mt-2 text-sm leading-6 text-white/90">Мы получили вводные и скоро вернемся с первым вопросом.</p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
