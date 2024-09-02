

const Header = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center my-10">I Grow By Helping People In Need</h1>
            <div className="flex gap-2 justify-center items-center mb-10">
                <input className="py-3 px-6 bg-gray-200 rounded-lg text-xl" type="text" placeholder="Search Donation Name...." />
                <button className="text-xl rounded-lg bg-red-700 text-white py-3 px-6 ">Search</button>
            </div>
        </div>
    );
};

export default Header;