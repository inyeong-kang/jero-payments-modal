import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useEffect } from 'react';
import { _Backdrop, _Container } from './styled';
export default function JeroModal(_a) {
    var onModalClose = _a.onModalClose, children = _a.children;
    var BackDropRef = useRef(null);
    function closeModal() {
        onModalClose(false);
    }
    var useClickEvent = function (ref, callback) {
        useEffect(function () {
            var handler = function (e) {
                if (e.target === ref.current) {
                    callback();
                }
            };
            document.addEventListener('click', handler);
            return function () { return document.removeEventListener('click', handler); };
        }, [ref, callback]);
    };
    useClickEvent(BackDropRef, closeModal);
    return (_jsxs(_Fragment, { children: [_jsx(_Backdrop, { ref: BackDropRef }), _jsx(_Container, { children: children })] }));
}
