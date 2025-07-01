import {useState} from "react";
import {Link} from "react-router-dom";
import {ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, PlusIcon} from "@heroicons/react/24/solid";
import visa from '../../assets/visa.svg'
import master from '../../assets/master.svg'
import defence from '../../assets/defence.png'


const MainCard = () => {
    const [enabled, setEnabled] = useState(false);
    const amounts = ["$20", "$50", "$100", "$200"];
    const [selected, setSelected] = useState(amounts[0]);
    const [open, setOpen] = useState(false);

    const toggleSwitch = () => {
        setEnabled(!enabled);
    }

    const toggleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className="p-1 w-10/12 mx-auto mt-2">
            <section className="mb-3">
                <div className="h-10 flex gap-3 items-center">
                    <button className="cursor-pointer">
                        <ChevronLeftIcon className="w-4 h-4 text-gray-200" />
                    </button>
                    <div className="font-medium">Wallet</div>
                </div>
            </section>
            <section className="mb-12 bg-gray-800 rounded-xl p-3">
                <div className="text-white mb-0.5">Your balance</div>
                <div className="flex gap-5 mb-3.5 flex-col items-start">
                    <div className="flex gap-2 items-center">
                        <div className="shadow-2xl bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center">
                            <span className="italic font-bold text-red-400">V</span>
                        </div>
                        <div className="text-2xl font-bold">$1,878.67</div>
                    </div>
                    <Link to='/buy' className="bg-blue-500 text-white w-[90%] mx-auto py-4 rounded-md flex items-center justify-center gap-3 font-medium cursor-pointer">
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
                    <button className="font-semibold text-blue-500 flex gap-2 cursor-pointer items-center justify-center">
                        <span className="font-bold">
                            <PlusIcon className="w-4 h-4 text-gray-200" />
                        </span>
                        <span>Add card</span>
                    </button>
                </div>

                <div className="flex items-center gap-3">
                    <img
                    src={visa}
                    alt="visa"
                    width={60}
                    className="rounded-xl overflow-hidden shrink-0"
                    />
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-2 font-medium">
                            Domen Kralj{' '}
                            <div className="rounded-lg text-blue-500 bg-blue-100 px-1 py-[0.02rem] text-[0.7rem]">
                                Primary
                            </div>
                            <div className="opacity-50 text-xs mt-0.5">**** 6775</div>
                        </div>
                        <button className="cursor-pointer">
                            <ChevronRightIcon className="w-4 h-4 text-gray-200" />
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-3 mb-5">
                    <img
                        src={master}
                        alt="master"
                        width={60}
                        className="rounded-xl overflow-hidden shrink-0"
                    />
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-2 font-medium">
                            Domen Kralj{' '}
                            <div className="opacity-50 text-xs mt-0.5">**** 3009</div>
                        </div>
                        <button className="cursor-pointer">
                            <ChevronRightIcon className="w-4 h-4 text-gray-200 mx-auto" />
                        </button>
                    </div>
                </div>

                <div className="bg-green-200/15 rounded-lg py-2 px-3 text-sm flex items-center">
                    <img src={defence} alt="defence" className="rounded-xl overflow-hidden shrink-0 h-10 w-10"/>
                    <div className="">
                        We are compliant with the payment card industry data security standard.
                    </div>
                </div>
            </section>
            <div className="h-3 mt-7 bg-[#2e2e2e] "/>
            <section className="mt-5">
                <div className="flex gap-5 flex-col">
                    <div className="flex gap-1 justify-between">
                        <div className="flex flex-col gap-2">
                            <div className="font-bold">Enable auto recharge</div>
                            <div className="text-gray-300 text-sm">Recharge your wallet automatically when<br/>the balance is running low</div>
                        </div>
                        <div
                            onClick={toggleSwitch}
                            className={`w-16 h-8 flex bg-blue-500 items-center rounded-full p-1 cursor-pointer transition duration-300 ${enabled ? 'justify-end' : 'justify-start'}`}>
                            <div className="bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"/>
                        </div>
                    </div>
                    <div>
                        <div className="relative w-full">
                            <button onClick={toggleOpen}
                                    className="w-full border border-[#2e2e2e] rounded-md px-4 py-2 flex justify-between items-center text-left shadow-sm ">
                                {selected}
                                <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                            </button>
                            <ul
                                className={`absolute mt-1 w-full border border-[#2e2e2e] rounded-md shadow-md z-20 bg-[#1e1e1e] transition-all duration-300 ease-in-out transform ${open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}>
                                {amounts.map(amount => (
                                    <li
                                        key={amount}
                                        onClick={() => {
                                            setSelected(amount);
                                            setOpen(false);
                                        }}
                                        className="px-4 py-2 hover:bg-gray-500 cursor-pointer"
                                    >
                                        {amount}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="text-sm ">Your balance will be auto recharged when there is less than 3 minutes of the call you are on our your account</div>
                </div>
            </section>
            <div className="h-3 mt-7 bg-[#2e2e2e] "/>
            <section>
                <div>
                    <div></div>
                    <div>
                        <span>Recent transactions</span>
                        <ChevronRightIcon className="w-4 h-4 text-gray-500" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MainCard;