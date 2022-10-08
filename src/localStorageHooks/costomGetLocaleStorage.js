import { useState } from 'react';
var useGetLocaleStorage = function (key) {
    var _a = useState(JSON.parse(localStorage.getItem(key))), getData = _a[0], setData = _a[1];
    return {
        getData: getData,
        changeGetLocal: function (key) { return setData(JSON.parse(localStorage.getItem(key))); },
    };
};
export default useGetLocaleStorage;
