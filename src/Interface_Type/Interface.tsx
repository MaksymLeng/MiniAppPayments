import type {Card} from "./Type.tsx";

export interface CardDetailsModalProps {
    isOpen: boolean
    onClose: () => void
    card: Card
    onSetPrimary: (id: string) => void
    onDelete: (id: string) => void
}