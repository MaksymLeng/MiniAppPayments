import {ChevronLeftIcon} from "@heroicons/react/24/solid";
import BalanceBlock from "../BalanceBlock/BalanceBlock.tsx";
import CardsList from "../CardsList/CardsList.tsx";
import AutoRechargeWallet from "../AutoRecharge/AutoRecharge.tsx";
import TransactionsList from "../TransactionList/TransactionsList.tsx";


const MainCard = () => {

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
            <BalanceBlock/>
            <CardsList/>
            <div className="h-3 mt-7 bg-[#2e2e2e] w-[100vw] relative left-1/2 -translate-x-1/2" />
            <AutoRechargeWallet/>
            <div className="h-3 mt-7 bg-[#2e2e2e] w-[100vw] relative left-1/2 -translate-x-1/2" />
            <TransactionsList/>
        </div>
    )
}

export default MainCard;