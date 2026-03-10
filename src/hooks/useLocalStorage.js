import { useState } from "react";

function useLocalStorage(key,initial){

const [value,setValue] = useState(()=>{

const stored = localStorage.getItem(key);

return stored ? JSON.parse(stored) : initial;

});

const setStored=(val)=>{

setValue(val);

localStorage.setItem(key,JSON.stringify(val));

};

return [value,setStored];

}

export default useLocalStorage;