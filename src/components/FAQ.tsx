import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const questions = [
  {
    question: "Вы работаете только со стоматологиями?",
    answer:
      "Основной фокус — стоматологии, медицинские клиники и эстетическая медицина. Также можем брать смежные ниши, где важны доверие, запись, репутация и понятная экономика заявки.",
  },
  {
    question: "Можно ли начать с одной услуги?",
    answer:
      "Да. Можно начать с аудита, посадочной страницы, рекламной связки, контента, CRM или аналитики. Если видим, что одна услуга без соседних участков не даст эффекта, честно проговорим это на старте.",
  },
  {
    question: "Делаете ли вы рекламу под ключ?",
    answer:
      "Да, но не запускаем рекламу в пустоту. Сначала проверяем посадочную, оффер, форму заявки, мессенджеры, CRM и обработку администратором.",
  },
  {
    question: "Что нужно от клиники для старта?",
    answer:
      "Доступы к текущим площадкам, понимание приоритетных услуг, данные по заявкам, информация о врачах, отзывы, фото/материалы и контакт человека, который отвечает за согласования.",
  },
  {
    question: "Сколько занимает запуск?",
    answer:
      "Аудит и первичная карта роста занимают несколько дней. Посадочная или рекламная связка обычно собирается поэтапно: сроки зависят от объема, готовности материалов и скорости согласований.",
  },
  {
    question: "Можно ли посмотреть кейсы?",
    answer:
      "Да. На сайте есть витрина кейсов по стоматологиям и медицинским проектам. Часть данных может быть обезличена, если клиент не готов раскрывать внутренние цифры.",
  },
  {
    question: "Работаете ли вы с клиниками из регионов?",
    answer:
      "Да. Для региональных клиник особенно важны карты, отзывы, локальный спрос, понятные посадочные и обработка заявок. Мы учитываем город, конкуренцию и особенности локального рынка.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-shell px-4">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Вопросы, которые обычно задает владелец клиники."
          description="Коротко о формате работы, старте, рекламе, регионах и том, как понять, с какого участка лучше начать."
          align="center"
        />

        <div className="mt-12 grid gap-3">
          {questions.map((item, index) => (
            <motion.details
              key={item.question}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="group rounded-[1.15rem] border border-paper/10 bg-paper/[0.055] p-5 shadow-panel backdrop-blur-sm open:border-ember/35"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-display text-2xl uppercase leading-tight text-paper sm:text-3xl">{item.question}</span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-paper/10 text-ember transition group-open:rotate-45">
                  <Plus size={18} />
                </span>
              </summary>
              <p className="mt-5 max-w-3xl text-base leading-7 text-sand/75">{item.answer}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
