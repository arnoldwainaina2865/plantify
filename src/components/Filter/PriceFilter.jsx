const PriceFilter = ({ productState, productDispatch }) => {
  return (
    <>
      <input
        className='input-data price-input'
        type='range'
        id='price'
        name='price'
        min='0'
        max='500'
        step='250'
        value={productState.range}
        onChange={(e) => {
          productDispatch({ type: "UPDATE_RANGE", payload: e.target.value });
        }}></input>
      <div className='price-values'>
        <div>0</div>
        <div>250</div>
        <div>500</div>
      </div>
    </>
  );
};
export default PriceFilter;
