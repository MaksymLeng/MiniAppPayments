import { Fragment, useState } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import type {FormEvent} from "react";
import type { AddCardFormProps, CardFormData} from "../../Interface_Type/type.tsx";


const countries = [
    { name: 'United States', flag: '🇺🇸' },
    { name: 'Slovakia', flag: '🇸🇰' },
    { name: 'Ukraine', flag: '🇺🇦' },
    { name: 'Czech Republic', flag: '🇨🇿' },
]

export function AddCardForm({onSubmit}: AddCardFormProps) {
    const [selected, setSelected] = useState(countries[0])
    const [form, setForm] = useState<CardFormData>({
        name: '',
        country: 'United States',
        address: '',
        cardNumber: '',
        expiry: '',
        cvc: '',
    })

    const handleChange = (key: keyof CardFormData, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        onSubmit(form)
    }


    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Personal details */}
            <div className="flex flex-col gap-3">
                <label className="block text-md font-semibold mb-1">Personal details</label>
                <input
                    type="text"
                    placeholder="Full name"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-md px-3 py-3 text-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Custom Select */}
                <Listbox value={selected}
                         onChange={(val) => {
                            setSelected(val)
                            handleChange('country', val.name)
                        }}>
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
                                <ListboxOption key={country.name} value={country} as={Fragment}>
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
                    value={form.address}
                    onChange={(e) => handleChange('address', e.target.value)}
                    className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-md px-3 py-3 text-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Card details */}
            <div className="mt-8">
                <label className="block text-md font-semibold mb-4">Card details</label>
                <input
                    type="text"
                    placeholder="Card number"
                    value={form.cardNumber}
                    onChange={(e) => handleChange('cardNumber', e.target.value)}
                    className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-md px-3 py-3 text-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex gap-3">
                <input
                    type="text"
                    placeholder="mm / yy"
                    value={form.expiry}
                    onChange={(e) => handleChange('expiry', e.target.value)}
                    className="w-1/2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md px-3 py-3 text-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="cvc"
                    value={form.cvc}
                    onChange={(e) => handleChange('cvc', e.target.value)}
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
    )
}
