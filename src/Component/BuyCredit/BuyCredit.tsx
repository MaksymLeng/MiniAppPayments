import {useState} from "react";
import {Link} from "react-router-dom";
import {ChevronDownIcon, ChevronLeftIcon} from "@heroicons/react/24/outline";
import visa from "../../assets/visa.svg";
import information from "../../assets/information.png";

const BuyCredit = () => {
    const amounts = ["$10","$20", "$50", "$100", "$200", "Custom"];
    const [activeValue, setActiveValue] = useState<string | null>(null);
    const [customAmount, setCustomAmount] = useState<string>("");

    const handleClick = (value: string) => {
        setActiveValue(value);
    }

    // const [selected, setSelected] = useState(amounts[0]);
    // const [open, setOpen] = useState(false);
    // const [MoneyValue, setMoneyValue] = useState(0);

    const ButtonRender = (amounts: Array<string>) => amounts.map((amount) => {
        return (
            <button className={`w-28 h-15 rounded-xl border-amber-100 border-solid border-1 cursor-pointer ${activeValue === amount ? "border-blue-400 text-blue-400 bg-[#2e2e2e]" : ""}`} onClick={() => handleClick(amount)}>{amount}</button>
        )
    })


    return (
        <div className="h-full py-1">
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
                    <div className="flex items-center gap-4 mb-5 border-1 border-solid border-[#2e2e2e] rounded-xl p-2.5">
                        <img
                            src={visa}
                            alt="visa"
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
                <div className="bg-[#2e2e2e] rounded-lg py-1.5 px-3 text-sm flex gap-2">
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