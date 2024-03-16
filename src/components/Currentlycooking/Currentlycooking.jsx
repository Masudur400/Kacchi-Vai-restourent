import PropTypes from 'prop-types';

const Currentlycooking = ({ item, idx}) => {
    // console.log(item.recipe_name)
    const { recipe_name, preparing_time, calories } = item;
    return (
        <div>
            <div>
                <div className='flex justify-between mb-5 py-4 px-2 rounded-md shadow-lg mt-10'>

                    <h3>{idx + 1}. {recipe_name}</h3>
                    <h3>{preparing_time} minutes</h3>
                    <h3>{calories} calories</h3>
                </div>
            </div> 
        </div>
    );
};


Currentlycooking.propTypes = {
    item: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired, 
}

export default Currentlycooking;