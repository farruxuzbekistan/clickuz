// src/constants/index.jsx

export const features = [
  {
    id: "0",
    icon: "/images/wallet_new1.svg",
    caption: "Быстрая интеграция",
    title: "Удобные платежные решения",
    text: "С нашим сервисом вы сможете легко интегрировать платежные системы в свой бизнес. Автоматизация процессов и удобные инструменты позволят вам сэкономить время и усилия.",
    button: {
      icon: "/images/magictouch.svg",
      title: "Узнать больше",
    },
  },
  {
    id: "1",
    icon: "/images/item3.svg",
    caption: "Безопасность",
    title: "Ваши платежи под надежной защитой",
    text: "Мы используем передовые технологии шифрования для защиты ваших транзакций и данных. Ваши средства и личная информация всегда в безопасности.",
    button: {
      icon: "/images/docs.svg",
      title: "Посмотреть условия",
    },
  },
];

export const details = [
  {
    id: "0",
    icon: "/images/wallet_new1.svg",
    title: "Мгновенные переводы",
  },
  {
    id: "1",
    icon: "/images/wallet_new2.svg",
    title: "Управление счетами онлайн",
  },
  {
    id: "2",
    icon: "/images/detail-3.png",
    title: "Платежи в любую точку мира",
  },
  {
    id: "3",
    icon: "/images/wallet_new3.svg",
    title: "Круглосуточная поддержка",
  },
];

export const faq = [
  {
    id: "0",
    question: "Как быстро можно настроить платежную систему?",
    answer:
      "Настройка платежной системы займет несколько минут. Мы предоставляем подробные инструкции для быстрого старта.",
  },
  {
    id: "1",
    question: "Могу ли я использовать сервис для международных платежей?",
    answer:
      "Да, наш сервис поддерживает переводы в любые страны мира с минимальными комиссиями.",
  },
  {
    id: "2",
    question: "Как я могу получить возврат средств?",
    answer:
      "Возврат средств возможен в любой момент. Просто свяжитесь с нашей службой поддержки, и мы поможем вам решить вопрос.",
  },
  {
    id: "3",
    question: "Есть ли у вас корпоративные тарифы?",
    answer:
      "Да, мы предлагаем специальные тарифы для компаний и бизнеса, которые включают дополнительные услуги и скидки.",
  },
  {
    id: "4",
    question: "Как происходит защита моих данных?",
    answer:
      "Ваши данные шифруются с использованием самых современных технологий, что гарантирует их полную безопасность.",
  },
];

export const plans = [
  {
    id: "0",
    title: "Стартовый",
    priceMonthly: 19,
    priceYearly: 12,
    caption: "Для небольших бизнесов",
    features: [
      "500 операций в месяц",
      "Поддержка локальных платежей",
      "Интеграция с CRM",
      "Поддержка 24/7",
    ],
    icon: "/images/circle.svg",
    logo: "/images/plan-1.png",
  },
  {
    id: "1",
    title: "Бизнес",
    priceMonthly: 79,
    priceYearly: 59,
    caption: "Для среднего бизнеса",
    features: [
      "Неограниченные транзакции",
      "Поддержка международных платежей",
      "Интеграция с бухгалтерскими системами",
      "Аналитика и отчеты",
    ],
    icon: "/images/triangle.svg",
    logo: "/images/plan-2.png",
  },
  {
    id: "2",
    title: "Корпоративный",
    priceMonthly: 199,
    priceYearly: 149,
    caption: "Для крупных компаний",
    features: [
      "Все функции бизнес-плана",
      "VIP поддержка",
      "Персональные условия",
      "Интеграция с любыми системами",
    ],
    icon: "/images/hexagon.svg",
    logo: "/images/plan-3.png",
  },
];

export const testimonials = [
  {
    id: "0",
    name: "Андрей Смирнов",
    role: "ООО «Бизнес Платежи»",
    avatarUrl: "/images/testimonials/jessica-saunders.png",
    comment:
      "Сервис помог нам значительно упростить процесс приема платежей. Техническая поддержка всегда на высоте!",
  },
  {
    id: "1",
    name: "Елена Иванова",
    role: "ИП Иванова",
    avatarUrl: "/images/testimonials/mark-erixon.png",
    comment:
      "Использую сервис для международных платежей. Всё работает быстро и надежно, рекомендую!",
  },
  {
    id: "2",
    name: "Сергей Петров",
    role: "ООО «Торговый Дом»",
    avatarUrl: "/images/testimonials/melanie-hurst.png",
    comment:
      "Мы сократили расходы на обработку платежей благодаря интеграции с этим сервисом. Это было отличное решение для нашего бизнеса.",
  },
];

export const logos = [
  {
    id: "0",
    title: "Click",
    url: "/images/click-logo.svg",
    width: 156,
    height: 48,
  },
  {
    id: "1",
    title: "Dss",
    url: "/images/dss.png",
    width: 194,
    height: 48,
  },
];

export const Ios = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Add your SVG content here */}
    </svg>
  );
};

export const Android = () => {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Add your SVG content here */}
    </svg>
  );
};

export const links = [
  {
    id: "0",
    title: "Ios",
    icon: <Ios />,
    url: "#",
  },
  {
    id: "1",
    title: "Android",
    icon: <Android />,
    url: "#",
  },
];

export const socials = [
  {
    id: "0",
    title: "Telegram",
    icon: "/images/socials/threads.svg",
    url: "#",
  },
  {
    id: "1",
    title: "Instagram",
    icon: "/images/socials/instagram.svg",
    url: "#",
  },
];
