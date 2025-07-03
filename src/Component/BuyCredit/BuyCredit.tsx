import {useState} from "react";
import {Link} from "react-router-dom";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions} from "@headlessui/react"
import {ChevronDownIcon, ChevronLeftIcon} from "@heroicons/react/24/outline";
import type {Card} from "../../Interface_Type/Type.tsx";
import {amountsCredit as amounts} from "../../Data/Amounts.ts";
import information from "../../assets/Messages/information.png";
import {getCards} from "../../Services/cardService.ts";


const BuyCredit = () => {

    const [activeValue, setActiveValue] = useState<string | null>(null);
    const [customAmount, setCustomAmount] = useState<string>("");
    const [cards] = useState<Card[]>(getCards());
    const primaryCard = cards.find((card) => card.primary) || cards[0];
    const [selected, setSelected] = useState<Card>(primaryCard);



    const handleClick = (value: string) => {
        setActiveValue(value);
    }

    const ButtonRender = (amounts: Array<string>) => amounts.map((amount) => {
        return (
            <button className={`w-28 h-15 rounded-xl border-amber-100 border-solid border-1 cursor-pointer ${activeValue === amount ? "border-blue-400 text-blue-400 bg-[#2e2e2e]" : ""}`} onClick={() => handleClick(amount)}>{amount}</button>
        )
    })

    return (
        <div className="min-h-screen py-1">
            <section className="w-10/12 mx-auto mt-4">
                <div className="h-10 flex gap-4 items-center">
                    <Link to="/" className="cursor-pointer">
                        <ChevronLeftIcon className="w-4 h-4 text-gray-200" />
                    </Link>
                    <div className="font-medium">Buy credits</div>
                </div>
            </section>
            <div className="h-6 mt-5 bg-[#2e2e2e]"/>
            <section className="w-10/12 mx-auto mt-6">
                <div className="flex flex-col gap-8">
                    <div className="font-medium">Choose amount</div>
                    <div className="grid grid-cols-3 gap-6 mx-auto">
                        {ButtonRender(amounts)}
                    </div>
                    {activeValue === "Custom" && (
                        <div className="flex items-center w-95 mx-auto border-2 border-[#2e2e2e] rounded-xl px-3 py-3 gap-2">
                            <span className="font-bold text-lg text-white select-none">$</span>
                            <input
                                type="text"
                                value={customAmount}
                                onChange={(e) => setCustomAmount(e.target.value)}
                                placeholder="0"
                                className="bg-transparent outline-none ml-2 w-full"
                            />
                        </div>
                    )}
                </div>
            </section>
            <div className="h-3 mt-7 bg-[#2e2e2e] "/>
            <section className="w-10/12 mx-auto mt-6">
                <div className="flex flex-col gap-5">
                    <div className="font-bold">Payment method</div>
                    <div className="py-3">
                        <Listbox value={selected} onChange={setSelected}>
                            <div className="relative">

                                <ListboxButton className="flex items-center gap-4 border border-[#2e2e2e] rounded-xl py-2.5 px-3.5 w-full cursor-pointer text-left">
                                    <img src={selected.logo} alt={selected.id} width={60} className="rounded-xl shrink-0" />
                                    <div className="flex justify-between items-center w-full">
                                        <div className="flex gap-2 flex-col items-start font-medium">
                                            <div className="flex items-center gap-2.5">
                                                {selected.name}
                                                {selected.primary && (
                                                    <div className="rounded-lg text-blue-500 bg-blue-100 px-1 py-[0.02rem] text-[0.7rem]">
                                                        Primary
                                                    </div>
                                                )}

                                            </div>
                                            <div className="opacity-50 text-xs mt-0.5">{selected.last4}</div>
                                        </div>
                                        <ChevronDownIcon className="w-4 h-4 text-gray-200" />
                                    </div>
                                </ListboxButton>

                                <ListboxOptions className="absolute mt-1 w-full border border-[#2e2e2e] rounded-md shadow-md z-20 bg-[#1e1e1e] overflow-hidden transition-all duration-300">
                                    {cards
                                        .filter((card) => card.id !== selected.id)
                                        .map((card) => (
                                            <ListboxOption key={card.id} value={card} className={'flex gap-4 items-center px-4 py-3 cursor-pointer transition'}>
                                                <img src={card.logo} alt={card.id} width={60} className="rounded-xl shrink-0" />
                                                <div className="flex flex-col">
                                                    <span className="font-medium">{card.name}</span>
                                                    <span className="text-xs opacity-50">{card.last4}</span>
                                                </div>
                                            </ListboxOption>
                                        ))}
                                </ListboxOptions>
                            </div>
                        </Listbox>
                    </div>
                </div>
                <div className="bg-[#2e2e2e] rounded-lg py-2.5 px-3 text-sm flex gap-2 mt-4">
                    <img src={information} alt="defence" className="rounded-xl overflow-hidden shrink-0 h-7 w-7"/>
                    <div className="mt-1">
                        Credit purchase is non-refundable and you <br/> agree to our
                        <a href="/terms" className="font-bold text-gray-200"> Terms of service</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BuyCredit