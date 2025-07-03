import {Listbox, ListboxButton, ListboxOption, ListboxOptions} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/24/solid";
import {amountsRecharge as amounts} from "../../Data/Amounts.ts";
import {Fragment, useState} from "react";

const AutoRechargeWallet = () => {
    const [enabled, setEnabled] = useState(false);
    const [selected, setSelected] = useState(amounts[0]);

    const toggleSwitch = () => {
        setEnabled(!enabled);
    }

    return (
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
    )
}

export default AutoRechargeWallet;