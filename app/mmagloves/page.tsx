import ProductPage from "../components/allproducts/details/details";
import { products } from "../components/allproducts/data";

export default function MmaPage() {
  return <ProductPage product={products.mmagloves} />;
}