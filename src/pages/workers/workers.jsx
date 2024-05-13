import React from 'react';
import worker1 from '../../image/1work.jpeg';
import worker2 from '../../image/worker2.jpeg';
import worker3 from '../../image/work3.jpeg';
import worker4 from '../../image/work4.jpeg';
import worker5 from '../../image/work6.jpeg';
import worker6 from '../../image/article626454.jpg';
import worker7 from '../../image/work7.jpeg';
import worker8 from '../../image/MrBeast_2023_(cropped).jpg';
import "./workers.css"

const Worker = ({ worker }) => {
    const { name, photo, price, prof, stars, phone } = worker;

    return (
        <div className="worker">
            <img src={photo} alt={name} className="worker-photo" />
            <h3 className="worker-name">{name}</h3>
            <div className="worker-price">{price} руб.</div>
            <div className="worker-prof">{prof}</div>
            <div className="worker-stars">
                {[...Array(stars)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                ))}
                {[...Array(5 - stars)].map((_, i) => (
                    <i key={i} className="far fa-star"></i>
                ))}
            </div>
            <div className="worker-phone">{phone}</div>
        </div>
    );
};

const Workers = () => {
    const workers = [
        {
            name: 'Иван Иванов',
            photo: worker1,
            price: 2000,
            stars: 4,
            prof: "Строитель",
            phone: "+7 (999) 123-45-67"
        },
        {
            name: 'Петр Петров',
            photo: worker2,
            price: 3000,
            stars: 5,
            prof: "Плотник",
            phone: "+7 (999) 987-65-43"
        },
        {
            name: 'Антон Антонов',
            photo: worker3,
            price: 2500,
            stars: 4,
            prof: "Электрик",
            phone: "+7 (999) 111-22-33"
        },
        {
            name: 'Сергей Сергеев',
            photo: worker4,
            price: 2800,
            stars: 3,
            prof: "Сантехник",
            phone: "+7 (999) 444-55-66"
        },
        {
            name: 'Дмитрий Дмитриев',
            photo: worker5,
            price: 3500,
            stars: 5,
            prof: "Штукатур",
            phone: "+7 (999) 777-88-99"
        },
        {
            name: 'Алексей Алексеев',
            photo: worker6,
            price: 4000,
            stars: 4,
            prof: "Краснодеревщик",
            phone: "+7 (999) 333-44-55"
        },
        {
            name: 'Максим Максимов',
            photo: worker7,
            price: 2200,
            stars: 3,
            prof: "Отделочник",
            phone: "+7 (999) 666-77-88"
        },
        {
            name: 'Михаил Михайлов',
            photo: worker8,
            price: 5000,
            stars: 5,
            prof: "Дизайнер",
            phone: "+7 (999) 999-00-11"
        },
    ];

    return (
        <div className="workers">
            {workers.map((worker, i) => (
                <Worker key={i} worker={worker} />
            ))}
        </div>
    );
};

export default Workers;
