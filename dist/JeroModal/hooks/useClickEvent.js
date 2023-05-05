import { useEffect } from 'react';
export var useClickEvent = function (ref, callback) {
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
