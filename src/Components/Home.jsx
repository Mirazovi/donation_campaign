import { useEffect, useState } from "react";
import Cart from "./Cart";
import Header from "./Header";

const Home = () => {
    const [carts,setCarts] =useState([])
    useEffect(()=>{
        fetch('donation.json')
        .then(res => res.json())
        .then(data => setCarts(data))
    },[])
    return (
        <>
        <Header></Header>
         <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 my-10">
             {
                carts.map((cart,idx) => <Cart key={idx} cart={cart}></Cart>)
             }
        </div>
        </>
       
    );
};

export default Home;