import { useLoaderData, useParams } from "react-router-dom";
import { AddItemLs } from "./localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartDetails = () => {
    const carts = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const cartDetails = carts.find(cart => cart.id === idInt);
    const { cover_img, paragraph, title } = cartDetails;
    const handleDetails = (id) =>{
        AddItemLs(id);
        toast('Donate Successfully');
    }
    return (
        <div className="my-10">
            <div>
                <div className="relative">
                    <img className="w-[100vw] h-[100vh] rounded-2xl" src={cover_img} alt="" />
                    <div className="absolute bottom-10 left-10">
                        <button onClick={()=>handleDetails(cartDetails.id)} className="text-xl font-bold text-white bg-red-500 py-2 px-6 rounded-lg">Donate $290</button>
                    </div>
                </div>
                <h1 className="text-4xl font-bold py-4">{title}</h1>
                <p className="text-xl text-gray-700">{paragraph}</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CartDetails;