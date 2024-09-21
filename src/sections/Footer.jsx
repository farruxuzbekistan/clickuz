import { socials } from "../constants/index.jsx";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-10">
      <div className="container">
        {/* Top section with logo and contact info */}
        <div className="flex flex-wrap justify-between max-lg:flex-col">
          {/* Logo and Contact Info */}
          <div className="flex flex-col w-1/3 max-lg:w-full max-lg:mb-5">
            <img
              width={80}
              src="/images/click-logo.svg"
              alt="Click Logo"
              className="mb-5"
            />
            <p className="font-bold">Служба поддержки</p>
            <p>+998 71 231 0880</p>
            <p>info@click.uz</p>
            <img
              width={80}
              src="/images/dss.png"
              alt="PCI DSS"
              className="mt-4"
            />
          </div>

          {/* О сервисе */}
          <div className="w-1/5 max-lg:w-full max-lg:mb-5">
            <h4 className="mb-4 font-bold">О сервисе</h4>
            <ul className="space-y-2">
              <li>
                <a href="#">О компании</a>
              </li>
              <li>
                <a href="#">Описание и возможности системы</a>
              </li>
              <li>
                <a href="#">Новости</a>
              </li>
              <li>
                <a href="#">Тарифы</a>
              </li>
              <li>
                <a href="#">Вакансии</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </div>

          {/* Помощь */}
          <div className="w-1/5 max-lg:w-full max-lg:mb-5">
            <h4 className="mb-4 font-bold">Помощь</h4>
            <ul className="space-y-2">
              <li>
                <a href="#">Инструкция Click Up</a>
              </li>
              <li>
                <a href="#">Telegram-bot @clickuz</a>
              </li>
              <li>
                <a href="#">Часто задаваемые вопросы</a>
              </li>
              <li>
                <a href="#">Политика конфиденциальности</a>
              </li>
              <li>
                <a href="#">Для разработчиков</a>
              </li>
            </ul>
          </div>

          {/* Услуги */}
          <div className="w-1/5 max-lg:w-full max-lg:mb-5">
            <h4 className="mb-4 font-bold">Услуги</h4>
            <ul className="space-y-2">
              <li>
                <a href="#">Click кошелек</a>
              </li>
              <li>
                <a href="#">Оплата на местах</a>
              </li>
              <li>
                <a href="#">Click Терминал</a>
              </li>
              <li>
                <a href="#">Экспресс-оплата</a>
              </li>
              <li>
                <a href="#">Услуга "Автоплатеж"</a>
              </li>
            </ul>
          </div>

          {/* Click Up */}
          <div className="w-1/5 max-lg:w-full">
            <h4 className="mb-4 font-bold">Click Up</h4>
            <p className="mb-3">Доступно для iOS и Android</p>
            <div className="flex space-x-2">
              <a href="#">
                <img src="/images/evo1.svg" alt="App Store" className="w-8" />
              </a>
              <a href="#">
                <img src="/images/evo2.svg" alt="Google Play" className="w-8" />
              </a>
              <a href="#">
                <img src="/images/evo3.svg" alt="App Gallery" className="w-8" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section with developer credit and socials */}
        <div className="mt-10 border-t border-gray-700 pt-5 flex justify-between items-center max-lg:flex-col max-lg:items-start">
          <p className="text-sm max-lg:mb-4">
            АО "Click" &copy; 2011-2024. Все права защищены.
          </p>
          <p className="text-sm max-lg:mb-4">
            Разработано{" "}
            <a
              href="https://www.youtube.com/@FarruxDeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              Farrux Developer
            </a>
          </p>
          <ul className="flex space-x-3 max-lg:mt-4">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a href={url} className="social-icon">
                  <img src={icon} alt={title} className="w-6 h-6" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
