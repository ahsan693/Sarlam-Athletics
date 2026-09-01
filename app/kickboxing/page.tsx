import ProductPage from "../components/allproducts/details/details";
import { products } from "../components/allproducts/data";

export default function KickboxingPage() {
  return <ProductPage product={products.kickboxing} />;
}