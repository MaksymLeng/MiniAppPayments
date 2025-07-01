// import {useState} from "react";
import {Link} from "react-router-dom";
import { ChevronDownIcon} from '@heroicons/react/24/solid';
import visa from "../../assets/visa.svg";
import information from "../../assets/information.png";

const BuyCredit = () => {
    // const [isOpen, setIsOpen] = useState<boolean>(false);
    // const [selected, setSelected] = useState<boolean>(true);


    return (
        <div className="h-full">
            <section className="w-10/12 mx-auto mt-8">
                <div className="h-10 flex gap-6 items-center">
                    <Link to="/" className="cursor-pointer">←</Link>
                    <div className="font-medium">Buy credits</div>
                </div>
            </section>
            <div className="h-7 mt-5 bg-[#2e2e2e]"/>
            <section className="w-10/12 mx-auto mt-6">
                <div className="flex flex-col gap-8">
                    <div className="font-medium">Choose amount</div>
                    <div className="grid grid-cols-3 gap-6 mx-auto">
                        <button className="w-28 h-15 rounded-xl border-amber-100 border-solid border-1 cursor-pointer">$10</button>
                        <button className="w-28 h-15 rounded-xl border-amber-100 border-solid border-1 cursor-pointer">$20</button>
                        <button className="w-28 h-15 rounded-xl border-amber-100 border-solid border-1 cursor-pointer">$50</button>
                        <button className="w-28 h-15 rounded-xl border-amber-100 border-solid border-1 cursor-pointer">$100</button>
                        <button className="w-28 h-15 rounded-xl border-amber-100 border-solid border-1 cursor-pointer">$200</button>
                        <button className="w-28 h-15 rounded-xl border-amber-100 border-solid border-1 cursor-pointer">Custom</button>
                    </div>
                </div>
            </section>
            <div className="h-3 mt-7 bg-[#2e2e2e] "/>
            <section className="w-10/12 mx-auto mt-6">
                <div className="flex flex-col gap-5">
                    <div className="font-bold">Payment method</div>
                    <div className="flex items-center gap-4 mb-5 border-1 border-solid border-[#2e2e2e] rounded-xl p-2.5">
                        <img
                            src={visa}
                            alt="master"
                            width={60}
                            className="rounded-xl overflow-hidden shrink-0"
                        />
                        <div className="flex justify-between items-center w-full">
                            <div className="flex gap-2 font-medium flex-col">
                                <div className="flex items-center gap-2.5">
                                    Domen Kralj{' '}
                                    <div className="rounded-lg text-blue-500 bg-blue-100 px-1 py-[0.02rem] text-[0.7rem]">
                                        Primary
                                    </div>
                                </div>
                                <div className="opacity-50 text-xs mt-0.5">**** 6775</div>
                            </div>
                            <button className="cursor-pointer">
                                <ChevronDownIcon className="w-4 h-4 text-gray-200" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-green-200/15 rounded-lg py-1.5 px-3 text-sm flex gap-2">
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