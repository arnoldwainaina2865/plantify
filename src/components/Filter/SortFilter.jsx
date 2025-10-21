const SortFilter = ({ productDispatch }) => {
  return (
    <>
      <div className='input inline-input'>
        <input
          type='radio'
          id='low-to-high'
          name='sort_order'
          onChange={() => {
            productDispatch({ type: "UPDATE_SORT", payload: true });
          }}></input>
        <label htmlFor='low-to-high'>Price- Low to High</label>
      </div>
      <div className='input inline-input'>
        <input
          type='radio'
          id='high-to-low'
          name='sort_order'
          onChange={() => {
            productDispatch({ type: "UPDATE_SORT", payload: false });
          }}></input>
        <label htmlFor='high-to-low'>Price- High to Low</label>
      </div>
    </>
  );
};
export default SortFilter;
