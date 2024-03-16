import { CiSearch } from "react-icons/ci"; 
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    return (
        <div className="flex justify-around">
            <h1 className="text-3xl font-bold">Kacchi Vai</h1>

            <ul className="flex gap-5 text-lg">
                <li>Home</li>
                <li>Recipes</li>
                <li>About</li>
                <li>Search</li>
            </ul>

            <div className="flex gap-2 bg-white justify-center items-center text-lg border-2 border-gray-300 rounded-full px-3 py-2">
                <CiSearch></CiSearch>
                <input type="text" name="" placeholder="Search" id="" />
            </div>
             <button className="bg-green-500 text-3xl font-bold w-10 h-10 rounded-full text-white flex justify-center items-center"><CgProfile></CgProfile></button>  
        </div>
    );
};

export default Navbar;