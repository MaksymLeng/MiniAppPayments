import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild, Listbox, ListboxButton, ListboxOption, ListboxOptions  } from '@headlessui/react'
import { Fragment, useState} from 'react'
import { XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const countries = [
    { name: 'United States', flag: '🇺🇸' },
    { name: 'Slovakia', flag: '🇸🇰' },
    { name: 'Ukraine', flag: '🇺🇦' },
    { name: 'Czech Republic', flag: '🇨🇿' },
]

const Test = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(countries[0])

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
                Add new card
            </button>

            <Transition show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
                    {/* Затемнение фона */}
                    <TransitionChild
                        as={Fragment}
                        enter="transition-opacity duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/60" />
                    </TransitionChild>

                    {/* Нижняя модалка */}
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
                            <DialogPanel className="w-full h-[67%] max-w-full bg-[#1e1e1e] text-white p-6 pt-7 rounded-t-3xl shadow-lg border-t border-[#2e2e2e]">
                                {/* Header */}
                                <div className="flex justify-between items-center mb-10">
                                    <DialogTitle className="text-md font-semibold">Add new card</DialogTitle>
                                    <button onClick={() => setIsOpen(false)}>
                                        <XMarkIcon className="w-5 h-5 text-gray-400" />
                                    </button>
                                </div>

                                {/* Form */}
                                <form className="space-y-4">
                                    <div className="flex flex-col gap-3">
                                        <label className="block text-md font-semibold mb-1">Personal details</label>
                                        <input
                                            type="text"
                                            placeholder="Full name"
                                            className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-md px-3 py-3 text-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <Listbox value={selected} onChange={setSelected}>
                                            <div className="relative">
                                                <ListboxButton className="w-full bg-[#2a2a2a] border border-[#3a3a3a] text-white rounded-md px-3 py-2 text-sm flex items-center justify-between">
                                                <span className="flex items-center gap-2">
                                                    <span className="w-6 h-6 flex items-center justify-center text-lg">{selected.flag}</span>
                                                    {selected.name}
                                                </span>
                                                    <ChevronDownIcon className="w-4 h-4 text-gray-400" />
                                                </ListboxButton>

                                                <ListboxOptions className="absolute z-10 mt-1 w-full bg-[#1e1e1e] border border-[#3a3a3a] rounded-md shadow-md max-h-60 overflow-auto">
                                                    {countries.map((country) => (
                                                        <ListboxOption
                                                            key={country.name}
                                                            value={country}
                                                            as={Fragment}>
                                                            {({ focus, selected }) => (
                                                                <li className={`px-4 py-2 text-sm cursor-pointer flex items-center gap-2 transition ${focus ? 'bg-[#333]' : ''} ${selected ? 'text-blue-400' : 'text-white'}`}>
                                                                    <span className="w-6 h-6 flex items-center justify-center text-lg">{country.flag}</span>
                                                                    <span>{country.name}</span>
                                                                </li>

                                                            )}
                                                        </ListboxOption>
                                                    ))}
                                                </ListboxOptions>
                                            </div>
                                        </Listbox>
                                        <input
                                            type="text"
                                            placeholder="Street address"
                                            className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-md px-3 py-3 text-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div className="mt-8">
                                        <label className="block text-md font-semibold mb-4">Card details</label>
                                        <input
                                            type="text"
                                            placeholder="Card number"
                                            className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-md px-3 py-3 text-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div className="flex gap-3">
                                        <input
                                            type="text"
                                            placeholder="mm / yy"
                                            className="w-1/2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md px-3 py-3 text-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <input
                                            type="text"
                                            placeholder="cvc"
                                            className="w-1/2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md px-3 py-3 text-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white py-5 rounded-lg font-medium mt-6"
                                    >
                                        Save card information
                                    </button>
                                </form>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Test