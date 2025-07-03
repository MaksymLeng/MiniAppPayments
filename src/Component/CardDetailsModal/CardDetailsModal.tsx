import type {FC} from "react";
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    Transition,
    TransitionChild
} from '@headlessui/react'
import { Fragment } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import type {CardDetailsModalProps} from "../../Interface_Type/Interface.tsx";


export const CardDetailsModal: FC<CardDetailsModalProps> = ({isOpen, onClose, card, onSetPrimary, onDelete}) => (
        <Transition show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
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
                        enterTo="translate-y-0 opacity-300"
                        leave="transition duration-200"
                        leaveFrom="translate-y-0 opacity-100"
                        leaveTo="translate-y-full opacity-0"
                    >
                        <DialogPanel className="w-full h-[60%] max-w-full bg-[#1e1e1e] text-white p-6 pt-7 rounded-t-3xl shadow-lg border-t border-[#2e2e2e]">
                            <div className="flex justify-between items-center mb-6">
                                <DialogTitle className="text-md font-semibold">Card details</DialogTitle>
                                <button onClick={onClose}>
                                    <XMarkIcon className="w-5 h-5 text-gray-400" />
                                </button>
                            </div>

                            {/* Card Info */}
                            <div className="bg-[#2a2a2a] rounded-xl p-4 mb-7 border-gray-700 border-1">
                                <div className="flex gap-5 items-center mb-3">
                                    <img src={card.logo} alt={card.id} className="w-17 h-17" />
                                    <div className="flex flex-col gap-1.5">
                                        <div className="font-semibold">{card.name}</div>
                                        <div className="text-sm opacity-70 tracking-widest">{card.last4}</div>
                                    </div>
                                </div>
                                <div className="text-sm mt-2">
                                    <div className="flex flex-col gap-1.5 mb-3">
                                        <span className="text-gray-400">Expiry</span>
                                        <span className="font-medium">{card.Data?.expiry}</span>
                                    </div>
                                    <div className="flex flex-col mt-1 gap-1.5">
                                        <span className="text-gray-400">Country</span>
                                        <span className="font-medium">{card.Data?.country}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <button
                                onClick={() => onDelete(card.id)}
                                className="text-red-500 text-md font-medium mb-6 cursor-pointer hover:brightness-110 hover:text-red-400 transition duration-300 ease-in-out"
                            >
                                Delete card
                            </button>
                            <button
                                onClick={() => onSetPrimary(card.id)}
                                className="w-full bg-[#e8f0ff0d] text-[#367cff] font-medium py-5 rounded-xl cursor-pointer hover:shadow-lg hover:brightness-110 transition duration-300 ease-in-out"
                            >
                                Set as your primary card
                            </button>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </Transition>
)
