const getItemFromLs = () =>{
    const storedItem = localStorage.getItem('donation-cart');
    if(storedItem){
        return JSON.parse(storedItem);
    }
    return[];
}
const AddItemLs = (id) => {
    const getStoredItem = getItemFromLs();
    const exists = getStoredItem.find(item => item ===id);
    if(!exists){
        getStoredItem.push(id);
        localStorage.setItem('donation-cart',JSON.stringify(getStoredItem))
    }
}
export{getItemFromLs,AddItemLs}