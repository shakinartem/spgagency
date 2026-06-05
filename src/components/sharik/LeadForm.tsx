import { type FormEvent, useState } from "react";

type LeadFormValues = {
  name: string;
  contact: string;
  clinic: string;
  city: string;
  comment: string;
};

type FormErrors = Partial<Record<keyof LeadFormValues, string>>;

const initialValues: LeadFormValues = {
  name: "",
  contact: "",
  clinic: "",
  city: "",
  comment: "",
};

function validate(values: LeadFormValues) {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Укажите имя";
  }

  if (!values.contact.trim()) {
    errors.contact = "Укажите телефон или Telegram";
  }

  if (!values.clinic.trim()) {
    errors.clinic = "Укажите название клиники";
  }

  return errors;
}

export function LeadForm({ exact = false }: { exact?: boolean }) {
  const [values, setValues] = useState<LeadFormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const setField = (field: keyof LeadFormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status === "success") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "loading") {
      return;
    }

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus("loading");

    // TODO: подключить отправку в CRM / Telegram / API, не храня секреты на фронтенде.
    await new Promise((resolve) => window.setTimeout(resolve, 750));

    setValues(initialValues);
    setStatus("success");
  };

  return (
    <form className={`lead-form ${exact ? "lead-form--exact" : ""}`} onSubmit={handleSubmit} noValidate aria-label="Заявка на первичный разбор">
      <div className="field">
        <label htmlFor="lead-name">Имя</label>
        <input
          id="lead-name"
          value={values.name}
          onChange={(event) => setField("name", event.target.value)}
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "lead-name-error" : undefined}
        />
        {errors.name ? (
          <span id="lead-name-error" className="field-error">
            {errors.name}
          </span>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="lead-contact">Телефон / Telegram</label>
        <input
          id="lead-contact"
          value={values.contact}
          onChange={(event) => setField("contact", event.target.value)}
          placeholder="+7 или @username"
          autoComplete="tel"
          aria-invalid={Boolean(errors.contact)}
          aria-describedby={errors.contact ? "lead-contact-error" : undefined}
        />
        {errors.contact ? (
          <span id="lead-contact-error" className="field-error">
            {errors.contact}
          </span>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="lead-clinic">Название клиники</label>
        <input
          id="lead-clinic"
          value={values.clinic}
          onChange={(event) => setField("clinic", event.target.value)}
          autoComplete="organization"
          aria-invalid={Boolean(errors.clinic)}
          aria-describedby={errors.clinic ? "lead-clinic-error" : undefined}
        />
        {errors.clinic ? (
          <span id="lead-clinic-error" className="field-error">
            {errors.clinic}
          </span>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="lead-city">Город</label>
        <input id="lead-city" value={values.city} onChange={(event) => setField("city", event.target.value)} autoComplete="address-level2" />
      </div>

      <div className="field field--wide field--comment">
        <label htmlFor="lead-comment">Комментарий</label>
        <textarea
          id="lead-comment"
          value={values.comment}
          onChange={(event) => setField("comment", event.target.value)}
          placeholder="Что важно посмотреть в первую очередь"
          rows={4}
        />
      </div>

      <button className="lead-form__submit" type="submit" disabled={status === "loading"}>
        <span>{status === "loading" ? "Отправляем..." : "Получить разбор"}</span>
      </button>

      <p className="lead-form__privacy">Данные не передаются третьим лицам.</p>

      <p className={`lead-form__status ${status === "success" ? "is-visible" : ""}`} role="status" aria-live="polite">
        Заявка принята. Мы свяжемся с вами и предложим формат первичного разбора.
      </p>
    </form>
  );
}
