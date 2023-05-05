import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { _Backdrop, _Container } from './styled';
export default function JeroModal(_a) {
    // const BackDropRef = useRef<HTMLDivElement>(null);
    var onModalClose = _a.onModalClose, children = _a.children;
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
    return (_jsxs(_Fragment, { children: [_jsx(_Backdrop, {}), _jsx(_Container, { children: children })] }));
}
