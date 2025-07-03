import {
    Dialog,
    DialogPanel,
    DialogTitle,
    Transition,
    TransitionChild,
} from '@headlessui/react'
import { Fragment } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { AddCardForm } from './AddCardForm'
import type {AddCardModalProps} from "../../Interface_Type/Type.tsx";


export default function AddCardModal({ isOpen, onClose, onSubmit }: AddCardModalProps) {
    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                {/* Затемнение */}
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

                {/* Модалка снизу */}
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
                        <DialogPanel className="w-full h-[67%] max-w-full bg-[#1e1e1e] text-white p-6 pt-7 rounded-t-3xl shadow-lg border-t border-[#2e2e2e]">
                            <div className="flex justify-between items-center mb-10">
                                <DialogTitle className="text-md font-semibold">Add new card</DialogTitle>
                                <button onClick={onClose}>
                                    <XMarkIcon className="w-5 h-5 text-gray-400" />
                                </button>
                            </div>

                            <AddCardForm onSubmit={(form) => {onSubmit(form); onClose()}}/>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </Transition>
    )
}
