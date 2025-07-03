import { Link } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/24/solid";

const BalanceBlock = () => {
    return (
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
    );
};

export default BalanceBlock;
