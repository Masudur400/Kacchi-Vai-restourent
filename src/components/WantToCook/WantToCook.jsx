import PropTypes from 'prop-types';

const WantToCook = ({ singleCard, idx, handlePreparing}) => {
    // console.log(singleCard)
    const { recipe_name, preparing_time, calories } = singleCard;
    return (
        <div className='flex justify-between mb-5 py-4 px-2 rounded-md shadow-xl'>

            <h3>{idx + 1}. {recipe_name}</h3>
            <h3 className='ml-3'>{preparing_time} minutes</h3>
            <h3 className='ml-3'>{calories} calories</h3>
            <button onClick={()=>handlePreparing(singleCard.id)} className='bg-green-500 text-white px-3 rounded-full  '>Preparing</button>
        </div>
    );
};


WantToCook.propTypes = {
    singleCard: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
    handlePreparing: PropTypes.func.isRequired,
}

export default WantToCook;