import { Dispatch } from 'react';
interface ModalProps {
    onModalClose: Dispatch<React.SetStateAction<boolean>>;
    children: () => JSX.Element;
}
export default function JeroModal({ onModalClose, children }: ModalProps): JSX.Element;
export {};
