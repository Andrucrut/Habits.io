import React from 'react';
import './teoria.css';

const Services = () => {
    const services = [
        {
            name: 'Ремонт квартиры под ключ',
            price: 'от 3000 ₽/м^2'
        },
        {
            name: 'Ремонт квартиры по дизайн проекту',
            price: 'от 3000 ₽/м^2'
        },
        {
            name: 'Создание дизайн проекта',
            price: 'от 2500 ₽/м^2'
        },
        {
            name: 'Косметический ремонт квартиры',
            price: 'от 2000 ₽/м^2'
        },
        {
            name: 'Капитальный ремонт квартиры',
            price: 'от 2500 ₽/м^2'
        },
        {
            name: 'Евроремонт квартиры',
            price: 'от 2350 ₽/м^2'
        },
        {
            name: 'Ремонт дома под ключ',
            price: 'от 5000 ₽/м^2'
        },
        {
            name: 'Ремонт кухни',
            price: 'от 2150 ₽/м^2'
        },
        {
            name: 'Ремонт ванной комнаты',
            price: 'от 1900 ₽/м^2'
        },
        {
            name: 'Чистовая отделка квартир и домов',
            price: 'от 2000 ₽/м^2'
        },
        {
            name: 'Черновая отделка квартир и домов',
            price: 'от 4000 ₽/м^2'
        }
    ];

    return (
        <div className="services-container">
            <h1 className="services-title">Услуги</h1>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="services-item">
                        <h3 className="services-name">{service.name}</h3>
                        <p className="services-price">{service.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
