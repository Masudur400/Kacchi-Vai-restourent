import { IoMdClock } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import PropTypes from 'prop-types';


const CardContainer = ({card,handleWantToCook}) => {
    // console.log(card);

    const {recipe_image,recipe_name,description,ingredients,preparing_time,calories}=card;

    return (
        <div className="mb-10 border-2 border-gray-200 shadow-xl px-5 rounded-xl">
           <div  className="mb-5 flex justify-center items-center" >
           <img className="m-5 w-80 h-52 rounded-xl" src={recipe_image} alt="" />
           </div>
            <h2 className="text-xl font-semibold mb-4">{recipe_name}</h2>
            <p className="text-lg mb-4">{description}</p>

            <hr />

            <h3 className="text-lg font-bold mt-4"> Ingredients : {ingredients.length}</h3>
            <div className="my-5 space-y-2 opacity-80">
                {
                    ingredients.map(item => <li key={item.index}>{item}</li>)
                }
            </div>
            <hr />

                <div className="flex justify-around my-5">
                <p className="flex gap-2 justify-center items-center"><IoMdClock></IoMdClock> {preparing_time} minutes</p>
                <p className="flex gap-2 justify-center items-center"><FaFire></FaFire> {calories} calories</p>
                </div>

                <div className="flex justify-center items-center mb-5">
                    <button onClick={()=>handleWantToCook(card)} className="text-xl font-bold bg-green-500 text-white px-5 py-2 rounded-full">Want to Cook</button>
                </div>

        </div>
    );
};



CardContainer.propTypes={
card: PropTypes.object.isRequired,
handleWantToCook: PropTypes.func.isRequired,
}

export default CardContainer;