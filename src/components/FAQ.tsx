import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const questions = [
  {
    question: "Вы работаете только с клиниками?",
    answer:
      "Мы работаем с клиниками, где решение пациента зависит от доверия и репутации: стоматология, медицина и эстетическая медицина.",
  },
  {
    question: "Это лидогенерация или стратегия?",
    answer:
      "И то, и другое, если клинике нужна система. Мы начинаем с диагностики, затем собираем инфраструктуру: позиционирование, посадочные, реклама, CRM, репутация, контент и аналитика.",
  },
  {
    question: "Можно заказать только сайт?",
    answer:
      "Можно, но сайт рассматриваем как часть маршрута пациента. Он должен объяснять ценность клиники, снижать тревогу и вести к записи, а не просто быть красивой витриной.",
  },
  {
    question: "Как быстро можно увидеть первые решения?",
    answer:
      "Первичную карту роста и приоритеты можно собрать за несколько дней после вводных. Срок запуска зависит от состава работ и текущего состояния маркетинга клиники.",
  },
  {
    question: "Почему не использовать типовой медицинский дизайн?",
    answer:
      "Медицина продается доверием, ясностью и ощущением уровня. Типовой шаблон часто делает клинику похожей на всех и снижает ценность бренда.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-shell px-4">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Вопросы"
          title="Вопросы, которые обычно задают перед стартом."
          description="Коротко о формате: мы не продаем набор разрозненных услуг, а собираем маркетинговую систему под рост клиники."
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
              className="group rounded-[1.45rem] border border-paper/10 bg-paper/[0.055] p-5 shadow-panel backdrop-blur-sm open:border-ember/35"
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
