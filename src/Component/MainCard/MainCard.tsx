import {Fragment, useState} from "react";
import {Link} from "react-router-dom";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions} from "@headlessui/react"
import {ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, PlusIcon} from "@heroicons/react/24/solid";
import AddCardModal from "../AddCard/AddCardModal.tsx";
import {Transactions} from "../../Data/Transactions"; // путь подкорректируй если нужно

import { CardDetailsModal } from "../CardDetailsModal/CardDetailsModal.tsx";
import {addCard, getCards, removeCard, setPrimaryCard} from "../../Services/cardService.ts";
import {amountsRecharge as amounts} from "../../Data/Amounts.ts";

import type {Card, CardFormData} from "../../Interface_Type/Type.tsx";
import defence from '../../assets/Messages/defence.png'

const MainCard = () => {
    const [enabled, setEnabled] = useState(false);
    const [selected, setSelected] = useState(amounts[0]);
    const [isOpen, setIsOpen] = useState(false);
    const [cards, setCards] = useState<Card[]>(getCards());
    const [isDetailsOpen, setDetailsOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState<Card | null>(null);

    const toggleSwitch = () => {
        setEnabled(!enabled);
    }

    const handleCardSubmit = (form: CardFormData) => {
        addCard(form); //can be added to the variable
        setCards([...getCards()]);
    };

    const handleOpenDetails = (card: Card) => {
        setSelectedCard(card);

        setDetailsOpen(true);
    };


    return (
        <div className="py-1 w-10/12 mx-auto mt-4">
            <section className="mb-5">
                <div className="h-10 flex gap-4 items-center">
                    <button className="cursor-pointer">
                        <ChevronLeftIcon className="w-4 h-4 text-gray-200" />
                    </button>
                    <div className="font-medium">Wallet</div>
                </div>
            </section>
            <section className="mb-12 bg-[#2e2e2e] rounded-xl p-3">
                <div className="text-white mb-0.5">Your balance</div>
                <div className="flex gap-5 mb-3.5 flex-col items-start">
                    <div className="flex gap-2 items-center">
                        <div className="shadow-2xl bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center">
                            <span className="italic font-bold text-red-400">V</span>
                        </div>
                        <div className="text-2xl font-bold">$1,878.67</div>
                    </div>
                    <Link to='/buy' className="bg-blue-500 text-white w-[90%] mx-auto py-4 rounded-xl flex items-center justify-center gap-3 font-medium cursor-pointer">
                        <span>
                            <PlusIcon className="w-4 h-4 text-gray-200" />
                        </span>
                        <span>Buy credits</span>
                    </Link>
                </div>
            </section>
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
            <div className="h-3 mt-7 bg-[#2e2e2e] w-[100vw] relative left-1/2 -translate-x-1/2" />
            <section className="mt-5">
                <div className="flex gap-5 flex-col">
                    <div className="flex gap-1 justify-between">
                        <div className="flex flex-col gap-2">
                            <div className="font-bold">Enable auto recharge</div>
                            <div className="text-gray-300 text-sm">Recharge your wallet automatically when<br/>the balance is running low</div>
                        </div>
                        <div
                            onClick={toggleSwitch}
                            className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition duration-500 ${enabled
                                ? 'bg-gradient-to-br from-green-400 via-blue-500 justify-end'
                                : 'bg-[#2e2e2e] justify-start'}`}>
                            <div className={`bg-white w-6 h-6 rounded-full shadow-md transform transition duration-500 ${enabled ? 'shadow-[0_0_10px_2px_rgba(59,130,246,0.7)]' : ''}`} />
                        </div>
                    </div>
                    <div className="px-1.5">
                        <Listbox value={selected} onChange={setSelected}>
                            <div className="relative">
                                <ListboxButton className="w-full border border-[#2e2e2e] rounded-md px-4 py-3 flex justify-between items-center text-left shadow-sm bg-[#1e1e1e] text-white">
                                    {`$${selected}`}
                                    <ChevronDownIcon className="w-4 h-4 text-gray-400" />
                                </ListboxButton>

                                <ListboxOptions
                                    className="absolute mt-1 w-full border border-[#2e2e2e] rounded-md shadow-md z-20 bg-[#1e1e1e] transition-all duration-300 ease-in-out origin-top transform"
                                >
                                    {amounts.map((amount) => (
                                        <ListboxOption
                                            key={amount}
                                            value={amount}
                                            as={Fragment}>
                                            {({ focus, selected }) => (
                                                <li className={`px-4 py-2 cursor-pointer list-none ${focus ? "bg-gray-700" : ""} ${selected ? "text-blue-400": "text-white"}`}>
                                                    <div className="flex items-center justify-between">
                                                        {`$${amount}`}
                                                        {selected && <span className="text-sm">✓</span>}
                                                    </div>
                                                </li>
                                            )}
                                        </ListboxOption>
                                    ))}
                                </ListboxOptions>
                            </div>
                        </Listbox>
                    </div>
                    <div className="text-sm">Your balance will be auto recharged when there is less than 3 minutes of the call you are on our your account</div>
                </div>
            </section>
            <div className="h-3 mt-7 bg-[#2e2e2e] w-[100vw] relative left-1/2 -translate-x-1/2" />
            <section className="mt-5">
                <div className="flex justify-between items-center">
                    <div className="font-bold">Recent transactions</div>
                    <div className="flex gap-2.5 items-center">
                        <span className="text-blue-500 cursor-pointer">View all</span>
                        <button className="cursor-pointer">
                            <ChevronRightIcon className="w-4 h-4 text-blue-500"/>
                        </button>
                    </div>
                </div>
                <div className="mt-6 space-y-5">
                    {Transactions.slice(0, 5).map((tx) => (
                        <div key={tx.id} className="flex justify-between items-center">
                            <div className="flex gap-4 items-center">
                                <img
                                    src={tx.avatar}
                                    alt={tx.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div className="flex flex-col gap-1">
                                    <div className="font-medium">{tx.name}</div>
                                    <div className="text-xs tracking-wider text-gray-400">{tx.date}</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <div className="font-medium tracking-wide text-white">-${tx.amount}</div>
                                <div className="text-xs tracking-wide text-green-500">Success</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default MainCard;