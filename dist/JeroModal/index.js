import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import { _Backdrop, _Container } from './styled';
import { useClickEvent } from './hooks/useClickEvent';
export default function JeroModal(_a) {
    var onModalClose = _a.onModalClose, children = _a.children;
    var BackDropRef = useRef(null);
    function closeModal() {
        onModalClose(false);
    }
    useClickEvent(BackDropRef, closeModal);
    return (_jsxs(_Fragment, { children: [_jsx(_Backdrop, { ref: BackDropRef }), _jsx(_Container, { children: children })] }));
}
