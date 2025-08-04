import { AiTwotoneAppstore } from "react-icons/ai";
import ProductItems from "../Product/ProductITems";

const Products = () => {
  return (
    <section className="pb-12">
      <div className="container">
        <div className="flex justify-between">
          <p>We found 10 items for you!</p>
          <div className="flex items-center gap-2 p-2 border border-[#CACACA] rounded">
            <AiTwotoneAppstore />
            <label htmlFor="show">Show: </label>
            <select id="show" >
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="150">150</option>
              <option value="200">200</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-6">
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
        </div>
      </div>
    </section>
  );
};

export default Products;