import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";

const ProductList = async () => {
  const products = await getProducts();
  console.log(products);
  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold max-sm:text-heading3-bold">Products</p>
      {!products || products.length === 0 ? (
        <p className="text-body-bold">No product found</p>
      ) : (
        <div className="flex flex-wrap justify-center mx-auto gap-16">
          {products &&
            products.map((product: ProductType) => (
           <ProductCard product={product} key={product._id} />
             
            ))}
        </div>
      )}
    </div>
  );
};
export default ProductList;
