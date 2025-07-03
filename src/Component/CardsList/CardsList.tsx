import {ChevronRightIcon, PlusIcon} from "@heroicons/react/24/solid";
import AddCardModal from "../AddCard/AddCardModal.tsx";
import {CardDetailsModal} from "../CardDetailsModal/CardDetailsModal.tsx";
import {addCard, getCards, removeCard, setPrimaryCard} from "../../Services/cardService.ts";
import defence from "../../assets/Messages/defence.png";
import {useState} from "react";
import type {Card, CardFormData} from "../../Interface_Type/Type.tsx";


const CardsList = () => {
    const [cards, setCards] = useState<Card[]>(getCards());
    const [selectedCard, setSelectedCard] = useState<Card | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isDetailsOpen, setDetailsOpen] = useState(false);

    const handleCardSubmit = (form: CardFormData) => {
        addCard(form); //can be added to the variable
        setCards([...getCards()]);
    };

    const handleOpenDetails = (card: Card) => {
        setSelectedCard(card);

        setDetailsOpen(true);
    };

    return (
        <section>
            <div className="flex justify-between items-center gap-2 mb-2.5">
                <div className="font-semibold">Payment cards</div>
                <button onClick={() => setIsOpen(true)} className="font-semibold text-blue-500 flex gap-2 cursor-pointer items-center justify-center">
                        <span className="font-bold">
                            <PlusIcon className="w-4 h-4 text-gray-200" />
                        </span>
                    <span>Add card</span>
                </button>
            </div>
            <AddCardModal isOpen={isOpen} onClose={() => setIsOpen(false)} onSubmit={handleCardSubmit} />

            {cards.map((card) => (
                <div key={card.id} className="flex items-center gap-3 mb-5" onClick={() => handleOpenDetails(card)}>
                    <img
                        src={card.logo}
                        alt={card.id}
                        width={60}
                        className="rounded-xl overflow-hidden shrink-0"
                    />
                    <div className="flex justify-between items-center w-full">
                        <div className="flex flex-col items-start font-medium">
                            <div className="flex items-center gap-2.5">
                                {card.name}
                                {card.primary && (
                                    <div className="rounded-lg text-blue-500 bg-blue-100 px-1 py-[0.02rem] text-[0.7rem]">
                                        Primary
                                    </div>
                                )}
                            </div>
                            <div className="opacity-50 text-xs mt-0.5">{card.last4}</div>
                        </div>
                        <button className="cursor-pointer"  onClick={() => handleOpenDetails(card)}>
                            <ChevronRightIcon className="w-4 h-4 text-gray-200" />
                        </button>
                    </div>
                </div>
            ))}

            {selectedCard && (
                <CardDetailsModal
                    isOpen={isDetailsOpen}
                    onClose={() => setDetailsOpen(false)}
                    card={selectedCard}
                    onDelete={(id) => {
                        removeCard(id); // если есть
                        setCards([...getCards()]);
                        setDetailsOpen(false);
                    }}
                    onSetPrimary={(id) => {
                        setPrimaryCard(id); // если есть
                        setCards([...getCards()]);
                        setDetailsOpen(false);
                    }}
                />
            )}

            <div className="bg-green-200/15 rounded-lg py-2 px-3 text-sm flex items-center">
                <img src={defence} alt="defence" className="rounded-xl overflow-hidden shrink-0 h-10 w-10"/>
                <div className="">
                    We are compliant with the payment card industry data security standard.
                </div>
            </div>
        </section>
    )
}

export default CardsList