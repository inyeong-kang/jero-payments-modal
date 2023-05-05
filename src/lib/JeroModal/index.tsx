import { Dispatch } from 'react';

import { _Backdrop, _Container } from './styled';

interface ModalProps {
  onModalClose: Dispatch<React.SetStateAction<boolean>>;
  children: () => JSX.Element;
}

export default function JeroModal({ onModalClose, children }: ModalProps) {
  // const BackDropRef = useRef<HTMLDivElement>(null);

  function closeModal() {
    onModalClose(false);
  }
  /*
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.target === BackDropRef.current) {
        closeModal();
      }
    };

    document.addEventListener('click', handler);

    return () => document.removeEventListener('click', handler);
  }, [BackDropRef, closeModal]);
*/
  return (
    <>
      <_Backdrop />
      <_Container>{children}</_Container>
    </>
  );
}
