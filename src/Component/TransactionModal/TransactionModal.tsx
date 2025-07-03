import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { XMarkIcon, BarsArrowDownIcon, BarsArrowUpIcon } from '@heroicons/react/24/outline'
import type { Transaction } from '../../Interface_Type/Interface.tsx'

type TransactionModalProps = {
    isOpen: boolean
    toggle: () => void
    transactions: Transaction[]
}

export default function TransactionModal({ isOpen, toggle, transactions }: TransactionModalProps) {
    const [sortAsc, setSortAsc] = useState(true)
    const sorted = [...transactions].sort((a, b) => sortAsc ? a.id - b.id : b.id - a.id)

    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={toggle}>
                <TransitionChild
                    as={Fragment}
                    enter="transition duration-500"
                    enterFrom="translate-y-full opacity-0"
                    enterTo="translate-y-0 opacity-100"
                    leave="transition duration-300"
                    leaveFrom="translate-y-0 opacity-100"
                    leaveTo="translate-y-full opacity-0"
                >
                    <div className="fixed inset-0 bg-black/60" />
                </TransitionChild>

                <div className="fixed inset-0 flex items-end justify-center p-0">
                    <TransitionChild
                        as={Fragment}
                        enter="transition duration-500"
                        enterFrom="translate-y-full opacity-0"
                        enterTo="translate-y-0 opacity-100"
                        leave="transition duration-300"
                        leaveFrom="translate-y-0 opacity-100"
                        leaveTo="translate-y-full opacity-0"
                    >
                        <DialogPanel className="w-full h-full max-w-full bg-[#1e1e1e] text-white p-6 pt-7 rounded-t-3xl shadow-lg border-t border-[#2e2e2e]">
                            <div className="flex justify-between items-center mb-5">
                                <div className="flex items-center gap-4">
                                <button onClick={toggle}>
                                    <XMarkIcon className="w-5 h-5 text-gray-400" />
                                </button>
                                <DialogTitle className="text-md font-semibold">All transactions</DialogTitle>
                                </div>
                                <div className="mr-3">
                                    <button onClick={() => setSortAsc(!sortAsc)}>
                                        {sortAsc ? (
                                            <BarsArrowDownIcon className="w-5 h-5 text-gray-300" />
                                        ) : (
                                            <BarsArrowUpIcon className="w-5 h-5 text-gray-300" />
                                        )}
                                    </button>
                                </div>
                            </div>
                            <div className="h-1 mb-3 bg-[#2e2e2e] w-[100vw] relative left-1/2 -translate-x-1/2" />
                            <div className="flex flex-col gap-5 overflow-y-auto max-h-full pr-1 no-scrollbar">
                                {sorted.map((tx) => (
                                    <div key={tx.id} className="flex justify-between items-center">
                                        <div className="flex gap-3 items-center">
                                            <img src={tx.avatar} alt={tx.name} className="w-10 h-10 rounded-full object-cover" />
                                            <div className="flex flex-col gap-0.5">
                                                <div className="font-medium text-white">{tx.name}</div>
                                                <div className="text-xs text-gray-400">{tx.date}</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <div className="font-medium text-right text-white">
                                                -${tx.amount.toFixed(2)}
                                            </div>
                                            <div className="text-xs text-green-500">Success</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </Transition>
    )
}

