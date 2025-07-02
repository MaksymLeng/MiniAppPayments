import {Cards} from "../Data/Cards.ts";
import type {Card, CardFormData} from "../Interface_Type/Type.tsx";
import visa from "../assets/Cards/visa.svg";
import mastercard from "../assets/Cards/master.svg";

let cards: Card[] = Cards;

export const getCards = () => cards;

export const addCard = (form: CardFormData) => {
    const last4 = form.cardNumber.slice(-4);
    const logo = form.cardNumber.startsWith("4") ? visa : mastercard;

    const newCard: Card = {
        id: Date.now().toString(),
        name: form.name,
        last4: `**** ${last4}`,
        logo,
        primary: cards.length === 0, // первая карта — основная
        Data: form,
    };

    cards.push(newCard);
    return newCard;
};

export const setPrimaryCard = (id: string) => {
    cards = cards.map(card => ({
        ...card,
        primary: card.id === id,
    }));
};

export const removeCard = (id: string) => {
    cards = cards.filter(card => card.id !== id);
};

