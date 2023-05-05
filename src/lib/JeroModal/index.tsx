import { Dispatch, useRef } from 'react';
import { _Backdrop, _Container } from './styled';

import { useClickEvent } from './hooks/useClickEvent';

interface ModalProps {
  onModalClose: Dispatch<React.SetStateAction<boolean>>;
  children: () => JSX.Element;
}

export default function JeroModal({ onModalClose, children }: ModalProps) {
  const BackDropRef = useRef<HTMLDivElement>(null);

  function closeModal() {
    onModalClose(false);
  }

  useClickEvent(BackDropRef, closeModal);

  return (
    <>
      <_Backdrop ref={BackDropRef} />
      <_Container>{children}</_Container>
    </>
  );
}
