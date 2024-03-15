import PropTypes from 'prop-types';

const WantToCook = ({ singleCard, idx }) => {
    console.log(singleCard)
    const { recipe_name, preparing_time, calories } = singleCard;
    return (
        <div className='flex justify-between mb-5'>

            <h3>{idx + 1}.{recipe_name}</h3>
            <h3>{preparing_time}</h3>
            <h3>{calories}</h3>
            <button className='bg-green-500 text-white px-3 py-2 rounded-full font-bold'>Preparing</button>
        </div>
    );
};


WantToCook.propTypes = {
    singleCard: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
}

export default WantToCook;