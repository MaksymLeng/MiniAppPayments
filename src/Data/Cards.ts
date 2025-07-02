import type {Card} from "../Interface_Type/type.tsx";
import visa from "../assets/visa.svg";
import master from "../assets/master.svg";

export const Cards : Card[] = [
    {
        id: "visa",
        name: "Domen Kralj",
        last4: "**** 6775",
        logo: visa,
        primary: true,
        Data: {
            name: "Domen Kralj",
            country: "United States",
            address: "Tinistay 9/12",
            cardNumber: "4444 1111 2400 6775",
            expiry: "11/29",
            cvc: "676"
        }
    },
    {
        id: "mastercard",
        name: "Domen Kralj",
        last4: "**** 3009",
        logo: master,
        primary: false,
        Data: {
            name: "Domen Kralj",
            country: "United States",
            address: "Tinistay 9/12",
            cardNumber: "4444 1111 2400 3009",
            expiry: "10/26",
            cvc: "542"
        }
    },
];