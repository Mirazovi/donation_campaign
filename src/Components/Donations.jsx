import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getItemFromLs } from "./localStorage";
import Donation from "./Donation";


const Donations = () => {
    const carts = useLoaderData();
    const [donation,setDonation] = useState([]);
    const [dataLength,setDataLength] = useState(4);
    useEffect(()=>{
        const storedCart = getItemFromLs()
        if(carts.length>0){
            const donationCart = [];
            for(const id of storedCart){
                const cart = carts.find(car => car.id === id);
                if(cart){
                    donationCart.push(cart)
                }
            }
            setDonation(donationCart)
        }
        // console.log(carts,storedCart,donation);
    },[])
    return (
        <div>
             <h1 className="text-4xl font-bold text-center">Your Donations : {donation.length}</h1>
             <div className="grid lg:grid-cols-2 gap-4 my-10">
                {
                    donation.slice(0,dataLength).map((cart,idx) => <Donation key={idx} cart={cart}></Donation>)
                }
             </div>
             <div onClick={()=>setDataLength(donation.length)} className={`flex justify-center ${donation.length===dataLength && 'hidden'}`}>
             <button className="py-2 px-6 rounded-lg text-2xl bg-violet-700 text-white mb-10">Show All</button>
             </div>
        </div>
    );
};

export default Donations;