import ProductPage from "../components/allproducts/details/details";
import { products } from "../components/allproducts/data";

export default function KarateSuitsPage() {
  return <ProductPage product={products.jitsu} />;
}