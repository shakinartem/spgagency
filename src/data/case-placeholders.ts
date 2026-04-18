import type { CaseStudy } from "../types";

type CasePlaceholder = Pick<CaseStudy, "reviewQuote" | "reviewAuthor" | "reviewRole">;

export const casePlaceholders: Record<string, CasePlaceholder> = {
  "kerala": {
    reviewQuote: "Можем поставить сюда отзыв клиента о спокойной expert-подаче, заявках и качестве входящего потока.",
    reviewAuthor: "Имя клиента",
    reviewRole: "Kerala",
  },
  "baumark": {
    reviewQuote: "Здесь можно показать отзыв о том, как контент начал приводить прямые обращения и усилил бренд.",
    reviewAuthor: "Имя клиента",
    reviewRole: "Baumark",
  },
  "limcars-import": {
    reviewQuote: "Сюда хорошо встанет отзыв про прозрачную воронку, контент и первые продажи дорогого продукта.",
    reviewAuthor: "Имя клиента",
    reviewRole: "Limcars Import",
  },
  "arximed-security": {
    reviewQuote: "Заглушка под отзыв о том, как аудит и доработка цифрового контура сняли риски и усилили проект.",
    reviewAuthor: "Имя клиента",
    reviewRole: "Arximed Security",
  },
  "zelenec": {
    reviewQuote: "Здесь можно показать отзыв о перезапуске репутации, новой подаче проекта и возвращенном доверии.",
    reviewAuthor: "Имя клиента",
    reviewRole: "Зеленец",
  },
  "armada-sales-funnel": {
    reviewQuote: "Подходит отзыв про управляемую воронку продаж, контент как доказательство и понятный маршрут до сделки.",
    reviewAuthor: "Имя клиента",
    reviewRole: "Armada Sales Funnel",
  },
  "alexandra-brukh": {
    reviewQuote: "Сюда можно добавить отзыв о росте личного бренда, заявках и собранной контентной системе.",
    reviewAuthor: "Имя клиента",
    reviewRole: "Alexandra Brukh",
  },
  "shvyreva": {
    reviewQuote: "Здесь хорошо работает отзыв о доверии к эксперту, упаковке и мягкой, но сильной digital-подаче.",
    reviewAuthor: "Имя клиента",
    reviewRole: "Швырёва",
  },
  "po-pyatam": {
    reviewQuote: "Место под отзыв о том, как системная работа с контентом и упаковкой дала понятный поток обращений.",
    reviewAuthor: "Имя клиента",
    reviewRole: "По Пятам",
  },
  "divina-podology": {
    reviewQuote: "Сюда можно поставить отзыв о деликатной коммуникации, доверии и стабильном потоке записей.",
    reviewAuthor: "Имя клиента",
    reviewRole: "Divina Podology",
  },
  "eurodent": {
    reviewQuote: "Заглушка под отзыв о стоматологическом кейсе: репутация, контент, сайт и маршрут пациента до записи.",
    reviewAuthor: "Имя клиента",
    reviewRole: "Eurodent",
  },
  "sychev": {
    reviewQuote: "Здесь можно показать отзыв о личном бренде, экспертной упаковке и работающем digital-контуре.",
    reviewAuthor: "Имя клиента",
    reviewRole: "Сычёв",
  },
  "auto-desk": {
    reviewQuote: "Подойдет отзыв о тесте нового канала, аккуратной аналитике и первых подтвержденных результатах.",
    reviewAuthor: "Имя клиента",
    reviewRole: "Auto Desk",
  },
  "dom-angelov": {
    reviewQuote: "Сюда хорошо встанет отзыв о PR-подаче, росте видимости проекта и внимании к культурному контексту.",
    reviewAuthor: "Имя клиента",
    reviewRole: "Дом Ангелов",
  },
  "mir-zhilya": {
    reviewQuote: "Место под отзыв о локальном контенте, доверии к агентству и заявках из органического спроса.",
    reviewAuthor: "Имя клиента",
    reviewRole: "Мир Жилья",
  },
  "serega-trucks": {
    reviewQuote: "Здесь можно показать отзыв о перезапуске канала, очистке аудитории и сильной экспертной подаче.",
    reviewAuthor: "Имя клиента",
    reviewRole: "Серёга Тракс",
  },
  "method-effekom": {
    reviewQuote: "Подходит отзыв о B2B-упаковке, первых продажах и лендинге, который начал объяснять ценность продукта.",
    reviewAuthor: "Имя клиента",
    reviewRole: "Метод Эффеком",
  },
  "vox": {
    reviewQuote: "Сюда можно добавить отзыв о быстром запуске доверия к бренду и конверсии внимания в заявки.",
    reviewAuthor: "Имя клиента",
    reviewRole: "VOX",
  },
  "biomed-salavat": {
    reviewQuote: "Здесь можно показать отзыв о том, как карты и VK начали работать как управляемый канал доверия и записи в клинику.",
    reviewAuthor: "Имя клиента",
    reviewRole: "Биомед",
  },
  "interdent-neftekamsk": {
    reviewQuote: "Сюда хорошо встанет отзыв о локальном потоке пациентов, усилении репутации и заметности клиники в городе.",
    reviewAuthor: "Имя клиента",
    reviewRole: "Интердент",
  },
  "dental-pro-ufa": {
    reviewQuote: "Подходит отзыв о спокойной упаковке, маршруте пациента до записи и системной работе без хаоса подрядчиков.",
    reviewAuthor: "Имя клиента",
    reviewRole: "Дентал-про",
  },
  "ibradent-ufa": {
    reviewQuote: "Здесь можно добавить отзыв о том, как digital-система усилила доверие к клинике и упростила входящий поток обращений.",
    reviewAuthor: "Имя клиента",
    reviewRole: "IbraDent",
  },
};
