import PropTypes from 'prop-types';

const Donation = ({cart}) => {
    const {cover_img,category,title} = cart;
    return (
        <div className='flex gap-4 items-center border-2 border-violet-900 rounded-xl p-6'>
            <img src={cover_img} alt="" />
            <div>
                <p className='text-xl'>{category}</p>
                <h1 className='text-2xl font-bold py-2'>{title}</h1>
                <p className='text-xl font-bold'>$290.00</p>
                <button className='text-2xl text-white bg-blue-600 py-2 px-6 rounded-lg mt-2'>View Details</button>
            </div>
        </div>
    );
};
Donation.propTypes = {
    cart:PropTypes.object
}
export default Donation;