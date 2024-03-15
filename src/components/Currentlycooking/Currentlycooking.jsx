import PropTypes from 'prop-types'; 

const Currentlycooking = ({item,idx,totalTime,totalCalories}) => {
    // console.log(item.recipe_name)
    const {recipe_name,preparing_time,calories} = item;
    return (
        <div>
             <div>
            <div className='flex justify-between mb-5 py-4 px-2 rounded-md shadow-xl'>

                <h3>{idx + 1}. {recipe_name }</h3>
                <h3>{preparing_time} minutes</h3>
                <h3>{calories} calories</h3> 
            </div> 
        </div>

        <div className='flex justify-around'>
        <h3>Total Time = <br />{totalTime} minutes</h3>
        <h3>Total Calories = <br />{totalCalories} calories</h3>
        </div>


        </div>
    );
};


Currentlycooking.propTypes={
    item: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
    totalTime: PropTypes.number.isRequired,
    totalCalories: PropTypes.number.isRequired,
}

export default Currentlycooking;