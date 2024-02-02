export const useLocalStorage=(key)=>{
    const setItem=(value)=>{
window.localStorage.setItem(key,JSON.stringify(value));
    };
    const getItem=()=>
JSON.parse(window.localStorage.getItem(key));
    
    return [setItem,getItem]
}