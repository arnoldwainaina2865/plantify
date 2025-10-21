const RatingFilter = ({ rating, productDispatch }) => {
  return (
    <>
      <div className='input inline-input'>
        <input
          type='radio'
          id={`above${rating.stars}`}
          name='rating'
          onChange={() => {
            productDispatch({
              type: "UPDATE_RATING",
              payload: rating.stars,
            });
          }}
          checked={rating.isChecked}></input>
        <label htmlFor={`above${rating.stars}`}>
          {rating.stars} Star and above
        </label>
      </div>
    </>
  );
};
export default RatingFilter;
