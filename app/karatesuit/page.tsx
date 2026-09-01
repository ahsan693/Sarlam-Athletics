import ProductPage from "../components/allproducts/details/details";
import { products } from "../components/allproducts/data";

export default function KarateSuitPage() {
  return <ProductPage product={products.karatesuit} />;
}
