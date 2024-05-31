const Product = (props) => {
  return (
    <div>
      <img className="ml-12 px-12 "src={props.category.strCategoryThumb} alt={props.category.strCategory}></img>
      <div className="text-center">
        <h2 className="text-lg font-bold py-2">{props.category.strCategory}</h2>
        <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{props.category.idCategory}</span>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span>500</span>
        <button className="bg-yellow-500 hover:bg-yellow-600 py-1 px-4 rounded-full font-bold">ADD</button>
      </div>
    </div>
  );
};

export default Product;
