import {
    Dialog,
    DialogPanel,
    DialogTitle,
    Transition,
    TransitionChild
} from '@headlessui/react'
import { Fragment } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import type { Card } from '../../Interface_Type/type'

interface Props {
    isOpen: boolean
    onClose: () => void
    card: Card
    onSetPrimary: (id: string) => void
    onDelete: (id: string) => void
}

export function CardDetailsModal({ isOpen, onClose, card, onSetPrimary, onDelete }: Props) {
    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <TransitionChild
                    as={Fragment}
                    enter="transition-all duration-500"
                    enterFrom="translate-y-full opacity-0"
                    enterTo="translate-y-0 opacity-100"
                    leave="transition-all duration-300"
                    leaveFrom="translate-y-0 opacity-100"
                    leaveTo="translate-y-full opacity-0"
                >
                    <div className="fixed inset-0 bg-black/60" />
                </TransitionChild>

                <div className="fixed inset-0 flex items-end justify-center p-0">
                    <TransitionChild
                        as={Fragment}
                        enter="transition-all duration-300"
                        enterFrom="translate-y-full opacity-0"
                        enterTo="translate-y-0 opacity-100"
                        leave="transition-all duration-200"
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
                            <div className="bg-[#2a2a2a] rounded-xl p-4 mb-6">
                                <div className="flex gap-3 items-center mb-3">
                                    <img src={card.logo} alt={card.id} className="w-10 h-10" />
                                    <div>
                                        <div className="font-semibold">{card.name}</div>
                                        <div className="text-sm opacity-70">{card.last4}</div>
                                    </div>
                                </div>
                                <div className="text-sm mt-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Expiry</span>
                                        <span className="font-medium">{card.Data?.expiry}</span>
                                    </div>
                                    <div className="flex justify-between mt-1">
                                        <span className="text-gray-400">Country</span>
                                        <span className="font-medium">{card.Data?.country}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <button
                                onClick={() => onDelete(card.id)}
                                className="text-red-500 text-sm font-medium mb-3"
                            >
                                Delete card
                            </button>
                            <button
                                onClick={() => onSetPrimary(card.id)}
                                className="w-full bg-[#e8f0ff0d] text-[#367cff] font-medium py-2 rounded-md"
                            >
                                Set as your primary card
                            </button>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </Transition>
    )
}
