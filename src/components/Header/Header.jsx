import profile from '../../assets/images/profile.png';
const Header = () => {
    return (
        <div className="flex justify-between items-center w-10/12 mx-auto px-5 py-4 mb-4 bg-purple-700 text-white">
            <h1 className='text-4xl font-bold'>Book-Cafe</h1>
            <img className='w-[50px]' src={profile} alt="" />
        </div>
    );
};

export default Header;