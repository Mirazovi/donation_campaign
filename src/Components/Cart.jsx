import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

const Cart = ({ cart }) => {
    const {id, cover_img, category, title } = cart;
    // background_color, text_color, btn_color,
    return (
        <NavLink to={`/cart/${id}`}>
            <div>
            <img className='w-full rounded-xl' src={cover_img} alt="" />
            <div className='p-3'>
                <p className='text-xl'>{category}</p>
                <h1 className='text-2xl font-bold'>{title}</h1>
            </div>
        </div>
        </NavLink>
    );
};
Cart.propTypes = {
    cart: PropTypes.object
}
export default Cart;