const CategoryFilter = ({ category, productDispatch }) => {
  return (
    <>
      <div className='input inline-input'>
        <input
          type='checkbox'
          id='perennial'
          name='category'
          checked={category.isChecked}
          onChange={(e) => {
            productDispatch({
              type: "UPDATE_CATEGORY",
              payload: { name: category.name, isChecked: e.target.checked },
            });
          }}></input>
        <label htmlFor={category.name}>{category.name}</label>
      </div>
    </>
  );
};
export default CategoryFilter;
