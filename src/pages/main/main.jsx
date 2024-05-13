import React, { useState } from 'react';
import "./main.css";
import { FaFacebook, FaVk, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const Main = () => {
    const [selectedOption, setSelectedOption] = useState('Telegram');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const renderSocialButton = (icon, label) => (
        <button
            className="social-button"
            onClick={() => handleOptionSelect(label)}
        >
            {icon}
        </button>
    );

    return (
        <div className="main-container">
            <div className="main-content">
                <h1 className="main-title">Hatchet</h1>
                <h2 className="main-subtitle">Надежность и уверенность - гарантия 5 лет</h2>
                <div className="description-block">
                    <p className="description-text">
                        Добро пожаловать в Hatchet, где мы превращаем ваши мечты в
                        реальность, создавая пространства, которые отражают вашу личность и
                        удовлетворяют ваши потребности. Наш сайт является вашим
                        однокликным решением для всех ваших строительных и ремонтных нужд.
                    </p>
                    <div className="checkmark">&#10003;</div>
                </div>
                <div className="description-block">
                    <p className="description-text">
                        Здесь вы найдете талантливых и опытных строителей, которые не только
                        обладают необходимыми навыками и знаниями, но и глубоко заботятся о
                        том, чтобы предоставить вам исключительное качество и внимание к
                        деталям. Мы тщательно проверяем всех наших работников, чтобы
                        гарантировать, что вы получаете только лучшее.
                    </p>
                    <div className="checkmark">&#10003;</div>
                </div>
                <div className="description-block">
                    <p className="description-text">
                        Наш сайт предлагает удобный поиск, отзывы, фотографии работ, оценки
                        и рейтинги, а также подтверждение документов рабочих, чтобы помочь
                        вам сделать осознанный выбор. Кроме того, мы предлагаем гарантию 5 лет
                        на все наши услуги, чтобы вы могли быть уверены в том, что ваш дом или
                        офис будет служить вам долгие годы.
                    </p>
                    <div className="checkmark">&#10003;</div>
                </div>
                <div className="description-block">
                    <p className="description-text">
                        Hatchet - это не просто строительная компания, это ваше
                        вечное убежище, где мы создаем пространства, которые вдохновляют,
                        утешают и радуют. Присоединяйтесь к нам сегодня и дайте нам
                        возможность превратить ваши мечты в реальность.
                    </p>
                    <div className="checkmark">&#10003;</div>
                </div>
            </div>
            <div className="contact-block">
                <h2 className="contact-title">Свяжитесь с нами</h2>
                <div className="social-buttons">
                    {renderSocialButton(<FaFacebook />, 'Facebook')}
                    {renderSocialButton(<FaVk />, 'Вконтакте')}
                    {renderSocialButton(<FaTelegram />, 'Telegram')}
                    {renderSocialButton(<FaWhatsapp />, 'WhatsApp')}
                </div>
                {selectedOption && (
                    <div className="selected-option">
                        <p>Ваш телефон в {selectedOption}:</p>
                        <input type="tel" />
                        <button className="send-button">Отправить</button>
                    </div>
                )}
                <div className="phone-number">
                    <p>или позвонить:</p>
                    <p>+7 (123) 456-78-90</p>
                </div>
            </div>
        </div>
    );
};

export default Main;
