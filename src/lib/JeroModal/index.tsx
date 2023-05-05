import { Dispatch, useRef, useEffect, RefObject } from 'react';

import { _Backdrop, _Container } from './styled';

interface ModalProps {
  onModalClose: Dispatch<React.SetStateAction<boolean>>;
  children: () => JSX.Element;
}

export default function JeroModal({ onModalClose, children }: ModalProps) {
  const BackDropRef = useRef<HTMLDivElement>(null);

  function closeModal() {
    onModalClose(false);
  }

  const useClickEvent = (ref: RefObject<HTMLElement>, callback: () => void) => {
    useEffect(() => {
      const handler = (e: MouseEvent) => {
        if (e.target === ref.current) {
          callback();
        }
      };

      document.addEventListener('click', handler);

      return () => document.removeEventListener('click', handler);
    }, [ref, callback]);
  };

  useClickEvent(BackDropRef, closeModal);

  return (
    <>
      <_Backdrop ref={BackDropRef} />
      <_Container>{children}</_Container>
    </>
  );
}
