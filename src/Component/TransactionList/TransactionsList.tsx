import {useState} from "react";
import {ChevronRightIcon} from "@heroicons/react/24/solid";
import {Transactions} from "../../Data/Transactions.ts";
import TransactionModal from "../TransactionModal/TransactionModal";

const TransactionsList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleSwitch = () => setIsModalOpen(!isModalOpen);

    return (
        <section className="mt-5">
            <div className="flex justify-between items-center">
                <div className="font-bold">Recent transactions</div>
                <div className="flex gap-2.5 items-center" onClick={() => toggleSwitch()}>
                    <span className="text-blue-500 cursor-pointer">View all</span>
                    <button className="cursor-pointer">
                        <ChevronRightIcon className="w-4 h-4 text-blue-500"/>
                    </button>
                </div>
            </div>
            <TransactionModal
                isOpen={isModalOpen}
                toggle={toggleSwitch}
                transactions={Transactions}
            />
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
    )
}

export default TransactionsList;