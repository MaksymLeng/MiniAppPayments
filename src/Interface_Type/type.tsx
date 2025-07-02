export type Card = {
    id: string
    name: string
    last4: string
    logo: string
    primary: boolean;
    Data?: CardFormData
}

export type AddCardFormProps = {
    onSubmit: (form: CardFormData) => void
}

export type AddCardModalProps = {
    isOpen: boolean
    onClose: () => void
    onSubmit: (form: CardFormData) => void
}

export type CardFormData = {
    name: string
    country: string
    address: string
    cardNumber: string
    expiry: string
    cvc: string
}
