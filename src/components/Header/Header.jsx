  import './Header.css';

const Header = () => {
    return (
        <div className='header-container mt-14 rounded-2xl'>
            <div className=" py-28 text-white space-y-9 bg-black bg-opacity-30 rounded-3xl">

            <h3 className=' text-5xl font-bold text-center'>Discover an exceptional cooking <br /> class tailored for you!</h3> 

            <div className='w-2/3 mx-auto'>
            <p className='text-lg font-medium opacity-80'>A recipe is a set of instructions that describes how to prepare or make something, especially a dish of prepared food. A sub-recipe or subrecipe is a recipe for an ingredient that will be called for in the instructions for the main recipe.</p>
            </div>
             <div className='flex justify-around w-2/3 mx-auto'>
                <button className='font-bold text-lg bg-green-500 px-5 py-3 rounded-full'>Explore Now</button>
                <button className='px-5 py-3 rounded-full border-2 border-gray-300'>Our Feedback</button>
             </div>

            </div>
        </div>
    );
};

export default Header;