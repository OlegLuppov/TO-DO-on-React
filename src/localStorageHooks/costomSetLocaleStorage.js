import { useState } from 'react';
function useSetLocalStorage(key, value) {
    var _a = useState(localStorage.setItem(key, JSON.stringify(value))), data = _a[0], setData = _a[1];
    return { data: data, changeSetLocal: function (key, value) { return setData(localStorage.setItem(key, JSON.stringify(value)) || '[]'); } };
}
export default useSetLocalStorage;
